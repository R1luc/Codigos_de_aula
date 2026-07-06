import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  templateUrl: './cabecalho.html',
  styleUrls: ['./cabecalho.scss']
})
export class Cabecalho {

  protected readonly title = signal('Agenda');

  currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

}