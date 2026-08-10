export const site = {
  name: "Claudia Luna Consulting",
  shortName: "Claudia Luna",
  descriptor: "People. Transformation. Business.",
  descriptorCompact: "PEOPLE. TRANSFORMATION. BUSINESS.",
  tagline: "Turning people strategy into business impact.",
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
  headlineLead: "Turning people\nstrategy into",
  headlineAccent: "business impact.",
  supporting:
    "Senior HR advisory for organizations navigating transformation, organizational change and complex people challenges.",
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
  headline: "How I help organizations",
  items: [
    {
      id: "transformation",
      icon: "transform" as const,
      title: "Transformation\n& Change",
      description:
        "Leading complex organizational transformation and restructuring with a people-first approach.",
      href: "#contact",
    },
    {
      id: "strategic-hr",
      icon: "advisory" as const,
      title: "Strategic\nHR Advisory",
      description:
        "Strategic HR partnering that enables leaders to make better people decisions.",
      href: "#contact",
    },
    {
      id: "employee-relations",
      icon: "relations" as const,
      title: "Employee &\nLabor Relations",
      description:
        "Navigating complex employee relations and labor matters with professionalism and care.",
      href: "#contact",
    },
    {
      id: "interim",
      icon: "interim" as const,
      title: "Interim HR\nLeadership",
      description:
        "Providing senior HR leadership and stability during periods of change and growth.",
      href: "#contact",
    },
    {
      id: "ai-hr",
      icon: "ai" as const,
      title: "AI in HR & Digital\nTransformation",
      description:
        "Driving AI adoption and digital HR solutions for the future of work.",
      href: "#contact",
    },
  ],
} as const;

export const experienceStrip = {
  headline: "Experience across\ncomplex organizations",
  items: [
    {
      title: "International Experience",
      description: "Extensive HR experience across Europe.",
      icon: "europe" as const,
    },
    {
      title: "Board Level Perspective",
      description: "Board Member experience & governance.",
      icon: "board" as const,
    },
    {
      title: "Transformation Expertise",
      description: "Leading complex change & restructuring.",
      icon: "transform" as const,
    },
    {
      title: "People Focused",
      description: "Strong partnerships with leaders & stakeholders.",
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
        "Led and supported organizational transformation across multiple European markets, partnering with senior leaders and employee representatives.",
      href: "#contact",
      image: "/images/case-european-transformation.png",
      imageAlt:
        "Boardroom presentation on a European transformation roadmap",
    },
    {
      id: "employee-relations",
      title: "Complex Employee Relations",
      description:
        "Strategic support in complex employee and labor relations during organizational change, balancing business objectives and compliance.",
      href: "#contact",
      image: "/images/case-employee-relations.png",
      imageAlt:
        "Strategic advisory conversation on complex employee relations",
    },
    {
      id: "ai-adoption-hr",
      title: "AI Adoption in HR",
      description:
        "Supporting AI adoption and digital HR initiatives designed to improve efficiency, decision-making and employee experience.",
      href: "#contact",
      image: "/images/case-ai-adoption.png",
      imageAlt: "People analytics dashboard supporting AI adoption in HR",
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
  headline: "Facing a people or\norganizational challenge?",
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
