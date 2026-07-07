import { Component, inject } from '@angular/core';
import { FilmeService } from '../filme-service';
import { Filme } from './filme';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-filme',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss',
})
export class ConsultaFilme {
  #filmeService = inject(FilmeService);
  filme: Filme | undefined;

  constructor() {
  }

  FormFilme = new FormGroup({
    titulo: new FormControl('', Validators.required),
  });


  obterFilme(titulo: string) {
  console.log('Pesquisando:', titulo);

  this.#filmeService.obterFilme(titulo).subscribe(res => {
    console.log(res);
    this.filme = res;
  });
}

  pesquisarFilme() {
  console.log(this.FormFilme.value);

  if (this.FormFilme.invalid) return;

  this.obterFilme(this.FormFilme.value.titulo ?? '');
}
}
