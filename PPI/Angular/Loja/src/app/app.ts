import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaLojas } from "./consulta-loja-backend/consulta-loja-backend";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsultaLojas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Loja');
}
