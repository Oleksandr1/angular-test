import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {Decimal } from 'decimal.js'
Decimal.set({precision: 18})


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
