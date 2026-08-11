import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  readonly #deputadoService = inject(DeputadoService)
  protected deputados = signal<Deputado[] | undefined>(undefined)
  filtro = signal<string>('todos')
  filtroValor = signal<string>('')

  consultarTodos() {
      this.#deputadoService.obterTodos().subscribe(res => {
      this.deputados.set(res.dados)
  })
  }
  
  consultarPorNome() {
      this.#deputadoService.obterDeputadosPorNome(this.filtroValor()).subscribe(res => {
      this.deputados.set(res.dados)
  })
  }

  consultarPorPartido() {
      this.#deputadoService.obterDeputadosPorPartido(this.filtroValor()).subscribe(res => {
      this.deputados.set(res.dados)
  })
  }

  consultarPorUf() {
      this.#deputadoService.obterDeputadosPorUf(this.filtroValor()).subscribe(res => {
      this.deputados.set(res.dados)
  })
  }
}
