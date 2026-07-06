import { Component, inject, viewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AgendaService } from '../models/agenda-service';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss',
})
export class ExibeContatos {
  #contatosService = inject(AgendaService);

  constructor() {}

  get contatos() {
    return this.#contatosService.obterTodos();
  }

  removerContato(contato: any) {
    this.#contatosService.remover(contato);
  }
}