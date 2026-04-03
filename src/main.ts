import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './entry/app.config';
import { App } from './entry/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
