import React from "react";

const Table = ({ pokemons, setPokemons, searchValue }) => {
  const tableHead = pokemons[0] && Object.keys(pokemons[0]).map((key) => key);
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
                    <button>Edit</button> <button>Delete</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
