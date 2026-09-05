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
    images: [{ url: "/images/hero/full-homepage.jpg", width: 1280, height: 720 }],
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
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `tailwind.config = { darkMode: "class", theme: { extend: { colors: { "surface-container": "#221f1a", "on-secondary": "#3a2f1f", "background-light": "#FFFCFC", "on-primary": "#3e2e00", "text-muted-dark": "#737373", "on-error-container": "#ffdad6", "on-tertiary-fixed-variant": "#394473", "on-secondary-container": "#c7b6a0", "secondary-fixed": "#f3e0c8", "background": "#16130e", "surface-variant": "#38342e", "on-primary-fixed-variant": "#5a4400", "on-background": "#e9e1d8", "outline-variant": "#4d4639", "on-primary-container": "#523e00", "error-container": "#93000a", "on-secondary-fixed-variant": "#514534", "tertiary-fixed": "#dde1ff", "on-tertiary-container": "#323e6c", "tertiary": "#bac5fd", "on-primary-fixed": "#251a00", "on-surface-variant": "#d0c5b4", "surface-container-high": "#2d2a24", "surface-tint": "#e4c375", "outline": "#999080", "inverse-surface": "#e9e1d8", "tertiary-container": "#9faae0", "surface-container-lowest": "#100e09", "secondary": "#d6c4ad", "text-muted-light": "#A6A8A1", "secondary-container": "#544736", "secondary-fixed-dim": "#d6c4ad", "on-secondary-fixed": "#231a0c", "surface-container-highest": "#38342e", "on-tertiary": "#222d5b", "surface-dim": "#16130e", "surface-bright": "#3c3932", "error": "#ffb4ab", "primary-fixed-dim": "#e4c375", "primary": "#e5c476", "primary-container": "#c8a95e", "surface-container-low": "#1e1b16", "inverse-on-surface": "#33302a", "tertiary-fixed-dim": "#b9c4fb", "on-tertiary-fixed": "#0a1745", "surface": "#16130e", "inverse-primary": "#745b17", "on-error": "#690005", "on-surface": "#e9e1d8", "background-dark": "#000000" }, borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" }, spacing: { md: "16px", "margin-mobile": "16px", xxl: "80px", sm: "8px", lg: "24px", unit: "4px", gutter: "24px", "margin-desktop": "64px", xs: "4px", xl: "40px" }, fontFamily: { "label-sm": ["Inter"], "headline-md": ["Libre Caslon Text"], "headline-lg": ["Libre Caslon Text"], "display-lg": ["Libre Caslon Text"], "body-lg": ["Inter"], "display-lg-mobile": ["Libre Caslon Text"], "label-md": ["Inter"], "body-md": ["Inter"], "mono": ["JetBrains Mono"] }, fontSize: { "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }], "headline-md": ["24px", { lineHeight: "32px", fontWeight: "400" }], "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "400" }], "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "400" }], "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }], "display-lg-mobile": ["40px", { lineHeight: "48px", fontWeight: "400" }], "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }], "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }] } } } }` }} />
        <style dangerouslySetInnerHTML={{ __html: `body { background-color: #000000; color: #e9e1d8; } .gold-mesh-bg { background: radial-gradient(circle at 50% 50%, #1a160d 0%, #000000 70%); position: relative; overflow: hidden; } .gold-mesh-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 80% 20%, rgba(200, 169, 94, 0.05) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(200, 169, 94, 0.03) 0%, transparent 40%); pointer-events: none; } .gold-gradient-text { background: linear-gradient(to bottom, #f3e0c8 0%, #c8a95e 50%, #8e733b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } .scroll-chevron { animation: bounce 2s infinite; } @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } } .glass-nav { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); } .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); } .reveal.active { opacity: 1; transform: translateY(0); } .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } .luxury-card { border: 1px solid rgba(200, 169, 94, 0.1); transition: all 0.5s ease; } .luxury-card:hover { border-color: rgba(200, 169, 94, 0.4); background: rgba(22, 19, 14, 0.5); } .gold-divider { background: linear-gradient(90deg, transparent, rgba(200, 169, 94, 0.2), transparent); } @keyframes slide-down { from { opacity: 0; transform: translateY(-10px); max-height: 0; } to { opacity: 1; transform: translateY(0); max-height: 500px; } } .animate-slide-down { animation: slide-down 0.3s ease-out forwards; overflow: hidden; } *:focus-visible { outline: 2px solid #e5c476; outline-offset: 2px; } @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } } ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #16130e; } ::-webkit-scrollbar-thumb { background: #c8a95e; } .map-container { filter: grayscale(1) invert(0.9) contrast(1.2); } .testimonial-card { border: 1px solid rgba(229, 196, 118, 0.15); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); } .testimonial-card:hover { border-color: rgba(229, 196, 118, 0.4); background-color: rgba(22, 19, 14, 0.5); }` }} />
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary">
        <GlobalReveal />
        {children}
      </body>
    </html>
  );
}
