# Portfólio — João

Portfólio estático em **pt-BR** para apresentar a trajetória em QA/Testes e desenvolvimento full stack. Feito com Next.js (App Router), TypeScript e Tailwind CSS, com tema claro/escuro, estudo de caso dedicado ao Pet Joyful e exportação estática.

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para verificar a exportação:

```bash
npm run typecheck
npm run build
```

O build gera a pasta `out/`, pronta para hospedagem estática. A rota do estudo de caso é `/projetos/pet-joyful/`.

## Editar o conteúdo

Todas as informações pessoais, textos de apresentação, projetos, skills, trajetória, links e conteúdo do estudo de caso ficam em [`src/data/profile.ts`](src/data/profile.ts). Edite esse arquivo e salve; o servidor de desenvolvimento atualiza a página automaticamente.

- **Nome:** altere `lastName` no início do arquivo. `name` e o título do site são atualizados a partir dele.
- **Links:** preencha `links.linkedIn`, `links.email`, `resume` e `petJoyful.webDemo`. Enquanto forem `null`, o site mostra `[PREENCHER]` e evita links quebrados.
- **Foto e currículo:** a foto atual está em `public/foto-joao.png` e é definida por `photo`. Para trocá-la, coloque outro arquivo em `public/` e atualize esse caminho. Ela aparece em escala de cinza. Para o currículo, coloque o PDF em `public/` e informe um caminho como `"/curriculo.pdf"` em `resume`.
- **Capturas de tela:** coloque imagens em `public/pet-joyful/` e preencha `petJoyful.screenshots[].src` com caminhos como `"/pet-joyful/tela-principal.webp"`. As molduras já estão prontas; sem arquivo, exibem o placeholder.
- **Empresa de QA:** substitua o texto `"[PREENCHER empresa de QA]"` em `timeline`.

O arquivo [`public/og-image.svg`](public/og-image.svg) contém apenas o primeiro nome como elemento gráfico. Se quiser usar o nome completo na imagem de compartilhamento, edite esse SVG também.

## URL pública, SEO e exportação

Copie `.env.example` para `.env.local` se quiser testar metadados com sua URL final. Defina `NEXT_PUBLIC_SITE_URL` como a origem pública, **sem barra final** (por exemplo, `https://meu-site.vercel.app`). Esse valor alimenta canonical, Open Graph, `sitemap.xml` e `robots.txt`. O valor `https://example.com` é provisório e deve ser substituído antes da publicação.

`next.config.ts` usa `output: "export"`, `trailingSlash: true` e imagens sem otimização de servidor. Para hospedagem em subpasta, como GitHub Pages de repositório, use também `NEXT_PUBLIC_BASE_PATH=/nome-do-repositorio`. Para domínio na raiz, deixe a variável vazia. Um build novo é necessário após mudar essas variáveis.

O site tem favicon SVG, metadados SEO/Open Graph, sitemap, `robots.txt`, página 404 e HTML semântico. O objetivo de Lighthouse é **≥ 90** nas quatro categorias; confira os números após inserir conteúdo e publicar, pois eles dependem da hospedagem, das imagens escolhidas e do ambiente de teste.

## Deploy gratuito

### Vercel

1. Envie o projeto para um repositório GitHub.
2. Na Vercel, importe o repositório como projeto Next.js. O comando de build é `npm run build`; a configuração já exporta os arquivos estáticos.
3. Depois de conhecer a URL pública do projeto, configure `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente da Vercel e faça um novo deploy. Deixe `NEXT_PUBLIC_BASE_PATH` vazio, a menos que use uma subpasta.

### GitHub Pages

1. Envie o projeto para um repositório GitHub na branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**.
3. O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) instala dependências, define automaticamente a URL `https://USUARIO.github.io` e o caminho do repositório, gera `out/` e publica.
4. Se usar domínio próprio, ajuste `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_BASE_PATH` no workflow antes do próximo deploy. Para site de usuário (`USUARIO.github.io`), o workflow usa a raiz automaticamente.

As instruções seguem a [documentação de exportação estática do Next.js](https://nextjs.org/docs/app/guides/static-exports) e a [documentação de workflows do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## `[PREENCHER]` pendentes

| Item | Onde preencher |
| --- | --- |
| Sobrenome completo | `lastName` em `src/data/profile.ts` |
| URL do LinkedIn | `links.linkedIn` |
| E-mail de contato | `links.email` |
| Currículo PDF | Arquivo em `public/` + `resume` |
| Nome da empresa do cargo QA Tester Jr | `timeline` |
| URL da demo web do Pet Joyful | `petJoyful.webDemo` |
| Screenshot da tela principal web | `petJoyful.screenshots[0].src` |
| Screenshot do fluxo de adoção web | `petJoyful.screenshots[1].src` |
| Screenshot da autenticação mobile | `petJoyful.screenshots[2].src` |
| URL pública do portfólio | `NEXT_PUBLIC_SITE_URL` no ambiente de build |

As visualizações gráficas dos cards são ilustrações em CSS, identificadas como tal no site. Elas não representam capturas reais dos projetos.
