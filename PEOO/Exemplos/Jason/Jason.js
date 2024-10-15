const pessoa = {
    nome: "Jason",
    idade: 78,
    profissao: {cargo: "Serial Killer", publico_alvo: "Pessoas"},
    saudacao: function() {
        return `Kill kill, mama. Eu sou ${this.nome}. Eu tenho ${this.idade} anos. Eu sou um ${this.profissao.cargo}. Eu mato ${this.profissao.publico_alvo}`;
    }
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.saudacao())
console.log(" ")

const jsonString = JSON.stringify(pessoa, null, 2)
const pessoa2 = JSON.parse(jsonString)
console.log(jsonString)
console.log(pessoa2)
