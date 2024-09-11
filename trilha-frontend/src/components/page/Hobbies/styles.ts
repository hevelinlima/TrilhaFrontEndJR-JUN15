import styled, { keyframes } from "styled-components"
import { typography } from "../../../styles/typography"

export const HobbiesContainer = styled.section`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: 100vh;
  }
`
export const HobbiesTitle = styled.h2`
  color: ${(props) => props.theme.aboutMeTitleColor};
  ${typography.fonts.textHero};
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`

export const HobbiesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: justify;

  padding: 5rem;

  color: ${(props) => props.theme.iconColor};
  ${typography.fonts.textNormal};

  @media (max-width: 1000px) {
    padding: 1.5rem;
  }
`

export const MediumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5rem;
  gap: 3rem;

  span{
    max-width: 35rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-top: 1rem;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Vinyl = styled.img`
  animation: ${spin} 2s linear infinite;
`