var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.descricao = function () {
        return "Livro: ".concat(this.titulo, "\nAutor: ").concat(this.autor, " \nPre\u00E7o: R$ ").concat(this.preco.toFixed(2));
    };
    return Livro;
}());
var livro1 = new Livro("1984", "George Orwell", 16.09);
var livro2 = new Livro("O Senhor dos Anéis", "Tolkien", 129.90);
var livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);
console.log(livro1.descricao());
console.log("----------------------------------------------------------");
console.log(livro2.descricao());
console.log("----------------------------------------------------------");
console.log(livro3.descricao());
console.log(livro1.getPreco());
