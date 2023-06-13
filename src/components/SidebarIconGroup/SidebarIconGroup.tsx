import { useState } from "react";
import MouseOverPopover from "@/components/MousePopover/MousePopover";
import styled from "styled-components";
import Link from "next/link";

interface IIconDescription {
  open: boolean;
}

export default function SidebarIconGroup({ address, description, open, icon }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Link
        href={address}
        key={description}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <IconContainer open={open}>
          {icon}
          <IconDescription open={open}>{description}</IconDescription>
        </IconContainer>
      </Link>
      <MouseOverPopover
        key={description}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        itemDescription={description}
        openSidebar={open}
      />
    </>
  );
}

const IconDescription = styled.p<Pick<IIconDescription, "open">>`
  display: ${(props) => (props.open ? "initial" : "none")};
`;

const IconContainer = styled.div<Pick<IIconDescription, "open">>`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 0 10px;
  color: #fafafa;
  border-radius: 3px;
  width: ${(props) => (props.open ? "135px" : "100%")};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover {
    background-color: #fafafa;
    color: #32476f;
  }
`;
