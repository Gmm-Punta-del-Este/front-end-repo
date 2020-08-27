import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoTodosComponent } from './apartamento-todos.component';

describe('ApartamentoTodosComponent', () => {
  let component: ApartamentoTodosComponent;
  let fixture: ComponentFixture<ApartamentoTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
