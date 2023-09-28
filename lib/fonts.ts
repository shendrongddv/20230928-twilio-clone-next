import { Montserrat as FontDisplay, Hind as FontBody } from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

export const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});
