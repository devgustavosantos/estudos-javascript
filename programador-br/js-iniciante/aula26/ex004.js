// Escreva uma funçao que receba um array de 5 números e retorne a média

function media(vetor) {
    let acum = 0
    for (let cont of vetor){
        acum += cont
    }

    return acum / vetor.length
}

var numeros = [1, 5, 7, 8, 4]

console.log(media(numeros))