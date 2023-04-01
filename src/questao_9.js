const prompt = require('prompt-sync')()

let somaSalario = 0;
let numPessoas = 0;
let maiorIdade = 0;
let menorIdade = Infinity;
let numMulheresSalario100 = 0;

while (true) {
    let idade = parseInt(prompt("Digite a idade (um número negativo para encerrar):" ));
    if (idade < 0) {
        break; 
    }

    let sexo = parseInt(prompt("Digite o sexo da pessoa (0 para masculino / 1 para feminino): "));
    let salario = parseFloat(prompt("Digite o salário da pessoa:"));

    somaSalario += salario;
    numPessoas++;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (sexo == 1 && salario <= 100) {
        numMulheresSalario100++;
    }
}

let mediaSalario = somaSalario / numPessoas;

console.log("---------------------------")
console.log("Média de salário do grupo: R$" + mediaSalario.toFixed(2));
console.log("Maior idade do grupo: " + maiorIdade);
console.log("Menor idade do grupo: " + menorIdade);
console.log("Quantidade de mulheres com salário até R$100,00: " + numMulheresSalario100);
console.log("---------------------------")
