//Conexão das variaveis com o HTML
var n1 = window.document.getElementById('num1')
var n2 = window.document.getElementById('num2')
var resu = window.document.getElementById('res')

//Conexão dos botões com o HTML e eventos
var som = window.document.getElementById('somar')
som.addEventListener('click', somar)

var sub = window.document.getElementById('subtrair')
sub.addEventListener('click', subtrair)

var mul = window.document.getElementById('multiplicar')
mul.addEventListener('click', multiplicar)

var div = window.document.getElementById('dividir')
div.addEventListener('click', dividir)

//Funções com as operações
function somar(){
    var val1 = Number(n1.value)
    var val2 = Number(n2.value)
    var soma = val1 + val2
    resu.innerText = `A soma de ${val1} e ${val2} é igual a ${soma}.`
}

function subtrair(){
    var val1 = Number(n1.value)
    var val2 = Number(n2.value)
    var subtra = val1 - val2
    resu.innerText = `A subtração de ${val1} por ${val2} é igual a ${subtra}.`
}

function multiplicar(){
    var val1 = Number(n1.value)
    var val2 = Number(n2.value)
    var multi = val1 * val2
    resu.innerText = `A multiplicação de ${val1} por ${val2} é igual a ${multi}`
}

function dividir(){
    var val1 = Number(n1.value)
    var val2 = Number(n2.value)
    var divi = val1 / val2
    resu.innerText = `A divisão de ${val1} por ${val2} é igual a ${divi}.`
}
