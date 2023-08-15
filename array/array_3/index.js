// PRIMERA OPCION
const palabras = ['cssa', 'piedra', 'silla'];
let tipo = true;
let hayA = true;

function todasTerminanEnAs(arrayDePalabras) {


  for (let palabra of arrayDePalabras) {
    if (!palabra.endsWith('a')) {
      tipo = false;    
    }
    else if (!palabra.endsWith('A')){
      hayA = false;
    }
  }
  console.log(tipo)
  console.log(hayA)

}


todasTerminanEnAs(palabras);





