const PokemonSSG = ({ results }) => {
  return (
    <>
      <p>Pokemon SSG</p>
      {results.map((pokemon) => (
        <h2 key={pokemon.name}>{pokemon.name} </h2>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  );
  const { results } = await res.json();

  return { props: { results } };
};

/* export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
} */

export default PokemonSSG;
