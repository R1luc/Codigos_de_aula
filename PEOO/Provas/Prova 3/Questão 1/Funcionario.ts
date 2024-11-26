export class Funcionario {
    private nome : string;
    private cargo : string;
    private salario : number;

    constructor(nome : string, cargo : string, salario : number,) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    get pegarNome(): string{
        return this.nome;
    }
    
    get pegarCargo(): string{
        return this.cargo;
    }

    get pegarSalario(): number{
        return this.salario;
    }

    set mudarNome(nome: string){
        this.nome = nome;
    }

    set mudarCargo(cargo: string){
        this.cargo = cargo;
    }

    aumentarSalario(percentual: number){
        if(percentual <  0){
            console.log("Digite um valor maior que 0!")
        }
        else {
            this.salario = this.salario + this.salario*(percentual/100)
        }
    }

    descricao(){
        return `- ${this.nome}, ${this.cargo}, ${this.salario}`
    }
}