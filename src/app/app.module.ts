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

// 2.3 Importe MisDatosComponent
import { MisDatosComponent } from './components/mis-datos/mis-datos.component'; 

@NgModule({
  declarations: [AppComponent, 
                CertificacionesComponent, // 2.1 CertificacionesComponent sin esto no dejaba usar elementos de ionic
                ExperienciaLaboralComponent, //2.2 ExperienciaLaboralComponent 
                MisDatosComponent //2.3 MisDatosComponent
              ], 
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}