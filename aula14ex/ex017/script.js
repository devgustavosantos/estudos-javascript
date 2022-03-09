var botao = document.getElementById('botao')
botao.addEventListener('click', gerar)

function gerar() {
    let txtn = document.getElementById('txtn')
    let num = Number(txtn.value)
    let tab = document.getElementById('tabuada')
  
    if (txtn.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let res = num * c
            tab.innerHTML += `<option>${num} X ${c} = ${res}</option>`
        }
    }
}