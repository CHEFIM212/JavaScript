const prompt = require('prompt-sync')()

let portugues = parseFloat(prompt("Digite a nota de Português: "));
let matematica = parseFloat(prompt("Digite a nota de Matematica: "));
let ccgerais = parseFloat(prompt("Digite a nota de Conhecimentos Gerais: "));

console.log("---------------------------")
let media = (portugues + matematica + ccgerais)/3
console.log("Media: " + media)

if(media > 6 && matematica >= 5 && portugues >= 5 && ccgerais >= 5){
    console.log("Parabens você foi aprovado!!!")
} else {
    console.log("Você foi tão bom no curso que foi convidado a fazelo novamente, Reprovado!!!")
}