import React, { useState } from "react";

const Context = React.createContext({});

export function ModalContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonForm, setPokemonForm] = useState({
    name: "",
    image: "",
    type: "",
    attack: "50",
    defense: "50",
    hp: 100,
    idAuthor: 1,
  });

  return (
    <>
      <Context.Provider
        value={{
          pokemons,
          setPokemons,
          pokemonForm,
          setPokemonForm,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export default Context;
