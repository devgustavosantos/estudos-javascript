//Conexão dos botão
var bot_add = window.document.getElementById('bot-add')
bot_add.addEventListener('click', adicionar)
bot_add = false
var bot_fin = window.document.getElementById('bot-fin')
bot_fin.addEventListener('click', finalizar)


var valores = []






function adicionar() {
    let txtn = window.document.getElementById('txtn')
    let num = Number.parseInt(txtn.value)
    let lista = document.getElementById('lista')
    if (txtn.value.length == 0) {
        window.alert('ERRO! Imposivel adicionar pois o campo está vazio!')
    } else {
        if (valores.indexOf(num) != -1) {
            window.alert('ERRO! O valor já foi adicionado anteriormente!')
        } else {
            if (valores.length == 0){
                lista.innerHTML = `<option>O valor ${num} foi adicionado.</option>`
                valores[0] = num
                bot_add = true
            } else {
                valores.push(num)
                let item = document.createElement('option')
                item.text = `O valor ${num} foi adicionado.`
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
        window.alert('Botão Finalizar')
    }
}
