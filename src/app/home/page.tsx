"use client";

import { useState, useEffect } from "react";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Header from "../../components/Header/Header";
import LoggedInSideHeader from "../../components/LoggedInSideHeader/LoggedInSideHeader";
import { SquaresFour } from "@phosphor-icons/react";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 5000);
  }, []);

  return (
    <>
      {splash && <SplashScreen />}
      {!splash && (
        <>
          <Header>
            <LoggedInSideHeader
              thirdIcon={
                <SquaresFour size={32} color="#ffffff" weight="duotone" />
              }
              logoLink={"/dashboard"}
            />
          </Header>
          <main></main>
        </>
      )}
    </>
  );
}
