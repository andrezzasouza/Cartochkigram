"use client";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import LoggedInSideHeader from "@/components/LoggedInSideHeader/LoggedInSideHeader";
import { HouseLine } from "@phosphor-icons/react";
import styled from "styled-components";
import { nunito, pacifico } from "@/app/fonts";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DashboardContainer>
      <Header placement="internal" open={open} setOpen={setOpen}>
        <>
          <LoggedInSideHeader
            thirdIcon={<HouseLine size={28} color="#fafafa" weight="duotone" />}
            logoLink={"/home"}
          />
        </>
      </Header>
      <DashboardMain className={nunito.className}>
        <Sidebar open={open} />
        <h2 className={pacifico.className}>Что нового?</h2>
        <p>Fique por dentro do que há de novo pra você!</p>
        {/* grid layout */}
      </DashboardMain>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.main`
  background-color: #fafafa;
  min-height: calc(100vh);
`;

const DashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 40px 25px 15px 80px;

  & > h2 {
    color: #32476f;
    font-size: 40px;
    margin: 0 0 10px;
  }
`;
