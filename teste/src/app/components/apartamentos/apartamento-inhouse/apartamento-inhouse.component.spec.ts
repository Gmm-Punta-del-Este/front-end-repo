import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoInhouseComponent } from './apartamento-inhouse.component';

describe('ApartamentoInhouseComponent', () => {
  let component: ApartamentoInhouseComponent;
  let fixture: ComponentFixture<ApartamentoInhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoInhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoInhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
