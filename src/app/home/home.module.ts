import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// Importamos el componente para que se pueda ver en la página home
import { MisDatosComponent } from '../components/mis-datos/mis-datos.component'; 

// Importamos el componente para que se pueda ver en la página home
import { CertificacionesComponent } from '../components/certificaciones/certificaciones.component';

// Importamos el componente para que se pueda ver en la página home
import { ExperienciaLaboralComponent } from '../components/experiencia-laboral/experiencia-laboral.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MisDatosComponent, CertificacionesComponent, ExperienciaLaboralComponent]
})
export class HomePageModule {}
