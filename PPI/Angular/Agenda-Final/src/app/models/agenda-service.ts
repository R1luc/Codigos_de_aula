import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  #contatos: Contato[] ;

  constructor() {
    this.#contatos = [];
  }

  adicionar(contato: Contato): boolean {
    if (!this.existe(contato)) {
      this.#contatos.push(contato);
      return true;
    }
    return false;
  }

  obterTodos(): Contato[] {
    return this.#contatos;
  }

  existe(contato: Contato): boolean {
    return this.#contatos.some(c => c.email === contato.email);
  }
  
  remover(contato: Contato): boolean {
    const idx = this.#contatos.findIndex(c => c.email === contato.email);
    if (idx === -1) return false;
    this.#contatos.splice(idx, 1);
    console.log('Contato removido com sucesso!');
    return true;
  }
}
