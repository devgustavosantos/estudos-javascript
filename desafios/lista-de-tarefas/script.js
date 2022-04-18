

// // Bloco para validar se é a primera utilização
// if (localStorage.length == 0) {
//     var listaDeTafefas = {
//             1: "Arrumar o quarto",
//             2: "Cozinhar",
//             3: "Codar"
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

// //Função para verificar se é a primeria utilização












mostrarTarefas();

// Função para mostrar tarefa
function mostrarTarefas(){

    //Bloco para limpar a tela antes de mostrar as tarefas
    let areaDasTarefas = document.getElementById("area-das-tarefas");
    areaDasTarefas.innerHTML = "";

    for(let cont in listaDeTafefas){
        //Criando o "quadrado" que vai receber o texto da tarefa e os icones
        let itemTarefa = document.createElement("div");
        itemTarefa.classList.add("tarefa");
        areaDasTarefas.appendChild(itemTarefa);

        //Criando o texto da tafefa
        let conteudoTarefa = document.createElement("p");
        conteudoTarefa.innerText = listaDeTafefas[cont];
        itemTarefa.appendChild(conteudoTarefa);

        //Criando os icones da tarefa
        //Icone Editar
        let fundoIconeEditar = document.createElement("span");
        fundoIconeEditar.classList.add("icone");
        itemTarefa.appendChild(fundoIconeEditar);
        
        let imagemEditar = document.createElement("img");
        imagemEditar.setAttribute("src", "icones/pencil-free-icon-font.svg");
        fundoIconeEditar.appendChild(imagemEditar);

        //Icone Excluir
        let fundoIconeExcluir = document.createElement("span");
        fundoIconeExcluir.classList.add("icone");
        itemTarefa.appendChild(fundoIconeExcluir);

        let imagemExcluir = document.createElement("img");
        imagemExcluir.setAttribute("src", "icones/trash-free-icon-font.svg");
        fundoIconeExcluir.appendChild(imagemExcluir);
    }
}

// Função para adicionar a tarefa
let botAdicionar = document.getElementById('adicionar');
botAdicionar.addEventListener('click', adicionar);

let inputAdicionar = document.getElementById("txt_tarefa");
inputAdicionar.addEventListener("keydown", function(evento) {
    if (evento.key == "Enter")
    adicionar();
})

function adicionar() {
    // Recebendo a tarefa
    let txtTarefa = document.getElementById('txt_tarefa');
    txtTarefa = txtTarefa.value;
    console.log(txtTarefa);

    // Validando se é uma tarefa repetida
    let repetida = false;
    for(let chave in listaDeTafefas) {
        if (txtTarefa.toUpperCase() == listaDeTafefas[chave].toUpperCase()) {
            alert('Essa tarefa já foi criada! Por favor digite outra.');
        repetida = true;
        } 
    } 

    // Guardando a tarefa
    if (repetida == false) {
        let chaveDaTarefa = Object.keys(listaDeTafefas).length + 1;
        listaDeTafefas[`${chaveDaTarefa}`] = txtTarefa;
        console.log(listaDeTafefas);
        mostrarTarefas();
    }
}


// Função para excluir tarefa

// Função para editar tarefa

