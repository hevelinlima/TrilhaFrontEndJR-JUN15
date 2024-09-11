import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const MotivationContainer = styled.div`
  margin: 3rem 1rem;
`

export const MotivationCard = styled.section`
  width: 100%;
  height: 100%;
  max-width: 50rem; 
  margin: 1.5rem auto; 
  padding: 1.5rem; 
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); 
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin: 0.5rem auto; 
  }
`
export const MotivationTitle = styled.h2`
  color: ${(props) => props.theme.aboutMeTitleColor};
  ${typography.fonts.textHero};
  margin: 1rem 0;
`

export const MotivationContent = styled.div`
  text-align: center; 
  color: ${(props) => props.theme.color}; 
  ${typography.fonts.textBody}

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`