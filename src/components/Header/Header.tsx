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
    position: sticky;
    z-index: 2;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 4px #000000;
  `;

  return (
    <Header className={pacifico.className}>
      <LogoTitle textSize="20px" />
      {children}
    </Header>
  );
}
