const items = [
  {
    id: 1,
    title: "el diegoo",
    imageSrc: "maradona.jpeg",
    description: "uno que juega poco",
  },
  {
    id: 2,
    title: "el batista",
    imageSrc:
      "https://onnix.com.ar/wp-content/uploads/2020/09/contratar-a-sergio-batista-onnix-entretenimientos-2.jpg",
    description: "otro que juega poco",
  },
  {
    id: 3,
    title: "el burruchaga",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Burruchaga_gritando_gol_de_argentina.JPG",
    description: "uno que sabe",
  },
  {
    id: 4,
    title: "el wanchopè",
    imageSrc:
      "https://media.lacapital.com.ar/p/58f854d21b53ce5b7829c606017876d0/adjuntos/204/imagenes/030/881/0030881313/642x0/smart/wanchopejpg.png",
    description: "un gordito",
  },
  {
    id: 5,
    title: "el lukaku",
    imageSrc:
      "https://img.a.transfermarkt.technology/portrait/big/96341-1661780981.jpg?lm=1",
    description: "uno que es de color",
  },
  {
    id: 6,
    title: "kessie",
    imageSrc:
      "https://phantom-marca.unidadeditorial.es/97e0b84c411eeaf890a6dbe4f8e18b15/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/10/16916816666063.jpg",
    description: "otro de color",
  },
];

function generateItemsHTML() {
  const itemsContainer = document.querySelector(".carteles ul");

  items.forEach((item) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    h2.textContent = item.title;
    img.src = item.imageSrc;
    img.alt = item.title;
    h3.textContent = item.description;

    button.appendChild(h2);
    button.appendChild(img);
    button.appendChild(h3);

    li.appendChild(button);
    itemsContainer.appendChild(li);
  });
}

function onload() {
  generateItemsHTML();
}
