function createObject(name, subs) {
  let hash = name.length * subs;

  const persona = {
    name,

    subs,

    hash,

    getStatus: function () {
      const frase = ` El canal de ${name} tiene ${hash} suscriptores.`;
      return frase;
    },
  };

  return persona;
}
// me lo crea
let persona = createObject("facu", 10);

//veo el contenido
console.log(persona.getStatus());
