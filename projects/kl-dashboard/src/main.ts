import { APP_INITIALIZER, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { from, fromEvent, map, of } from 'rxjs';

import { AppModule } from './app/app.module';
/* 
import * as A from './module-js-theory';
console.log(A)


import('./module-js-theory').then(  m => console.log('Script Loaded', m) );
console.log('Getting Script'); 
*/

/* fromEvent<PointerEvent>(window,'click')
      .pipe(
        map( evt => ({ x:evt.pageX, y:evt.pageY }))
      )        
      .subscribe( v => console.log('WindowClick', v ) ) */

// from([1,2,3,4]).subscribe( console.log )


platformBrowserDynamic(
  [
    {
      provide:APP_INITIALIZER,
      useValue:() => console.warn('Application is ready !'),
      multi:true
    },
    /*     
    {
      provide:PLATFORM_INITIALIZER,
      useValue:() => alert('Platform is ready !'),
      multi:true
    }, 
    */
    {
      provide:PLATFORM_INITIALIZER,
      useValue:() => console.warn('Platform is ready !'),
      multi:true
    }
  ]
  )
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
