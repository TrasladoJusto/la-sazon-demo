import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import { GlobalReveal } from "@/components/animations/GlobalReveal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body", weight: ["400", "500", "600"] });
const libreCaslon = Libre_Caslon_Text({ subsets: ["latin"], display: "swap", variable: "--font-display", weight: ["400", "700"] });

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

const tailwindConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-muted-light": "#A6A8A1",
        "on-tertiary-fixed": "#0a1745",
        "on-surface": "#e9e1d8",
        "outline": "#999080",
        "inverse-primary": "#745b17",
        "error-container": "#93000a",
        "outline-variant": "#4d4639",
        "surface": "#16130e",
        "surface-tint": "#e4c375",
        "text-muted-dark": "#737373",
        "on-primary-fixed": "#251a00",
        "primary-container": "#c8a95e",
        "surface-container-low": "#1e1b16",
        "on-primary-fixed-variant": "#5a4400",
        "tertiary": "#bac5fd",
        "on-secondary": "#3a2f1f",
        "background-light": "#FFFCFC",
        "on-secondary-fixed": "#231a0c",
        "on-background": "#e9e1d8",
        "primary-fixed": "#ffdf96",
        "surface-variant": "#38342e",
        "on-primary-container": "#523e00",
        "surface-container-high": "#2d2a24",
        "secondary-container": "#544736",
        "on-primary": "#3e2e00",
        "secondary-fixed-dim": "#d6c4ad",
        "inverse-surface": "#e9e1d8",
        "on-tertiary-container": "#323e6c",
        "on-tertiary": "#222d5b",
        "background-dark": "#000000",
        "surface-dim": "#16130e",
        "secondary-fixed": "#f3e0c8",
        "error": "#ffb4ab",
        "tertiary-fixed-dim": "#b9c4fb",
        "primary": "#e5c476",
        "surface-container-lowest": "#100e09",
        "background": "#16130e",
        "secondary": "#d6c4ad",
        "on-error": "#690005",
        "on-surface-variant": "#d0c5b4",
        "tertiary-container": "#9faae0",
        "primary-fixed-dim": "#e4c375",
        "on-secondary-container": "#c7b6a0",
        "tertiary-fixed": "#dde1ff",
        "surface-container-highest": "#38342e",
        "on-tertiary-fixed-variant": "#394473",
        "surface-container": "#221f1a",
        "inverse-on-surface": "#33302a",
        "on-error-container": "#ffdad6",
        "surface-bright": "#3c3932",
        "on-secondary-fixed-variant": "#514534"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "4px",
        sm: "8px",
        "margin-desktop": "64px",
        gutter: "24px",
        xs: "4px",
        xl: "40px",
        xxl: "80px",
        lg: "24px",
        md: "16px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "label-md": ["Inter"],
        "body-md": ["Inter"],
        "label-sm": ["Inter"],
        "headline-lg": ["Libre Caslon Text"],
        "display-lg-mobile": ["Libre Caslon Text"],
        "headline-md": ["Libre Caslon Text"],
        "display-lg": ["Libre Caslon Text"],
        "body-lg": ["Inter"],
        "mono": ["JetBrains Mono"]
      },
      fontSize: {
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      }
    },
  },
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${libreCaslon.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      </head>
      <body className="bg-background-dark font-body-md text-on-surface">
        <GlobalReveal />
        {children}
      </body>
    </html>
  );
}
