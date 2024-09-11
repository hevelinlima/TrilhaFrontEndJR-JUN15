import styled from "styled-components";

interface ToggleProps {
  isDarkTheme: boolean;
}

export const Toggle = styled.button<ToggleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.isDarkTheme ? '#d0d0d0' : '#333'};
    transition: background 0.3s;
  }

  svg {
    color: ${(props) => props.theme.borderColor};
  }
`