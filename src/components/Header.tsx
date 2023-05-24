import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Header({ children }: PropsWithChildren) {
  const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #32476f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    font-size: 20px;
    color: #ffffff;
  `;

  return (
    <Header>
      <p>Карточкиграм</p>
      {children}
    </Header>
  );
}
