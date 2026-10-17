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
- **Perfil profissional:** edite `positioning` (introdução), `summary` (resumo), os títulos e textos de `about` (quem sou, o que faço e formação) e `timeline` (experiência e formação). Revise cargos e atividades para que correspondam ao seu currículo.
- **Links:** o LinkedIn informado está em `links.linkedIn`; preencha `links.email` e `resume`. Enquanto forem `null`, o site mostra indicadores sem links ativos. `petJoyful.webDemo` já aponta para a versão publicada; atualize se a URL mudar.
- **Certificações:** os itens informados a partir do LinkedIn estão em `certifications`. Edite título, instituição, emissão, validade, código e link da credencial nesse campo. Os cursos mais recentes aparecem primeiro; os demais ficam em “Outras certificações e cursos”. Validades encerradas são indicadas no site.
- **Foto e currículo:** a foto atual está em `public/foto-terno.png` e é definida por `photo`. Para trocá-la, coloque outro arquivo em `public/` e atualize esse caminho. Ela aparece com suas cores originais e cantos arredondados. Para o currículo, coloque o PDF em `public/` e informe um caminho como `"/curriculo.pdf"` em `resume`.
- **Capturas de tela:** as telas Home e Perfil da versão web, e Início e Perfil do aplicativo mobile, estão em `public/projects/`. O destaque web e o card mobile usam essas imagens em `src/components/ProjectVisual.tsx`; a galeria do estudo de caso usa os caminhos em `petJoyful.screenshots[].src`. Substitua os arquivos e atualize os caminhos se as telas mudarem.
- **Áreas de atuação:** edite `skillGroups` para alterar os cinco grupos, descrições e quatro ferramentas exibidas por grupo. Os SVGs ficam em `public/brand-icons/`; mantenha o caminho `icon` correspondente. Os indicadores permitem escolher um grupo e a rotação de 4 segundos pode ser pausada. A troca sobrepõe brevemente o grupo anterior e o próximo, como no protótipo do Figma. Em `skills` permanece a lista completa, aberta pelo controle “Todas as competências”. Com movimento reduzido, a troca usa apenas fades curtos.
- **Textura de fundo:** substitua `public/fabric-of-squares.png` para trocar o padrão. Ajuste `--texture-opacity` em `src/app/globals.css` para controlar a intensidade nos temas claro e escuro.

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
| Lista de certificações do LinkedIn | `certifications` em `src/data/profile.ts` |
| E-mail de contato | `links.email` |
| Currículo PDF | Arquivo em `public/` + `resume` |
| URL pública do portfólio | `NEXT_PUBLIC_SITE_URL` no ambiente de build |

O destaque do Pet Joyful, o card mobile e as quatro imagens do estudo de caso usam capturas reais.

Os ícones do carrossel vieram da coleção [Simple Icons](https://simpleicons.org/) e usam suas cores de marca; as marcas pertencem aos respectivos titulares.
