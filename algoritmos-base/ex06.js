const {
    ler,
    escrever
} = require('./utils/utils');

let numEsc = Number(ler("Escolha um numero de 1 a 15 para saber sua tabuada: "))
let mult =1
let resp

while (numEsc<1 || numEsc>15){
    console.log("\nESCREVA UM NUMERO DE 1 a 15\n")
    numEsc = Number(ler("Escolha um numero de 1 a 15 para saber sua tabuada: "))
}

for (let i = 0; i < 10; i++) {
    resp = numEsc * mult
    console.log(numEsc +" x "+mult+" = "+ resp)
    mult++
}