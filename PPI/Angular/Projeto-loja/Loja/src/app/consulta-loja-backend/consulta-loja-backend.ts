import { Component, inject, signal } from '@angular/core';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-consulta-loja-backend',
  imports: [],
  templateUrl: './consulta-loja-backend.html',
  styleUrl: './consulta-loja-backend.scss',
})
export class ConsultaLojas {
  readonly #lojaService = inject(LojaService)
  protected produtos = signal<Produto[] | undefined>(undefined)


  constructor() {
    this.consultarTodos()
  }

  consultarTodos() {
      this.#lojaService.obterTodos().subscribe(res => {
      this.produtos.set(res)
  })
  }
}
