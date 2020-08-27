import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {DialogoConfiguracionComponent} from '../../dialogos/dialogo-configuracion/dialogo-configuracion.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

export interface SeccionApto {
  relleno: boolean;
  icono: string;
  tipo: string;
  direccion: string;
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
      tipo: 'Todos',
      direccion: 'apartamentos/todos'
    },
    {
      relleno: true,
      icono: 'apartment',
      tipo: 'InHouse',
      direccion: '/'
    },
    {
      relleno: true,
      icono: 'house',
      tipo: 'Ingresos',
      direccion: '/'
    },
    {
      relleno: false,
      icono: 'house',
      tipo: 'Egresos',
      direccion: '/'
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

  constructor(private dialogoConfiguracion: MatDialog){}
  ngOnInit(){

  }
  abrirDialogoConfiguracion(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      titulo: 'Configuraciones Principales'
    };

    const dialogRef = this.dialogoConfiguracion.open(DialogoConfiguracionComponent,dialogConfig);

    // dialogRef guarda la referencia, cosa que si necesito hacer algo despues del dialogo lo haga. Por ahora no hago nada 26/08/2020

  }
}
