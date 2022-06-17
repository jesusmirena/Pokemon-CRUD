import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

import Context from "./context/ModalContext";
import { useModal } from "./hooks/useModal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { pokemons, setPokemons, pokemonForm, setPokemonForm } =
    useContext(Context);

  const { modal, openModal, closeModal, sendFormData } = useModal();

  const getPokemons = async () => {
    const response = await axios.get(
      "https://bp-pokemons.herokuapp.com/?idAuthor=1"
    );
    setPokemons(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getPokemons();
  }, []);

  return (
    <div className="App">
      <h1>hola</h1>
      {!isLoading ? (
        <>
          <div>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <button onClick={() => openModal()}>New +</button>
          </div>

          {modal && (
            <Form
              closeModal={closeModal}
              pokemonForm={pokemonForm}
              setPokemonForm={setPokemonForm}
              sendFormData={sendFormData}
            />
          )}
          <Table
            pokemons={pokemons}
            setPokemons={setPokemons}
            searchValue={searchValue}
            openModal={openModal}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
