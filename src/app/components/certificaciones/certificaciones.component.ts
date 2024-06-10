import { Component, OnInit, Input } from '@angular/core'; //(9) Importamos input para poder recibir los datos de la página

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {
  //(9) Importamos input para poder recibir los datos
  @Input() nombreCertificado: string = '';
  @Input() fechaObtencion: string = '';
  @Input() fechaVencimiento: string = '';

  constructor() { }

  onSubmit() {
    // Guarda los valores en sessionStorage
    sessionStorage.setItem('nombreCertificado', this.nombreCertificado);
    sessionStorage.setItem('fechaObtencion', this.fechaObtencion);
    sessionStorage.setItem('fechaVencimiento', this.fechaVencimiento);
  
    console.log('Nombre del certificado:', this.nombreCertificado);
    console.log('Fecha de obtención:', this.fechaObtencion);
    console.log('Fecha de vencimiento:', this.fechaVencimiento);
  }
  
  ngOnInit() {
    // Recupera los valores de sessionStorage
    this.nombreCertificado = sessionStorage.getItem('nombreCertificado') || '';
    this.fechaObtencion = sessionStorage.getItem('fechaObtencion') || '';
    this.fechaVencimiento = sessionStorage.getItem('fechaVencimiento') || '';
  }

}
