import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Loja } from './loja';

@Service()
export class LojaService {
    readonly API = 'http://localhost:3000'
    readonly #http = inject(HttpClient)

    obterTodos(): Observable<Loja[]> {
        return this.#http.get<Loja[]>(`${this.API}/produtos`)
    }

    obterLojaPorID(id: number): Observable<Loja> {
        return this.#http.get<Loja>(`${this.API}/lojas/${id}`)
    }
}
