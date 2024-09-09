import styled from "styled-components";

export const HeaderContainer = styled.div``

export const SelectButton = styled.select`
  width: 4rem;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  background: transparent;
  color: ${(props) => props.theme.color};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover{
    color: ${(props) => props.theme.color};
    border: 2px solid ${(props)=> props.theme.borderColor};
    cursor: pointer;
  }

  &:focus {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`