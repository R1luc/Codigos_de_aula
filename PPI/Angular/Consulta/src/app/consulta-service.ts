import { Service } from '@angular/core';
import { signal } from '@angular/core';
import { consulta } from './consulta';

@Service()
export class ConsultaService {
    consultas = signal<consulta[] | undefined>(undefined);
    total = signal<number>(0);

    adicionarConsulta(consulta: consulta) {
        this.consultas.set([...this.consultas() || [], consulta]);
        this.calcularTotal();
    }

    exibirConsultas() {
        return this.consultas;
    }

    exibirTotal() {
        return this.total;
    }

    calcularTotal() {
        this.total.set((this.consultas() || []).reduce((total: number, consulta: consulta) => total + consulta.preco, 0));
    }
}