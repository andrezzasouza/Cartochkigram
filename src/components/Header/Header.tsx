import { Dispatch, PropsWithChildren } from "react";
import styled from "styled-components";
import { pacifico } from "@/app/fonts";
import LogoTitle from "@/components/LogoTitle/LogoTitle";
import { List } from "@phosphor-icons/react";

interface IHeader extends PropsWithChildren {
  placement: string;
  open?: boolean;
  setOpen?: Dispatch<boolean>;
}

export default function Header({ children, placement, open, setOpen }: IHeader) {
  return (
    <StyledHeader className={pacifico.className} placement={placement}>
      {placement === "internal" && (
        <ListLogo
          size={32}
          color="#ffffff"
          weight="duotone"
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
      <LogoTitle textSize="20px" />
      {children}
    </StyledHeader>
  );
}

const ListLogo = styled(List)`
  cursor: pointer;
`;

const StyledHeader = styled.header<Pick<IHeader, "placement">>`
  width: 100%;
  height: 55px;
  background-color: #32476f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props.placement === "internal" ? "0 25px 0 10px" : "0 25px"};
  font-size: 20px;
  color: #ffffff;
  box-sizing: border-box;
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 4px #000000;
`;
