//Conexão dos botão
var bot_add = window.document.getElementById('bot-add')
bot_add.addEventListener('click', adicionar)
bot_add = false
var bot_fin = window.document.getElementById('bot-fin')
bot_fin.addEventListener('click', finalizar)
var res = window.document.getElementById('resultados')

var valores = []

function adicionar() {
    let txtn = window.document.getElementById('txtn')
    let num = Number.parseInt(txtn.value)
    let lista = document.getElementById('lista')
    if (txtn.value.length == 0) {
        window.alert('ERRO! Imposivel adicionar pois o campo está vazio!')
    } else {
        if (valores.indexOf(num) != -1 || num < 1 || num > 100) {
            window.alert('ERRO! O valor é inválido ou já foi adicionado anteriormente!')
        } else {
            res.innerHTML = ''
            if (valores.length == 0){
                lista.innerHTML = `<option>Valor ${num} adicionado.</option>`
                valores[0] = num
                bot_add = true
            } else {
                valores.push(num)
                let item = document.createElement('option')
                item.text = `Valor ${num} adicionado.`
                lista.appendChild(item)
                bot_add = true
            }
        }       
    }
}

function finalizar(){
    if (bot_add == false) {
        window.alert('ERRO! Impossivel finalizar sem antes ter adicionado pelo menos um valor.')
    } else {
        //Mostrando o total
        let item = `Ao todo temos ${total(valores)} números.`
        res.innerHTML = `<p>${item}</p>`

        //Mostrando o maior número
        item = `O maior número digitado foi ${maior(valores)}.`
        res.innerHTML += `<p>${item}</p>`
        
        //Mostrando o menor número
        item = `O menor número digitado foi ${menor(valores)}.`
        res.innerHTML += `<p>${item}</p>`

        //Mostrando a soma dos números
        item = `A soma dos valores digitados é ${soma(valores)}.`
        res.innerHTML += `<p>${item}</p>`
        
        //Mostrando a soma dos números
        item = `A média dos valores digitados é ${media(valores)}.`
        res.innerHTML += `<p>${item}</p>`
    }
}

function total(total_do_vetor) {
    return total_do_vetor.length
}

function maior(vetor) {
    let num_maior = 0
    for (c = (vetor.length - 1); c >= 0; c--){
        if (c == (vetor.length - 1)) {
            num_maior = vetor[c]
        } else {
            if (vetor[c] > num_maior) {
                num_maior = vetor[c]
            }
        }
    }
    return num_maior
}

function menor(vetor) {
    let num_menor = 0
    for (c = (vetor.length - 1); c >= 0; c--){
        if (c == (vetor.length - 1)) {
            num_menor = vetor[c]
        } else {
            if (vetor[c] < num_menor) {
                num_menor = vetor[c]
            }
        }
    }
    return num_menor
}

function soma(vetor) {
    let somador = 0
    for (c = (vetor.length - 1); c >=0; c--) {
        somador += vetor[c]
    }
    return somador
}

function media(par_soma, par_tot) {
    let num_media = soma(valores) / total(valores)
    return num_media
}