const readline = require('readline-sync')

function somar(n1,n2){
    n1 = Number(readline.question("Informe o primeiro numero: "))
    n2 = Number(readline.question("Informe o segundo numero: "))
    res = n1 + n2 
    console.log(res)
}

function subtrair(n1,n2){
    n1 = Number(readline.question("Informe o primeiro numero: "))
    n2 = Number(readline.question("Informe o segundo numero: "))
    res = n1 - n2 
    console.log(res)
}

function multiplicação(n1,n2){
    n1 = Number(readline.question("Informe o primeiro numero: "))
    n2 = Number(readline.question("Informe o segundo numero: "))
    res = n1 * n2 
    console.log(res)
}

function divisão(n1,n2){
    n1 = Number(readline.question("Informe o primeiro numero: "))
    n2 = Number(readline.question("Informe o segundo numero: "))
    res = n1/n2 
    console.log(res)
}

let obj = Number(readline.question("Escolha o que voce deseja fazer :\n somar(1)\n subtracao(2)\n multiplicacao(3)\n divisao(4) \n"))

if (obj == 1){
    somar()
}
else if(obj == 2){
    subtrair()
}
else if(obj == 3){
    multiplicação()
}
else if(obj == 4){
    divisão()
}
