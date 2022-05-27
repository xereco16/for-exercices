const {
    ler,
    escrever
} = require('./utils/utils');

let cont = 100

for (let i = 0; i < 100; i++) {
    if (cont%2==0){
        console.log(cont)
    }
    cont--

}