import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100vh;
    background-size: cover;
  }
`