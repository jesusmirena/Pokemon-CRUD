import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Form />
          <Table
            pokemons={pokemons}
            setPokemons={setPokemons}
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
