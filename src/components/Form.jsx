import axios from "axios";
import React, { useState } from "react";

const Form = ({
  pokemons,
  setPokemons,
  setModal,
  pokemonForm,
  setPokemonForm,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPokemonForm({
      ...pokemonForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pokemonForm.id) {
      const response = await axios.put(
        `https://bp-pokemons.herokuapp.com/${pokemonForm.id}`,
        { ...pokemonForm, idAuthor: 1 }
      );
      console.log(response);

      if (response.data.success === false) {
        alert("Your pokemon couldn't be updated");
        return;
      }
      const updatedPokemons = pokemons.map((pokemon) =>
        pokemon.id === pokemonForm.id ? response.data : pokemon
      );
      setPokemons(updatedPokemons);
      setPokemonForm({
        name: "",
        image: "",
        type: "",
        attack: "50",
        defense: "50",
        hp: 100,
        idAuthor: 1,
      });
    } else {
      const response = await axios.post(
        "https://bp-pokemons.herokuapp.com/?idAuthor=1",
        pokemonForm
      );

      setPokemons([...pokemons, response.data]);

      setPokemonForm({
        name: "",
        image: "",
        type: "",
        attack: "50",
        defense: "50",
        hp: 100,
        idAuthor: 1,
      });
      alert("Your pokemon has been created successfully :)");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>New Pokemon</legend>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          value={pokemonForm.name}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          placeholder="url"
          required
          value={pokemonForm.image}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          placeholder="type"
          required
          value={pokemonForm.type}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="attack">
          Attack: 0
          <input
            value={pokemonForm.attack}
            onChange={(e) => handleChange(e)}
            type="range"
            min={0}
            max={100}
            name="attack"
          />
          100
        </label>

        <label htmlFor="defense">
          Defense: 0
          <input
            value={pokemonForm.defense}
            onChange={(e) => handleChange(e)}
            type="range"
            min={0}
            max={100}
            name="defense"
          />
          100
        </label>

        <input type="submit" />
      </form>
      <button onClick={() => setModal(false)}>X Cancel</button>
    </div>
  );
};

export default Form;
