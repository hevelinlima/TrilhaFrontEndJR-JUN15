import { Header } from "../Header";
import { Avatar, Contacts, Content, HeroContainer, HeroText} from "./styles";
import { useTranslation } from "react-i18next";

import avatarImage from '../../../../src/assets/avatar-image.png'
import githubIcon from '../../../../src/assets/github.svg'
import linkedinIcon from '../../../../src/assets/linkedin.svg'

interface HeroProps {
  isDarkTheme: boolean 
  toggleTheme: () => void
  id?: string
}

export function HeroSection({isDarkTheme, toggleTheme, id}: HeroProps) {
  
  const { t } = useTranslation("global")

  return(
    <HeroContainer id={id}>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Content>
        <Avatar>
          <img src={ avatarImage } alt="" />
        </Avatar>
        <HeroText>Hévelin Lima 
          <br /> 
          <span>{t("heroContent")}</span>.
        </HeroText>
        <Contacts>
          <a href="https://github.com/hevelinlima">
            <img src={ githubIcon } alt="" />
          </a>
          <a href="https://www.linkedin.com/in/hevelin-lima/">
            <img src={ linkedinIcon } alt="" />
          </a>
        </Contacts>
      </Content>
    </HeroContainer>
  )
}