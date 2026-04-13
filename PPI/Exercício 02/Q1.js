var renda = 0;
var filhos = 0;
var somaFilhos = 0;
var somaRenda = 0;
var numFam = 0;
var prompt = require('prompt-sync')();
renda = Number(prompt('Insira sua Renda '));
while (renda >= 0) {
    filhos = Number(prompt('Insira o número de filhos '));
    somaRenda += renda;
    somaFilhos += filhos;
    numFam++;
    renda = Number(prompt('Insira sua Renda '));
}
var mediaRenda = somaRenda / numFam;
var mediaFilhos = somaFilhos / numFam;
console.log('A renda familiar média da cidade é: ' + mediaRenda);
console.log('A média do número de filhos de cada família é: ' + mediaFilhos);
