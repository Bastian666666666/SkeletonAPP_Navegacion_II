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

  agregarDatos() {
    if (this.usuario === 'Bastian' && this.contrasena === '1234') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnvio: this.usuario,
          contrasenaEnvio: this.contrasena
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}