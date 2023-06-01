import { JSX } from "react";
import styled from "styled-components";
import LogoButton from "../LogoButton/LogoButton";
import Link from "next/link";

interface IItemsObject {
  element: JSX.Element;
  description: string;
  address: string;
}

interface IItemsArray {
  itemsArray: IItemsObject[];
}
export default function MoreInfo({ itemsArray }: IItemsArray) {
  return (
    <AlternativeLogin>
      {itemsArray.map((item, index) => (
        <Link href={item.address} key={`logo-button-${index}`}>
          <LogoButton>
            {item.element}
            {item.description}
          </LogoButton>
        </Link>
      ))}
    </AlternativeLogin>
  );
}

const AlternativeLogin = styled.section`
  display: flex;
  justify-content: space-between;
`;
