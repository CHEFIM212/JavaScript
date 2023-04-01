const prompt = require('prompt-sync')()

let frase = prompt("Digite uma frase:"); 
let contador = 0; 

for (let i = 0; i < frase.length; i++) {
    contador++; 
    if (frase[i] == "j"){
        console.log("Essa frase pussui uma letra J na posição " + contador + ".")
    }
}