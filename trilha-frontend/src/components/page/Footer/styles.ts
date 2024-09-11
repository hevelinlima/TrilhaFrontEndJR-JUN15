import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

`

export const FooterContent = styled.p`
  color: ${(props) => props.theme.aboutMeTitleColor};
  ${typography.fonts.textNav};
  font-size: 0.85rem;
`