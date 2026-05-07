import { Section } from "@/components/Section";

export default function SobrePage() {
  return (
    <Section title="Sobre a Dra. Yasmim Mourão Mucida" subtitle="Endocrinologia clínica com visão metabólica, hormonal e mental.">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card space-y-3">
          <h3 className="font-semibold">Trajetória profissional</h3>
          <p><strong>Formação:</strong> [PREENCHER]</p>
          <p><strong>Residência/Especialização:</strong> [PREENCHER]</p>
          <p><strong>Títulos:</strong> [PREENCHER]</p>
        </article>
        <article className="card space-y-3">
          <h3 className="font-semibold">Forma de atendimento</h3>
          <p>Avaliação clínica criteriosa, explicações claras e plano terapêutico adaptado à realidade de cada paciente.</p>
          <p>Sem promessas de cura ou resultado garantido.</p>
        </article>
      </div>
    </Section>
  );
}
