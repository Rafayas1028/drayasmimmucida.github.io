import { Section } from "@/components/Section";

export default function ComoFuncionaPage() {
  return (
    <Section title="Como funciona a consulta endocrinológica" subtitle="Etapas do cuidado para uma jornada segura e personalizada.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card"><h3 className="font-semibold">1. Antes da consulta</h3><p className="mt-2 text-sm">Leve exames prévios, lista de medicamentos e dúvidas principais.</p></div>
        <div className="card"><h3 className="font-semibold">2. Durante a consulta</h3><p className="mt-2 text-sm">Escuta clínica, revisão de histórico, hábitos e avaliação de risco.</p></div>
        <div className="card"><h3 className="font-semibold">3. Plano terapêutico</h3><p className="mt-2 text-sm">Definição de conduta baseada em ciência e metas realistas.</p></div>
        <div className="card"><h3 className="font-semibold">4. Acompanhamento</h3><p className="mt-2 text-sm">Retorno periódico para ajustes conforme evolução clínica.</p></div>
      </div>
    </Section>
  );
}
