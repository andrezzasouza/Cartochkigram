"use client";

import { useState, useEffect } from "react";
import SplashScreen from "../../components/SplashScreen";
import Header from "../../components/Header";
import LoggedInSideHeader from "../../components/LoggedInSideHeader";

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
            <LoggedInSideHeader />
          </Header>
          <main></main>
        </>
      )}
    </>
  );
}
