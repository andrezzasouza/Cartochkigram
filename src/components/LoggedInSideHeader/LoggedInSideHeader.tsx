import styled from "styled-components";
import { SignOut, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";

const NavBar = styled.nav`
  display: flex;
  gap: 0 15px;
`;

export default function LoggedInSideHeader({ thirdIcon, logoLink }) {
  return (
    <NavBar>
      <Link href={logoLink}>{thirdIcon}</Link>
      <UserCircle size={28} color="#fafafa" weight="duotone" />
      <SignOut size={28} color="#fafafa" weight="duotone" />
    </NavBar>
  );
}