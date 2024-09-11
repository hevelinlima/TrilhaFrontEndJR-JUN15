import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url('background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;


  @media (max-width: 768px) {
    background-size: cover;
  }
`

export const Content = styled.div`
  max-width: 100%;
  width: 35rem;
  height: 25rem;
  background: transparent;
  color: #000;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.6);

  padding: 3rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  ${typography.fonts.textHero};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  @media (max-width: 768px) {
    max-width: 80%;
  }

`

export const HeroText = styled.p`
  position: relative;
  z-index: 5;
  color: #fff;

  span{
    color: #000;
  }
`

export const Avatar = styled.div`
  display: inline-block;
  width: 7rem;
  height: 7rem;
  overflow: hidden;

  img{  
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Contacts = styled.div`
  height: 2rem;
  display: flex;
  gap: 1rem;

  a{
    height: inherit;
    img {
    height: inherit;
    transition: transform 0.3s ease, filter 0.3s ease; 

    &:hover {
      cursor: pointer;
      transform: scale(1.1); 
      filter: brightness(1.2) blur(1px); 
    }
  }
  }
` 