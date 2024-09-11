import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/defaultThemes";
import { GlobalStyles } from "./styles/global";
import { HeroSection } from "./components/page/HeroSection";
import { AboutMe } from "./components/page/AboutMe";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <GlobalStyles />
    
    <HeroSection id="hero" isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    <AboutMe id="about-me" />
   </ThemeProvider>
  )
}

