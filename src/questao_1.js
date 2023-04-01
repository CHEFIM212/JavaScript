const prompt = require('prompt-sync')()
let salario = prompt("Digite o salario: ")

console.log("---------------------------")

console.log("Salario bruto: " + salario)
salario = salario - (salario/10)
console.log("Salario mais desconto de 10%: " + salario)
salario = salario - (salario/20)
console.log("Salario mais desconto de 5%: " + salario)
console.log("Salario liquido: " + salario)

console.log("---------------------------")