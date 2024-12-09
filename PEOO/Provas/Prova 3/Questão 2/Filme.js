"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, diretor, anoLancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.avaliacoes = [];
    }
    Object.defineProperty(Filme.prototype, "pegarTitulo", {
        get: function () {
            return this.titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "pegarDiretor", {
        get: function () {
            return this.diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "pegarAnoLancamento", {
        get: function () {
            return this.anoLancamento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "mudarTitulo", {
        set: function (titulo) {
            this.titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "mudarDiretor", {
        set: function (diretor) {
            this.diretor = diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "mudarAnoLancamento", {
        set: function (anoLancamento) {
            this.anoLancamento = anoLancamento;
        },
        enumerable: false,
        configurable: true
    });
    Filme.prototype.adicionarAvaliacao = function (nota) {
        if (nota > 0 && nota < 6) {
            this.avaliacoes.push(nota);
        }
        else {
            console.log("Digite um valor entre 1 e 5!");
        }
    };
    Filme.prototype.calcularMediaAvaliacoes = function () {
        var soma = 0;
        this.avaliacoes.forEach(function (avaliacao) {
            soma += avaliacao;
        });
        var media = soma / this.avaliacoes.length;
        return media;
    };
    return Filme;
}());
exports.Filme = Filme;
