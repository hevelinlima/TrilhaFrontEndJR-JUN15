import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/defaultThemes";
import { GlobalStyles } from "./styles/global";
import { HeroSection } from "./components/page/HeroSection";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <GlobalStyles />
    
    <HeroSection isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
   </ThemeProvider>
  )
}

