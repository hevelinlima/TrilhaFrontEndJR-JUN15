import { Toggle } from "./styles"

interface ToggleThemeButtonProps {
  toggleTheme: () => void
}

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({ toggleTheme }) => (
  <Toggle onClick={toggleTheme}>Change Theme</Toggle>
)