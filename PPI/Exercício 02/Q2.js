//O num. é divisível por algum outro que não seja ele e 1?
var num;
var prompt = require('prompt-sync')();
num = Number(prompt("Número inteiro positivo (>1): "));
while (num >= 0) {
    console.log(num);
    var primo = true;
    var divisor = num - 1;
    while (primo && divisor > 1) {
        if (num % divisor == 0 || num == 0 || num == 1) {
            primo = false;
        }
        else {
            divisor = divisor - 1;
        }
    }
    if (primo) {
        console.log("O número ", num, " é primo");
    }
    else {
        console.log("O número ", num, " não é primo");
    }
    num = Number(prompt("Número inteiro positivo (>1): "));
}
