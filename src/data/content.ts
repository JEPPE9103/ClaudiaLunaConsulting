export const site = {
  name: "Claudia Luna Consulting",
  shortName: "Claudia Luna",
  descriptor: "People · Transformation · Business",
  descriptorCompact: "PEOPLE · TRANSFORMATION · BUSINESS",
  tagline: "People strategy for business transformation.",
  location: "Stockholm",
  email: "hello@claudialunaconsulting.com",
  linkedIn: "https://www.linkedin.com/in/", // Replace with Claudia's LinkedIn profile URL
  copyright: "© Claudia Luna Consulting",
} as const;

export const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  headlineLead: "People strategy for",
  headlineAccent: "business transformation.",
  supporting:
    "Senior HR advisory helping organizations navigate transformation, organizational change and complex people challenges.",
  cta: "Discuss an assignment",
  focusAreas: [
    "Transformation",
    "Strategic HR",
    "Employee Relations",
    "Leadership",
    "AI in HR",
  ],
} as const;

export const expertise = {
  headline: "HR expertise when business gets complex.",
  items: [
    {
      number: "01",
      title: "Transformation & Change",
      points: [
        "Organizational transformation",
        "Restructuring & change management",
        "Workforce planning",
        "Stakeholder alignment",
      ],
      href: "#contact",
    },
    {
      number: "02",
      title: "People & Leadership",
      points: [
        "Strategic HR partnering",
        "Employee & labor relations",
        "Leadership advisory & coaching",
        "Governance & compliance",
      ],
      href: "#contact",
    },
    {
      number: "03",
      title: "Future of HR",
      points: [
        "AI in HR & digital transformation",
        "HR operating models",
        "Process optimization",
        "Future workforce strategies",
      ],
      href: "#contact",
    },
  ],
} as const;

export const experienceStrip = {
  headline: "Experience across complex organizations.",
  items: [
    {
      title: "Europe",
      description: "Extensive international HR experience",
      icon: "europe" as const,
    },
    {
      title: "Board Level",
      description: "Board Member experience & governance",
      icon: "board" as const,
    },
    {
      title: "Transformation",
      description: "Complex organizational change & restructuring",
      icon: "transform" as const,
    },
    {
      title: "People Focus",
      description: "Partnership with leaders, employees and stakeholders",
      icon: "people" as const,
    },
  ],
} as const;

export const caseStudies = {
  headline: "Selected experience",
  items: [
    {
      id: "european-transformation",
      title: "European Transformation Program",
      description:
        "Led and supported organizational transformation across multiple European markets, partnering with senior leaders, employee representatives and cross-functional stakeholders.",
      href: "#contact",
    },
    {
      id: "employee-relations",
      title: "Complex Employee Relations",
      description:
        "Strategic support in complex employee and labor relations during organizational change, balancing business objectives, compliance and employee considerations.",
      href: "#contact",
    },
    {
      id: "ai-adoption-hr",
      title: "AI Adoption in HR",
      description:
        "Supporting AI adoption and digital HR initiatives designed to improve efficiency, decision-making and employee experience.",
      href: "#contact",
    },
  ],
} as const;

export const statement = {
  quote:
    "Transformation isn't only an organizational challenge. It's a people challenge.",
  attribution: "Claudia Luna",
} as const;

export const about = {
  headline: "Strategic HR experience. Business perspective.",
  paragraphs: [
    "Claudia Luna is a senior HR leader and advisor with extensive experience supporting global organizations through transformation, organizational change and strategic HR initiatives across Europe.",
    "Her experience includes partnering with senior leadership, employee representatives and cross-functional stakeholders on complex transformation programs, organizational restructuring, governance and employee relations.",
    "Alongside her HR leadership experience, Claudia serves as a Board Member of Verizon Sweden AB and has a strong interest in AI adoption, digital transformation and the future of HR.",
  ],
} as const;

export const contact = {
  headline: "Facing a people or organizational challenge?",
  text: "Let's discuss how Claudia Luna Consulting can support your organization.",
  cta: "Get in touch",
} as const;

export const insightsPlaceholder = {
  headline: "Insights",
  text: "Perspectives on people strategy, transformation and the future of HR will appear here.",
} as const;

export const footer = {
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
  ],
} as const;
