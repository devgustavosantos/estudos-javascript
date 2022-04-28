console.log(pizzaJson)
listarPizzas()

function listarPizzas() {
    let areaDasPizzas = document.getElementById("area-das-pizzas");
    console.log(areaDasPizzas)
    areaDasPizzas.innerHTML = ""
    
    //Laço que percorre o array
    for(let cont in pizzaJson) {

        //Criando os elementos html
        let elementoPizza = {
            containerPizza: document.createElement("div"),
            containerFotoPizza: document.createElement("div"),
            fotoPizza: document.createElement("img"),
            itensPizza: document.createElement("div"),
            iconeAdicionar: document.createElement("div"),
            txtPreco: document.createElement("p"),
            txtSabor: document.createElement("h2"),
            txtDescricao: document.createElement("h3")
        }

        //Adicionando identificação para os elementos de cada pizza
        for(let chave in elementoPizza) {
            elementoPizza[chave].setAttribute("produto", `${cont}`);
        }
        
        //Adicionando evento de click ao elemento
        elementoPizza.containerPizza.addEventListener("click", detalhesPizza);
        
        elementoPizza.iconeAdicionar.setAttribute("id", `adicionar-${cont}`)
        for(let chave in elementoPizza) {
            elementoPizza[chave].addEventListener("mouseenter", iconeAdicionarNovo);
            elementoPizza[chave].addEventListener("mouseout", iconeAdicionarVelho);
        }

        //Colocando as classes CSS nos elementos
        elementoPizza.containerPizza.classList.add("container-pizza");
        elementoPizza.containerFotoPizza.classList.add("container-foto-pizza");
        elementoPizza.fotoPizza.classList.add("foto-pizza");
        elementoPizza.itensPizza.classList.add("itens-pizza");
        elementoPizza.iconeAdicionar.classList.add("icone-adicionar");

        //Colocando o conteudo nos itens
        elementoPizza.fotoPizza.setAttribute("src",`${pizzaJson[cont].img}`);
        elementoPizza.txtPreco.innerText = `R$ ${pizzaJson[cont].price}`;
        elementoPizza.txtSabor.innerText = `${pizzaJson[cont].name}`;
        elementoPizza.txtDescricao.innerText = `${pizzaJson[cont].description}`

        //Orgarnizando a hierarquia dos itens
        elementoPizza.containerPizza.appendChild(elementoPizza.containerFotoPizza);
        elementoPizza.containerPizza.appendChild(elementoPizza.itensPizza);

        elementoPizza.containerFotoPizza.appendChild(elementoPizza.fotoPizza)

        elementoPizza.itensPizza.appendChild(elementoPizza.iconeAdicionar);
        elementoPizza.itensPizza.appendChild(elementoPizza.txtPreco);
        elementoPizza.itensPizza.appendChild(elementoPizza.txtSabor);
        elementoPizza.itensPizza.appendChild(elementoPizza.txtDescricao);

        //Colocando o elemento pronto na tela
        areaDasPizzas.appendChild(elementoPizza.containerPizza);

    }
}


function detalhesPizza(evento) {

    //Função apenas para receber o evento de clique
    const itemQueAtivouOEvento = evento.target
    const idDoItemQueAtivou = itemQueAtivouOEvento.getAttribute("produto")
    
    console.log(idDoItemQueAtivou)
}

function iconeAdicionarNovo (evento) {

    //Recebendo a info de quem ativou
    const item = evento.target;

    //Pegando o numero do produto
    let numProduto = item.getAttribute("produto");

    //Pegando o botao adicionar correspondente
    let idAdicionar = document.getElementById(`adicionar-${numProduto}`);
    
    //Mudando a classe dele
    idAdicionar.classList.add("icone-adicionar-novo");

}

function iconeAdicionarVelho(evento) {

    //Recebendo a info de quem ativou
    const item = evento.target;

    //Pegando o numero do produto
    let numProduto = item.getAttribute("produto");

    //Pegando o botao adicionar correspondente
    let idAdicionar = document.getElementById(`adicionar-${numProduto}`);
    
    //Removendo a classe dele
    idAdicionar.classList.remove("icone-adicionar-novo");
}