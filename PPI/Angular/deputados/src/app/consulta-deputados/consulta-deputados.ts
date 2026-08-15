import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  readonly #deputadoService = inject(DeputadoService)
  protected deputados = signal<Deputado[] | undefined>(undefined)

  readonly filtroForm = new FormGroup({
    filtro: new FormControl<'todos' | 'nome' | 'partido' | 'uf'>('todos', {
      nonNullable: true,
    }),
    valor: new FormControl('', {
      nonNullable: true,
    }),
  })

  constructor() {
    this.atualizarValidacaoDoFiltro();

    this.filtro.valueChanges.subscribe(() => {
      this.atualizarValidacaoDoFiltro();
    });
  }

  get filtro() {
    return this.filtroForm.controls.filtro;
  }

  get valor() {
    return this.filtroForm.controls.valor;
  }

  get filtroAtual(): 'todos' | 'nome' | 'partido' | 'uf' {
    return this.filtro.value;
  }

  private atualizarValidacaoDoFiltro(): void {
    this.valor.clearValidators();
    this.valor.setValue('');

    if (this.filtroAtual === 'todos') {
      this.valor.disable();
      return;
    }

    this.valor.enable();

    const validadores = [Validators.required];

    switch (this.filtroAtual) {
      case 'nome':
        validadores.push(Validators.minLength(3), Validators.maxLength(80));
        break;
      case 'partido':
        validadores.push(
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.pattern(/^[A-Za-zÀ-ÿ.-]+$/),
        );
        break;
      case 'uf':
        validadores.push(
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern(/^[A-Za-z]{2}$/),
        );
        break;
    }

    this.valor.setValidators(validadores);
    this.valor.updateValueAndValidity();
  }

  consultarTodos() {
    this.#deputadoService.obterTodos().subscribe((res) => {
      this.deputados.set(res.dados);
    });
  }

  consultarPorNome() {
    if (this.valor.invalid) {
      this.valor.markAsTouched();
      return;
    }

    this.#deputadoService.obterDeputadosPorNome(this.valor.value.trim()).subscribe((res) => {
      this.deputados.set(res.dados);
    });
  }

  consultarPorPartido() {
    if (this.valor.invalid) {
      this.valor.markAsTouched();
      return;
    }

    this.#deputadoService.obterDeputadosPorPartido(this.valor.value.trim()).subscribe((res) => {
      this.deputados.set(res.dados);
    });
  }

  consultarPorUf() {
    if (this.valor.invalid) {
      this.valor.markAsTouched();
      return;
    }

    this.#deputadoService.obterDeputadosPorUf(this.valor.value.trim()).subscribe((res) => {
      this.deputados.set(res.dados);
    });
  }
}
