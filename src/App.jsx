import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [pokemonForm, setPokemonForm] = useState({
    name: "",
    image: "",
    type: "",
    attack: "50",
    defense: "50",
    hp: 100,
    idAuthor: 1,
  });

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
            <button onClick={() => setModal(true)}>New +</button>
          </div>

          {modal && (
            <Form
              pokemons={pokemons}
              setPokemons={setPokemons}
              setModal={setModal}
              pokemonForm={pokemonForm}
              setPokemonForm={setPokemonForm}
            />
          )}
          <Table
            pokemons={pokemons}
            setPokemons={setPokemons}
            setModal={setModal}
            pokemonForm={pokemonForm}
            setPokemonForm={setPokemonForm}
            searchValue={searchValue}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
