const Form = ({ pokemonForm, setPokemonForm, closeModal, sendFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPokemonForm({
      ...pokemonForm,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => sendFormData(e)}>
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
      <button onClick={() => closeModal()}>X Cancel</button>
    </div>
  );
};

export default Form;
