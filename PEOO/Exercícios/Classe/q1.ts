class Livro {
     private titulo : string;
     private autor : string;
     private preco : number;

    constructor(titulo : string, autor : string, preco : number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    getPreco() : number {
        return this.preco;
    }

     public descricao() : string {
        return `Livro: ${this.titulo}\nAutor: ${this.autor} \nPreço: R$ ${this.preco.toFixed(2)}`;
        }
}

let livro1 = new Livro("1984", "George Orwell", 16.09);
let livro2 = new Livro("O Senhor dos Anéis", "Tolkien", 129.90);
let livro3 = new Livro("Admirável mundo novo", "Huxley", 34.70);

console.log(livro1.descricao());
console.log("----------------------------------------------------------")
console.log(livro2.descricao());
console.log("----------------------------------------------------------")
console.log(livro3.descricao());

console.log(livro1.getPreco());