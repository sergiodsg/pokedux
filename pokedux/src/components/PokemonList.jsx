import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">{pokemons.map((pokemon, index) => {
      return <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.sprites.front_default} />
    })}</div>
  )
}

// PokemonList.defaultProps = {
//   pokemons: Array(10).fill(""),
// };