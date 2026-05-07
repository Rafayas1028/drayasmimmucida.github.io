import { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container-p">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
