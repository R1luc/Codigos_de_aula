import { Component, inject, signal } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-exibe-carrinho',
  styleUrl: './exibe-carrinho.scss',
  templateUrl: './exibe-carrinho.html',
})
export class ExibeCarrinho {
  readonly #carrinhoService = inject(CarrinhoService);
  protected carrinho = this.#carrinhoService.obterItens();
  protected total = signal(this.#carrinhoService.obterTotal());

  aumentarQuantidade(produtoId: number) {
    this.#carrinhoService.aumentarQuantidade(produtoId)
  }

  diminuirQuantidade(produtoId: number) {
    this.#carrinhoService.diminuirQuantidade(produtoId)
  }

  removerItem(produtoId: number) {
    this.#carrinhoService.removerItem(produtoId)
  }

  obterItens() {
    return this.#carrinhoService.obterItens()
  }

  obterTotal() {
    return this.#carrinhoService.obterTotal()
  }
}
