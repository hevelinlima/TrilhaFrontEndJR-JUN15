import { Header } from "../Header";
import { Avatar, Content, HeroContainer, HeroText} from "./styles";
import avatarImage from '../../../../src/assets/avatar-image.png'
import { useTranslation } from "react-i18next";


interface HeroProps {
  isDarkTheme: boolean 
  toggleTheme: () => void
}

export function HeroSection({isDarkTheme, toggleTheme}: HeroProps) {
  
  const { t } = useTranslation("global")

  return(
    <HeroContainer>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Content>
        <Avatar>
          <img src={ avatarImage } alt="" />
        </Avatar>
        <HeroText>Hévelin Lima 
          <br /> 
          <span>{t("heroContent")}</span>.
        </HeroText>
      </Content>
    </HeroContainer>
  )
}