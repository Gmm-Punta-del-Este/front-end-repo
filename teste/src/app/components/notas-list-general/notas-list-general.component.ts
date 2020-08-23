import { Component, OnInit } from '@angular/core';
import { Nota } from '../../model/nota/nota';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-notas-list-general',
  templateUrl: './notas-list-general.component.html',
  styleUrls: ['./notas-list-general.component.css']
})
export class NotasListGeneralComponent implements OnInit {

  colNotas: Nota[] = [
    {
      id: 1,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
    {
      id: 2,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
    {
      id: 3,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
    {
      id: 4,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
    {
      id: 5,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
    {
      id: 6,
      created_on: new Date(2020,8,23),
      documento: '49806089',
      texto: 'Esta nota me pinto hacerla porque hay problemas en apto 2002',
      titulo: 'Problemas Apto 2002'
    },
  ];
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
