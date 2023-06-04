"use client";

import Header from "../components/Header/Header";
import CarouselComponent from "../components/Carousel/Carousel";
import { styled } from "styled-components";

export default function Lp() {
  return (
    <>
      <Header>
        <nav></nav>
      </Header>
      <main>
        <CarouselContainer>
          <CarouselComponent />
        </CarouselContainer>
      </main>
    </>
  );
}

const CarouselContainer = styled.div`
  padding: 0 10px;
`;