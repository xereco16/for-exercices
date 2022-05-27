const {
    ler,
    escrever
} = require('./utils/utils');


// FOI O MAIS PROXIMO QUE CONSEGUI
// FOI O MAIS PROXIMO QUE CONSEGUI
// FOI O MAIS PROXIMO QUE CONSEGUI
// FOI O MAIS PROXIMO QUE CONSEGUI


let risco = ""


for (let i = 0; i < 7; i++) {
    risco+="-"
    console.log(risco)
    while(risco == "-----"){
        risco = "----"
        console.log(risco)
    }
    while(risco == "----"){
        risco = "---"
        console.log(risco)
    }
    while(risco == "---"){
        risco = "--"
        console.log(risco)
    }
    while(risco == "--"){
        risco = "-"
        risco+="---"
        console.log(risco)
       
    }
    
}