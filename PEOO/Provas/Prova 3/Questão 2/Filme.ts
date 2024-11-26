export class Filme {
    private titulo : string;
    private diretor : string;
    private anoLancamento : number;
    private avaliacoes : number[];

    constructor(titulo : string, diretor : string, anoLancamento : number,) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
    }

    get pegarTitulo(): string{
        return this.titulo;
    }
    
    get pegarDiretor(): string{
        return this.diretor;
    }

    get pegarAnoLancamento(): number{
        return this.anoLancamento;
    }

    set mudarTitulo(titulo: string){
        this.titulo = titulo;
    }

    set mudarDiretor(diretor: string){
        this.diretor = diretor;
    }

    set mudarAnoLancamento(anoLancamento: number){
        this.anoLancamento = anoLancamento;
    }

    adicionarAvaliacao(nota: number){
        if(nota > 0 && nota < 6) {
            this.avaliacoes.push(nota);
        }
        else{
            console.log("Digite um valor entre 1 e 5!");
        }
        
    }

    calcularMediaAvaliacoes(){
        let soma = 0
        let quantidade = 0
        this.avaliacoes.forEach(avaliacao => {
            soma += avaliacao
            quantidade += 1 
        })
        let media = soma/quantidade
        return media
    }
}