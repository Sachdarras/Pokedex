import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import PokemonCard from "./composants/PokemonCard";
import NavBar from "./composants/NavBar";
const pokemonList = [
  {
    name: "bulbasaur",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",

    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const nextPokemon = () => {
    setPokemonIndex((nextIndex) =>
      nextIndex < pokemonList.length - 1 ? nextIndex + 1 : 0
    );
  };

  const prevPokemon = () => {
    setPokemonIndex((prevIndex) =>
      prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;
