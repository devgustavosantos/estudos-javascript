/* 
Nome do aluno
Nota 1
Nota 2
Média
Aprovado \ Reprovado
Deseja continuar?

*/

var continuar = true
var cont = 0
var sala = []

while (continuar == true) {
   
    var aluno = prompt('Digite o nome do aluno: ')
    var nota1 = nota(1)
    var nota2 = nota(2)
    var media =  (nota1 + nota2)/2
    var situ = situacao(media)
   
    var dados = []
    dados.push(aluno)
    dados.push(nota1)
    dados.push(nota2)
    dados.push(media)
    dados.push(situ)


    sala.push(dados)

    cont++
    continuar = confirm('Deseja continuar?')
}

console.log(lista(sala))

function nome() {
    prompt('Digite o nome do aluno: ')
}

function nota(n) {
    var nota_ = -1
    while(0 > nota_ || nota_ > 10){
        nota_ = parseFloat(prompt(`Digite a ${n}º nota de ${aluno} (número entre 0 e 10):`))
    }
    return nota_
}

function situacao(m){
    if(m < 7) {
        return 'Reprovado!'
    } else {
        return 'Aprovado!'
    }
}

function lista(vetor) {
    for (var cont in vetor) {
        console.log(`************* ALUNO ${parseInt(cont) + 1} ***************`)
        console.log(`Nome: ${vetor[cont][0]}`)
        console.log(`Nota 1: ${vetor[cont][1]}`)
        console.log(`Nota 2: ${vetor[cont][2]}`)
        console.log(`Média: ${vetor[cont][3]}`)
        console.log(`Situação: ${vetor[cont][4]}`)
    }
}