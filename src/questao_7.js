const prompt = require('prompt-sync')()

let a = prompt("Digite o valor A: ")
let b = prompt("Digite o valor B: ")
let c = prompt("Digite o valor C: ")

let res = a + b

if( res > c) {
    console.log("O valor A + B e maior que C!!!")
} else if(res = c) {
    console.log("O valor A + B e igual a C!!!")
} else {
    console.log("O valor A + B e menor que C!!!")
}