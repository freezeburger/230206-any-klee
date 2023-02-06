import { APP_INITIALIZER, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic(
  [
    {
      provide:APP_INITIALIZER,
      useValue:() => console.warn('Application is ready !'),
      multi:true
    },
    {
      provide:PLATFORM_INITIALIZER,
      useValue:() => alert('Platform is ready !'),
      multi:true
    },
    {
      provide:PLATFORM_INITIALIZER,
      useValue:() => console.warn('Platform is ready !'),
      multi:true
    }
  ]
  )
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
