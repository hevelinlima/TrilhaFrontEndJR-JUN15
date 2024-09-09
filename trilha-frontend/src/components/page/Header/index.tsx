import { useTranslation } from "react-i18next";
import { HeaderContainer, SelectButton } from "./styles";
import { ToggleThemeButton } from "../../ui/ToggleButton";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean
}

export function Header({toggleTheme, isDarkTheme}: HeaderProps) {
  const {t, i18n} = useTranslation("global")

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event?.target.value
    i18n.changeLanguage(lang)
  }
  return(
    <HeaderContainer>
      <SelectButton onChange={handleChangeLang} defaultValue={i18n.language}>
        <option value="en">EN</option>
        <option value="pt">PT-BR</option>
      </SelectButton>
      <ToggleThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div>
        {t("welcome")}
      </div>
    </HeaderContainer>
  )
}