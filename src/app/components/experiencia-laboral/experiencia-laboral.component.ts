import { Component, OnInit, Input } from '@angular/core'; //(9) Importamos input para poder recibir los datos de la página
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {

  //(9) Importamos input para poder recibir los datos
  @Input() empresa : string = ''; 
@Input() anioInicio : string = '';
@Input() trabajando: boolean = false;
@Input() anioTermino : string = '';
@Input() cargo : string = '';

  constructor() { }

  //(12) para que no se pierdan los datos de sessionStorage al cambiar de página
  ngOnInit() {
    this.empresa = sessionStorage.getItem('empresa') || '';
    this.anioInicio = sessionStorage.getItem('anioInicio') || '';
    this.trabajando = sessionStorage.getItem('trabajando') === 'true';
    this.anioTermino = sessionStorage.getItem('anioTermino') || '';
    this.cargo = sessionStorage.getItem('cargo') || '';
  }
  
  //(12) Método para guardar los datos en el sessionStorage
  onSubmit() {
    sessionStorage.setItem('empresa', this.empresa);
    sessionStorage.setItem('anioInicio', this.anioInicio.toString());
    sessionStorage.setItem('trabajando', this.trabajando.toString());
    sessionStorage.setItem('anioTermino', this.anioTermino.toString());
    sessionStorage.setItem('cargo', this.cargo);
  
    console.log('Empresa:', this.empresa);
    console.log('Año de inicio:', this.anioInicio);
    console.log('Actualmente trabajando:', this.trabajando);
    console.log('Año de termino:', this.anioTermino);
    console.log('Cargo:', this.cargo);
  }

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
