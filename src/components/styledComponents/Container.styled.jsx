import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.general &&
    css`
      width: 90%;
      max-width: 80rem;
      margin: 0 auto;
    `}

  ${(props) =>
    props.table &&
    css`
      overflow-x: auto;
      margin: 1.2rem 0;
      max-height: 20rem;
      border: 1px solid #c6d2d9;
    `}

  ${(props) =>
    props.spaceBetween &&
    css`
      display: flex;
      justify-content: space-between;
    `}
  ${(props) =>
    props.actions &&
    css`
      display: flex;
      justify-content: space-evenly;

      svg {
        width: 2.5rem;
        height: 1.5rem;
        color: #6658f6;
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.column &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;
export default Container;
