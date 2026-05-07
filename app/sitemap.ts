import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://[DOMINIO].com";
  const routes = ["/", "/sobre", "/medicina-metabolica", "/saude-hormonal", "/saude-mental-e-metabolismo", "/areas-de-cuidado", "/como-funciona", "/blog", "/portal-do-paciente", "/portal-do-paciente/exames", "/contato", "/politica-de-privacidade", "/termos-de-uso"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
