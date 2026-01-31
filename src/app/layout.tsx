import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ghriba | غريبة",
  description: "Biscuits marocains artisanaux préparés avec amour depuis plus de 50 ans par Mi Fatima. Découvrez l'authenticité de la ghriba traditionnelle.",
  keywords: ["ghriba", "biscuits marocains", "pâtisserie marocaine", "artisanal", "Mi Fatima", "Casablanca", "Maroc"],
  authors: [{ name: "Ghriba" }],
  openGraph: {
    title: "Ghriba | غريبة",
    description: "Biscuits marocains artisanaux depuis plus de 50 ans",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
