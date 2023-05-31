import styled from "styled-components";
import { FacebookLogo, GoogleLogo, GithubLogo } from "@phosphor-icons/react";
import LogoButton from "../LogoButton/LogoButton";

interface IAltEntry {
  alternativeHeading: string;
}
export default function AlternativeEntry({ alternativeHeading }: IAltEntry) {
  return (
    <>
      <h3>{alternativeHeading}</h3>
      <AlternativeEntryway>
        <LogoButton>
          <Facebook size={28} weight="duotone" />
          <span>Facebook</span>
        </LogoButton>
        <LogoButton>
          <Google size={28} weight="duotone" />
          <span>Google</span>
        </LogoButton>
        <LogoButton>
          <Github size={28} weight="duotone" />
          <span>Github</span>
        </LogoButton>
      </AlternativeEntryway>
    </>
  );
}

const Facebook = styled(FacebookLogo)`
  color: "#32476F";
  &:hover {
    color: #ffffff;
  }
`;

const Google = styled(GoogleLogo)`
  color: "#32476F";
  &:hover {
    color: #ffffff;
  }
`;

const Github = styled(GithubLogo)`
  color: "#32476F";
  &:hover {
    color: #ffffff;
  }
`;

const AlternativeEntryway = styled.section`
  display: flex;
  justify-content: space-between;
`;
