import { useTranslation } from "react-i18next";
import { FirstItem, HeaderContainer, OtherItems, SelectButton, ToggleButton } from "./styles";
import { ToggleThemeButton } from "../../ui/ToggleButton";
import { Link } from 'react-scroll'
import { useState } from "react";
import { List } from "@phosphor-icons/react";


interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: boolean
}

export function Header({toggleTheme, isDarkTheme}: HeaderProps) {
  const {t, i18n} = useTranslation("global")

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event?.target.value
    i18n.changeLanguage(lang)
  }
  return(
    <HeaderContainer>
      <ul>
        <FirstItem>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              {t("header.first-item")}
            </Link>
          </li>
        </FirstItem>
        <OtherItems className={isMenuOpen ? "open" : ""}>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              {t("header.second-item")}
            </Link>
          </li>
          <li>
            <Link to="hobbies" smooth={true} duration={500}>
              {t("header.third-item")}
            </Link>
          </li>
          <li>
            <Link to="motivation" smooth={true} duration={500}>
              {t("header.fourth-item")}
            </Link>
          </li>
          <li>
            <SelectButton onChange={handleChangeLang} defaultValue={i18n.language}>
              <option value="en">EN</option>
              <option value="pt">PT-BR</option>
            </SelectButton>
          </li>
          <li>
            <ToggleThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          </li>
        </OtherItems>
        <ToggleButton onClick={handleToggleMenu}>
          <List weight="bold" size={32} />
        </ToggleButton>
      </ul>
    </HeaderContainer>
  )
}