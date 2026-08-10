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

export const insights = {
  headline: "Insights",
  intro: "Perspectives on people, transformation and the future of HR.",
  items: [
    {
      slug: "why-successful-transformation-starts-with-people",
      category: "Transformation",
      title: "Why successful transformation starts with people",
      description:
        "Organizational transformation is often designed around structures, processes and targets. But sustainable change depends on something more fundamental — whether people understand, trust and can execute the change.",
      image: "/images/insight-transformation.png",
      imageAlt:
        "Empty modern boardroom with soft morning light and city view",
      imagePosition: "center 45%",
      body: [
        "Organizational transformation is often designed around structures, processes and targets. These elements matter — but they are rarely what determines whether change endures.",
        "Sustainable transformation depends on whether people understand the direction, trust the leadership behind it, and have the capacity to execute in practice. When that foundation is missing, even well-designed programmes struggle to deliver lasting impact.",
        "A people-centred approach does not mean delaying decisions. It means aligning strategy, communication, leadership behaviour and workforce realities so change can be implemented with clarity and credibility.",
        "For senior leaders, the practical question is not only what will change — but how people across the organisation will experience, interpret and carry that change forward.",
      ],
    },
    {
      slug: "leading-through-organizational-change",
      category: "Leadership",
      title: "Leading through organizational change",
      description:
        "Periods of change demand more from leaders than communication alone. Clarity, trust and consistency become critical when organizations and teams are navigating uncertainty.",
      image: "/images/insight-leadership.png",
      imageAlt:
        "Senior professionals walking in conversation through an office corridor",
      imagePosition: "center 22%",
      body: [
        "Periods of organisational change place particular demands on leadership. Communication remains essential, but it is not enough on its own.",
        "Teams look for clarity about what is known and what is still being decided. They also look for consistency between what leaders say and how leaders act — especially when uncertainty is high.",
        "Trust is built through presence, honesty and follow-through. Leaders who can hold difficult conversations, listen carefully and remain steady under pressure create the conditions for people to stay engaged through transition.",
        "Effective change leadership is therefore both strategic and deeply human: setting direction while supporting the people who must deliver it.",
      ],
    },
    {
      slug: "ai-will-change-hr-the-question-is-how-we-use-it",
      category: "Future of HR",
      title: "AI will change HR. The question is how we use it.",
      description:
        "AI can improve efficiency, decision-making and employee experience — but successful adoption requires more than technology. HR has an important role in shaping how AI becomes part of the organization.",
      image: "/images/insight-ai-hr.png",
      imageAlt:
        "Notebook, pen and closed laptop on a refined executive desk",
      imagePosition: "center 65%",
      body: [
        "Artificial intelligence will reshape many aspects of HR work — from administration and analytics to how employees access support and information.",
        "The opportunity is significant: better efficiency, stronger decision-making and improved employee experience. The risk is equally real if technology is introduced without clear purpose, governance and human judgement.",
        "Successful adoption is not only a systems question. It is an organisational one. HR has an important role in shaping how AI is used, where human oversight remains essential, and how people are supported through the change.",
        "The organisations that benefit most will treat AI as part of a broader people and operating-model agenda — not as a stand-alone technology project.",
      ],
    },
  ],
} as const;

export const footer = {
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
  ],
} as const;
