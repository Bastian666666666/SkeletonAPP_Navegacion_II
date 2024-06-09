import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {

  empresa : String = ''; 
  anioInicio : String = '';
  trabajando: boolean = false;
  anioTermino : String = '';
  cargo : String = '';

  constructor() { }

  ngOnInit() {}

  soloNumeros(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      // Carácter no numérico, se previene la entrada
      event.preventDefault();
    }
  }


}
