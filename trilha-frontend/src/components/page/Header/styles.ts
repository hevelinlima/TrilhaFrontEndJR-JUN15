import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const HeaderContainer = styled.div`
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  padding: 0 10rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  
  ul{
    display: flex;
    align-items: last baseline;
    justify-content: space-between;
    list-style-type: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 3rem;    
  }
`

export const FirstItem = styled.div`
  ${typography.fonts.titleNav}
  a{
    color: #ffffff;
     
    &:hover{
      color: ${(props)=> props.theme.color};
    }  
  }
`

export const OtherItems = styled.div`
  display: flex;
  gap: 2rem;
  a{
    ${typography.fonts.textNav}
    color: #ffffff;

    &:hover{
      color: ${(props)=> props.theme.color};
      border-bottom: 3px solid ${(props)=>props.theme.borderColor};
      transition: all 0.2s ease-out;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
    &.open{
      display: block;

      position: absolute;
      width: 100%;
      height: 100vh;
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
  height: 2.5rem;
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

export const ToggleButton = styled.button`
  display: none;
  background: transparent;
  border: none;

  svg{
    fill: ${(props)=> props.theme.borderColor};
  }

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`