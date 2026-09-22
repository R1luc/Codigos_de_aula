import { Component, inject, signal } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-exibe-carrinho',
  styleUrl: './exibe-carrinho.scss',
  templateUrl: './exibe-carrinho.html',
})
export class ExibeCarrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  protected carrinho = this.#carrinhoService.obterItens();
  protected total = this.#carrinhoService.obterTotalSignal();
  protected mostrarCarrinho = signal(false);
  protected numeroItens = this.#carrinhoService.obterNumeroItens();

  constructor() {
  }

  aumentarQuantidade(produtoId: number) {
    this.#carrinhoService.aumentarQuantidade(produtoId)
    this.atualizarTotal()
  }

  diminuirQuantidade(produtoId: number) {
    this.#carrinhoService.diminuirQuantidade(produtoId)
  }

  removerItem(produtoId: number) {
    this.#carrinhoService.removerItem(produtoId)
    this.atualizarTotal()
  }

  obterItens() {
    return this.#carrinhoService.obterItens()

  }

  atualizarTotal() {
    this.total.set(this.#carrinhoService.obterTotal())
  }

  exibirCarrinho() {
    this.mostrarCarrinho.set(!this.mostrarCarrinho())
  }
}
