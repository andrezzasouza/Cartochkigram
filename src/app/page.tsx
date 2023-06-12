"use client";

import Header from "../components/Header/Header";
import CarouselComponent from "../components/Carousel/Carousel";
import styled from "styled-components";
import LogoButton from "@/components/LogoButton/LogoButton";
import { NotePencil, SignIn } from "@phosphor-icons/react";
import Link from "next/link";

const itemsArray = [
  {
    element: <SignIn size={28} weight="duotone" />,
    description: "Faça seu login!",
    address: "/login",
  },
  {
    element: <NotePencil size={28} weight="duotone" />,
    description: "Crie sua conta!",
    address: "/signup",
  },
];

export default function Lp() {
  return (
    <>
      <Header placement="external">
        <LPNavBar>
          {itemsArray.map((item, index) => (
            <Link href={item.address} key={`logo-button-${index}`}>
              <LogoButton>
                {item.element}
                {item.description}
              </LogoButton>
            </Link>
          ))}
        </LPNavBar>
      </Header>
      <main>
        <CarouselContainer>
          <CarouselComponent />
        </CarouselContainer>
      </main>
    </>
  );
}

const LPNavBar = styled.nav`
  display: flex;
  gap: 0 15px;
`;

const CarouselContainer = styled.div`
  padding: 0 25px;
`;
