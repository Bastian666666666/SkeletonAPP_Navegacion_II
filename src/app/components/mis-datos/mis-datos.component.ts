import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() nivelEducacion: string = '';
  @Input() fechaNacimiento: string = '';
  @Input() prueba: string = '';

  constructor() { }

  //(12)Hago que los datos se guarden aca para que no se pierdan al cambiar de pagina
  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre') || '';
    this.apellido = sessionStorage.getItem('apellido') || '';
    this.nivelEducacion = sessionStorage.getItem('nivelEducacion') || '';
    this.fechaNacimiento = sessionStorage.getItem('fechaNacimiento') || '';
  }
  
  //(12) Método para guardar los datos en el sessionStorage
  onSubmit() {
    sessionStorage.setItem('nombre', this.nombre);
    sessionStorage.setItem('apellido', this.apellido);
    sessionStorage.setItem('nivelEducacion', this.nivelEducacion);
    sessionStorage.setItem('fechaNacimiento', this.fechaNacimiento);
  
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Nivel de educación:', this.nivelEducacion);
    console.log('Fecha de nacimiento:', this.fechaNacimiento);
  }

}
