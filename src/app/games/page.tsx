"use client";

import FlashcardTopicCard from "@/components/FlashcardTopicCard/FlashcardTopicCard";
import GridLayout from "@/components/GridLayout/GridLayout";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";
import styled from "styled-components";
import { CardActions, Button, CardMedia, CardContent } from "@mui/material";
import hangman from "@/assets/images/hangman.jpg";
import wordle from "@/assets/images/wordle.png";
import crosswords from "@/assets/images/crosswords.png";
import { GameController, PaperPlaneTilt } from "@phosphor-icons/react";
import { pacifico } from "../fonts";

const gameList = [
  {
    title: "Виселица",
    description: "Jogue forca em russo e se divirta aprendendo!",
    image: hangman?.src,
    alt: "Imagem de  uma forca",
    link: "/games/viselitsa",
  },
  {
    title: "Вордли",
    description: "Jogue a versão em russo do jogo Termoo!",
    image: wordle?.src,
    alt: "Image da versão em russo do jogo Termoo",
    link: "/games/wordli",
  },
  {
    title: "Филворды",
    description: "Jogue a versão do jogo de caçar palavras em russo!",
    image: crosswords?.src,
    alt: "Image da versão em russo do jogo de caça palavras",
    link: "/games/filvordy",
  },
];

export default function Games() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <GameMenuMain>
      <Header placement="internal" open={open} setOpen={setOpen}>
        <div></div>
      </Header>
      <GameMenuContainer>
        <Sidebar open={open} />
        <>
          <h2 className={pacifico.className}>Mini jogos</h2>
          <GridLayout>
            {gameList.map((game) => (
              <FlashcardTopicCard
                xs={3}
                link={game.link}
                key={`game-${game.link}`}
              >
                <CardMedia
                  component="img"
                  height="150"
                  src={game.image}
                  alt={game.alt}
                />
                <CardContent>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ backgroundColor: "#32476f" }}
                    startIcon={<GameController />}
                  >
                    Jogue!
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    sx={{ backgroundColor: "#32476f" }}
                    startIcon={<PaperPlaneTilt />}
                  >
                    Compartilhe!
                  </Button>
                </CardActions>
              </FlashcardTopicCard>
            ))}
          </GridLayout>
        </>
      </GameMenuContainer>
    </GameMenuMain>
  );
}

const GameMenuMain = styled.main`
  background-color: #e3e0e0;
  min-height: calc(100vh);
`;

const GameMenuContainer = styled.div`
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
