const prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let n3 = parseInt(prompt("Digite o terceiro número:"));

if(n1 <= n2 && n1 <= n3) {
  if(n2 <= n3) {

    console.log(n1, n2, n3);

  } else {

    console.log(n1, n3, n2);

  }
} else if(n2 <= n1 && n2 <= n3) {
  if(n1 <= n3) {

    console.log(n2, n1, n3);

  } else {

    console.log(n2, n3, n1);

  }
} else if(n3 <= n1 && n3 <= n2) {
  if(n1 <= n2) {

    console.log(n3, n1, n2);

  } else {

    console.log(n3, n2, n1);
    
  }
}