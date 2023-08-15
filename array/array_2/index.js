let pares=[1,3,2,4]

function sumarPares(par) {
    let numbPares = 0

    for (let i = 0 ; i < par.length; i++){

        if (par[i] % 2 === 0 ){


            numbPares = numbPares + par[i]         
        }

    };
    console.log(numbPares)
}


sumarPares(pares);