import { Component, OnInit} from '@angular/core';
import { FakeApiGeneralService } from '../../../service/fakeapi/fake-api-general.service';

@Component({
  selector: 'app-apartamento-todos',
  templateUrl: './apartamento-todos.component.html',
  styleUrls: ['./apartamento-todos.component.css'],
  providers: [FakeApiGeneralService]
})
export class ApartamentoTodosComponent implements OnInit {

  aux:any;
  constructor(private _FakeApiGeneralService: FakeApiGeneralService) {}

  ngOnInit(){
    this.getUsuarios();
    console.log(this.aux);
  }

  getUsuarios(){
    this._FakeApiGeneralService.getUser().subscribe(
  		result => {
        this.aux = result;
        console.log(result);
  		},error => {
  			console.log(<any>error);
  		});
  }

}
