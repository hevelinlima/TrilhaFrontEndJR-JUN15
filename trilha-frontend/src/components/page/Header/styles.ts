import styled from "styled-components";

export const HeaderContainer = styled.div``

export const FirstItem = styled.div`
  a{
    color: ${(props)=> props.theme.color};
     
    &:hover{
      color: ${(props)=> props.theme.color};
    }  
  }
`

export const OtherItems = styled.div`
  display: flex;
  gap: 2rem;
  a{
    color: ${(props)=> props.theme.color};

    &:hover{
      color: ${(props)=> props.theme.color};
      border-bottom: 3px solid ${(props)=>props.theme.borderColor};
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
    &.open{
      display: block;

      position: absolute;
      width: 100%;
      height: calc(100vh - 9rem);
      padding: 2rem 7.5rem;
      top: 4rem;
      right: 0;
      background-color: ${(props)=>props.theme.background};
    }
    & > * {
      margin-bottom: 1.5rem; 
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
`

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