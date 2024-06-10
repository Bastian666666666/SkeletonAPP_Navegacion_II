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

  ngOnInit() {}

}
