import { Component } from '@angular/core';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentValue: string = 'primero'; // Sirve para el segment, establece 'primero' como valor inicial
  enviando: String = ''; //Prueba
  usuarioRecibido: any = ''; //(11)Para guardar el user, le puse tipo any como en el tutorial para que no de error
  

  constructor(private router: Router) { }
  // ...


  //(11) Método para recibir el usuario desde el sessionStorage de login dentro de ngOnInit
  ngOnInit() {

    this.usuarioRecibido = sessionStorage.getItem('usuario'); //Obtiene el usuario almacenado en sessionStorage
    console.log('Usuario recibido:', this.usuarioRecibido); //Muestra el usuario almacenado en la consola
    // ...
  }

  onLogout() {
    // Borra todos los valores de sessionStorage
    sessionStorage.clear();
  
    console.log('Sesión cerrada');
  
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['login']);
  }

}
