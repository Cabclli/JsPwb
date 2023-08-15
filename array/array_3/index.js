const palabras = ['csss', 'piedrs', 'sillA'];
let tipo = false

function todasTerminanEnA(arrayDePalabras) {


  for (let palabra of arrayDePalabras) {
    if (palabra[palabra.length - 1] === 'a' || palabra[palabra.length - 1] === "A") {
      tipo = true    
    }
  }
  console.log(tipo)
}


todasTerminanEnA(palabras); 




