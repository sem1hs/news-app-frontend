import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "Sportseus | Futbol Haberleri, Fikstürler ve Puan Durumları",

  description:
    "Sportseus, Java ve Spring Boot kullanılarak mikroservis mimarisiyle geliştirilmiş bir futbol platformudur. Gerçek zamanlı futbol haberleri, fikstürler, puan durumları ve dış API entegrasyonlarıyla güncel veriler sunar.",

  keywords: [
    "Sportseus",
    "Futbol Haberleri",
    "Canlı Futbol Haberleri",
    "Fikstür",
    "Puan Durumu",
    "Süper Lig",
    "Premier League",
    "La Liga",
    "Serie A",
    "Bundesliga",
    "Champions League",
    "Java",
    "Spring Boot",
    "Microservices",
    "Mikroservis Mimarisi",
    "Football News",
    "Football Fixtures",
    "Standings",
    "Backend Development",
    "API Integration",
  ],

  authors: [{ name: "Semih Şahinoğlu" }],

  creator: "Semih Şahinoğlu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
