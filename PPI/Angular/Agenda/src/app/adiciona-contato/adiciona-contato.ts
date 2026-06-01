import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Contato, TipoContato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato implements OnInit {
  contatoForm!: FormGroup;
  contatos: Contato[] = [];
  tipos = Object.values(TipoContato);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.email]],
      aniversario: ['', []],
      tipo: [this.tipos[0], [Validators.required]]
    });
  }

  adicionar(): void {
    if (this.contatoForm.invalid) return;

    const val = this.contatoForm.value;
    const novo = new Contato(val.nome, val.telefone, val.email, val.aniversario, val.tipo);
    this.contatos.push(novo);
    this.contatoForm.reset({ tipo: this.tipos[0] });
  }
}
