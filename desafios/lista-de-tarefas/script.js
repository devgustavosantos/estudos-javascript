let listaDeTafefas;
let vetorDasTarefas = [];
//Função para verificar se é a primeria utilização
window.addEventListener("load", tarefasSalvas);

function tarefasSalvas(){
    if (localStorage.length == 0) {
        listaDeTafefas = [];
        console.log("Primeira utilização");
      
    }else {
        console.log("Lista já criada");
        listaDeTafefas = localStorage.getItem("lista");
        listaDeTafefas = JSON.parse(listaDeTafefas);
        mostrarTarefas();
    }
}

function salvandoNaMemoria(listaParametro) {
    let listaString = JSON.stringify(listaParametro);
    localStorage.setItem("lista", listaString);
}

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
        fundoIconeEditar.classList.add("imagem-icone");
        fundoIconeEditar.classList.add("imagem-icone-lapis");
        itemTarefa.appendChild(fundoIconeEditar);
       
        //Icone Excluir
        let fundoIconeExcluir = document.createElement("span");
        fundoIconeExcluir.classList.add("icone");
        fundoIconeExcluir.classList.add("imagem-icone");
        fundoIconeExcluir.classList.add("imagem-icone-lixo");
        itemTarefa.appendChild(fundoIconeExcluir);

        // fundoIconeExcluir.setAttribute("onclick", "excluirTarefa()")
        adicionarID();
    }
    itensDaTelaNoArray();
}

// Função para adicionar a tarefa
let botAdicionar = document.getElementById('adicionar');
botAdicionar.addEventListener('click', adicionar);

let inputAdicionar = document.getElementById("txt_tarefa");
inputAdicionar.addEventListener("keydown", function(evento) {
    if (evento.key == "Enter"){
        adicionar();
    }
});

function adicionar() {
    // Recebendo a tarefa
    let txtTarefa = document.getElementById('txt_tarefa');
    txtTarefa = txtTarefa.value;
    console.log(txtTarefa);

    //Validando se a tarefa está vazia
    let vazia = false;
    if (txtTarefa.length == 0) {
        alert('A tarefa está vazia! Por favor verifique e digite novamente.');
        vazia = true;
    }

    // Validando se é uma tarefa repetida
    let repetida = false;
    for(let cont in listaDeTafefas) {
        if (txtTarefa.toUpperCase() == listaDeTafefas[cont].toUpperCase()) {
            alert('Essa tarefa já foi criada! Por favor digite outra.');
            repetida = true;
        } 
    } 

    // Guardando a tarefa no array
    if (repetida == false && vazia == false) {
        listaDeTafefas.push(txtTarefa)
        console.log(listaDeTafefas);
        salvandoNaMemoria(listaDeTafefas);
        mostrarTarefas();
        
    }
}

// Função para adicionar ID aos botões
function adicionarID(){
    //Loop para acessar os itens que estão aparecendo na tela e colocar id em cada um
    let arrayDasTarefas =  document.getElementById("area-das-tarefas").children;
    
    for(let cont in arrayDasTarefas) {
        //Condição para não modificar itens indesejados do array
        if(cont < arrayDasTarefas.length){
            let tempBotao = arrayDasTarefas[cont];
            //Colocando os ids nos botões
            tempBotao.children[1].setAttribute("id", `editar-${(parseInt(cont))}`);
            tempBotao.children[2].setAttribute("id", `excluir-${(parseInt(cont))}`);
        }
    }
}

//Função para colocar os itens na tela num array e adicionar o evento para e excluir
function itensDaTelaNoArray() {
    vetorDasTarefas = [];
    let arrayDasTarefas =  document.getElementById("area-das-tarefas").children;
    for (let cont in arrayDasTarefas) {
        let itemAntesDoArray = arrayDasTarefas[cont]
        
        //Condição para não modificar itens indesejados do array
        if(cont < arrayDasTarefas.length){
            console.log(itemAntesDoArray.children[2]);
            vetorDasTarefas.push(itemAntesDoArray.children[2]);
        }
    }

    for(let cont in vetorDasTarefas) {
        vetorDasTarefas[cont].addEventListener("click", excluirTarefa);
    }

}

// Função para excluir tarefa
function excluirTarefa(evento) {
    let idDoItemQueAtivou = evento.target.id;
    idDoItemQueAtivou = parseInt(idDoItemQueAtivou.slice(8));
    let exclusaoConfirmada = confirm(`Tem certeza que desaja excluir a tarefa ${listaDeTafefas[idDoItemQueAtivou]}`);
    if (exclusaoConfirmada) {
        listaDeTafefas.splice(idDoItemQueAtivou, 1);
        mostrarTarefas();
    }
}








/* 


criar um laço para
	colocar os itens no array
	adiconar o evento a eles

criar a funcão de excluir
	pegar o id
	excluir o começo do id
	ir no objeto e apagar o item associado a ele
	mostrar as tarefas na tela


*/