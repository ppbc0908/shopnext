const GitHubSync = {
    TOKEN_KEY: 'shopnext_github_token',
    REPO_KEY: 'shopnext_github_repo',
    BRANCH_KEY: 'shopnext_github_branch',
    _deploying: false,

    getConfig() {
        return {
            token: localStorage.getItem(this.TOKEN_KEY) || '',
            repo: localStorage.getItem(this.REPO_KEY) || 'ppbc0908/shopnext',
            branch: localStorage.getItem(this.BRANCH_KEY) || 'master'
        };
    },

    setConfig(token, repo, branch) {
        if (token) localStorage.setItem(this.TOKEN_KEY, token);
        if (repo) localStorage.setItem(this.REPO_KEY, repo);
        if (branch) localStorage.setItem(this.BRANCH_KEY, branch);
    },

    isConfigured() {
        const c = this.getConfig();
        return !!c.token && !!c.repo;
    },

    async _api(method, path, body) {
        const c = this.getConfig();
        const url = `https://api.github.com/repos/${c.repo}${path}`;
        const headers = {
            'Authorization': `token ${c.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        };
        const opts = { method, headers };
        if (body) opts.body = JSON.stringify(body);
        const res = await fetch(url, opts);
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.message || `GitHub API ${res.status}`);
        }
        return res.json();
    },

    async deployData(data, message) {
        if (this._deploying) return null;
        this._deploying = true;
        try {
            const c = this.getConfig();
            const filePath = 'data/shop-data.json';
            let sha = null;

            try {
                const existing = await this._api('GET', `/contents/${filePath}`);
                sha = existing.sha;
            } catch (e) {}

            const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
            const body = {
                message: message || 'Update shop data',
                content: content,
                branch: c.branch
            };
            if (sha) body.sha = sha;

            const result = await this._api('PUT', `/contents/${filePath}`, body);
            return result.commit ? result.commit.html_url : null;
        } finally {
            this._deploying = false;
        }
    },

    async fetchData() {
        const c = this.getConfig();
        const cacheBust = '?t=' + Date.now();
        const urls = [
            `data/shop-data.json${cacheBust}`,
            `https://raw.githubusercontent.com/${c.repo}/${c.branch}/data/shop-data.json${cacheBust}`
        ];
        for (const url of urls) {
            try {
                const controller = new AbortController();
                const timer = setTimeout(() => controller.abort(), 5000);
                const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
                clearTimeout(timer);
                if (res.ok) {
                    const data = await res.json();
                    if (data && typeof data.products !== 'undefined') return data;
                }
            } catch (e) {}
        }
        return null;
    }
};
