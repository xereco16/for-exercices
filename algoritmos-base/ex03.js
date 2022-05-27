const {
    ler,
    escrever
} = require('./utils/utils');

let pos = []
let neg = []

let somaPos = 0
let somaNeg = 0
let zero = 0


for (let i = 0; i < 10; i++) {
    let num = Number(ler("Digite um numero positivo ou negativo: "))
    
    if (num>0) {
        pos.push(num)
    }else if (num<0){
        neg.push(num)
    }else{
        zero
    }
}

for (let i = 0; i < pos.length; i++) {
    somaPos+=pos[i]
}
for (let i = 0; i < neg.length; i++) {
    somaNeg+=neg[i]  
}

console.log("\nA soma de numeros positivos é de "+somaPos)
console.log("\nE a soma de numeros negativos é "+somaNeg)