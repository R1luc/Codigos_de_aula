"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo() {
        this.Filmes = [];
    }
    Catalogo.prototype.adicionarFilme = function (filme) {
        this.Filmes.push(filme);
        console.log("Filme adiconado!");
    };
    Object.defineProperty(Catalogo.prototype, "pegarCatalogo", {
        get: function () {
            return this.Filmes;
        },
        enumerable: false,
        configurable: true
    });
    Catalogo.prototype.listarFilmes = function () {
        console.log("LISTAGEM DOS FILMES:");
        this.Filmes.forEach(function (filme) {
            console.log("- " + filme.pegarTitulo + ", " + filme.pegarDiretor + ", " + filme.pegarAnoLancamento + " -> ");
        });
    };
    return Catalogo;
}());
exports.Catalogo = Catalogo;
