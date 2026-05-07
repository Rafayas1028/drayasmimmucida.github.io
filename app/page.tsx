import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";

const pilares = [
  "Ciência e atualização contínua",
  "Escuta clínica qualificada",
  "Plano terapêutico individualizado",
  "Acompanhamento longitudinal"
];

export default function Home() {
  return (
    <>
      <SeoJsonLd data={{ "@context": "https://schema.org", "@type": "Physician", name: siteConfig.name, areaServed: "Fortaleza", medicalSpecialty: "Endocrinology" }} />

      <section className="section bg-gradient-to-br from-[#f8f7f4] via-[#edf4f3] to-[#e6efee]">
        <div className="container-p grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Fortaleza · CE</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">{siteConfig.posicionamento}</h1>
            <p className="mt-6 text-lg text-slate-700">Cuidado endocrinológico para saúde metabólica, hormonal e mental, com foco em clareza, acolhimento e decisões compartilhadas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.scheduling} className="btn-primary">Agendar consulta</a>
              <Link href="/areas-de-cuidado" className="btn-soft">Conhecer áreas de cuidado</Link>
            </div>
            <p className="mt-6 text-sm text-slate-600">{siteConfig.crm} • {siteConfig.rqe}</p>
          </div>
          <div className="card min-h-[420px] flex items-center justify-center text-slate-500">[FOTO PROFISSIONAL DA MÉDICA]</div>
        </div>
      </section>

      <Section title="Como posso te ajudar" subtitle="A endocrinologia vai além de exames: considera sintomas, rotina, contexto emocional e metas de saúde.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p) => (
            <article key={p} className="card">
              <h3 className="font-semibold">{p}</h3>
              <p className="mt-2 text-sm text-slate-600">Conduta ética e individualizada, sem promessas de resultado.</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
