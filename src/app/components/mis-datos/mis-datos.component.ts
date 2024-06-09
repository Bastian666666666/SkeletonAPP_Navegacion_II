import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent implements OnInit {
  nombre: string = '';
  @Input() apellido: string = '';
  @Input() nivelEducacion: string = '';
  @Input() fechaNacimiento: string = '';
  @Input() prueba: string = '';

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Nivel de Educación:', this.nivelEducacion);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
  }
}
