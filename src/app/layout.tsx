import "./globals.css";
import { nunito } from "./fonts";

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
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
