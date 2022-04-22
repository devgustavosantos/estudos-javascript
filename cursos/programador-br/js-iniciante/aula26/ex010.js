// Escreva um programa que imprima o seguinte padrão
// * 
// * * 
// * * * 
// * * * * 
// * * * * *


function escada(num){

let cadeiaDeString = ''
 
for (let cont = 1; cont <= num; cont++) {
    cadeiaDeString += '* '
    console.log(cadeiaDeString)
}

}

escada(50)