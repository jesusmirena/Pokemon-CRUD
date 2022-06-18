import styled, { css } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

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
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #e1e1e1;
  height: 2rem;

  ${(props) =>
    props.searchBar &&
    css`
      display: block;
      padding: 9px 4px 9px 40px;
      background: transparent
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 13px center;
    `}
`;
export const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;
