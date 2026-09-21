export const profile = {
  name: 'Jev Forsberg',
  bio: "I'm an Engineering Manager at Grafana Labs, leading a team that builds observability tooling, CI/CD release infrastructure, and high-performance data visualizations used by millions. Before code, I spent a decade in non-profit leadership and civil rights advocacy — that background still shapes how I build software and grow teams.",
  gitHub: 'https://github.com/baldm0mma',
  linkedIn: 'https://www.linkedin.com/in/jev-forsberg/',
  resume:
    'https://docs.google.com/document/d/1MoI79FicxpSulyBmHHVQ5TZyXoh8P6Sb_DUNDslSLvs/edit?usp=sharing',
  email: 'mailto:jev.forsberg@gmail.com',
};

export const skills = [
  {
    category: 'Leadership',
    items: [
      'Team growth',
      'Career development',
      'Roadmap & delivery',
      'Mentorship',
      'Hiring',
      'Open source stewardship',
    ],
  },
  {
    category: 'Observability',
    items: ['OpenTelemetry', 'Prometheus', 'Loki', 'Pyroscope', 'Grafana Alloy'],
  },
  { category: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Elixir'] },
  {
    category: 'Infrastructure',
    items: ['Kubernetes', 'Docker', 'GCP', 'Terraform', 'CI/CD', 'GitHub Actions'],
  },
  { category: 'Frontend', items: ['React', 'GraphQL', 'Apollo'] },
  { category: 'Data', items: ['PostgreSQL', 'ElasticSearch'] },
];

export const experience = [
  {
    id: 1,
    company: 'Grafana Labs',
    url: 'https://grafana.com',
    role: 'Engineering Manager',
    dates: 'Feb 2026 – Present',
    description:
      'Leading an engineering team building observability tooling, CI/CD release infrastructure, and high-performance data visualizations used by millions. Focused on team growth, delivery, and technical direction while staying close to the code.',
  },
  {
    id: 2,
    company: 'Grafana Labs',
    url: 'https://grafana.com',
    role: 'Senior Software Engineer',
    dates: 'Dec 2022 – Feb 2026',
    description:
      'Built observability tooling, CI/CD release pipelines, and high-performance data visualizations. Work spanned full-stack development in Go, Python, and TypeScript to infrastructure automation with GitHub Actions, Drone, and Terraform.',
  },
  {
    id: 3,
    company: 'TurbineLabs',
    url: null,
    role: 'Senior Full Stack Software Engineer',
    dates: 'Dec 2019 – Dec 2022',
    description:
      'Senior engineer and FE team lead, building ML-driven data ingestion pipelines in Python and Elixir, and leading architecture decisions for a TypeScript/React/Apollo frontend. Mentored junior and mid-level engineers across craft and career growth.',
  },
  {
    id: 4,
    company: 'SchoolSAFE Communications',
    url: null,
    role: 'Software Engineer',
    dates: 'Feb 2019 – Dec 2019',
    description:
      "Re-engineered legacy emergency communication software for Colorado public schools. Rebuilt a Flash/PHP system as a React/PostgreSQL stack with IoT device integration and JWT-based auth.",
  },
  {
    id: 5,
    company: 'Blank Slate Solutions',
    url: null,
    role: 'Contract Web Developer',
    dates: 'Mar 2017 – Feb 2019',
    description:
      'Designed and built full-featured websites for dozens of clients using HTML, CSS, and JavaScript.',
  },
];
