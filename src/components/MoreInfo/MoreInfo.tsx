import { JSX } from "react";
import styled from "styled-components";
import LogoButton from "../LogoButton/LogoButton";

interface IItemsObject {
  element: JSX.Element,
  description: string
}

interface IItemsArray {
  itemsArray: IItemsObject[]
}
export default function MoreInfo({ itemsArray }: IItemsArray) {
  return (
    <AlternativeLogin>
      {itemsArray.map((item, index) => (
        <LogoButton key={`logo-button-${index}`}>
          {item.element}
          {item.description}
        </LogoButton>
      ))}
    </AlternativeLogin>
  );
}

const AlternativeLogin = styled.section`
  display: flex;
  justify-content: space-between;
`;
