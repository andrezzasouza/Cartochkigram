import styled from "styled-components";
import { FacebookLogo, GoogleLogo, GithubLogo } from "@phosphor-icons/react";
import LogoButton from "../LogoButton/LogoButton";

interface IAltEntry {
  alternativeHeading: string;
}
export default function AlternativeEntry({ alternativeHeading }: IAltEntry) {
  const buttonInfo = [
    {
      element: <Facebook size={28} weight="duotone" />,
      description: "Facebook",
    },
    {
      element: <Google size={28} weight="duotone" />,
      description: "Google",
    },
    {
      element: <Github size={28} weight="duotone" />,
      description: "Github",
    },
  ];
  return (
    <>
      <StyledHeading3>{alternativeHeading}</StyledHeading3>
      <AlternativeEntryway>
        {buttonInfo.map((info, index) => (
          <LogoButton key={`alt-button-${index}`}>
            {info.element}
            <span>{info.description}</span>
          </LogoButton>
        ))}
      </AlternativeEntryway>
    </>
  );
}

const StyledHeading3 = styled.h3`
  font-weight: 700;
  font-size: 17px;
  margin: 25px 0 5px;
`;

const Facebook = styled(FacebookLogo)`
  color: "#32476f";
  &:hover {
    color: "#ffffff";
  }
`;

const Google = styled(GoogleLogo)`
  color: "#32476f";
  &:hover {
    color: "#ffffff";
  }
`;

const Github = styled(GithubLogo)`
  color: "#32476f";
  &:hover {
    color: "#ffffff";
  }
`;

const AlternativeEntryway = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px;
`;
