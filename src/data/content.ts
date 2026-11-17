export type Locale = "sv" | "en";

export const defaultLocale: Locale = "sv";
export const locales: Locale[] = ["sv", "en"];

export const site = {
  name: "Claudia Luna Consulting",
  shortName: "Claudia Luna",
  email: "claudialunaconsulting@gmail.com",
  /**
   * Set to Claudia's real LinkedIn profile URL when available.
   * Empty string hides LinkedIn CTAs site-wide.
   */
  linkedIn: "",
  copyright: "© Claudia Luna Consulting",
} as const;

const sharedInsightMeta = {
  transformation: {
    slug: "why-successful-transformation-starts-with-people",
    image: "/images/insight-transformation-v2.png",
    imagePosition: "center 45%",
  },
  leadership: {
    slug: "leading-through-organizational-change",
    image: "/images/insight-leadership-v2.png",
    imagePosition: "center 22%",
  },
  ai: {
    slug: "ai-will-change-hr-the-question-is-how-we-use-it",
    image: "/images/insight-ai-hr-v2.png",
    imagePosition: "center 65%",
  },
} as const;

export const content = {
  sv: {
    navLinks: [
      { label: "Hem", href: "#top" },
      { label: "Om", href: "#about" },
      { label: "Tjänster", href: "#services" },
      { label: "Kontakt", href: "#contact" },
    ],
    header: {
      contactCta: "Kontakta Claudia",
      openMenu: "Öppna meny",
      closeMenu: "Stäng meny",
    },
    hero: {
      pill: "Senior HR · Transformation · Rådgivning",
      headline: "Senior HR-kompetens när din organisation behöver det som mest.",
      headlineAccent: "behöver det som mest.",
      supporting:
        "Strategiskt och operativt HR-stöd för organisationer som navigerar förändring, tillväxt och komplexa people-frågor.",
      body: "Claudia Luna Consulting stöttar ledare och organisationer med senior HR-kompetens inom transformation, employee relations, strategisk HR och interim ledarskap.",
      primaryCta: "Låt oss prata",
      secondaryCta: "Se tjänster",
      portraitAlt:
        "Professionellt porträtt av Claudia Luna, grundare av Claudia Luna Consulting",
    },
    about: {
      label: "Om Claudia",
      headline: "HR som fungerar i verkligheten.",
      paragraphs: [
        "Claudia Luna är en senior HR-ledare och rådgivare med omfattande erfarenhet av att stötta globala organisationer genom transformation, organisatorisk förändring och komplexa people-frågor i Europa.",
        "Hon arbetar nära seniora ledare, arbetstagarrepresentanter och tvärfunktionella team för att skapa praktiska HR-lösningar som stödjer både affären och medarbetarna.",
        "Hennes bakgrund inkluderar strategiskt HR-partnering, employee och labor relations, organisatorisk transformation, governance, ledarskapsrådgivning och digital HR.",
        "Vid sidan av sitt HR-arbete är Claudia styrelseledamot i Verizon Sweden AB.",
      ],
      closing:
        "Praktisk, affärsnära och fokuserad på att skapa meningsfulla resultat.",
      linkedInCta: "Kontakta på LinkedIn",
      portraitAlt: "Claudia Luna, senior HR-rådgivare",
    },
    services: {
      label: "Hur jag kan hjälpa",
      headline: "Senior HR-stöd — från strategi till genomförande.",
      intro:
        "Jag stöttar bolag som behöver erfaren HR-ledning, specialiststöd eller en senior rådgivare som snabbt kan kliva in och skapa struktur.",
      items: [
        {
          number: "01",
          title: "Strategisk HR & interim ledarskap",
          description:
            "Senior HR-ledning och strategiskt stöd vid förändring, tillväxt eller transition.",
          examples: [
            "Interim Senior HRBP / HR Lead",
            "HR-strategi",
            "Workforce planning",
            "Ledarskapsrådgivning",
            "HR operating models",
            "Governance",
          ],
        },
        {
          number: "02",
          title: "Transformation & förändring",
          description:
            "Stöd till organisationer genom omstrukturering, organisatorisk förändring och komplex transformation.",
          examples: [
            "Organisatorisk transformation",
            "Omstrukturering",
            "Change management",
            "Stakeholder alignment",
            "Workforce change",
            "Transformationsprogram",
          ],
        },
        {
          number: "03",
          title: "Employee & labor relations",
          description:
            "Senior stöd i komplexa employee relations- och arbetsrättsliga frågor.",
          examples: [
            "Employee relations",
            "Labor relations",
            "Samverkan med fack/works council",
            "Organisatoriska förändringar",
            "Compliance",
            "Komplexa medarbetarärenden",
          ],
        },
        {
          number: "04",
          title: "AI, digital HR & future of work",
          description:
            "Hjälper HR-funktioner att använda teknik och AI på praktiska och ansvarsfulla sätt.",
          examples: [
            "AI-adoption i HR",
            "HR-processförbättring",
            "Digital HR",
            "People analytics",
            "Automatisering",
            "Framtidens workforce",
          ],
        },
      ],
    },
    credibility: {
      headline: "Erfarenhet från komplexa, internationella organisationer.",
      items: [
        {
          title: "Internationell HR",
          description: "Erfarenhet av att stötta organisationer i Europa.",
        },
        {
          title: "Styrelseperspektiv",
          description: "Styrelsenivå inom governance och affärsperspektiv.",
        },
        {
          title: "Transformation",
          description:
            "Erfarenhet av organisatorisk förändring och omstrukturering.",
        },
        {
          title: "Business partnering",
          description: "Nära partnerskap med seniora ledare och stakeholders.",
        },
      ],
    },
    workingWith: {
      headline: "När är det rätt att ta in mig?",
      items: [
        {
          title: "Ni behöver senior HR-kompetens snabbt",
          description:
            "En erfaren HR-partner kan kliva in utan en lång rekryteringsprocess.",
        },
        {
          title: "Er organisation förändras",
          description:
            "Stöd vid omstrukturering, transformation eller organisatorisk tillväxt.",
        },
        {
          title: "En people-fråga har blivit komplex",
          description:
            "Senior vägledning i employee relations, ledarskap eller organisatoriska frågor.",
        },
        {
          title: "Ni behöver både strategi och genomförande",
          description:
            "Stöd som inte stannar vid rekommendationer — utan hjälper till att driva arbetet framåt.",
        },
      ],
    },
    contact: {
      headline: "Har ni en HR-utmaning att lösa?",
      text: "Oavsett om ni behöver interim HR-stöd, strategisk rådgivning eller hjälp att navigera organisatorisk förändring — låt oss prata.",
      cta: "Mejla Claudia",
      emailLabel: "E-post",
      linkedInLabel: "LinkedIn",
      linkedInCta: "Kontakta",
      form: {
        name: "Namn",
        company: "Företag",
        email: "E-post",
        message: "Meddelande",
        submit: "Skicka meddelande",
        sending: "Skickar...",
        successTitle: "Meddelandet är mottaget",
        successText:
          "Tack för att du hörde av dig. Claudia återkommer så snart som möjligt.",
        sendAnother: "Skicka ett nytt meddelande",
        privacyNote: "Genom att skicka godkänner du hur vi hanterar dina uppgifter.",
        privacyLink: "Läs mer om integritet",
        emailFallback: "Mejla istället",
        errors: {
          name: "Ange ditt namn.",
          company: "Ange ditt företag.",
          emailRequired: "Ange din e-postadress.",
          emailInvalid: "Ange en giltig e-postadress.",
          messageRequired: "Berätta hur jag kan hjälpa.",
          messageShort: "Ge gärna lite mer information.",
          messageLong: "Meddelandet är för långt. Korta gärna ner det.",
          rateLimited:
            "För många försök just nu. Vänta en stund eller mejla direkt.",
          notConfigured:
            "Formuläret är tillfälligt otillgängligt. Mejla gärna direkt.",
          generic:
            "Meddelandet kunde inte skickas. Försök igen eller mejla direkt.",
        },
      },
    },
    footer: {
      privacy: "Integritetspolicy",
      email: "E-post",
    },
    privacy: {
      title: "Integritetspolicy",
      updatedLabel: "Senast uppdaterad",
      updatedDate: "mars 2026",
      intro:
        "Denna information beskriver hur Claudia Luna Consulting hanterar personuppgifter som lämnas via kontaktformuläret och e-post på webbplatsen.",
      sections: [
        {
          heading: "Personuppgiftsansvarig",
          body: "Claudia Luna Consulting är personuppgiftsansvarig för de uppgifter som samlas in via webbplatsen. Kontakt: claudialunaconsulting@gmail.com.",
        },
        {
          heading: "Vilka uppgifter samlas in?",
          body: "Via kontaktformuläret kan namn, företag, e-postadress och meddelandetext samlas in. Om du mejlar direkt behandlas de uppgifter du själv skickar.",
        },
        {
          heading: "Varför samlas uppgifterna in?",
          body: "Uppgifterna används för att besvara din förfrågan och föra en affärsrelaterad dialog. De används inte för marknadsföring utan separat medgivande.",
        },
        {
          heading: "Hur behandlas förfrågningar?",
          body: "Formulärinnehåll skickas via e-postleverantören Resend till vår verksamhetsinkorg. Svar sker normalt via e-post. Leverantörens mottagande av ett meddelande innebär inte garanterad leverans till inkorg.",
        },
        {
          heading: "Tjänsteleverantörer",
          body: "Webbplatsen kan hostas via Vercel. E-postleverans sker via Resend. Personuppgifter kan därmed behandlas av dessa leverantörer i den utsträckning som krävs för att tillhandahålla tjänsten.",
        },
        {
          heading: "Lagring",
          body: "Förfrågningar sparas i e-postsystemet så länge det behövs för att hantera dialogen och eventuell uppföljning. Exakt lagringstid bör bekräftas av verksamhetsansvarig utifrån affärsbehov och rättsliga krav.",
        },
        {
          heading: "Dina rättigheter",
          body: "Du kan begära tillgång till, rättelse av eller radering av personuppgifter som rör dig, samt invända mot behandling där tillämpligt. Kontakta claudialunaconsulting@gmail.com för integritetsärenden.",
        },
        {
          heading: "Uppgifter som behöver bekräftas",
          body: "Organisationsnummer, fysisk adress, laglig grundformulering och exakta retentionstider behöver bekräftas av verksamhetsansvarig innan denna sida betraktas som slutgiltig juridisk text.",
        },
      ],
      backHome: "Tillbaka till startsidan",
    },
    insights: {
      headline: "Insikter",
      intro: "Perspektiv på people, transformation och framtidens HR.",
      backHome: "Tillbaka till startsidan",
      contactCta: "Kontakta Claudia",
      items: [
        {
          ...sharedInsightMeta.transformation,
          category: "Transformation",
          title: "Varför framgångsrik transformation börjar med people",
          description:
            "Organisatorisk transformation designas ofta kring strukturer, processer och mål. Men hållbar förändring beror på något mer grundläggande — om människor förstår, litar på och kan genomföra förändringen.",
          imageAlt:
            "Tomt modernt styrelserum med mjukt morgonljus och stadsutsikt",
          body: [
            "Organisatorisk transformation designas ofta kring strukturer, processer och mål. Dessa delar är viktiga — men de avgör sällan om förändringen består.",
            "Hållbar transformation beror på om människor förstår riktningen, litar på ledarskapet bakom den och har kapacitet att genomföra i praktiken. När den grunden saknas får även välutformade program svårt att ge bestående effekt.",
            "Ett people-centrerat förhållningssätt betyder inte att skjuta upp beslut. Det betyder att samordna strategi, kommunikation, ledarbeteenden och verklighet i organisationen så att förändringen kan genomföras med tydlighet och trovärdighet.",
            "För seniora ledare är den praktiska frågan inte bara vad som ska förändras — utan hur människor i organisationen kommer att uppleva, tolka och bära förändringen vidare.",
          ],
        },
        {
          ...sharedInsightMeta.leadership,
          category: "Ledarskap",
          title: "Att leda genom organisatorisk förändring",
          description:
            "Perioder av förändring kräver mer av ledare än enbart kommunikation. Tydlighet, tillit och konsekvens blir avgörande när organisationer och team navigerar osäkerhet.",
          imageAlt:
            "Seniora yrkespersoner i samtal medan de går genom en kontorskorridor",
          body: [
            "Perioder av organisatorisk förändring ställer särskilda krav på ledarskap. Kommunikation är fortsatt viktig, men räcker inte i sig.",
            "Team söker tydlighet om vad som är känt och vad som fortfarande beslutas. De söker också konsekvens mellan vad ledare säger och hur ledare agerar — särskilt när osäkerheten är hög.",
            "Tillit byggs genom närvaro, ärlighet och uppföljning. Ledare som kan hålla svåra samtal, lyssna noga och behålla lugnet under press skapar förutsättningar för engagemang genom transitionen.",
            "Effektivt förändringsledarskap är därför både strategiskt och djupt mänskligt: att sätta riktning samtidigt som man stöttar dem som ska leverera den.",
          ],
        },
        {
          ...sharedInsightMeta.ai,
          category: "Framtidens HR",
          title: "AI kommer att förändra HR. Frågan är hur vi använder det.",
          description:
            "AI kan förbättra effektivitet, beslutsfattande och medarbetarupplevelse — men framgångsrik adoption kräver mer än teknik. HR har en viktig roll i hur AI blir en del av organisationen.",
          imageAlt:
            "Anteckningsbok, penna och stängd laptop på ett sofistikerat skrivbord",
          body: [
            "Artificiell intelligens kommer att omforma många delar av HR-arbetet — från administration och analys till hur medarbetare får stöd och information.",
            "Möjligheten är stor: bättre effektivitet, starkare beslutsfattande och förbättrad medarbetarupplevelse. Risken är lika verklig om teknik införs utan tydligt syfte, governance och mänskligt omdöme.",
            "Framgångsrik adoption är inte bara en systemfråga. Det är en organisatorisk fråga. HR har en viktig roll i hur AI används, var mänsklig översyn fortfarande krävs och hur människor stöttas genom förändringen.",
            "Organisationer som får ut mest kommer att behandla AI som en del av en bredare people- och operating model-agenda — inte som ett fristående teknikprojekt.",
          ],
        },
      ],
    },
    a11y: {
      skipToContent: "Hoppa till innehåll",
    },
  },
  en: {
    navLinks: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    header: {
      contactCta: "Contact Claudia",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      pill: "Senior HR · Transformation · Advisory",
      headline: "Senior HR expertise when your organization needs it most.",
      headlineAccent: "needs it most.",
      supporting:
        "Strategic and hands-on HR support for organizations navigating change, growth and complex people challenges.",
      body: "Claudia Luna Consulting supports leaders and organizations with senior HR expertise across transformation, employee relations, strategic HR and interim leadership.",
      primaryCta: "Let's talk",
      secondaryCta: "View services",
      portraitAlt:
        "Professional portrait of Claudia Luna, founder of Claudia Luna Consulting",
    },
    about: {
      label: "About Claudia",
      headline: "HR that works in the real world.",
      paragraphs: [
        "Claudia Luna is a senior HR leader and advisor with extensive experience supporting global organizations through transformation, organizational change and complex people matters across Europe.",
        "She works closely with senior leaders, employee representatives and cross-functional teams to create practical HR solutions that support both the business and its people.",
        "Her background includes strategic HR partnering, employee and labor relations, organizational transformation, governance, leadership advisory and digital HR.",
        "Alongside her HR role, Claudia serves as a Board Member of Verizon Sweden AB.",
      ],
      closing:
        "Practical, business-minded and focused on creating meaningful results.",
      linkedInCta: "Connect on LinkedIn",
      portraitAlt: "Claudia Luna, senior HR advisor",
    },
    services: {
      label: "How I can help",
      headline: "Senior HR support — from strategy to execution.",
      intro:
        "I support companies that need experienced HR leadership, specialist support or a senior advisor who can step in quickly and create structure.",
      items: [
        {
          number: "01",
          title: "Strategic HR & Interim Leadership",
          description:
            "Senior HR leadership and strategic support during change, growth or transition.",
          examples: [
            "Interim Senior HRBP / HR Lead",
            "HR strategy",
            "Workforce planning",
            "Leadership advisory",
            "HR operating models",
            "Governance",
          ],
        },
        {
          number: "02",
          title: "Transformation & Change",
          description:
            "Supporting organizations through restructuring, organizational change and complex transformation.",
          examples: [
            "Organizational transformation",
            "Restructuring",
            "Change management",
            "Stakeholder alignment",
            "Workforce change",
            "Transformation programs",
          ],
        },
        {
          number: "03",
          title: "Employee & Labor Relations",
          description:
            "Senior support in complex employee relations and labor matters.",
          examples: [
            "Employee relations",
            "Labor relations",
            "Works council collaboration",
            "Organizational changes",
            "Compliance",
            "Complex employee matters",
          ],
        },
        {
          number: "04",
          title: "AI, Digital HR & Future of Work",
          description:
            "Helping HR functions use technology and AI in practical, responsible ways.",
          examples: [
            "AI adoption in HR",
            "HR process improvement",
            "Digital HR",
            "People analytics",
            "Automation",
            "Future workforce",
          ],
        },
      ],
    },
    credibility: {
      headline: "Experience from complex, international organizations.",
      items: [
        {
          title: "International HR",
          description: "Experience supporting organizations across Europe.",
        },
        {
          title: "Board perspective",
          description: "Board-level governance and business perspective.",
        },
        {
          title: "Transformation",
          description:
            "Experience navigating organizational change and restructuring.",
        },
        {
          title: "Business partnering",
          description: "Close partnership with senior leaders and stakeholders.",
        },
      ],
    },
    workingWith: {
      headline: "When does it make sense to bring me in?",
      items: [
        {
          title: "You need senior HR expertise quickly",
          description:
            "An experienced HR partner can step in without a long recruitment process.",
        },
        {
          title: "Your organization is changing",
          description:
            "Support through restructuring, transformation or organizational growth.",
        },
        {
          title: "A people issue has become complex",
          description:
            "Senior guidance in employee relations, leadership or organizational matters.",
        },
        {
          title: "You need both strategy and execution",
          description:
            "Support that does not stop at recommendations — but helps move the work forward.",
        },
      ],
    },
    contact: {
      headline: "Have an HR challenge to solve?",
      text: "Whether you need interim HR support, strategic advice or help navigating organizational change — let's talk.",
      cta: "Email Claudia",
      emailLabel: "Email",
      linkedInLabel: "LinkedIn",
      linkedInCta: "Connect",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Message",
        submit: "Send message",
        sending: "Sending...",
        successTitle: "Message received",
        successText:
          "Thank you for reaching out. Claudia will respond as soon as possible.",
        sendAnother: "Send another message",
        privacyNote: "By submitting, you acknowledge how we handle your details.",
        privacyLink: "Read the privacy information",
        emailFallback: "Email instead",
        errors: {
          name: "Please enter your name.",
          company: "Please enter your company.",
          emailRequired: "Please enter your email.",
          emailInvalid: "Please enter a valid email address.",
          messageRequired: "Please tell us how we can help.",
          messageShort: "Please provide a little more detail.",
          messageLong: "Your message is too long. Please shorten it.",
          rateLimited:
            "Too many attempts right now. Please wait a moment or email directly.",
          notConfigured:
            "The form is temporarily unavailable. Please email directly.",
          generic:
            "Your message could not be sent. Please try again or email directly.",
        },
      },
    },
    footer: {
      privacy: "Privacy Policy",
      email: "Email",
    },
    privacy: {
      title: "Privacy information",
      updatedLabel: "Last updated",
      updatedDate: "March 2026",
      intro:
        "This page explains how Claudia Luna Consulting handles personal data submitted through the website contact form and email.",
      sections: [
        {
          heading: "Data controller",
          body: "Claudia Luna Consulting is the controller for personal data collected via this website. Contact: claudialunaconsulting@gmail.com.",
        },
        {
          heading: "What data is collected?",
          body: "Through the contact form we may collect name, company, email address and message content. If you email us directly, we process the information you choose to send.",
        },
        {
          heading: "Why is it collected?",
          body: "The data is used to respond to your inquiry and continue a business-related conversation. It is not used for marketing without separate consent.",
        },
        {
          heading: "How inquiries are processed",
          body: "Form submissions are delivered via the email provider Resend to our business inbox. Replies are normally sent by email. Provider acceptance of a message is not a guarantee of final inbox delivery.",
        },
        {
          heading: "Service providers",
          body: "The website may be hosted by Vercel. Email delivery is handled by Resend. Personal data may therefore be processed by these providers as needed to provide the service.",
        },
        {
          heading: "Retention",
          body: "Inquiries are kept in the email system for as long as needed to handle the conversation and any follow-up. Exact retention periods should be confirmed by the business owner based on operational needs and legal requirements.",
        },
        {
          heading: "Your rights",
          body: "You may request access to, correction of, or deletion of personal data relating to you, and object to processing where applicable. Contact claudialunaconsulting@gmail.com for privacy requests.",
        },
        {
          heading: "Details requiring confirmation",
          body: "Company registration number, physical address, precise legal bases and exact retention periods should be confirmed by the business owner before this page is treated as final legal text.",
        },
      ],
      backHome: "Back to home",
    },
    insights: {
      headline: "Insights",
      intro: "Perspectives on people, transformation and the future of HR.",
      backHome: "Back home",
      contactCta: "Contact Claudia",
      items: [
        {
          ...sharedInsightMeta.transformation,
          category: "Transformation",
          title: "Why successful transformation starts with people",
          description:
            "Organizational transformation is often designed around structures, processes and targets. But sustainable change depends on something more fundamental — whether people understand, trust and can execute the change.",
          imageAlt:
            "Empty modern boardroom with soft morning light and city view",
          body: [
            "Organizational transformation is often designed around structures, processes and targets. These elements matter — but they are rarely what determines whether change endures.",
            "Sustainable transformation depends on whether people understand the direction, trust the leadership behind it, and have the capacity to execute in practice. When that foundation is missing, even well-designed programmes struggle to deliver lasting impact.",
            "A people-centred approach does not mean delaying decisions. It means aligning strategy, communication, leadership behaviour and workforce realities so change can be implemented with clarity and credibility.",
            "For senior leaders, the practical question is not only what will change — but how people across the organisation will experience, interpret and carry that change forward.",
          ],
        },
        {
          ...sharedInsightMeta.leadership,
          category: "Leadership",
          title: "Leading through organizational change",
          description:
            "Periods of change demand more from leaders than communication alone. Clarity, trust and consistency become critical when organizations and teams are navigating uncertainty.",
          imageAlt:
            "Senior professionals walking in conversation through an office corridor",
          body: [
            "Periods of organisational change place particular demands on leadership. Communication remains essential, but it is not enough on its own.",
            "Teams look for clarity about what is known and what is still being decided. They also look for consistency between what leaders say and how leaders act — especially when uncertainty is high.",
            "Trust is built through presence, honesty and follow-through. Leaders who can hold difficult conversations, listen carefully and remain steady under pressure create the conditions for people to stay engaged through transition.",
            "Effective change leadership is therefore both strategic and deeply human: setting direction while supporting the people who must deliver it.",
          ],
        },
        {
          ...sharedInsightMeta.ai,
          category: "Future of HR",
          title: "AI will change HR. The question is how we use it.",
          description:
            "AI can improve efficiency, decision-making and employee experience — but successful adoption requires more than technology. HR has an important role in shaping how AI becomes part of the organization.",
          imageAlt:
            "Notebook, pen and closed laptop on a refined executive desk",
          body: [
            "Artificial intelligence will reshape many aspects of HR work — from administration and analytics to how employees access support and information.",
            "The opportunity is significant: better efficiency, stronger decision-making and improved employee experience. The risk is equally real if technology is introduced without clear purpose, governance and human judgement.",
            "Successful adoption is not only a systems question. It is an organisational one. HR has an important role in shaping how AI is used, where human oversight remains essential, and how people are supported through the change.",
            "The organisations that benefit most will treat AI as part of a broader people and operating-model agenda — not as a stand-alone technology project.",
          ],
        },
      ],
    },
    a11y: {
      skipToContent: "Skip to content",
    },
  },
} as const;

export type AppContent = (typeof content)[Locale];

export function getInsightBySlug(locale: Locale, slug: string) {
  return content[locale].insights.items.find((item) => item.slug === slug);
}

export const insightSlugs = content.en.insights.items.map((item) => item.slug);
