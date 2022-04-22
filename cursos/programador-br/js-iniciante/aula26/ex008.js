// Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

/* { dia: 21, mes: 'Março', ano: 2022 } */

let calendario = {}

function propriedadeData(){
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro', 
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    let hojeData = new Date()
    calendario.dia = hojeData.getDate()
    calendario.mes = meses[hojeData.getMonth()]
    calendario.ano = hojeData.getFullYear()

    return console.log(calendario)
}

propriedadeData()