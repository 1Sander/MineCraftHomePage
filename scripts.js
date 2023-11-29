console.log("pratica 7")


function factorial(x){
    let resultado = 1

    for(let i = 1; i <= x; i++){
        resultado = resultado * i
    
    }
        return("Fatorial de " + x + " é " + resultado)
}

console.log(factorial(7))