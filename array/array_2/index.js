
function sumarPares(par) {
    let pares=[]
    for (i = 0 ; i <par; i++){

        if (i % 2 === 0 ){

            pares = pares +" "+ i 
        
        }

    };
    console.log(pares)
}


sumarPares(10);