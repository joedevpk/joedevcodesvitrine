import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/providers/ThemeProvider";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";

export const metadata: Metadata = {
  title: {
    default: "Joe Dev Codes | Agence Web Premium",
    template: "%s | Joe Dev Codes",
  },

  description:
    "Joe Dev Codes est une agence digitale spécialisée en création de sites web premium, SaaS, UI/UX design et expériences web modernes avec Next.js.",

  keywords: [
    "agence web",
    "nextjs",
    "freelance développeur",
    "site vitrine premium",
    "saas developer",
    "ui ux design",
  ],

  authors: [{ name: "Joe Dev Codes" }],
  creator: "Joe Dev Codes",

  openGraph: {
    title: "Joe Dev Codes | Agence Web Premium",
    description:
      "Création de sites web modernes, SaaS et expériences digitales haut de gamme.",
    url: "https://ton-domaine.com",
    siteName: "Joe Dev Codes",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Joe Dev Codes",
    description:
      "Agence web spécialisée en sites modernes et SaaS.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white text-black antialiased overflow-x-hidden">

        {/* UI global loaders / effects */}
        <Loader />

        {/* Theme + Providers */}
        <Providers>
          <Cursor />
          {children}
        </Providers>

      </body>
    </html>
  );
}