console.log(pizzaJson)
listarPizzas()

function listarPizzas() {
    let areaDasPizzas = document.getElementById("area-das-pizzas");
    console.log(areaDasPizzas)
    areaDasPizzas.innerHTML = ""
    
    //Laço que percorre o array
    for(let cont in pizzaJson) {
        //Criando os elementos html
        let containerPizza = document.createElement("div");
        let fotoPizza = document.createElement("div");
        let itensPizza = document.createElement("div");
        let iconeAdicionar = document.createElement("div");
        let txtPreco = document.createElement("p");
        let txtSabor = document.createElement("h2");
        let txtDescricao = document.createElement("h3");

        //Colocando as classes CSS nos elementos
        containerPizza.classList.add("container-pizza");
        fotoPizza.classList.add("foto-pizza");
        itensPizza.classList.add("itens-pizza");
        iconeAdicionar.classList.add("icone-adicionar");

        //Colocando o conteudo nos itens
        fotoPizza.style.backgroundImage = `url(${pizzaJson[cont].img})`
        txtPreco.innerText = `R$ ${pizzaJson[cont].price}`;
        txtSabor.innerText = `${pizzaJson[cont].name}`;
        txtDescricao.innerText = `${pizzaJson[cont].description}`

        //Orgarnizando a hierarquia dos itens
        containerPizza.appendChild(fotoPizza);
        containerPizza.appendChild(itensPizza);
        itensPizza.appendChild(iconeAdicionar);
        itensPizza.appendChild(txtPreco);
        itensPizza.appendChild(txtSabor);
        itensPizza.appendChild(txtDescricao);

        //Colocando o elemento pronto na tela
        areaDasPizzas.appendChild(containerPizza);

    }
}