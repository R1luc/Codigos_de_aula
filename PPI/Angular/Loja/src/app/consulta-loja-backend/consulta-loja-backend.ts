import { Component, inject, signal } from '@angular/core';
import { LojaService } from '../loja-service';
import { Loja } from '../loja';

@Component({
  selector: 'app-consulta-loja-backend',
  imports: [],
  templateUrl: './consulta-loja-backend.html',
  styleUrl: './consulta-loja-backend.scss',
})
export class ConsultaLojas {
  readonly #lojaService = inject(LojaService)
  protected lojas = signal<Loja[] | undefined>(undefined)
  filtro = signal<string>('todos')
  filtroValor = signal<string>('')

  consultarTodos() {
      this.#lojaService.obterTodos().subscribe(res => {
      this.lojas.set(res.dados)
  })
  }
}
