import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowMaster AI Legal — Rechtliche Dokumente für dein Business",
  description: "Professionelle rechtliche Dokumente: Verträge, Impressum, Datenschutz, AGB & DSGVO-generiert. Jetzt sichern ab 19€/Monat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-dark-900 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
