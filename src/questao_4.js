const prompt = require('prompt-sync')()

let l1 = parseInt(prompt("Informe o lado: "))
let l2 = parseInt(prompt("Informe outro lado: "))
let l3 = parseInt(prompt("Informe outro lado: "))

console.log("---------------------------")

if((l1 + l2) > l3 && (l3 + l2) > l1 && (l2 + l3) > l1) {
    
        if(l1 == l2 && l2 == l3){
            console.log("Esse triangulo e equilátero!!!")
        
        } else if (l1 == l2 != l3 && l3 == l2 != l1 &&  l2 == l3 != l1){
            console.log("Esse triangulo e isósceles!!!")
        } else {
            console.log("Esse triangulo e escaleno!!!")
        }

} else {
    console.log("Qual foi, isso não e um triangulo n parceiro!!!")
}

console.log("---------------------------")