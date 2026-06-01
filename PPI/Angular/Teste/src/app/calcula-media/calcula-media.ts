import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined

  constructor() {
    this.mediaParcial = undefined;
  }
  
  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number){
    // Zera as variáveis antes de calcular
    this.mediaParcial = undefined;
    this.mediaFinal = undefined;
    this.mediaParcial = (b1*2  + b2*2 + b3*3 + b4*3) / 10;
  }

  calcularMediaFinal(mediaParcial: number, exame: number){
    // Zera a variável antes de calcular
    this.mediaFinal = undefined;
    this.mediaFinal = (mediaParcial + exame) / 2;
  }
}
