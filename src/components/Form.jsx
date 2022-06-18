import { StyledButton } from "./styledComponents/Button.styled";
import {
  StyledForm,
  FormGroup,
  InputContainer,
  ButtonsContainer,
  StyledInput,
} from "./styledComponents/Form.styled";

import { MdCancel } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";

const Form = ({ pokemonForm, setPokemonForm, closeModal, sendFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPokemonForm({
      ...pokemonForm,
      [name]: value,
    });
  };

  return (
    <>
      <StyledForm onSubmit={(e) => sendFormData(e)}>
        <legend>New Pokemon</legend>

        <FormGroup>
          <InputContainer>
            <div>
              <label htmlFor="name">Name:</label>
              <StyledInput
                type="text"
                name="name"
                placeholder="name"
                required
                value={pokemonForm.name}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <label htmlFor="image">Image:</label>
              <StyledInput
                type="text"
                name="image"
                placeholder="url"
                required
                value={pokemonForm.image}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <label htmlFor="type">Type:</label>
              <StyledInput
                type="text"
                name="type"
                placeholder="type"
                required
                value={pokemonForm.type}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </InputContainer>

          <InputContainer>
            <label htmlFor="attack">
              Attack: 0
              <StyledInput
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
              <StyledInput
                value={pokemonForm.defense}
                onChange={(e) => handleChange(e)}
                type="range"
                min={0}
                max={100}
                name="defense"
              />
              100
            </label>
          </InputContainer>
        </FormGroup>

        <ButtonsContainer>
          <StyledButton type="submit">
            <AiTwotoneSave /> Save
          </StyledButton>
          <StyledButton onClick={() => closeModal()}>
            <MdCancel /> Cancel
          </StyledButton>
        </ButtonsContainer>
      </StyledForm>
    </>
  );
};

export default Form;
