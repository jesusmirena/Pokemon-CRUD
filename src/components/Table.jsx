import React from "react";
import axios from "axios";

const Table = ({
  pokemons,
  setPokemons,
  searchValue,
  setModal,
  pokemonForm,
  setPokemonForm,
}) => {
  const tableHead = pokemons[0] && Object.keys(pokemons[0]).map((key) => key);

  const handleEdit = (pokemon) => {
    setModal(true);
    setPokemonForm(pokemon);
  };

  const handleDelete = (id) => {
    const response = confirm("Do you want to delete this pokemon?");
    if (response) {
      const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
      axios.delete("https://bp-pokemons.herokuapp.com/" + id);
      setPokemons(updatedPokemons);
    }
  };
  return (
    <div>
      <h1>TABLA</h1>
      <table>
        <thead>
          <tr>
            {tableHead && tableHead.map((key) => <th key={key}>{key}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pokemons &&
            pokemons
              .filter((pokemon) =>
                pokemon.name
                  .toLowerCase()
                  .includes(searchValue.trim().toLowerCase())
              )
              .map((pokemon) => (
                <tr key={pokemon.id}>
                  {Object.values(pokemon).map((val, index) => (
                    <td key={index}>{val}</td>
                  ))}
                  <td>
                    <button onClick={() => handleEdit(pokemon)}>Edit</button>
                    <button onClick={() => handleDelete(pokemon.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
