import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaLojaBackend } from './consulta-loja-backend';

describe('ConsultaLojaBackend', () => {
  let component: ConsultaLojaBackend;
  let fixture: ComponentFixture<ConsultaLojaBackend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaLojaBackend],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaLojaBackend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
