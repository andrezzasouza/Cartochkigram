import styled from "styled-components";
import LogoTitle from "@/components/LogoTitle/LogoTitle";

const SplashBackground = styled.div`
  background-color: #32476f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SplashScreen() {
  return (
    <SplashBackground>
      <LogoTitle textSize={"100px"} />
    </SplashBackground>
  );
}
