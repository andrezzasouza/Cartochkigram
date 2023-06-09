import { nunito } from "@/app/fonts";
import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function LogoButton({ children }: PropsWithChildren) {
  return <LogoInButton className={nunito.className}>{children}</LogoInButton>;
}

const LogoInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid #32476f;
  border-radius: 20px;
  margin: 5px 0 5px;
  padding: 2px 8px 2px 4px;
  color: #32476f;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #32476f;
    border: 2px solid #32476f;
    color: #ffffff;
  }
`;
