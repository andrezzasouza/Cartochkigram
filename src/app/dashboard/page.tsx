"use client";

import Header from "@/components/Header/Header";
import LoggedInSideHeader from "@/components/LoggedInSideHeader/LoggedInSideHeader";
import { HouseLine } from "@phosphor-icons/react";

export default function Dashboard() {
  return (
    <>
      <Header>
        <>
          <LoggedInSideHeader
            thirdIcon={<HouseLine size={28} color="#fafafa" weight="duotone" />}
            logoLink={"/home"}
          />
        </>
      </Header>
      <main></main>
    </>
  );
}
