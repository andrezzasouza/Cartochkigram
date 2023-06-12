import {
  BookOpenText,
  Cards,
  GameController,
  MusicNotes,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

interface IIconDescription {
  open: boolean;
}

export default function Sidebar({ open }) {

  const sidebarIconsList = [
    {
      icon: <BookOpenText size={32} weight="duotone" />,
      description: "Conteúdos",
      address: "/contents",
    },
    {
      icon: <Cards size={32} weight="duotone" />,
      description: "Flashcards",
      address: "/flashcards",
    },
    {
      icon: <GameController size={32} weight="duotone" />,
      description: "Jogos",
      address: "/games",
    },
    {
      icon: <MusicNotes size={32} weight="duotone" />,
      description: "Músicas",
      address: "/music",
    },
  ];

  return (
    <SidebarNav open={open}>
      <div>
        {sidebarIconsList.map((item) => (
          <Link href={item.address} key={item.description}>
            <IconContainer>
              {item.icon}
              <IconDescription open={open}>{item.description}</IconDescription>
            </IconContainer>
          </Link>
        ))}
      </div>
    </SidebarNav>
  );
}

const SidebarNav = styled.nav<Pick<IIconDescription, "open">>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #32476f;
  color: #fafafa;
  width: ${(props) => (props.open ? "fit-content" : "55px")};
  margin: 55px 0 0;
  padding: ${props => props.open ? "20px 20px 20px 11px": "20px 0"};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.open ? "flex-start" : "center")};
    gap: 35px 0;
  }
`;

const IconDescription = styled.p<Pick<IIconDescription, "open">>`
  display: ${props => props.open ? "initial" : "none"};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 0 10px;
  color: #fafafa;
  &:hover {
    border-radius: 3px;
    background-color: #fafafa;
    color: #32476f;
  }
`;
