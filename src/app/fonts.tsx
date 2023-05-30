import { NextFont } from "next/dist/compiled/@next/font";
import { Nunito, Pacifico } from "next/font/google";

const nunito: NextFont = Nunito({
  weight: ["400", "700", "800"],
  subsets: ['cyrillic-ext', 'latin-ext'],
  fallback: ['Arial', 'sans-serif']
});

const pacifico: NextFont = Pacifico({
  weight: "400",
  subsets: ['cyrillic-ext', 'latin-ext'],
  preload: true,
  fallback: ['Comic Sans MS', 'sans-serif']
});


export {
  nunito,
  pacifico
}