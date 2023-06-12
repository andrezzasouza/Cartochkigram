"use client";

import { useState, useEffect } from "react";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Header from "../../components/Header/Header";
import LoggedInSideHeader from "../../components/LoggedInSideHeader/LoggedInSideHeader";
import { SquaresFour } from "@phosphor-icons/react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [splash, setSplash] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setSplash(false), 5000);
  }, []);

  return (
    <>
      {splash && <SplashScreen />}
      {!splash && (
        <>
          <Header placement="internal" open={open} setOpen={setOpen}>
            <LoggedInSideHeader
              thirdIcon={
                <SquaresFour size={32} color="#ffffff" weight="duotone" />
              }
              logoLink={"/dashboard"}
            />
          </Header>
          <main>
            <Sidebar open={open} />
          </main>
        </>
      )}
    </>
  );
}
