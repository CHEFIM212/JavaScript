const prompt = require('prompt-sync')()

let numeroConta = prompt("Digite o número da conta (até 6 dígitos):");

let soma = 0;
for (let i = 0; i < numeroConta.length; i++) {
    soma += parseInt(numeroConta.charAt(i));
}

n = soma % 10
console.log("Numero da conta completo: " + numeroConta + "-" + n)