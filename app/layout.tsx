import type { Metadata, Viewport } from "next";
import { Inter, Libre_Caslon_Text, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://provenance-restaurant.com"),
  title: "PROVENANCE | Alta Cocina de Origen",
  description: "Donde el origen define la excelencia. Alta cocina de origen en Madrid.",
  keywords: ["fine dining", "alta cocina", "tasting menu", "wine pairing", "Madrid"],
  authors: [{ name: "PROVENANCE Restaurant" }],
  creator: "PROVENANCE",
  publisher: "PROVENANCE",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "es_ES",
    url: "https://provenance-restaurant.com", siteName: "PROVENANCE",
    title: "PROVENANCE | Alta Cocina de Origen",
    description: "Donde el origen define la excelencia.",
    images: [{ url: "/images/hero/full-homepage.jpg", width: 1280, height: 720 }],
  },
  twitter: { card: "summary_large_image", title: "PROVENANCE | Alta Cocina de Origen", description: "Donde el origen define la excelencia." },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#16130e", width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${libreCaslon.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${inter.variable} antialiased bg-background overflow-x-hidden`}>{children}</body>
    </html>
  );
}
