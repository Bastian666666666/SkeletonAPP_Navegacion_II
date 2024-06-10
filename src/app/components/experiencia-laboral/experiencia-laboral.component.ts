import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {

  @Input() empresa : String = ''; 
  @Input() anioInicio : String = '';
  @Input() trabajando: boolean = false;
  @Input() anioTermino : String = '';
  @Input() cargo : String = '';

  constructor() { }

  ngOnInit() {}

  // Método para que solo se ingresen números en los campos de año
  soloNumeros(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      // Carácter no numérico, se previene la entrada
      event.preventDefault();
    }
  }


}
