"use client";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import LoggedInSideHeader from "@/components/LoggedInSideHeader/LoggedInSideHeader";
import { HouseLine } from "@phosphor-icons/react";
import styled from "styled-components";
import { nunito, pacifico } from "@/app/fonts";
import { useState } from "react";
import PaperCard from "@/components/PaperCard/PaperCard";
import GridLayout from "@/components/GridLayout/GridLayout";

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);

  const info = {
    cyrillicName: "Алёна",
  };

  return (
    <DashboardMain>
      <Header placement="internal" open={open} setOpen={setOpen}>
        <>
          <LoggedInSideHeader
            thirdIcon={<HouseLine size={28} color="#fafafa" weight="duotone" />}
            logoLink={"/home"}
          />
        </>
      </Header>
      <DashboardContainer className={nunito.className}>
        <Sidebar open={open} />
        <GridLayout>
          <PaperCard xs={4}>
            <h2 className={pacifico.className}>
              Что нового{info.cyrillicName ? `, ${info.cyrillicName}` : ""}?
            </h2>
            <p>
              Fique por dentro do que há de novo pra você aqui no dashboard!
            </p>
          </PaperCard>
          <PaperCard xs={4}>
            <h2 className={pacifico.className}>С днём рождения!</h2>
            <p>Hoje é seu aniversário! Aproveite bastante o seu dia!</p>
          </PaperCard>
          <PaperCard xs={4}>
            <h2 className={pacifico.className}>Сегодня, где вы?</h2>
            <p>Aprenda algo novo em russo sobre o lugar em que você está!</p>
          </PaperCard>
        </GridLayout>
      </DashboardContainer>
    </DashboardMain>
  );
}

const DashboardMain = styled.main`
  background-color: #e3e0e0;
  min-height: calc(100vh);
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: 20px 25px 15px 65px;
`;
