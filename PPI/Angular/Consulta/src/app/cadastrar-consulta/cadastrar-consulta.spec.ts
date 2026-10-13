import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarConsulta } from './cadastrar-consulta';

describe('CadastrarConsulta', () => {
  let component: CadastrarConsulta;
  let fixture: ComponentFixture<CadastrarConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarConsulta],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
