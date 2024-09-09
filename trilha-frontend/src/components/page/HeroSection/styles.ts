import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  @media (max-width: 768px) {
    height: 100vh;
    background-size: cover;
  }
`

export const Content = styled.div`
  max-width: 62rem;
  width: auto;
  height: 25rem;
  background: ${(props) => props.theme.background};
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.6);

  padding: 10rem;
  border-radius: 8px;

  ${typography.fonts.textHero};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`