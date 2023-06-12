import Popover from "@mui/material/Popover";
import { useState } from "react";
import styled from "styled-components";

export default function MouseOverPopover({
  anchorEl,
  setAnchorEl,
  itemDescription,
}) {
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
        marginLeft: 1.5,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <ItemDescription>{itemDescription}</ItemDescription>
    </Popover>
  );
}

const ItemDescription = styled.div`
  padding: 8px;
  background-color: #32476f;
  color: #fafafa;
`;
