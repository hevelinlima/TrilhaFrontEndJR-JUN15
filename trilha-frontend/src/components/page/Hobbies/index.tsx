import { useTranslation } from "react-i18next";
import { HobbiesContainer, MediumContainer, HobbiesTitle, HobbiesContent, Vinyl, CardsContainer } from "./styles";

import recordIcon from "../../../assets/vinyl.svg"
import bookIcon from "../../../assets/book.svg"

interface HobbiesProps {
  id?: string;
}

export function Hobbies({id}: HobbiesProps) {
  const { t } = useTranslation("global")
  return(
    <HobbiesContainer id={id}>
      <MediumContainer>
        <HobbiesTitle>
          {t("header.third-item")}
          <CardsContainer>
            <Vinyl src={recordIcon} />
            <img src={bookIcon} alt="" />
          </CardsContainer>
        </HobbiesTitle>
        <HobbiesContent>
          {t("hobbies")}
        </HobbiesContent>
        
      </MediumContainer>
    </HobbiesContainer>
  )
}