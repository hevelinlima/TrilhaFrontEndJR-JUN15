import { useTranslation } from "react-i18next";
import { FirstItem, HeaderContainer, OtherItems, SelectButton } from "./styles";
import { ToggleThemeButton } from "../../ui/ToggleButton";
import { Link } from 'react-scroll'
import { useState } from "react";


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
            <Link to="projects" smooth={true} duration={500}>
              {t("header.second-item")}
            </Link>
          </li>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              {t("header.third-item")}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {t("header.fourth-item")}
            </Link>
          </li>
          <li>
            <SelectButton onChange={handleChangeLang} defaultValue={i18n.language}>
              <option value="en">EN</option>
              <option value="pt">PT-BR</option>
            </SelectButton>
          </li>
        </OtherItems>
        <ToggleThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </ul>
      
      <div>
        {t("welcome")}
      </div>
    </HeaderContainer>
  )
}