import { Component, signal } from '@angular/core';
import { AdicionaContato } from "./adiciona-contato/adiciona-contato";
import { ExibeContatos } from "./exibe-contatos/exibe-contatos";
import { Cabecalho } from "./cabecalho/cabecalho";

@Component({
  selector: 'app-root',
  imports: [AdicionaContato, ExibeContatos, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Agenda');
}
