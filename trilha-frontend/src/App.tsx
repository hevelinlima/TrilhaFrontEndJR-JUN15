import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/defaultThemes";
import { GlobalStyles } from "./styles/global";
import { HeroSection } from "./components/page/HeroSection";
import { AboutMe } from "./components/page/AboutMe";
import { Hobbies } from "./components/page/Hobbies";
import { Motivation } from "./components/page/Motivation";
import { Footer } from "./components/page/Footer";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <GlobalStyles />
    
    <HeroSection id="hero" isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    <AboutMe id="about-me" />
    <Hobbies id="hobbies" />
    <Motivation id="motivation" />
    <Footer />
   </ThemeProvider>
  )
}

