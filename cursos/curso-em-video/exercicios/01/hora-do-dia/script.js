var agora = new Date()
var hora = agora.getHours(agora)


if (hora < 12){
    //conexão com o html
    var cor = window.document.getElementById('corpo')
    var texto = window.document.getElementById('texto')
    var imagem = window.document.getElementById('imagem')
    
    cor.style.background = '#FED9A2'
    texto.innerText = `Agora são ${hora} horas.`
    /* imagem.innerHTML = '<img src="./images/manha.jpg" alt="foto de uma manhã">' */
    imagem

} else if (hora < 18) {
    var cor = window.document.getElementById('corpo')
    var texto = window.document.getElementById('texto')
    var imagem = window.document.getElementById('imagem')

    cor.style.background = '#F5A752'
    texto.innerText = `Agora são ${hora} horas.`
    imagem.innerHTML = '<img src="./images/tarde.jpg" alt="imagem de uma tarde">'

} else {
    var cor = window.document.getElementById('corpo')
    var texto = window.document.getElementById('texto')
    var imagem = window.document.getElementById('imagem')

    cor.style.background = '#9C7094'
    texto.innerText = `Agora são ${hora} horas.`
    imagem.innerHTML = '<img src="./images/noite.jpg" alt="imagem de uma noite">'
}