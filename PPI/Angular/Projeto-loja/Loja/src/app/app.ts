import { Component, signal } from '@angular/core';
import { ConsultaLojas } from "./consulta-loja-backend/consulta-loja-backend";
import { ExibeCarrinho } from "./exibe-carrinho/exibe-carrinho";

@Component({
  selector: 'app-root',
  imports: [ConsultaLojas, ExibeCarrinho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Loja');
}
