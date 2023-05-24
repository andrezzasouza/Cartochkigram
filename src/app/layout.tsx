import { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
import { Pacifico } from "next/font/google";

const pacifico: NextFont = Pacifico({
  weight: "400",
  subsets: ["cyrillic", "latin-ext"],
});

export const metadata = {
  title: "Карточкиграм",
  description: "Aprenda russo de flashcard em flashcard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={pacifico.className}>
        {children}
      </body>
    </html>
  );
}
