import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-configuracion',
  templateUrl: './dialogo-configuracion.component.html',
  styleUrls: ['./dialogo-configuracion.component.css']
})
export class DialogoConfiguracionComponent implements OnInit {

  daltonismo=true;
  titulo:string;
  constructor(private dialogRef: MatDialogRef<DialogoConfiguracionComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.titulo = data.titulo;
  }

  ngOnInit(): void {
  }

}
