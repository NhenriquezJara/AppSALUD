import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'information-circle-outline',
      name: 'Información',
      redirecTo: '/informacion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
