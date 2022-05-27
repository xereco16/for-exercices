const {
    ler,
    escrever
} = require('./utils/utils');


let n = Number(ler('Digite um número: '))
let numbEsc = n

let fatorial = n

for (let i = 0; i < n; i++) {
    fatorial = fatorial * (n - 1)
    n--
}
console.log(numbEsc+"! ="+fatorial)