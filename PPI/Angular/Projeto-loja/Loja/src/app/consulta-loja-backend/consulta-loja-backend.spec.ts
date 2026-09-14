import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaLojas } from './consulta-loja-backend';

describe('ConsultaLojaBackend', () => {
  let component: ConsultaLojas;
  let fixture: ComponentFixture<ConsultaLojas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaLojas],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaLojas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
