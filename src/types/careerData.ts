// ./types/careerData.ts

export type Job = {
  id: number;
  title: string;
  location: string;
  postDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

export const jobOpeningsEn: Job[] = [
  {
    id: 1,
    title: "Utility Installation Technician",
    location: "Baton Rouge, LA",
    postDate: "2025-06-01",
    description:
      "Responsible for safe and efficient installation of water, sewer, and electrical utility lines using trenchless and open-trench methods. Coordinate with site engineers, operate heavy machinery, and ensure underground work meets OSHA and local code standards.",
    requirements: [
      "High school diploma or equivalent",
      "2+ years of underground utility installation experience",
      "OSHA 10-hour certification (OSHA 30 preferred)",
      "Comfortable operating excavators, backhoes, and trenchers",
    ],
    benefits: [
      "Health, dental & vision insurance",
      "Paid time off & holidays",
      "401(k) plan with company match",
      "Professional development & training",
    ],
  },
  {
    id: 2,
    title: "Directional Boring Operator",
    location: "New Orleans, LA",
    postDate: "2025-05-20",
    description:
      "Operate and maintain directional boring rigs for precision underground installations. Plan bore paths with survey data, monitor drill head performance, and work closely with project managers to deliver subsurface utilities with minimal surface disturbance.",
    requirements: [
      "3+ years experience operating directional boring equipment",
      "Valid CDL (Class A or B) preferred",
      "Ability to read site plans and GPS data",
      "Comfort with outdoor work in all weather conditions",
    ],
    benefits: [
      "Competitive salary with performance bonus",
      "Paid equipment training",
      "Comprehensive benefits package",
      "Opportunities for career advancement",
    ],
  },
];

export const jobOpeningsEs: Job[] = [
  {
    id: 1,
    title: "Técnico en Instalación de Servicios",
    location: "Baton Rouge, LA",
    postDate: "2025-06-01",
    description:
      "Responsable de la instalación segura y eficiente de líneas de agua, alcantarillado y servicios eléctricos mediante métodos sin zanja y de zanja abierta. Coordinar con ingenieros de obra, operar maquinaria pesada y garantizar que el trabajo subterráneo cumpla con OSHA y los códigos locales.",
    requirements: [
      "Diploma de escuela secundaria o equivalente",
      "Más de 2 años de experiencia en instalación de servicios subterráneos",
      "Certificación OSHA de 10 horas (preferible OSHA 30)",
      "Cómodo operando excavadoras, retroexcavadoras y zanjeros",
    ],
    benefits: [
      "Seguro de salud, dental y de visión",
      "Días libres pagados y feriados",
      "Plan 401(k) con aporte de la empresa",
      "Desarrollo profesional y capacitación",
    ],
  },
  {
    id: 2,
    title: "Operador de Perforación Direccional",
    location: "New Orleans, LA",
    postDate: "2025-05-20",
    description:
      "Operar y mantener equipos de perforación direccional para instalaciones subterráneas de precisión. Planificar rutas de perforación con datos de encuesta, monitorear el rendimiento de la cabeza de perforación y trabajar en estrecha colaboración con los gerentes de proyecto para ejecutar servicios subterráneos con mínima alteración de la superficie.",
    requirements: [
      "Más de 3 años de experiencia operando equipos de perforación direccional",
      "Licencia CDL válida (Clase A o B) preferida",
      "Capacidad para leer planos de sitio y datos GPS",
      "Cómodo trabajando al aire libre en todas las condiciones climáticas",
    ],
    benefits: [
      "Salario competitivo con bonificación por desempeño",
      "Capacitación pagada en manejo de equipos",
      "Paquete de beneficios integral",
      "Oportunidades de crecimiento profesional",
    ],
  },
];

// Export the translations explicitly as 't'
export const t = {
  en: {
    langLabel: { en: "EN", es: "ES" },
    joinTitle: "Join Our Team",
    joinSubtitle:
      "Build your career with Louisiana’s leading underground construction specialists.",
    whyTitle: "Why Work With Us?",
    why1:
      "At Southern Underground, we believe our employees are our greatest asset. We foster a culture of safety, innovation, and professional growth where every team member can thrive and advance their career.",
    why2:
      "Join a company that values integrity, promotes from within, and provides the tools and training you need to succeed in the construction industry.",
    benefitsTitle: "Employee Benefits",
    openingsTitle: "Current Openings",
    viewDetails: "View Details",
    hideDetails: "Hide Details",
    apply: "Apply",
    requirements: "Requirements",
    benefits: "Benefits",
    applyFor: "Apply for",
    submit: "Submit Application",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    experience: "Briefly describe your experience",
    coverLetter: "Cover Letter / Additional Info",
    resume: "Upload Resume",
    posted: "Posted",
  },
  es: {
    langLabel: { en: "EN", es: "ES" },
    joinTitle: "Únete a Nuestro Equipo",
    joinSubtitle:
      "Construye tu carrera con los principales especialistas en construcción subterránea de Louisiana.",
    whyTitle: "¿Por Qué Trabajar Con Nosotros?",
    why1:
      "En Southern Underground, creemos que nuestros empleados son nuestro mayor activo. Fomentamos una cultura de seguridad, innovación y crecimiento profesional donde cada miembro del equipo puede prosperar y avanzar en su carrera.",
    why2:
      "Únete a una empresa que valora la integridad, promueve desde dentro y proporciona las herramientas y la formación que necesitas para tener éxito en la industria de la construcción.",
    benefitsTitle: "Beneficios para Empleados",
    openingsTitle: "Vacantes Disponibles",
    viewDetails: "Ver Detalles",
    hideDetails: "Ocultar Detalles",
    apply: "Aplicar",
    requirements: "Requisitos",
    benefits: "Beneficios",
    applyFor: "Aplicar para",
    submit: "Enviar Solicitud",
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Teléfono",
    experience: "Describe brevemente tu experiencia",
    coverLetter: "Carta de Presentación / Información Adicional",
    resume: "Subir Currículum",
    posted: "Publicado",
  },
};
