import Link from "next/link";
import { ReactNode } from "react";
import { navLinks, siteConfig } from "@/data/site";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <nav className="container-p flex items-center justify-between py-4">
          <div>
            <p className="font-semibold text-teal-950">{siteConfig.name}</p>
            <p className="text-xs text-slate-600">{siteConfig.crm} • {siteConfig.rqe}</p>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map(([label, href]) => <Link key={href} href={href} className="text-sm hover:text-teal-700">{label}</Link>)}
          </div>
          <a href={siteConfig.scheduling} className="btn-primary hidden sm:inline-flex">Agendar consulta</a>
        </nav>
      </header>
      <main>{children}</main>
      <a href={siteConfig.whatsapp} className="btn-primary fixed bottom-4 right-4 z-40 lg:hidden">WhatsApp</a>
      <footer className="bg-slate-900 text-slate-100 mt-20">
        <div className="container-p grid gap-8 py-12 md:grid-cols-3 text-sm">
          <div><p className="font-semibold">{siteConfig.name}</p><p>{siteConfig.specialty}</p><p>{siteConfig.crm} | {siteConfig.rqe}</p></div>
          <div><p>{siteConfig.address}</p><p>{siteConfig.city}</p><p>{siteConfig.phone} • {siteConfig.email}</p></div>
          <div><Link href="/politica-de-privacidade" className="underline block">Política de Privacidade</Link><Link href="/termos-de-uso" className="underline block">Termos de Uso</Link><p className="mt-2 text-xs">Conteúdo educativo. Não substitui consulta médica individualizada.</p></div>
        </div>
      </footer>
    </>
  );
}
