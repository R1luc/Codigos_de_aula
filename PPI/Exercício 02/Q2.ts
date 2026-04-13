//O num. é divisível por algum outro que não seja ele e 1?
var num: number
var prompt = require('prompt-sync')();
num = Number(prompt("Número inteiro positivo (>1): "))
while (num >= 0){  
    console.log(num)
    let primo: boolean = true
    let divisor: number = num - 1
        
    if (num == 0 || num == 1) {
        primo = false
    }

    while (primo && divisor > 1) {
    if (num % divisor == 0) {
        primo = false
    }
    else {
        divisor = divisor - 1
        }
    }
    if (primo) {
        console.log("O número ", num, " é primo")
    } else {
        console.log("O número ", num, " não é primo")
    }
    num = Number(prompt("Número inteiro positivo (>1): "))
}