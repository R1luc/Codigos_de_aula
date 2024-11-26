import { Filme } from "./Filme";
import { Catalogo } from "./Catalogo";
function FiltrarFilmesPorAno(filmes: Filme[], ano: number){
    let filmesFiltrados = Filme[typeof(Filme)]
    filmes.forEach(filme =>{
        if(filme.pegarAnoLancamento >= ano){
            filmesFiltrados.push(filme)
        }
    })
    filmesFiltrados.forEach(filme =>{
        console.log("- " + filme.pegarTitulo + " " + filme.pegarAnoLancamento)
    })
}

let filme1 = new Filme("A Origem", "Christopher Nolan", 2010);
let filme2 = new Filme("Interestelar", "Christopher Nolan", 2014);
let filme3 = new Filme("Matrix", "Lana e Lilly Wachowski", 1999);
let filme4 = new Filme("Pulp Fiction: Tempo de Violência","Quentin Tarantino",1994)
let filme5 = new Filme("Duna","Denis Villeneuve", 2021)

let catalogo = new Catalogo()
catalogo.adicionarFilme(filme1)
catalogo.adicionarFilme(filme2)
catalogo.adicionarFilme(filme3)
catalogo.adicionarFilme(filme4)
catalogo.adicionarFilme(filme5)
catalogo.listarFilmes()

FiltrarFilmesPorAno(catalogo.pegarCatalogo, 2000)
