/**
 * Conteúdo editável do portfólio. Substitua os campos marcados com [PREENCHER]
 * antes de publicar. Não é necessário editar componentes para atualizar textos.
 */
const firstName = "João";
const lastName = "Vitor Santos de Jesus";

export const profile = {
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  role: "QA Tester Jr",
  location: "Votorantim, SP, Brasil",
  positioning:
    "Atuo em testes de software e automação. Minha formação em desenvolvimento me ajuda a compreender interfaces, APIs e o funcionamento do produto como um todo.",
  summary:
    "Sou QA Tester Jr e estudante de Desenvolvimento de Software Multiplataforma. Minha trajetória reúne operação industrial, testes de software e desenvolvimento de aplicações.",
  photo: "/foto-terno.png" as string | null, // Caminho da foto em /public
  resume: null as string | null, // [PREENCHER currículo PDF]: caminho em /public
  links: {
    github: "https://github.com/JaoVitorz",
    dockerHub: "https://hub.docker.com/u/joaovitorjesus",
    linkedIn: "https://www.linkedin.com/in/jo%C3%A3o-santos-jesus/" as string | null,
    email: null as string | null, // [PREENCHER e-mail]
  },
  about: [
    {
      title: "Quem sou",
      text: "Iniciei minha carreira como Operador I na Flextronics, em Sorocaba (SP). A rotina industrial me ensinou a seguir processos e observar detalhes. Depois, migrei para a área de tecnologia por meio de um processo interno e passei a atuar como QA Tester Jr.",
    },
    {
      title: "O que faço",
      text: "Na área de qualidade de software, trabalho com testes funcionais, de regressão e de confirmação de correções para verificar se as funcionalidades atendem ao esperado. Também aprofundo meus conhecimentos em automação de testes e uso minha experiência em desenvolvimento para analisar interfaces e APIs.",
    },
    {
      title: "Como me desenvolvo",
      text: "Curso Desenvolvimento de Software Multiplataforma na Fatec Votorantim. No Pet Joyful, projeto integrador desenvolvido ao longo de cinco semestres, participei da construção de uma solução web e mobile apoiada por uma API. Essa prática aproxima o que estudo da análise de qualidade e da entrega de software.",
    },
  ],
  languages: ["Português nativo", "Inglês avançado"],
  skills: [
    {
      group: "Testes / QA",
      items: [
        "Testes funcionais",
        "Regressão",
        "Smoke",
        "Sanity",
        "Re-teste",
        "Jest",
        "React Testing Library",
        "Supertest",
        "Postman",
        "JIRA",
        "Azure DevOps",
        "SonarCloud",
      ],
    },
    {
      group: "Front-end",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "TypeScript",
        "Storybook",
        "Tailwind / CSS",
      ],
    },
    {
      group: "Back-end",
      items: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Swagger / OpenAPI"],
    },
    {
      group: "DevOps",
      items: [
        "Docker",
        "GitHub Actions (CI/CD)",
        "Render",
        "Vercel",
        "EAS (Expo)",
        "Better Stack",
        "Winston",
      ],
    },
    {
      group: "Outros",
      items: [
        "Python (Flask)",
        "Git",
        "UX: heurísticas de Nielsen, personas e jornada do usuário",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Testes / QA",
      description: "Qualidade em cada etapa, da validação manual à automação.",
      accent: "#C21325",
      tools: [
        { name: "Jest", icon: "/brand-icons/jest.svg" },
        { name: "Testing Library", icon: "/brand-icons/testinglibrary.svg" },
        { name: "Postman", icon: "/brand-icons/postman.svg" },
        { name: "JIRA", icon: "/brand-icons/jira.svg" },
      ],
    },
    {
      title: "Front-end",
      description: "Interfaces responsivas com atenção à experiência.",
      accent: "#61DAFB",
      tools: [
        { name: "React", icon: "/brand-icons/react.svg" },
        { name: "Next.js", icon: "/brand-icons/nextdotjs.svg", darkLogo: true },
        { name: "TypeScript", icon: "/brand-icons/typescript.svg" },
        { name: "Tailwind CSS", icon: "/brand-icons/tailwindcss.svg" },
      ],
    },
    {
      title: "Back-end",
      description: "APIs e serviços com atenção à estrutura e à segurança.",
      accent: "#5FA04E",
      tools: [
        { name: "Node.js", icon: "/brand-icons/nodedotjs.svg" },
        { name: "Express", icon: "/brand-icons/express.svg", darkLogo: true },
        { name: "MongoDB", icon: "/brand-icons/mongodb.svg" },
        { name: "Swagger", icon: "/brand-icons/swagger.svg" },
      ],
    },
    {
      title: "DevOps",
      description: "Entrega, integração e acompanhamento dos sistemas.",
      accent: "#2496ED",
      tools: [
        { name: "Docker", icon: "/brand-icons/docker.svg" },
        { name: "GitHub Actions", icon: "/brand-icons/githubactions.svg" },
        { name: "Vercel", icon: "/brand-icons/vercel.svg", darkLogo: true },
        { name: "Render", icon: "/brand-icons/render.svg", darkLogo: true },
      ],
    },
    {
      title: "Outros",
      description: "Ferramentas que ampliam minha prática em produto e desenvolvimento.",
      accent: "#8A8A8A",
      tools: [
        { name: "Python", icon: "/brand-icons/python.svg" },
        { name: "Git", icon: "/brand-icons/git.svg" },
        { name: "Storybook", icon: "/brand-icons/storybook.svg" },
        { name: "Expo", icon: "/brand-icons/expo.svg", darkLogo: true },
      ],
    },
  ],
  featured: {
    eyebrow: "Projeto em destaque / Estudo de caso",
    title: "Pet Joyful",
    description:
      "Rede social de adoção de pets que conecta adotantes, ONGs e clínicas veterinárias. Projeto integrador da faculdade, desenvolvido ao longo de cinco semestres.",
    tags: ["Next.js", "Node.js", "MongoDB", "React Native", "QA"],
  },
  projects: [
    {
      number: "02",
      title: "Study Organizer",
      category: "Python / Produto",
      description:
        "Aplicação em Python que evoluiu de uma interface de linha de comando para uma aplicação web com Flask e, depois, para uma janela nativa com pywebview.",
      tags: ["Python", "Flask", "pywebview"],
      href: null as string | null,
    },
    {
      number: "03",
      title: "Pet Joyful Mobile",
      category: "Mobile / React Native",
      description:
        "Versão mobile do Pet Joyful em React Native e Expo, conectada ao mesmo backend. A migração e as decisões técnicas estão no estudo de caso.",
      tags: ["React Native", "Expo SDK 54", "Expo Router"],
      href: "/projetos/pet-joyful/",
    },
  ],
  quality: {
    introduction:
      "Combino testes manuais, automação e análise de código para encontrar falhas antes que afetem a experiência de uso.",
    metrics: [
      { value: "46", label: "testes de front-end passando" },
      { value: "05", label: "suítes Jest no front-end" },
      { value: "≥ 80%", label: "meta de cobertura de integração" },
    ],
    practices: [
      "Testes funcionais, regressão, smoke, sanity e re-teste",
      "Integração de API com Jest, Supertest e MongoMemoryServer",
      "Análise estática com SonarCloud no pipeline de CI/CD",
      "Documentação de API em OpenAPI 3.0 e componentes no Storybook",
    ],
    note: "A cobertura de 80% é uma meta, não um resultado já alcançado.",
  },
  timeline: [
    {
      period: "Em andamento",
      type: "Formação",
      title: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
      place: "Fatec Votorantim",
      description: "Formação superior em andamento, com projetos práticos para web, API e mobile, incluindo o Pet Joyful.",
    },
    {
      period: "Atual",
      type: "Experiência",
      title: "QA Tester Jr",
      place: "FIT - Instituto de Tecnologia · Sorocaba, SP",
      description: "Atuação em qualidade de software após uma migração interna para a área de tecnologia, com foco na validação de funcionalidades e na investigação de falhas.",
    },
    {
      period: "Anterior",
      type: "Experiência",
      title: "Operador I",
      place: "Flextronics · Sorocaba, SP",
      description: "Experiência em operação industrial, com rotina orientada por processos, atenção a detalhes e cumprimento de padrões de produção.",
    },
  ],
  // Certificações informadas pelo titular a partir da seção "Licenças e certificados" do LinkedIn.
  certifications: [
    {
      title: "Boas Práticas em Segurança da Informação e Cyber",
      issuer: "Udemy",
      issued: "out. de 2026",
      credentialId: "UC-f6f10da1-973e-462b-9c8a-90118b8a80f",
      group: "recent",
    },
    {
      title: "Como Dominar a Qualidade do Software do Início ao Fim",
      issuer: "Udemy",
      issued: "ago. de 2026",
      credentialUrl: "https://ude.my/UC-3bae35cf-744f-4a04-b9ef-6ebe1134af8e",
      group: "recent",
    },
    {
      title: "Fundamentos do SCRUM Agile | Rápido e Prático",
      issuer: "Udemy",
      issued: "jul. de 2026",
      group: "recent",
    },
    {
      title: "Design Patterns Básico",
      issuer: "Centro Paula Souza",
      issued: "fev. de 2026",
      credentialId: "a2d4c7e2-a319-4afd-9589-a9d2d93b4444",
      group: "recent",
    },
    {
      title: "Front-End Básico",
      issuer: "Centro Paula Souza",
      issued: "mai. de 2025",
      credentialId: "843f992d-f93a-4ad7-bd89-17ae700bb524",
      group: "recent",
    },
    {
      title: "Segurança cibernética",
      issuer: "Senai São Paulo",
      issued: "dez. de 2023",
      group: "recent",
    },
    {
      title: "Advanced English",
      issuer: "Unoprime Capacitação Profissional",
      issued: "out. de 2022",
      expires: "out. de 2023",
      group: "additional",
    },
    {
      title: "Intermediate English",
      issuer: "Unoprime Capacitação Profissional",
      issued: "jul. de 2020",
      expires: "dez. de 2021",
      group: "additional",
    },
    {
      title: "Auxiliar em Design de Web Sites",
      issuer: "ETEC Prof. Elias Miguel Jr.",
      issued: "fev. de 2020",
      expires: "dez. de 2022",
      group: "additional",
    },
    {
      title: "Auxiliar Informática pra internet",
      issuer: "ETEC Prof. Elias Miguel Jr.",
      issued: "fev. de 2020",
      expires: "dez. de 2022",
      group: "additional",
    },
    {
      title: "Técnico informática para a internet",
      issuer: "ETEC Prof. Elias Miguel Jr.",
      issued: "fev. de 2020",
      expires: "dez. de 2022",
      group: "additional",
    },
    {
      title: "Consciência ambiental",
      issuer: "Prefeitura Municipal de Votorantim",
      issued: "mai. de 2019",
      expires: "mai. de 2019",
      group: "additional",
    },
    {
      title: "Informática avançado",
      issuer: "Unoprime Capacitação Profissional",
      issued: "mai. de 2018",
      expires: "dez. de 2021",
      group: "additional",
    },
    {
      title: "Operador de Computador",
      issuer: "Unoprime Capacitação Profissional",
      issued: "abr. de 2018",
      expires: "dez. de 2021",
      group: "additional",
    },
    {
      title: "Basic English",
      issuer: "Unoprime Capacitação Profissional",
      issued: "abr. de 2018",
      expires: "jun. de 2020",
      group: "additional",
    },
    {
      title: "Evolução Profissional",
      issuer: "Unoprime Capacitação Profissional",
      issued: "ago. de 2016",
      expires: "set. de 2016",
      group: "additional",
    },
  ] as Array<{
    title: string;
    issuer?: string;
    issued?: string;
    expires?: string;
    credentialId?: string;
    credentialUrl?: string;
    group: "recent" | "additional";
  }>,
  contact: {
    title: "Vamos conversar?",
    description:
      "Aberto a conversas sobre qualidade de software, desenvolvimento e oportunidades de colaboração.",
  },
  petJoyful: {
    kicker: "Estudo de caso / Projeto integrador",
    title: "Pet Joyful",
    lead:
      "Uma rede social de adoção de pets que aproxima adotantes, ONGs e clínicas veterinárias por meio de web, API e aplicativo mobile.",
    overview: [
      { label: "Duração", value: "5 semestres" },
      { label: "Escopo", value: "Web · API · Mobile" },
      { label: "Contexto", value: "Projeto integrador da faculdade" },
    ],
    context:
      "O Pet Joyful nasceu como projeto integrador da faculdade e evoluiu ao longo de cinco semestres. A proposta é conectar pessoas interessadas em adoção, ONGs e clínicas veterinárias em uma mesma experiência digital.",
    problem:
      "A adoção e o cuidado com pets envolvem diferentes perfis e informações dispersas. O projeto organiza cadastro, conteúdo, comunicação e descoberta de clínicas em uma plataforma compartilhada.",
    solution:
      "A solução reúne cadastro e login para Adotante, ONG e Veterinário; posts, mensagens e denúncias; mapa de clínicas próximas; e o PetBot, chatbot com Gemini 2.0 Flash e RAG. O PetBot usa Function Calling em consultas analíticas e moderação de conteúdo.",
    architecture: [
      { name: "Web", detail: "Next.js · deploy na Vercel" },
      { name: "API", detail: "Node.js, Express e TypeScript · deploy na Render" },
      { name: "Dados", detail: "MongoDB Atlas" },
      { name: "Mobile", detail: "React Native, Expo SDK 54 e Expo Router" },
    ],
    role:
      "Minha atuação no projeto conecta desenvolvimento e qualidade. Realizei uma auditoria de segurança baseada em seis pilares e trabalhei na investigação dos problemas reais descritos abaixo. Os demais destaques mostram a engenharia do projeto como um todo.",
    technicalHighlights: [
      {
        title: "Entrega e observabilidade",
        text: "Pipeline CI/CD com GitHub Actions, Docker, Docker Hub e SonarCloud (SAST). Ambientes HML e PROD separados, SemVer, promoção de imagens Docker, logs estruturados com Winston e alertas no Better Stack.",
      },
      {
        title: "Qualidade em camadas",
        text: "No front-end, 46 testes passando em 5 suítes com Jest. No back-end, testes de integração com Jest, Supertest e MongoMemoryServer. A meta de cobertura desses testes é ≥ 80%.",
      },
      {
        title: "Código e documentação",
        text: "API documentada em OpenAPI 3.0 (Swagger), componentes no Storybook, TypeScript sem any, ESLint e Prettier.",
      },
      {
        title: "Experiência mobile",
        text: "Migração de Next.js para React Native/Expo com o mesmo backend. JWT em expo-secure-store, Axios com interceptor de autenticação e validação com Yup. A identidade visual do app usa tema centralizado (verde #34c35c).",
      },
    ],
    security: {
      intro:
        "Auditoria baseada em seis pilares da segurança da informação: confidencialidade, integridade, disponibilidade, autenticidade, irretratabilidade e conformidade com a LGPD. O resultado incluiu uma matriz de risco de 12 itens e um roadmap de 3 fases.",
      implemented: ["bcrypt", "JWT", "CORS", "SecureStore no aplicativo"],
      roadmap: [
        "Rate limiting",
        "Refresh token",
        "Trilha de auditoria",
        "Endpoints LGPD",
        "Autenticação em dois fatores (2FA)",
      ],
    },
    debugging: [
      {
        code: "413",
        title: "Requisição maior que o limite",
        cause: "O body ultrapassava o limite padrão do Express.",
        resolution: "Identificação do limite de payload e ajuste da configuração para a necessidade da aplicação.",
      },
      {
        code: "500",
        title: "Validação de título",
        cause: "A validação do Mongoose restringia o título a 200 caracteres.",
        resolution: "Rastreamento da validação e alinhamento do limite com a entrada aceita.",
      },
      {
        code: "TIMEOUT",
        title: "Cold start no Render",
        cause: "O plano gratuito da Render podia iniciar o serviço após um período de inatividade.",
        resolution: "Diagnóstico do tempo de inicialização para distinguir indisponibilidade temporária de falha na API.",
      },
      {
        code: "TS",
        title: "ES Modules × CommonJS",
        cause: "Configurações de módulo incompatíveis geravam conflito no TypeScript.",
        resolution: "Ajuste das configurações para manter o mesmo sistema de módulos na execução e no build.",
      },
    ],
    learnings:
      "O projeto reforçou a importância de validar fluxos completos, observar o comportamento em produção e registrar decisões técnicas. Testes, documentação e logs ajudam a transformar sintomas em causas identificáveis.",
    nextSteps:
      "O roadmap de segurança prevê rate limiting, refresh token, trilha de auditoria, endpoints LGPD e 2FA. Esses itens estão planejados; não são apresentados como funcionalidades entregues.",
    links: [
      { label: "Backend no GitHub", href: "https://github.com/JaoVitorz/Pet-Joyful-Backend" },
      {
        label: "Web no GitHub",
        href: "https://github.com/JaoVitorz/Pet-Joyful---Projeto-Integrador--NextJs",
      },
      {
        label: "Mobile no GitHub",
        href: "https://github.com/JaoVitorz/Tela-Login-e-Cadastro-React-Native",
      },
      { label: "API em produção", href: "https://pet-joyful-backend.onrender.com" },
    ],
    webDemo: "https://pet-joyful-projeto-integrador-nextjs.onrender.com/Home",
    screenshots: [
      { label: "Web / tela principal", src: "/projects/pet-joyful-home.png", format: "web" },
      { label: "Web / perfil", src: "/projects/pet-joyful-web-perfil.png", format: "web" },
      { label: "Mobile / início", src: "/projects/pet-joyful-mobile-home.png", format: "mobile" },
      { label: "Mobile / perfil", src: "/projects/pet-joyful-mobile-perfil.png", format: "mobile" },
    ],
  },
} as const;
