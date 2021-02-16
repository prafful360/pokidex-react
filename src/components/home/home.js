import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res.data.results);
      const pokemon = res.data.results;
      setPokemon(pokemon);
      console.log("pokemon", pokemon);
    });
  }, []);
  return (
    <>
      <div className="container">
        {pokemon.map((pokemon, i) => (
          <div className="card" key={i}>
            {pokemon.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
