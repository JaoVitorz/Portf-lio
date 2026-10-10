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
    "QA em crescimento com base sólida de desenvolvimento: testo, automatizo e também construo software.",
  summary:
    "Entendo o produto dos dois lados: desenvolvimento e qualidade.",
  photo: "/foto-terno.png" as string | null, // Caminho da foto em /public
  resume: null as string | null, // [PREENCHER currículo PDF]: caminho em /public
  links: {
    github: "https://github.com/JaoVitorz",
    dockerHub: "https://hub.docker.com/u/joaovitorjesus",
    linkedIn: null as string | null, // [PREENCHER LinkedIn]
    email: null as string | null, // [PREENCHER e-mail]
  },
  about: [
    "Minha trajetória começou como Operador I na Flextronics, em Sorocaba (SP). Migrei para testes de software por meio de um processo interno e hoje atuo como QA Tester Jr.",
    "Curso Desenvolvimento de Software Multiplataforma na Fatec Votorantim. Sigo aprofundando testes, automação e desenvolvimento full stack para contribuir com produtos mais confiáveis e bem construídos.",
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
      description: "Formação superior em andamento.",
    },
    {
      period: "Atual",
      type: "Experiência",
      title: "QA Tester Jr",
      place: "[PREENCHER empresa de QA]",
      description: "Migração para testes de software por meio de processo interno.",
    },
    {
      period: "Anterior",
      type: "Experiência",
      title: "Operador I",
      place: "Flextronics · Sorocaba, SP",
      description: "Experiência anterior na operação industrial.",
    },
  ],
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
    webDemo: null as string | null, // [PREENCHER demo web]
    screenshots: [
      { label: "Web / tela principal", src: null as string | null },
      { label: "Web / fluxo de adoção", src: null as string | null },
      { label: "Mobile / autenticação", src: null as string | null },
    ], // [PREENCHER screenshots]: caminhos de arquivos em /public
  },
} as const;
