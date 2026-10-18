/* Jurídico (versão do Replit) como programa do Windows.
   Abre a pasta www numa janela própria, num endereço fixo (os dados ficam guardados). */
const { app, BrowserWindow, shell, session, dialog } = require('electron');
const path = require('path'), fs = require('fs'), http = require('http');
if (!app.requestSingleInstanceLock()) { app.quit(); return; }
const RAIZ = path.join(__dirname, '..', 'www');
const PORTA = Number(require('../package.json').portaDoPrograma || 7740);
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.wasm': 'application/wasm', '.woff2': 'font/woff2' };
function servir() {
  return new Promise((ok) => {
    const s = http.createServer((req, res) => {
      let u = decodeURIComponent(new URL(req.url, 'http://x').pathname); if (u.endsWith('/')) u += 'index.html';
      let f = path.join(RAIZ, path.normalize(u).replace(/^([\\/])+/, ''));
      if (!f.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) {
        if (path.extname(f)) { res.writeHead(404); return res.end('não existe'); }
        f = path.join(RAIZ, 'index.html'); // telas do app (ex.: /configuracoes)
      }
      res.writeHead(200, { 'Content-Type': TIPOS[path.extname(f).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); fs.createReadStream(f).pipe(res);
    });
    s.once('error', () => { dialog.showErrorBox('Programa', 'A porta ' + PORTA + ' está ocupada. Feche o outro programa e abra de novo.'); app.exit(1); });
    s.listen(PORTA, '127.0.0.1', () => ok('http://127.0.0.1:' + PORTA));
  });
}
let janela = null;
app.whenReady().then(async () => {
  const base = await servir();
  session.defaultSession.setPermissionRequestHandler((_w, p, cb) => cb(['media', 'clipboard-read', 'clipboard-sanitized-write', 'fullscreen', 'notifications'].includes(p)));
  janela = new BrowserWindow({ width: 1280, height: 860, autoHideMenuBar: true });
  janela.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith(base) || url.startsWith('blob:') || url === 'about:blank') return { action: 'allow' }; shell.openExternal(url); return { action: 'deny' }; });
  janela.loadURL(base + '/');
});
app.on('second-instance', () => { if (janela) { if (janela.isMinimized()) janela.restore(); janela.focus(); } });
app.on('window-all-closed', () => app.quit());
