"use client";

import Header from "@/components/Header/Header";
import LogoButton from "@/components/LogoButton/LogoButton";
import { Chalkboard, HouseLine } from "@phosphor-icons/react";
import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <>
      <Header placement="external">
        <></>
      </Header>
      <ErrorMain>
        <ErrorFlashcard>
          <h2>Ошибка 404</h2>
          <h3>Страница не найдена.</h3>
          <p>
            Não foi possível encontrar essa página, mas você achou mesmo que
            iria embora sem aprender nada?
          </p>
          <p>
            Clique no botão abaixo para aprender alguns vocabulários novos pro
            seu internetês russo! ;-)
          </p>
          <ButtonsArea>
            <LogoButton>
              <>
                <Chalkboard size={28} color="#32476f" weight="duotone" />
                <span>Aprenda algo novo</span>
              </>
            </LogoButton>
            <Link href="/home">
              <LogoButton>
                <>
                  <HouseLine size={28} color="#32476f" weight="duotone" />
                  <span>Ir para a home</span>
                </>
              </LogoButton>
            </Link>
          </ButtonsArea>
        </ErrorFlashcard>
      </ErrorMain>
    </>
  );
}

const ButtonsArea = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 0 15px;
`;

const ErrorFlashcard = styled.div`
  background-color: #fafafa;
  font-size: 24px;
  max-width: 60%;
  padding: 40px;
  transform: rotate(-5deg);

  & > h2 {
    color: #32476f;
    font-size: 75px;
  }

  & > h3 {
    font-size: 45px;
    margin: 0 0 40px;
  }

  & > p {
    margin: 0 0 25px;
  }
`;

const ErrorMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 95vw;
  min-height: 75vh;
  overflow-y: hidden;
`;
