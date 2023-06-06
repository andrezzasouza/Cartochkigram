import { PropsWithChildren } from "react";
import styled from "styled-components";
import { pacifico } from "../../app/fonts";
import LogoTitle from "../LogoTitle/LogoTitle";

export default function Header({ children }: PropsWithChildren) {
  const Header = styled.header`
    width: 100%;
    height: 55px;
    background-color: #32476f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    font-size: 20px;
    color: #ffffff;
    box-sizing: border-box;
  `;

  return (
    <Header className={pacifico.className}>
      <LogoTitle textSize="20px" />
      {children}
    </Header>
  );
}
