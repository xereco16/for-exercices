const {
    ler,
    escrever
} = require('./utils/utils');


let multiplicando = Number(ler('Digite um número para ser multiplicado: '))
let multiplicador = Number(ler('Digite quantas vezes deseja multiplicar esse número: '))
let soma = 0

for (let i = 0; i < multiplicador; i++) {
    soma =  multiplicando + soma
}
console.log(multiplicando+" x "+multiplicador+" = "+soma)