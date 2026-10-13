import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ConsultaService } from '../consulta-service';
import { consulta } from '../consulta';

@Component({
  imports: [],
  selector: 'app-cadastrar-consulta',
  styleUrl: './cadastrar-consulta.scss',
  templateUrl: './cadastrar-consulta.html',
})
export class CadastrarConsulta {
  servico = inject(ConsultaService)

  adicionarConsulta(consulta: consulta) {
    this.servico.adicionarConsulta(consulta);
  }
}
