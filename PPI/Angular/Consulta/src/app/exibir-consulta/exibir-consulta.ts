import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ConsultaService } from '../consulta-service';
import { consulta } from '../consulta';

@Component({
  imports: [],
  selector: 'app-exibir-consulta',
  styleUrl: './exibir-consulta.scss',
  templateUrl: './exibir-consulta.html',
})
export class ExibirConsulta {
  servico = inject(ConsultaService)
  consultas = this.servico.exibirConsultas();
}
