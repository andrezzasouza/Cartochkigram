import styled from "styled-components";
import { pacifico } from "@/app/fonts";

interface ITexttSize {
  textSize: string;
}

interface ITitleProps {
  textSize: string;
}

export default function LogoTitle({ textSize }: ITexttSize) {
  return (
    <StyledLogo className={pacifico.className} textSize={textSize}>
      Карточкиграм
    </StyledLogo>
  );
}

const StyledLogo = styled.span<Pick<ITitleProps, "textSize">>`
  font-size: ${(props) => props.textSize};
  color: #ffffff;
  text-shadow: 0px
    ${(props) =>
      props.textSize === "100px" || props.textSize === "75px" ? "4px" : "1.5px"}
    1px rgba(255, 255, 255, 0.59);
  width: fit-content;
`;
