import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() nombreChange = new EventEmitter<string>();
  @Output() apellidoChange = new EventEmitter<string>();
  @Output() nivelEducacionChange = new EventEmitter<string>();
  @Output() fechaNacimientoChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.nombreChange.emit(this.nombre);
    this.apellidoChange.emit(this.apellido);
    this.nivelEducacionChange.emit(this.nivelEducacion);
    this.fechaNacimientoChange.emit(this.fechaNacimiento);
  }
}
