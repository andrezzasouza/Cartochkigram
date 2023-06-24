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

const topicCardsContents = [
  {
    title: "Letras do Alfabeto",
    tag: ["Letras"],
    description: "Pratique as letras do alfabeto!",
    link: "/flashcard/item/1",
  },
  {
    title: "Vogais e consoantes",
    tag: ["Letras"],
    description: "Teste seus conhecimentos de vogais e consoates em russo!",
    link: "/flashcard/item/1",
  },
  {
    title: "Regras de leitura",
    tag: ["Letras", "Pronúncia"],
    description: "Relembre as regras de leitura da língua russa!",
    link: "/flashcard/item/1",
  },
  {
    title: "Letras cursivas sozinhas",
    tag: ["Letras"],
    description:
      "Memorize como as letras cursivas são escritas quando aparecem sozinhas!",
    link: "/flashcard/item/1",
  },
  {
    title: "Letras cursivas acompanhadas",
    tag: ["Letras"],
    description:
      "Agora, vamos ver como as letras cursivas se ligam uma às outras.",
    link: "/flashcard/item/1",
  },
  {
    title: "Primeiras palavras e frases",
    tag: ["Vocabulário"],
    description: "Aprenda o básico para você começar a falar russo!",
    link: "/flashcard/item/1",
  },
  {
    title: "Se apresentando em russo",
    tag: ["Vocabulário"],
    description: "Se apresente e apresente outras pessoas.",
    link: "/flashcard/item/1",
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
            {topicCardsContents.map((card, index) => (
              <FlashcardTopicCard
                xs={2.4}
                key={`topic-card-${card.link}`}
                link={card.link}
              >
                <TagContainer>
                  {card.tag.map((tag, index) => (
                    <div key={`topic-tag-${index}`}>{tag}</div>
                  ))}
                </TagContainer>
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

const TagContainer = styled.div`
  display: flex;
    gap: 4px;

  & > div {
    background-color: #a73e3e;
    font-size: 10px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    width: fit-content;
    padding: 2px 4px;
    margin: 0 0 10px;
  }
`;
