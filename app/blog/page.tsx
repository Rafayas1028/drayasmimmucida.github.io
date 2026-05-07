import { Section } from "@/components/Section";

const posts = [
  "Quando procurar um endocrinologista?",
  "Hipotireoidismo: sintomas, diagnóstico e acompanhamento",
  "Pré-diabetes: por que o diagnóstico precoce importa?",
  "Obesidade é doença crônica: papel do cuidado médico",
  "Menopausa e saúde hormonal: o que avaliar?",
  "Nódulos de tireoide: quando investigar?"
];

export default function BlogPage() {
  return (
    <Section title="Blog Educativo" subtitle="Conteúdo informativo para fortalecer prevenção e autocuidado. Não substitui consulta médica.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post} className="card">
            <h3 className="font-semibold">{post}</h3>
            <p className="mt-2 text-sm text-slate-600">Resumo inicial do artigo com linguagem leiga, ética e sem promessas de resultado.</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
