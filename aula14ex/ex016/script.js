//Conexão das variáveis com os inputs
var inicio_txt = window.document.getElementById('inicio')
var fim_txt = window.document.getElementById('fim')
var passo_txt = window.document.getElementById('passo')
var botao = window.document.getElementById('botao')
var resultado = window.document.getElementById('resultado')

botao.addEventListener('click', contar)

function contar() {
    /* Transformando inputs strings em numbers */
    var inicio_num = Number.parseInt(inicio_txt.value)
    var fim_num = Number.parseInt(fim_txt.value)
    var passo_num = Number.parseInt(passo_txt.value)



  /*   window.alert(`O inicio ${inicio_num}, o fim ${fim_num}, e o passo ${passo_num}.`) */
    if (isNaN(inicio_num) || isNaN(fim_num) || isNaN(passo_num)) {
        window.alert('Faltam valores!!! Por favor verifique os campos e tente novamente.')
    } else if (passo_num <= 0){
        window.alert('O passo não pode ser menor ou igual a zero!!! Por favor verifique os campos e tente novamente.')
    } else {
        resultado.innerHTML = `Contando...<br>`
        
        if (inicio_num < fim_num){
            var cont = inicio_num
            while (cont <= fim_num){
                var texto = document.createElement('span')
                texto.innerHTML = `${cont} &#x1F449;`
                resultado.appendChild(texto)
                cont += passo_num
            }
            var texto = document.createElement('span')
            texto.innerHTML = `${cont} &#x1F449;`
            resultado.appendChild(texto)
            texto.innerHTML = `&#x1F3C1;`

        }else if (inicio_num > fim_num){
            var cont = inicio_num
            while (cont >= fim_num){
                var texto = document.createElement('span')
                texto.innerHTML = `${cont} &#x1F449;`
                resultado.appendChild(texto)
                cont -= passo_num
            }
            var texto = document.createElement('span')
            texto.innerHTML = `${cont} &#x1F449;`
            resultado.appendChild(texto)
            texto.innerHTML = `&#x1F3C1;`

        } else {
            window.alert('O inicio é igual ao fim?! Por favor verifique os campos e tente novamente.')
        }
    }

}