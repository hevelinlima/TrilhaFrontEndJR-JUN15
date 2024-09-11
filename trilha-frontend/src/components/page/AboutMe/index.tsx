import { useTranslation } from "react-i18next";
import { AboutMeContainer, AboutMeContent, AboutMeTitle, Line, MediumContainer, Stacks } from "./styles";

import htmlLogo from '../../../assets/stack/html.svg'
import jsLogo from '../../../assets/stack/js.svg'
import reactLogo from '../../../assets/stack/react.svg'
import nextLogo from '../../../assets/stack/next.svg'
import tsLogo from '../../../assets/stack/typescript.svg'
import cssLogo from '../../../assets/stack/css.svg'
import bootstrapLogo from '../../../assets/stack/bootstrap.svg'


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
        <MediumContainer>
          <span>{t("aboutMe")}</span>
          <Stacks>
            <img src={htmlLogo} alt="" />
            <img src={jsLogo} alt="" />
            <img src={cssLogo} alt="" />
            <img src={bootstrapLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={nextLogo} alt="" />
            <img src={tsLogo} alt="" />
          </Stacks>
        </MediumContainer>
      </AboutMeContent>
      
    </AboutMeContainer>
  )
}