// Desenha uma moldura em uma frase

const readline = require('readline-sync');

function barra(qtde){
    for(let i= 0;i<qtde+2;i++){
        process.stdout.write(ch)
    } 
}

const frase = readline.question('\nFrase: ')
const ch = '█'

barra(frase.length)
console.log(`\n${ch}${frase}${ch}`)
barra(frase.length)