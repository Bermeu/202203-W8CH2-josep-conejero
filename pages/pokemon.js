import Image from "next/image";
import react from "react";
import { React, useState } from "react";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  react.useEffect(async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const { results } = await response.json();

    const pokemonList = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const { name, sprites } = await response.json();
      return { name, sprites };
    });

    setPokemonList(await Promise.all(pokemonList));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Pokemon</h2>
      <ul className="lista">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
