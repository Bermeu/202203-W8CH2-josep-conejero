const PokemonSSR = ({ results }) => {
  return (
    <>
      <p>Pokemon SSR</p>
      {results.map((pokemon) => (
        <h2 key={pokemon.name}>{pokemon.name} </h2>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  /* export async function getServerSideProps() { */
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  );
  const { results } = await res.json();

  return { props: { results } };
};

export default PokemonSSR;

/* export async function getStaticPaths() {
  return {
    paths: [{ params: {} }],
    fallback: true, // false or 'blocking'
  };
} */
