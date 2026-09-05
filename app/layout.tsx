import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import { GlobalReveal } from "@/components/animations/GlobalReveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body", weight: ["400", "500", "600"] });
const libreCaslon = Libre_Caslon_Text({ subsets: ["latin"], display: "swap", variable: "--font-display", weight: ["400"] });

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
    images: [{ url: "/images/interior.jpg", width: 1280, height: 720 }],
  },
  twitter: { card: "summary_large_image", title: "PROVENANCE | Alta Cocina de Origen", description: "Donde el origen define la excelencia." },
  icons: { icon: "/favicon.ico" },
};

export const viewport = { themeColor: "#16130e", width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${libreCaslon.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `tailwind.config = { darkMode: "class", theme: { extend: { colors: { "surface-container": "#221f1a", "on-secondary": "#3a2f1f", "background-light": "#FFFCFC", "on-primary": "#3e2e00", "text-muted-dark": "#737373", "on-error-container": "#ffdad6", "on-tertiary-fixed-variant": "#394473", "on-secondary-container": "#c7b6a0", "secondary-fixed": "#f3e0c8", "background": "#16130e", "surface-variant": "#38342e", "on-primary-fixed-variant": "#5a4400", "on-background": "#e9e1d8", "outline-variant": "#4d4639", "on-primary-container": "#523e00", "error-container": "#93000a", "on-secondary-fixed-variant": "#514534", "tertiary-fixed": "#dde1ff", "on-tertiary-container": "#323e6c", "tertiary": "#bac5fd", "on-primary-fixed": "#251a00", "on-surface-variant": "#d0c5b4", "surface-container-high": "#2d2a24", "surface-tint": "#e4c375", "outline": "#999080", "inverse-surface": "#e9e1d8", "tertiary-container": "#9faae0", "surface-container-lowest": "#100e09", "secondary": "#d6c4ad", "text-muted-light": "#A6A8A1", "secondary-container": "#544736", "secondary-fixed-dim": "#d6c4ad", "on-secondary-fixed": "#231a0c", "surface-container-highest": "#38342e", "on-tertiary": "#222d5b", "surface-dim": "#16130e", "surface-bright": "#3c3932", "error": "#ffb4ab", "primary-fixed-dim": "#e4c375", "primary": "#e5c476", "primary-container": "#c8a95e", "surface-container-low": "#1e1b16", "inverse-on-surface": "#33302a", "tertiary-fixed-dim": "#b9c4fb", "on-tertiary-fixed": "#0a1745", "surface": "#16130e", "inverse-primary": "#745b17", "on-error": "#690005", "on-surface": "#e9e1d8", "background-dark": "#000000" }, borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" }, spacing: { md: "16px", "margin-mobile": "16px", xxl: "80px", sm: "8px", lg: "24px", unit: "4px", gutter: "24px", "margin-desktop": "64px", xs: "4px", xl: "40px" }, fontFamily: { "label-sm": ["Inter"], "headline-md": ["Libre Caslon Text"], "headline-lg": ["Libre Caslon Text"], "headline-sm": ["Libre Caslon Text"], "display-lg": ["Libre Caslon Text"], "display-md": ["Libre Caslon Text"], "display-sm": ["Libre Caslon Text"], "display-lg-mobile": ["Libre Caslon Text"], "body-md": ["Inter"], "body-lg": ["Inter"], "body-sm": ["Inter"], "mono": ["JetBrains Mono"] } } }` }} />
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary">
        <GlobalReveal />
        {children}
      </body>
    </html>
  );
}
