import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { AgendaService } from '../models/agenda-service';
import { Contato, TipoContato } from '../models/contato';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato {
  #contatoService = inject(AgendaService);

  constructor() {}

  FormContato = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', Validators.required),
    aniversario: new FormControl('', Validators.required),
    tipo: new FormControl(TipoContato.OUTRO)
  });

  adicionarContato(): void {
    if (this.FormContato.valid) {
      const formValue = this.FormContato.value as {
        nome: string | null;
        email: string | null;
        telefone: string | null;
        aniversario: string | null;
        tipo: TipoContato | null;
      };

      const novoContato: Contato = {
        nome: formValue.nome ?? '',
        email: formValue.email ?? '',
        telefone: formValue.telefone ?? '',
        aniversario: formValue.aniversario ? new Date(formValue.aniversario) : new Date(),
        tipo: formValue.tipo ?? TipoContato.OUTRO
      };

      this.#contatoService.adicionar(novoContato);
    }
  }

}
