import { Header } from "../Header";
import { Content, HeroContainer } from "./styles";


interface HeroProps {
  isDarkTheme: boolean 
  toggleTheme: () => void
}

export function HeroSection({isDarkTheme, toggleTheme}: HeroProps) {
  return(
    <HeroContainer>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Content>
        Hévelin Lima
      </Content>
    </HeroContainer>
  )
}