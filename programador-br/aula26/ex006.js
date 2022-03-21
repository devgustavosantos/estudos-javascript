// Escreva uma função que receba um objeto e imprima suas propriedades


function receberObjeto(obj) {
    for (let cont in obj){
        console.log(cont)
    }
}

var pessoa = {nome:'Gustavo', altura:1.84, peso:92.1, idade:25}

receberObjeto(pessoa)

