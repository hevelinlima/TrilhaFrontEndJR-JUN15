import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/defaultThemes";
import { GlobalStyles } from "./styles/global";
import { ToggleThemeButton } from "./components/ui/ToggleButton";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <GlobalStyles />
    <ToggleThemeButton toggleTheme={toggleTheme} />
   </ThemeProvider>
  )
}

