import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-loading.interceptor';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

//SocketoIO
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'https://api.cavimex.vasster.com/', options: {} };
 


defineCustomElements(window);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
  
})



export class AppModule {}
