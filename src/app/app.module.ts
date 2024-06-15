import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; //3. Importamos FormsModule para trabajar con formularios de Skeleton1

import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; //15. importamos el sqlite


@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            FormsModule //3. Importamos FormsModule
            ],
  providers: [{ provide: 
                RouteReuseStrategy, 
                useClass: IonicRouteStrategy}, 
                SQLite], //15. Agregamos SQLite a los providers
  bootstrap: [AppComponent],
})
export class AppModule {}