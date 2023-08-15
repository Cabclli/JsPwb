const vuelta = [1,2,3,-5,-15]

function cambio(num) {
    numeros = []
     

    for (let i = 0 ; i < num.length; i++){

        numero = Math.abs(num[i])
        
        numeros.push(numero)

        

    };
    console.log(numeros)
}

console.log(vuelta)