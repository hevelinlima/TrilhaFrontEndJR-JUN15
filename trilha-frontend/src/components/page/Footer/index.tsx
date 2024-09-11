import { useTranslation } from "react-i18next";
import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
  const {t} = useTranslation("global")
  return(
    <FooterContainer>
      <FooterContent>
        {t("footer")} &copy;
      </FooterContent>
    </FooterContainer>
  )
}