// Escreva uma função que receba um Array com 5 números e retorne o maior deles

function maiorArray(vetor){
    for (var cont = 0; cont < vetor.length; cont++){
        if (cont == 0) {
            var maior = vetor[cont]
        }
        if (vetor[cont] > maior) {
            maior = vetor[cont]
        }
    }
    return maior
}

console.log(maiorArray([2, 5, 55, 10, 12, 40]))