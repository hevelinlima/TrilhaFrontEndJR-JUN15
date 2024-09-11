import { useTranslation } from "react-i18next";
import { MotivationCard, MotivationContainer, MotivationContent, MotivationTitle } from "./styles";
import { Line } from "../AboutMe/styles";

interface MotivationProps{
  id?: string;
}

export function Motivation({id}:MotivationProps){
  const {t} = useTranslation("global")
  return(
    <>
      <MotivationContainer>
        <MotivationCard id={id}>
          <MotivationContent>
            <MotivationTitle>{t("header.fourth-item")}</MotivationTitle>
            {t("motivation")}
          </MotivationContent>
        </MotivationCard>
      </MotivationContainer>
      <Line />
    </>
  )
}