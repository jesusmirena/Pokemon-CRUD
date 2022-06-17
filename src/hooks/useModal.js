import axios from "axios";
import { useContext, useState } from "react";
import Context from "../context/ModalContext";

export const useModal = (initialMode = false) => {
  const [modal, setModal] = useState(initialMode);

  const { pokemons, setPokemons, pokemonForm, setPokemonForm } =
    useContext(Context);

  const openModal = (pokemon) => {
    setModal(true);
    if (pokemon) {
      setPokemonForm(pokemon);
    }
  };

  const closeModal = () => {
    const response = confirm("Do you want to discard your changes?");
    if (response) {
      setPokemonForm({
        name: "",
        image: "",
        type: "",
        attack: "50",
        defense: "50",
        hp: 100,
        idAuthor: 1,
      });
      setModal(false);
    }
  };

  const sendFormData = async (e) => {
    e.preventDefault();

    if (pokemonForm.id) {
      //if a pokemon has an ID it means we are editing

      const response = await axios.put(
        `https://bp-pokemons.herokuapp.com/${pokemonForm.id}`,
        { ...pokemonForm, idAuthor: 1 }
      );
      if (response.data.success === false) {
        alert("Your pokemon couldn't be updated");
        return;
      }

      const updatedPokemons = pokemons.map((pokemon) =>
        pokemon.id === pokemonForm.id ? response.data : pokemon
      );

      setPokemons(updatedPokemons);
      alert("Your pokemon has been updated");

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
      //If it doesn't have an ID it means we are creating a new pokemon
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

  return { modal, setModal, closeModal, openModal, sendFormData };
};
