import { MainWindow }     from './app.components';
import { bootstrap }        from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
bootstrap(MainWindow, [
  ROUTER_PROVIDERS
]);