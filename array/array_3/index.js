// PRIMERA OPCION
const palabras = ['csss', 'piedrs', 'silla'];
let tipo = false

function todasTerminanEnA(arrayDePalabras) {


  for (let palabra of arrayDePalabras) {
    if (palabra[palabra.length - 1] === 'a' || palabra[palabra.length - 1] === "A") {
      tipo = true    
    }
  }
  console.log(tipo + " " + "PRIMERA OPCION SIN ENDSwHITH" )
}


todasTerminanEnA(palabras); 

// SEGUNDA OPCION


function todasTerminanEnA(arrayDePalabras) {


  for (let palabra of arrayDePalabras) {
    if (palabra.endsWith('A') || palabra.endsWith('a')) {
      tipo = true    
    }
  }
  console.log(tipo + ""+"SEGUNDA OPCION")
}


todasTerminanEnA(palabras);





