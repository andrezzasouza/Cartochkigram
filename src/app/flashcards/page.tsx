"use client";

import GridLayout from "@/components/GridLayout/GridLayout";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";
import styled from "styled-components";
import FlashcardTopicCard from "@/components/FlashcardTopicCard/FlashcardTopicCard";
import LoggedInSideHeader from "@/components/LoggedInSideHeader/LoggedInSideHeader";
import { HouseLine } from "@phosphor-icons/react";
import { pacifico } from "../fonts";

const TopicCardsContents = [
  {
    title: "Letras do Alfabeto",
    tag: "",
    description: "Pratique as letras do alfabeto!",
    link: "/flashcard/item/1",
  },
  {
    title: "Vogais e consoantes",
    tag: "",
    description: "Teste seus conhecimentos de vogais e consoates em russo!",
  },
];

export default function Flashcards() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <FlashcardMenuMain>
      <Header placement="internal" open={open} setOpen={setOpen}>
        <LoggedInSideHeader
          thirdIcon={<HouseLine size={28} color="#fafafa" weight="duotone" />}
          logoLink={"/home"}
        />
      </Header>
      <FlashCardMenuContainer>
        <Sidebar open={open} />
        <>
          <h2 className={pacifico.className}>Módulo 1: Primeiras palavras</h2>
          <GridLayout>
            {TopicCardsContents.map((card, index) => (
              <FlashcardTopicCard xs={2} key={`topic-card-${index}`}>
                <div></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </FlashcardTopicCard>
            ))}
          </GridLayout>
        </>
      </FlashCardMenuContainer>
    </FlashcardMenuMain>
  );
}

const FlashcardMenuMain = styled.main`
  background-color: #e3e0e0;
  min-height: calc(100vh);
`;

const FlashCardMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: 20px 25px 15px 65px;

  h2 {
    font-size: 24px;
    margin: 0 0 20px;
    color: #32476f;
  }
`;
