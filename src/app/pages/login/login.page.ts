import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // Importa Router y NavigationExtras
import { ToastController } from '@ionic/angular'; // Importa ToastController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private toastController: ToastController) { } // Inyecta Router y ToastController

  ngOnInit() {
  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos.',
      duration: 2000
    });
    toast.present();
  }
  
  agregarDatos() {
    if (this.usuario === 'Bastian' && this.contrasena === '1234') {
      sessionStorage.setItem('usuario', this.usuario);
      sessionStorage.setItem('contrasena', this.contrasena);
      console.log('Usuario:', this.usuario);
      console.log('contrasena:', this.contrasena);
    
      // Redirigir a la página 'home'
      this.router.navigate(['/home']);
    } else {
      this.presentToast();
    }

  }
  /*agregarDatos() {
    if (this.usuario === 'Bastian' && this.contrasena === '1234') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnvio: this.usuario,
          contrasenaEnvio: this.contrasena
        }
      };
  
      // Almacenar la información del usuario en sessionStorage
      sessionStorage.setItem('usuario', this.usuario);
      sessionStorage.setItem('contrasena', this.contrasena);
  
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.presentToast();
    }
  }

  /*async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }*/

}