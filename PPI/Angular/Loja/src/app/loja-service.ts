import { HttpClient } from '@angular/common/http';
import { inject, Service} from '@angular/core';
import { Observable } from 'rxjs';
import { LojaResponse } from './loja';

@Service()
export class LojaService {
    readonly API = 'https://localhost:3000'
    readonly #http = inject(HttpClient)

    obterTodos(): Observable<LojaResponse> {
        return this.#http.get<LojaResponse>(`${this.API}/produtos`)
    }

    obterLojaPorID(id: number): Observable<LojaResponse> {
        return this.#http.get<LojaResponse>(`${this.API}/lojas/${id}`)
    }
}
