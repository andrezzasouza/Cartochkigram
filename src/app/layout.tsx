"use client";

import ResetStyles from "@/styles/ResetStyles";
import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "./lib/registry";
import { nunito } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Карточкиграм</title>
        <meta
          name="description"
          content="Aprenda russo de flashcard em flashcard"
        ></meta>
      </head>
      <ResetStyles />     
      <GlobalStyles />
      <body className={nunito.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
