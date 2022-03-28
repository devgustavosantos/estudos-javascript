// Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

for (let cont = 0; cont <= 100; cont++){
  
    if (cont % 4 == 0 && cont != 0) {
        console.log('PI')
    } else {
        console.log(cont)
    }
}