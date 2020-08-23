import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasListGeneralComponent } from './notas-list-general.component';

describe('NotasListGeneralComponent', () => {
  let component: NotasListGeneralComponent;
  let fixture: ComponentFixture<NotasListGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasListGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasListGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
