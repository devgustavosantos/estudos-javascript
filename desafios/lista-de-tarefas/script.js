let listaDeTafefas;
let botoesDeExcluir = [];
let botoesDeEditar = [];
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

    }
    adicionarID();
    itensDaTelaNoArray();
}

// Função para adicionar a tarefa
let botAdicionar = document.getElementById('adicionar');
botAdicionar.addEventListener('click', adicionar);

let inputAdicionar = document.getElementById("txt_tarefa");
inputAdicionar.addEventListener("keydown", function(evento) {
    if(evento.key == "Enter") {
        adicionar();
    }
});

function adicionar() {
    // Recebendo a tarefa
    let elementoTarefa = document.getElementById('txt_tarefa');
    let txtTarefa = elementoTarefa.value
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
        elementoTarefa.value = ""
        listaDeTafefas.push(txtTarefa);
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

//Função para colocar os botões de edita e exluir em arrays e adicionar eventos a eles
function itensDaTelaNoArray() {
    let arrayDasTarefas =  document.getElementById("area-das-tarefas").children;
    for (let cont in arrayDasTarefas) {
        let itemAntesDoArray = arrayDasTarefas[cont];
        
        //Condição para não modificar itens indesejados do array
        if(cont < arrayDasTarefas.length){
            console.log(itemAntesDoArray.children[2]);
            botoesDeExcluir.push(itemAntesDoArray.children[2]);
            botoesDeEditar.push(itemAntesDoArray.children[1]);
        }
    }

    for(let cont in botoesDeExcluir) {
        botoesDeExcluir[cont].addEventListener("click", excluirTarefa);
    }

    for(let cont in botoesDeEditar) {
        botoesDeEditar[cont].addEventListener("click", editarTarefa);
    }
}

// Função para excluir tarefa
function excluirTarefa(evento) {
    let idDoItemQueAtivou = evento.target.id;
    idDoItemQueAtivou = parseInt(idDoItemQueAtivou.slice(8));
    let exclusaoConfirmada = confirm(`Tem certeza que desaja excluir a tarefa "${listaDeTafefas[idDoItemQueAtivou]}"`);

    if (exclusaoConfirmada) {
        listaDeTafefas.splice(idDoItemQueAtivou, 1);
    }
    
    salvandoNaMemoria(listaDeTafefas);
    mostrarTarefas();
}

// Função para excluir tarefa
function editarTarefa(evento) {
    let idDoItemQueAtivou = evento.target.id;
    idDoItemQueAtivou = parseInt(idDoItemQueAtivou.slice(7));
    let novoValorDaTarefa = prompt("EDITAR TAREFA: Digite agora qual será o novo nome dessa tarefa");
    
    while (novoValorDaTarefa.length == 0) {
        novoValorDaTarefa = prompt("ERRO! Nada foi digitado. Por favor digite agora qual será o novo nome dessa tarefa");
    }
    
    listaDeTafefas[idDoItemQueAtivou] = novoValorDaTarefa;
    salvandoNaMemoria(listaDeTafefas);
    mostrarTarefas();

    console.log(evento.target.id);
    console.log(idDoItemQueAtivou);
}
