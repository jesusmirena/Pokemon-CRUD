import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: solid 1px #ccd1d6;
  margin: 2rem 0;
  padding: 1rem 0;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  margin: 1rem 0 1.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    label {
      flex: 0 0 9rem;
      text-align: right;
      padding-right: 1rem;
      font-size: 1.2rem;
    }
    input {
      flex: 1;
      border: 1px solid #e1e1e1;
      height: 2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;
