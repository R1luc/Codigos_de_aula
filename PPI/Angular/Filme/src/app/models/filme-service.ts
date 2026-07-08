import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
    readonly API_URL = 'https://www.omdbapi.com/?apikey=4b31aa92'
    #http = inject(HttpClient)
    
    constructor() { }

    obterFilme(titulo: string): Observable<any> {
        return this.#http.get<any>(`${this.API_URL}&s=${titulo}`);
    }
}
