import Image from "next/image";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const smallPokemonList = await response.json();

      const pokemonsAllpromise = Promise.all(
        smallPokemonList.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const bigPokemonList = await pokemonsAllpromise;

      setPokemonList(bigPokemonList);
    })();
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
