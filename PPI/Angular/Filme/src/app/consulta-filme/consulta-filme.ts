import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { FilmeService } from '../models/filme-service';
import { Filme } from '../models/filme';

@Component({
  selector: 'app-consulta-filme',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss'
})
export class ConsultaFilme {

  private filmeService = inject(FilmeService);

  filmes = signal<Filme[]>([]);

  FormFilme = new FormGroup({
    titulo: new FormControl('', Validators.required)
  });

  pesquisarFilme() {

    if (this.FormFilme.invalid) return;

    const titulo = this.FormFilme.value.titulo ?? '';

    this.filmeService.obterFilme(titulo).subscribe(res => {
      this.filmes.set(res.Search ?? []);
    });
  }
}