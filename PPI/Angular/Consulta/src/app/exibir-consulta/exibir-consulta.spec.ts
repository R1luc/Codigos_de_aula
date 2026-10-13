import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibirConsulta } from './exibir-consulta';

describe('ExibirConsulta', () => {
  let component: ExibirConsulta;
  let fixture: ComponentFixture<ExibirConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirConsulta],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
