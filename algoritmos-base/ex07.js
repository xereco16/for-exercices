const {
    ler,
    escrever
} = require('./utils/utils');

let num = 0
let quadrado
let cubo

for (let i = 0; i < 11; i++) {
    quadrado = num**2
    cubo = num**3
    console.log(num+" o quadrado é "+quadrado+" e o cubo é "+cubo)
    num++
}