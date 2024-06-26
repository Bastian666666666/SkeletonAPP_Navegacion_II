import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//1.1 Agrego el components certificaciones para que se pueda navegar a el
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';

//1.2 Agrego el components certificaciones para que se pueda navegar a el
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';

//1.2Agrego el components certificaciones para que se pueda navegar a el
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  // Esta es para cuando sea en blanco
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  //1.1 Agrego la ruta a certificaciones como component y le llamo certificacionesComponent 
  {
    path: 'certificaciones', 
    component: CertificacionesComponent
  },

  //1.2 Agrego la ruta a experiencia-laboral como component y le llamo ExperienciaLaboralComponent 
  {
    path: 'experiencia-laboral', 
    component: ExperienciaLaboralComponent
  },

  //1.3 Agrego la ruta a experiencia-laboral como component y le llamo ExperienciaLaboralComponent 
  {
    path: 'mis-datos', 
    component: MisDatosComponent
  },

  // Esta es la pagina not-found (para el manejo del error 404)
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

  // Esta es para cuando no se encuentre la ruta (404) redirija hacia la page not-found
  {
    path: '**',
    redirectTo: 'not-found'
  },  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }