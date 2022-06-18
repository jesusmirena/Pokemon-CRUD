import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Container from "./components/styledComponents/Container.styled";
import { StyledButton } from "./components/styledComponents/Button.styled";

import Context from "./context/ModalContext";
import { useModal } from "./hooks/useModal";

import { AiOutlinePlus } from "react-icons/ai";

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
      {!isLoading ? (
        <Container general>
          <p>Pokemon List</p>
          <Container spaceBetween>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <StyledButton onClick={() => openModal()}>
              <AiOutlinePlus /> New
            </StyledButton>
          </Container>

          <Table
            pokemons={pokemons}
            setPokemons={setPokemons}
            searchValue={searchValue}
            openModal={openModal}
          />

          {modal && (
            <Form
              closeModal={closeModal}
              pokemonForm={pokemonForm}
              setPokemonForm={setPokemonForm}
              sendFormData={sendFormData}
            />
          )}
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
