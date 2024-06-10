import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentValue: string = 'primero'; // Sirve para el segment, establece 'primero' como valor inicial
  enviando: String = ''; //Prueba
  

  constructor() {}
  // ...

  NgOnInit() {
    // ...
  }
}
