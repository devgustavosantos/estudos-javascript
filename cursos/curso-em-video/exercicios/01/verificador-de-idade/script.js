//Conexões com o HTML
var nasc_string = window.document.getElementById('nasc')
var sexo_masc = window.document.getElementById('sexo-masc')
var sexo_femi = window.document.getElementById('sexo-femi')
var verificar = window.document.getElementById('verificar')
var resultado = window.document.getElementById('resultado')
var imagem = window.document.getElementById('imagem')

//Funções para saber o sexo
sexo_masc.addEventListener('click', mas)
sexo_femi.addEventListener('click', fem)
var sexo_clicado = 0

function mas() {
    sexo_clicado = 1
}

function fem() {
    sexo_clicado = 2
}

//Função para saber quando o verificar for clicado
verificar.addEventListener('click', veri)

function veri() {
    //Variavel para verificar se há erros do usuario
    var falta_dados = falta_dados

    //Condição para verificar se um data valida foi digitada
    var nasc_number = Number(nasc_string.value)
    var data_atual = new Date()
    var ano_atual = data_atual.getFullYear()
    var idade = ano_atual - nasc_number
    
    if (idade <= 0 || idade >= 150) {
        window.alert('Erro no ano digitado! Por favor se por favor verifique os dados e tente novamente!')
        var falta_dados = true
    }

    //Condição para verificar se um sexo foi selecionado
    if (sexo_clicado == 0){
        window.alert('Nenhum sexo foi selecionado! Por favor se por favor verifique os dados e tente novamente!')
        var falta_dados = true
    }

    //Condição para executar o programa se não houver falta de dados
    if (falta_dados == true) {
        resultado.innerHTML = `<p style="color: red;">Parece que faltaram alguns dados,<br> Por favor se por favor verifique os dados e tente novamente!<p/>`
        imagem.innerHTML = `<img src="./images/placeholder.jpg" alt="imagem de erro">`
    } else {
        //Condição para pessoas do sexo masculino
        if (sexo_clicado == 1){
            resultado.innerText = `Detectamos Homem com ${idade} ano(s).`
            //Condição para saber qual é a categoria da pessoa
            if (idade < 11) {
                imagem.innerHTML = '<img src="./images/crianca-m.jpg" alt="foto de uma criança">' 
            } else if (idade < 21) {
                imagem.innerHTML = '<img src="./images/adolescente-m.jpg" alt="foto de um adolescente">' 
            } else if (idade < 60) {
                imagem.innerHTML = '<img src="./images/adulto-m.jpg" alt="foto de um adulto">' 
            } else {
                imagem.innerHTML = '<img src="./images/idoso-m.jpg" alt="foto de um idoso">' 
            }
        }else {
            resultado.innerText = `Detectamos Mulher com ${idade} ano(s).`
            //Condição para saber qual é a categoria da pessoa
            if (idade < 11) {
                imagem.innerHTML = '<img src="./images/crianca-f.jpg" alt="foto de uma criança">' 
            } else if (idade < 21) {
                imagem.innerHTML = '<img src="./images/adolescente-f.jpg" alt="foto de um adolescente">' 
            } else if (idade < 60) {
                imagem.innerHTML = '<img src="./images/adulto-f.jpg" alt="foto de um adulto">' 
            } else {
                imagem.innerHTML = '<img src="./images/idoso-f.jpg" alt="foto de um idoso">' 
            }
        }
    }
}