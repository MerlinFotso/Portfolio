import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fotso | Software Engineering & Data Engineering",
  description: "Portfolio de Fotso, étudiant en génie logiciel et futur Data Engineer basé au Cameroun.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Fotso — Building software. Engineering data.",
    description: "Software Engineering Student | Aspiring Data Engineer",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
