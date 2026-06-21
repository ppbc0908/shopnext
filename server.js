const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = String.raw`C:\Users\15975\Desktop\shopnext`;

const MIME = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
    let url = decodeURIComponent(req.url.split('?')[0]);
    if (url === '/') url = '/index.html';
    
    let filePath = path.join(ROOT, url);
    
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }
    
    const ext = path.extname(filePath);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('404:', url, '->', filePath);
            res.writeHead(404);
            res.end('Not found: ' + url);
            return;
        }
        res.writeHead(200, {
            'Content-Type': (MIME[ext] || 'text/plain') + ';charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
    console.log('Serving from:', ROOT);
});
