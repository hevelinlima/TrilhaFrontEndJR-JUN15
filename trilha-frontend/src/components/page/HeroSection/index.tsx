import { Header } from "../Header";
import { HeroContainer } from "./styles";


interface HeroProps {
  isDarkTheme: boolean 
  toggleTheme: () => void
}

export function HeroSection({isDarkTheme, toggleTheme}: HeroProps) {
  return(
    <HeroContainer>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </HeroContainer>
  )
}