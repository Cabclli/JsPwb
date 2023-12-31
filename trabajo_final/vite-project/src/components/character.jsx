import { useEffect } from "react";
import { useEpisode } from "../hooks/useEpisode";
export function Character(props) {
  const { character, index } = props;

  const { image, name, status, species, location, origin, episode } = character;

  const { episodios } = useEpisode();

  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    }
    if (status === "Dead") {
      return "muerto";
    } else {
      return "desaparecido";
    }
  };
  const { getAllEpisodes } = useEpisode();
  const array = [];

  const episodes = () => {
    const episodes = episode;
    const casiDigitos = episodes.map((str) => {
      const number = str.slice(40);
      array.push(number);
    });

    /*const digitosEpisodes = casiDigitos.map((str) => {
      const partes = str.split("/");
      return partes.length > 1 ? partes[1] : str;
    });*/
    getAllEpisodes(array);
  };

  useEffect(() => {
    console.log(episodios);
  }, [episodios]);

  return (
    <div className="personaje" key={index}>
      <img className="img" src={image}></img>
      <div className="info">
        <div className="texto">
          <h2>{name}</h2>
          <h4>
            <span className={`status_icon ${getStatusColor(status)}`}></span>
            {status} - {species}
          </h4>
        </div>
        <div className="texto">
          <p>Last known location:</p>
          <h3>{location.name}</h3>
        </div>
        <div className="texto">
          <a>
            {" "}
            <span className="episodes" onClick={episodes}>
              episodes:
            </span>
          </a>
          <h3>{origin.name}</h3>
        </div>
      </div>
    </div>
  );
}
