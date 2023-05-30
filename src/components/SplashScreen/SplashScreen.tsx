import styled from "styled-components";
import { pacifico } from "@/app/fonts";

const SplashBackground = styled.div`
  background-color: #32476f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const SplashTitle = styled.p`
  font-size: 100px;
  color: #ffffff;
  text-shadow: 0px 4px 1px rgba(255, 255, 255, 0.59);
`;

export default function SplashScreen() {
  return (
    <SplashBackground>
      <SplashTitle className={pacifico.className}>Карточкиграм</SplashTitle>
    </SplashBackground>
  );
}
