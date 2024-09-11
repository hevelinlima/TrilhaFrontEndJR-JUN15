import styled, { keyframes } from "styled-components";
import { typography } from "../../../styles/typography";

export const AboutMeContainer = styled.section`
  width: 100%;
  height: 100%;
`
export const AboutMeTitle = styled.h2`
  color: ${(props) => props.theme.aboutMeTitleColor};
  margin-bottom: 1rem;
`

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: justify;

  padding: 10rem;

  color: ${(props) => props.theme.iconColor};
  ${typography.fonts.textHero};
`

export const Stacks = styled.div`

`
const animate = keyframes`
  0% {
    left: 0%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 0%;  
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.25rem;
  border-radius: 8px;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 10rem;
    height: 0.25rem;
    position: absolute;
    background-color: #e53939;
    box-shadow: 0 0 20px 10px rgba(229, 57, 57, 0.8); 
    animation: ${animate} 17s ease-in-out infinite; 
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;