import styled from "styled-components";
import { Question, NotePencil } from "@phosphor-icons/react";
import LogoButton from "../LogoButton/LogoButton";

export default function MoreInfo() {
  return (
    <AlternativeLogin>
      <LogoButton>
        <NotePencil size={28} weight="duotone" />
        Crie sua conta!
      </LogoButton>
      <LogoButton>
        <Question size={28} weight="duotone" />
        Saiba mais!
      </LogoButton>
    </AlternativeLogin>
  );
}

const AlternativeLogin = styled.section`
  display: flex;
  justify-content: space-between;
`;