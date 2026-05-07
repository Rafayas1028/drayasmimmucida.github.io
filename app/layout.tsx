import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://[DOMINIO].com"),
  title: `${siteConfig.name} | Endocrinologia em Fortaleza`,
  description: `${siteConfig.posicionamento} Atendimento em Fortaleza com cuidado ético e individualizado.`,
  openGraph: { title: siteConfig.name, description: siteConfig.posicionamento, locale: "pt_BR", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body><Layout>{children}</Layout></body></html>;
}
