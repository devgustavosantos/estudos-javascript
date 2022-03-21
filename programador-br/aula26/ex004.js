// Escreva uma função que receba um número e imprima se ele é par ou ímpar

function parImpar(num) {
    if (num % 2 == 0) {
        return 'Número Par'
    } else {
        return "Número Ímpar"
    }
}

console.log(parImpar(2))