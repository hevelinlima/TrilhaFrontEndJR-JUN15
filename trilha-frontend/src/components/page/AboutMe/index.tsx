import { useTranslation } from "react-i18next";
import { AboutMeContainer, AboutMeContent, AboutMeTitle, Line, Stacks } from "./styles";

import htmlLogo from '../../../assets/stack/html.svg'

interface AboutMeProps{
  id?: string;
}

export function AboutMe({id}: AboutMeProps) {
  const { t } = useTranslation("global")
  return(
    <AboutMeContainer id={id}>
      <Line />
      <AboutMeContent>
        <AboutMeTitle>
          {t("header.second-item")}
        </AboutMeTitle>
        {t("aboutMe")}
        <Stacks>
          <img src={htmlLogo} alt="" />
        </Stacks>
      </AboutMeContent>
      
    </AboutMeContainer>
  )
}