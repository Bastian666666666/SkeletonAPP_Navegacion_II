import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 2.1 Importe CertificacionesComponent
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component'; 

// 2.2 Importe ExperienciaLaboralComponent
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component'; 

import { FormsModule } from '@angular/forms'; //3. Importamos FormsModule para trabajar con formularios de Skeleton1

@NgModule({
  declarations: [AppComponent, 
                CertificacionesComponent, // 2.1 CertificacionesComponent sin esto no dejaba usar elementos de ionic
                ExperienciaLaboralComponent, //2.2 ExperienciaLaboralComponent 
              ], 
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            FormsModule //3. Importamos FormsModule
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}