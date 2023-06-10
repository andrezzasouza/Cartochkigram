import { BookOpenText, Cards, GameController, MusicNotes } from "@phosphor-icons/react";
import styled from "styled-components";

export default function Sidebar () {
  return (
    <SidebarNav>
      <div>
        <BookOpenText size={32} color="#ffffff" weight="duotone" />
        <Cards size={32} color="#ffffff" weight="duotone" />
        <GameController size={32} color="#ffffff" weight="duotone" />
        <MusicNotes size={32} color="#ffffff" weight="duotone" />
      </div>
    </SidebarNav>
  );
}

const SidebarNav = styled.nav`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #32476f;
  color: #fafafa;
  width: 55px;
  margin: 55px 0 0;
  padding: 20px 0;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px 0;
  }
`;
