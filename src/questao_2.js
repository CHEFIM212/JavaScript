const prompt = require('prompt-sync')()

let tempo = prompt("Digite o tempo médio da viagem: ")
let velocidade = prompt("Digite a velocidade media da viajem: ")

let distancia = tempo * velocidade
let litros_usados = distancia/12

console.log("---------------------------")
console.log("Velocidade média: " + velocidade)
console.log("Tempo gasto na viagem: " + tempo)
console.log("Distância percorrida: " + distancia)
console.log("litros utilizada na viagem: " + litros_usados)
console.log("---------------------------")