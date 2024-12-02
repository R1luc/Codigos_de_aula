"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filme_1 = require("./Filme");
var Catalogo_1 = require("./Catalogo");
function FiltrarFilmesPorAno(filmes, ano) {
    filmes.forEach(function (filme) {
        if (filme.pegarAnoLancamento >= ano) {
            console.log("- " + filme.pegarTitulo + " " + filme.pegarAnoLancamento);
        }
    });
}
var filme1 = new Filme_1.Filme("A Origem", "Christopher Nolan", 2010);
var filme2 = new Filme_1.Filme("Interestelar", "Christopher Nolan", 2014);
var filme3 = new Filme_1.Filme("Matrix", "Lana e Lilly Wachowski", 1999);
var filme4 = new Filme_1.Filme("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994);
var filme5 = new Filme_1.Filme("Duna", "Denis Villeneuve", 2021);
var catalogo = new Catalogo_1.Catalogo();
catalogo.adicionarFilme(filme1);
catalogo.adicionarFilme(filme2);
catalogo.adicionarFilme(filme3);
catalogo.adicionarFilme(filme4);
catalogo.adicionarFilme(filme5);
catalogo.listarFilmes();
FiltrarFilmesPorAno(catalogo.pegarCatalogo, 1999);
