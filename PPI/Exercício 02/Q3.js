"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primar(num) {
    while (num >= 0) {
        let primo = true;
        let divisor = num - 1;
        if (num == 0 || num == 1) {
            primo = false;
        }
        while (primo && divisor > 1) {
            if (num % divisor == 0) {
                primo = false;
            }
            else {
                divisor = divisor - 1;
            }
        }
        if (primo) {
            return true;
        }
        else {
            return false;
        }
    }
}
var prompt = require('prompt-sync')();
var num_min = Number(prompt("Número inteiro positivo mínimo (>1): "));
var num_max = Number(prompt("Número inteiro positivo máximo (>1): "));
for (let i = num_min; i <= num_max; i++) {
    if (primar(i)) {
        console.log("O número ", i, " é primo");
    }
    else {
        console.log("O número ", i, " não é primo");
    }
}
//# sourceMappingURL=Q3.js.map