const {
    ler,
    escrever
} = require('./utils/utils');


let repet = 0
let num1 = Number(ler("Digite um numero de 1 a 10: "))
let num2 = Number(ler("Digite mais um numero de 1 a 10: "))

while (num1<1 && num1>10 || num2<1 && num2>10 || num1<1 || num2<1 || num1>10 || num2>10) {   
    console.log("\nFAVOR DIGITAR UM NUMERO ENTRE 1 E 10")

    num1 = Number(ler("Digite um numero de 1 a 10: "))
    num2 = Number(ler("Digite mais um numero de 1 a 10: "))
}

for (let i = 0; i < 1000; i++) {
    if (repet%num1==0 && repet%num2==0){
        console.log(repet+" é multiplo de "+num1+" e "+num2)
    }
    repet++
}