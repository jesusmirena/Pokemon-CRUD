import axios from "axios";
import Container from "./styledComponents/Container.styled";
import StyledTable from "./styledComponents/Table.styled";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Table = ({ pokemons, setPokemons, searchValue, openModal }) => {
  const formatedTable = pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      type: pokemon.type,
      attack: pokemon.attack,
      defense: pokemon.defense,
    };
  });

  const tableHead =
    formatedTable[0] && Object.keys(formatedTable[0]).map((key) => key);

  const handleDelete = (id) => {
    const response = confirm("Do you want to delete this pokemon?");
    if (response) {
      const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
      axios.delete("https://bp-pokemons.herokuapp.com/" + id);
      setPokemons(updatedPokemons);
    }
  };
  return (
    <Container table>
      <StyledTable>
        <thead>
          <tr>
            {tableHead && tableHead.map((key) => <th key={key}>{key}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formatedTable &&
            formatedTable
              .filter((pokemon) =>
                pokemon.name
                  .toLowerCase()
                  .includes(searchValue.trim().toLowerCase())
              )
              .map((pokemon) => (
                <tr key={pokemon.id}>
                  {Object.values(pokemon).map((val, index) => (
                    <td key={index}>
                      {val == pokemon.image ? (
                        <img
                          style={{ width: 80 + "px", height: 80 + "px" }}
                          src={pokemon.image}
                          alt={pokemon.name}
                        />
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                  <td>
                    <Container actions>
                      <AiOutlineEdit onClick={() => openModal(pokemon)} />

                      <RiDeleteBin2Fill
                        onClick={() => handleDelete(pokemon.id)}
                      />
                    </Container>
                  </td>
                </tr>
              ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
