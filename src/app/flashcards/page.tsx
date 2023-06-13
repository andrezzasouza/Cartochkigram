"use client";

import Header from "@/components/Header/Header";
import { useState } from "react";

export default function Flashcards() {
  const [open, setOpen] = useState<boolean>(false);
  return(
  <>
    <Header placement="internal" open={open} setOpen={setOpen}>
      <div></div>
    </Header>
  </>);
}
