import { Component, OnInit} from '@angular/core';
import { FakeApiGeneralService } from '../../../service/fakeapi/fake-api-general.service';

export interface post{
  userId:any,
  id:any,
  title:any,
  body:any
}

@Component({
  selector: 'app-apartamento-todos',
  templateUrl: './apartamento-todos.component.html',
  styleUrls: ['./apartamento-todos.component.css'],
  providers: [FakeApiGeneralService]
})
export class ApartamentoTodosComponent implements OnInit {

  aux:post;
  constructor(private _FakeApiGeneralService: FakeApiGeneralService) {}

  ngOnInit(){
    this.getUsuarios();
  }

  getUsuarios(){
    this._FakeApiGeneralService.getPost().subscribe(
  		result => {
        this.aux = result;
        console.log('var result: ' + result.id);
  		},error => {
  			console.log(<any>error);
  		});
  }

}
