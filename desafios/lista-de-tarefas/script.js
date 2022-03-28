window.onload = function(){
   
    // Bloco para validar se é a primera utilização
    // if (localStorage.length == 0) {
    //     var listaDeTafefas = {
    //             t1: "Arrumar o quarto",
    //             t2: "Cozinhar",
    //             t3: "Codar"
    //     }
    //     console.log('Criou agora')
    //     console.log(listaDeTafefas)
    //     listaDeTafefas = JSON.stringify(listaDeTafefas)
    //     localStorage.setItem('lista', listaDeTafefas)

    // } else {
    //     console.log('A lista ja foi criada')
    //     let listaDeTafefas = localStorage.getItem('lista')
    //     listaDeTafefas = JSON.parse(listaDeTafefas)
    //     console.log(listaDeTafefas)
    // }

    var listaDeTafefas = {
        1: "Arrumar o quarto",
        2: "Cozinhar",
        3: "Codar"
    }


    mostrarTarefas()
    // Função para mostrar tarefa
    function mostrarTarefas(){
        let templateTarefa = document.getElementById('templateTarefas').cloneNode(true)
        let areaDasTarefas = document.getElementById('templateTarefas')

        
        
        
        for(let chave in listaDeTafefas) {
            console.log(templateTarefa)
            
        }
    }
  
    // Função para adicionar a tarefa
    let botAdicionar = document.getElementById('adicionar')
    botAdicionar.addEventListener('click', adicionar)
    function adicionar() {
        // Recebendo a tarefa
        let txtTarefa = document.getElementById('txt_tarefa')
        txtTarefa = txtTarefa.value
        console.log(txtTarefa)

        // Validando se é uma tarefa repetida
        let repetida = false
        for(let chave in listaDeTafefas) {
          if (txtTarefa.toUpperCase() == listaDeTafefas[chave].toUpperCase()) {
              alert('Essa tarefa já foi criada! Por favor digite outra.')
            repetida = true
          } 
        } 

        // Guardando a tarefa
        if (repetida == false) {
            let chaveDaTarefa = Object.keys(listaDeTafefas).length + 1
            listaDeTafefas[`${chaveDaTarefa}`] = txtTarefa
            console.log(listaDeTafefas)
        }
    }
  
   
    // Função para excluir tarefa

    // Função para editar tarefa

}