import styled from "styled-components";
import { SignOut, UserCircle } from "@phosphor-icons/react";

const NavBar = styled.nav`
  display: flex;
  gap: 0 15px;
`;

export default function LoggedInSideHeader () {
  return (
    <NavBar>
      <UserCircle size={28} color="#fafafa" weight="duotone" />
      <SignOut size={28} color="#fafafa" weight="duotone" />
    </NavBar>
  );
}