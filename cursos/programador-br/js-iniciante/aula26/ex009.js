// Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

var pessoas = [
    {altura: 1.84,
    idade: 25}, 

    {altura: 1.78, 
    idade: 35}, 

    {altura: 1.65, 
    idade: 40}
]


function maior(vetor) {
    let maior = 0
    for (let cont in vetor){
        if(cont == 0){
            maior = vetor[cont]['altura']
        } else if(vetor[cont]['altura'] > maior) {
            maior = vetor[cont]['altura']
        }
    }
    return maior
}
 
function menor(vetor) {
    let menor = 0
    for (let cont in vetor){
        if(cont == 0){
            menor = vetor[cont]['altura']
        } else if(vetor[cont]['altura'] < menor) {
            menor = vetor[cont]['altura']
        }
    }
    return menor
}

function media(vetor) {
    let acum = 0
    for (let cont in vetor) {
        acum += vetor[cont]['idade']
    }
    return acum / vetor.length
}




console.log(`A maior altura registrada foi ${maior(pessoas)}, a menor foi ${menor(pessoas)} e a média das idades é ${media(pessoas)}.`)