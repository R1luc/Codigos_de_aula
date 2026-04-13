function primar (num: number){
    while (num >= 0){  
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
        return true
    } else {
        return false
    }
}
}

var prompt = require('prompt-sync')();
var num_min: number = Number(prompt("Número inteiro positivo mínimo (>1): "))
var num_max: number = Number(prompt("Número inteiro positivo máximo (>1): "))

for (let i: number = num_min; i <= num_max; i++){
    if (primar(i)){
        console.log("O número ", i, " é primo")
    } else {
        console.log("O número ", i, " não é primo")
    }
}