export const profile = {
  name: 'Jev Forsberg',
  bio: "I'm an Engineering Manager at Grafana Labs, leading a team that builds observability tooling, CI/CD release infrastructure, and high-performance data visualizations used by millions. Before code, I spent a decade in non-profit leadership and civil rights advocacy — that background still shapes how I build software and grow teams.",
  gitHub: 'https://github.com/baldm0mma',
  linkedIn: 'https://www.linkedin.com/in/jev-forsberg/',
  resume:
    'https://docs.google.com/document/d/1WDrzbRv81P2-SQPfn5ZAZcl9l5Fc_oocgzvm9Ct2p-4/edit?usp=sharing',
  email: 'mailto:jev.forsberg@gmail.com',
};

export const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'Elixir', 'Python'] },
  { category: 'Frontend', items: ['React', 'Vue.js', 'React Native'] },
  { category: 'APIs & Backend', items: ['Node.js', 'GraphQL', 'RESTful APIs'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'GCP', 'AWS', 'Terraform', 'CI/CD'] },
  { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'ElasticSearch'] },
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
    dates: 'Sep 2017 – Feb 2019',
    description:
      'Designed and built full-featured websites for dozens of clients using HTML, CSS, and JavaScript.',
  },
];
