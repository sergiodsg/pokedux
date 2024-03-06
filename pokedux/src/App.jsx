import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "./api";
import { getPokemonsWithDetails } from "./actions";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import "./App.css";

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log("pokemons", pokemons);
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Col className="pokedux" span={8} offset={8}>
        <img src={logo} alt="logo" className="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {pokemons?.length === 0 ? (
        <Col span={8} offset={8}>
          <p>Loading...</p>{" "}
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default App;
