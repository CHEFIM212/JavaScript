const prompt = require('prompt-sync')()

let maticula = prompt("Informe o numero de matricula: ")
let ano = maticula.substring(0,2);
let semestre =  maticula.substring(2,3)
let ordem =  maticula.substring(3,6)

console.log("---------------------------")
console.log("Matriculado no ano de: 20" + ano)
if(semestre == 1) {
    console.log("Semestre matriculadono " + semestre + "° semestre.")
} else {
    console.log("Semestre matriculadono " + semestre + "° semestre.")
}
console.log("Ordem de matricula: " + ordem)
console.log("---------------------------")