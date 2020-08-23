import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

export interface SeccionApto {
  relleno: boolean;
  icono: string;
  tipo: string;
}
export interface SeccionNotas {
  icono: string;
  tipo: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  opened: boolean = true;
  Apto: SeccionApto[] = [
    {
      relleno: true,
      icono: 'apartment',
      tipo: 'InHouse',
    },
    {
      relleno: true,
      icono: 'house',
      tipo: 'Ingresos',
    },
    {
      relleno: false,
      icono: 'house',
      tipo: 'Egresos',
    }
  ];
  Notas: SeccionNotas[] = [
    {
      icono: 'article',
      tipo: 'Generales'
    },
    {
      icono: 'account_balance',
      tipo: 'Apartamento'
    },
    {
      icono: 'assignment',
      tipo: 'Recepcion'
    },

  ];
  ngOnInit(){

  }

}
