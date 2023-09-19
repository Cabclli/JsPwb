import { useEffect, useState } from "react";

export function Characters() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results));
  }, []);
  return (
    <>
      {character.map((item, index) => (
        <div className="agarrador" key={index}>
          <article className="gris">
            <div className="imagen">
              <img src={item.image}></img>
            </div>
            <div className="personajes">
              <a> {item.name} </a>

              <p key={index}>
                {item.status} - {item.species}
              </p>
              <h3>Last known location:</h3>
              <a href=""> {item.status} </a>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}
