import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosDetalhesComponent } from './membros-detalhes.component';

describe('MembrosDetalhesComponent', () => {
  let component: MembrosDetalhesComponent;
  let fixture: ComponentFixture<MembrosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
