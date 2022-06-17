import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { environment } from 'src/environments/environment';
import { connect } from 'src/server/database/connect';

import { BrandRoute } from 'src/server/routes/brand-route';

export async function app(): Promise<express.Express> {
  const server: express.Express = express();
  const uiFileLocation = environment.production ? 'browser' : 'dist/functions/browser';
  const distFolder = join(process.cwd(), uiFileLocation);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  const brandRoute = new BrandRoute();
 
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  
  brandRoute.brandRoute(server);

  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  const uri = "mongodb+srv://dneprchoice:feli4olo121M@choiceapp.l8z48.mongodb.net/choicedb?retryWrites=true&w=majority";
  connect(uri)
    .then(() => app().then((server) => {
      server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
      });
    }))
    .catch(err => console.log(err));
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
const win = mock.getWindow();

Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});

global['navigator'] = mock.getNavigator();
global['document'] = mock.getDocument();
global['window'] = win;
global['location'] = mock.getLocation();
global['history'] = mock.getHistory();
global['localStorage'] = mock.getLocalStorage();
global['sessionStorage'] = mock.getSessionStorage();

export * from './src/main.server';