const prompt = require('prompt-sync')()

let frase = prompt("Digite uma frase:"); 
let contador = 0; 


for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "A") {
        contador++; 
    }
}


console.log("A frase digitada possui " + contador + " letras 'a' ou 'A'.");