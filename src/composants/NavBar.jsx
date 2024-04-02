import React from "react";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name === "pikachu") {
              alert("Pika Pikachu!!!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
