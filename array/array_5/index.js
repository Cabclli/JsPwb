const vuelta = [1,2,3,-5,-15]

function cambio(num) {
    let numeros = []
     

    for (let i = 0 ; i < num.length; i++){

        const numero = Math.abs(num[i])
        
        numeros.push(numero)

        

    };
    console.log(numeros)
}
cambio(vuelta)
