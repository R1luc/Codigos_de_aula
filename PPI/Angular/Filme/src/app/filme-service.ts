import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Filme } from './consulta-filme/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
    readonly API_URL = 'https://www.omdbapi.com/?apikey=4b31aa92'
    #http = inject(HttpClient)

    obterFilme(titulo: string): Observable<Filme> {
        return this.#http.get<Filme>(`${this.API_URL}&t=${titulo}`);
    }
}
