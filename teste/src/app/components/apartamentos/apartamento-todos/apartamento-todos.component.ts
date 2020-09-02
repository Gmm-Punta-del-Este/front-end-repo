import { Component, OnInit} from '@angular/core';
import { FakeApiGeneralService } from '../../../service/fakeapi/fake-api-general.service';
import {MatTableDataSource} from '@angular/material/table';

export interface users{
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
}

@Component({
  selector: 'app-apartamento-todos',
  templateUrl: './apartamento-todos.component.html',
  styleUrls: ['./apartamento-todos.component.css'],
  providers: [FakeApiGeneralService]
})
export class ApartamentoTodosComponent implements OnInit {

  listaUsuarios: users[];
  columnas: string[] = ['id','nombre','usuario','email','telefono','website'];
  // dataSource = new MatTableDataSource(this.listaUsuarios);
  constructor(private _FakeApiGeneralService: FakeApiGeneralService) {}

  ngOnInit(){
    this.getUsuarios();
  }

  getUsuarios(){
    this._FakeApiGeneralService.getUsers().subscribe(
  		result => {
        this.listaUsuarios = result;
  		},error => {
  			console.log(<any>error);
  		});
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
