//pregunta si el indice donde se encuentra es mayo que el indice donde esta parado pepito
let words = ["loa", "las", "naso", "pepito"];

let word = "pepito";

function buscaPalabras(words, word) {
  const indicePalabra = words.indexOf(word);
  let palabras = [];
  for (let word of words) {
    if (word.length > indicePalabra) {
      palabras.push(word);
    }
  }

  console.log(palabras);
}

buscaPalabras(words, word);
