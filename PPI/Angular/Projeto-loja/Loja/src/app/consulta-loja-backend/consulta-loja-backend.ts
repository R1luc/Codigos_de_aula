import { Component, inject, signal } from '@angular/core';
import { LojaService } from '../loja-service';
import { CarrinhoService } from '../carrinho-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-consulta-loja-backend',
  imports: [],
  templateUrl: './consulta-loja-backend.html',
  styleUrl: './consulta-loja-backend.scss',
})
export class ConsultaLojas {
  readonly #lojaService = inject(LojaService)
  readonly #carrinhoService = inject(CarrinhoService)
  protected produtos = signal<Produto[] | undefined>(undefined)
  protected total = this.#carrinhoService.obterTotalSignal()

  constructor() {
    this.consultarTodos()
  }

  consultarTodos() {
      this.#lojaService.obterTodos().subscribe(res => {
      this.produtos.set(res)
  })
  }

  adicionarAoCarrinho(produto: Produto) {
    this.#carrinhoService.adicionarItem({ id: produto.id, produto, quantidade: 1 })
    this.atualizarTotal()
  }

  aumentarQuantidade(produtoId: number) {
    this.#carrinhoService.aumentarQuantidade(produtoId)
    this.atualizarTotal()
  }

  diminuirQuantidade(produtoId: number) {
    this.#carrinhoService.diminuirQuantidade(produtoId)
    this.atualizarTotal()
  }

  removerItem(produtoId: number) {
    this.#carrinhoService.removerItem(produtoId)
    this.atualizarTotal()
  }

  atualizarTotal() {
     this.#carrinhoService.atualizarTotal()
  }
}
