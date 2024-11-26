import {Filme} from "./Filme"
export class Catalogo{
    private Filmes: Filme[] = []

    adicionarFilme(filme: Filme){
        this.Filmes.push(filme);
        console.log("Filme adiconado!")
    }

    get pegarCatalogo(){
        return this.Filmes
    }

    listarFilmes(){
        console.log("LISTAGEM DOS FILMES:");
        this.Filmes.forEach(filme => {
            console.log("- " + filme.pegarTitulo + ", " + filme.pegarDiretor + ", " + filme.pegarAnoLancamento + " -> ");
    })}
}