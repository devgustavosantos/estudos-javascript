//var nome = prompt('Digite o nome da nave:')
var velocidade = 0

menu()

function menu(){
    let textMenu = [
        '1 - Acelerar a nave em 5km/s', 
        '2 - Desacelerar em 5km/s',
        '3 - Imprimir os dados de bordo',
        '4 - Sair do Programa'
    ]

    let continuar = true

    while (continuar == true){
        
        let opcao = Number.parseInt(prompt(`Escolha uma opção:\n ${textMenu[0]}\n ${textMenu[1]}\n ${textMenu[2]}\n ${textMenu[3]}`))
        console.log(opcao)
    
        switch (opcao) {
            case 1:
                acelerar()
                break
            case 2:
                desacelerar()
                break
            case 3:
                imprimir()
                break
            case 4:
                continuar = false
                break
            default:
                alert('Opção inválida! Tente novamente!')
                break
        }
    }

    console.log('Saiu')
}