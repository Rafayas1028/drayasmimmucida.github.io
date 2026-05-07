# Site institucional — Dra. Yasmim Mourão Mucida

## Stack
Next.js + TypeScript + Tailwind CSS.

## Rodar localmente
1. `npm install`
2. `npm run dev`
3. Acesse `http://localhost:3000`

## Build de produção
- `npm run build`
- `npm run start`

## Publicação na Vercel
1. Suba o projeto no GitHub.
2. Importe na Vercel.
3. Configure variáveis de ambiente (se houver backend futuro).
4. Deploy.

## Domínio .com
1. Comprar domínio em registrador.
2. Em **Vercel > Domains**, adicionar domínio.
3. Configurar DNS (A/CNAME) conforme instruções da Vercel.
4. Aguardar propagação e validar HTTPS.

## Campos obrigatórios para personalizar
Edite `data/site.ts`:
- CRM, RQE, WhatsApp, Instagram, endereço, telefone, e-mail, links de agendamento/mapa/portal.

## Portal do Paciente e Exames (LGPD)
A página de exames está em modo seguro (sem upload público).
Para integração real:
- Supabase (Auth + Storage privado), Firebase (Auth + Rules), iClinic/Feegow ou prontuário com área autenticada.
- Só permitir envio/download de exames após login e com trilha de auditoria.
