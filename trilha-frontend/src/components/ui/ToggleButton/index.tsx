import { MoonStars, Sun } from "@phosphor-icons/react"
import { Toggle } from "./styles"

interface ToggleThemeButtonProps {
  toggleTheme: () => void
  isDarkTheme: boolean
}

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({ toggleTheme, isDarkTheme }) => (
  <Toggle isDarkTheme={isDarkTheme} onClick={toggleTheme}>
    <MoonStars weight="fill" size={22} style={{ display: isDarkTheme ? 'block' : 'none' }} />
    <Sun weight="fill" size={22} style={{ display: isDarkTheme ? 'none' : 'block' }} />
  </Toggle>
)