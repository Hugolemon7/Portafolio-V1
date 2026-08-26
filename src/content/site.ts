// ---------------------------------------------------------------------------
// ÚNICA FUENTE DE CONTENIDO DEL SITIO.
// Todo lo que ves en pantalla sale de aquí: textos, proyectos, disponibilidad.
// Cambia un valor aquí y se propaga a hero, cabecera, footer, etc.
// Los campos marcados TODO están pendientes de datos reales (ver 04-CONTENIDO).
// ---------------------------------------------------------------------------

export type Availability = 'available' | 'unavailable';

export const identity = {
  name: 'Hugo Buenrostro',
  role: 'Product Designer',
  email: 'buenrsotro.h@gmail.com', // TODO: poner el email real
  social: {
    linkedin: 'https://www.linkedin.com/in/hugobuenrostro/', // TODO: enlace real
    behance: 'https://www.behance.net/HugoBuenrostro', // TODO: enlace real
    instagram: 'https://www.instagram.com/hugolemon/', // TODO: enlace real
  },
  footerCredit: 'Diseñado y construido por Hugo Buenrostro',
};

// Cambia este único valor para actualizar el estado en todo el sitio
// (hero, cabecera y footer leen de aquí).
export const availability: Availability = 'available';

export const availabilityText = {
  available: { long: 'Disponible para trabajar', short: 'Disponible' },
  unavailable: { long: 'Sin disponibilidad ahora', short: 'Sin hueco' },
};

export const location = {
  timezone: 'America/Mexico_City',
  city: 'Oaxaca',
  coords: '17.0338° N, 96.4331° O',
};

export const footerCities = [
  { code: 'LA', tz: 'America/Los_Angeles' },
  { code: 'NY', tz: 'America/New_York' },
  { code: 'MAD', tz: 'Europe/Madrid' },
  { code: 'TYO', tz: 'Asia/Tokyo' },
];

export const nav = [
  { number: '01', label: 'Inicio', href: '/' },
  { number: '02', label: 'Proyectos', href: '/#proyectos' },
  { number: '03', label: 'Sobre mí', href: '/#sobre-mi' },
  { number: '04', label: 'Contacto', href: '/contacto' },
];

export const copy = {
  heroPrefix: 'Soy un',
  heroRoleWord: 'Product Designer',
  heroMiddle: 'que integra la IA de research a build para acortar el time',
  heroMiddle2: 'to ship.',
  heroCta: 'vamos a hablar',
  heroCtaSuffix: 'sobre tu producto?',
  footerKicker: '¿Listo para trabajar?',
  footerHeadline: 'CONTÁCTAME',
  aboutIntro:
    'Llevo más de 10 años diseñando producto digital. Hoy integro la IA en cada fase para que el equipo llegue antes a lo que de verdad importa.',
  aboutParagraphs: [
    'Trabajo AI-native de punta a punta: research, definición, diseño y build. La IA es una palanca en cada paso, no un adorno.',
    'Sintetizo voz de cliente para sacar pain points reales, priorizo con datos, itero en Figma con sistemas de componentes y llego hasta el código (React + Tailwind) para acortar el time-to-ship.',
  ],
  shortDescription:
    'Product Designer en Oaxaca. Diseño producto digital de punta a punta y me obsesiona convertir el research en decisiones que se envían.',
};

export const experience = [
  { company: 'Experian', role: 'UX Designer', period: '2025 — Hoy', logo: '/images/logos/glovo.svg' },
  { company: 'DD360', role: 'Product Designer', period: '2024 — 2025', logo: '/images/logos/typeform.svg' },
  { company: 'Wiggot', role: 'UX/UI Designer', period: '2023 — 2024', logo: '/images/logos/red-points.svg' },
  { company: 'CONTPAQi', role: 'Innovation Executive', period: '2015 — 2023', logo: '/images/logos/cabify.svg' },
];

export const process = [
  { phase: 'Research', detail: 'Síntesis de voz de cliente con IA' },
  { phase: 'Definición', detail: 'Priorización con datos, no opiniones' },
  { phase: 'Diseño', detail: 'Design systems en Figma' },
  { phase: 'Build', detail: 'React + Tailwind, hasta producción' },
];

export const stack = [
  { name: 'Figma', logo: '/images/logos/figma.svg' },
  { name: 'React', logo: '/images/logos/react.svg' },
  { name: 'Tailwind', logo: '/images/logos/tailwind.svg' },
  { name: 'Framer', logo: '/images/logos/framer.svg' },
  { name: 'Claude', logo: '/images/logos/claude.svg' },
  { name: 'Cursor', logo: '/images/logos/cursor.svg' },
];

export const cv = {
  href: '/cv-hugo-buenrostro.pdf.pdf', // TODO: subir el PDF real
};

export const projectTypes = ['Producto digital', 'App móvil', 'Web / Landing', 'Design system', 'Otro'];

export type Project = {
  id: string;
  name: string;
  result: string; // el dato que convence, siempre legible
  context: string;
  year: string;
  cover: string;
  hasFullCase: boolean;
  tagline?: string;
  brand?: {
    role: string;
    platform: string;
    team: string;
    timeline: string;
    scope: string;
    accentColor?: string; // color de marca del cliente, muy diluido
  };
  intro?: string;
  sections?: { title: string; body: string; image: string }[];
  results?: string[];
  gallery?: string[];
  nextProjectId?: string;
};

export const projects: Project[] = [
  {
    id: 'eqvista',
    name: 'Eqvista',
    result: '+62% de activación en el onboarding',
    context: 'Fintech · Valoraciones',
    year: '2024',
    cover: '/images/projects/eqvista/cover.jpg',
    hasFullCase: true,
    tagline: 'Valoraciones de mercado privado en tiempo real, en el bolsillo.',
    brand: {
      role: 'Lead Product Designer',
      platform: 'iOS · Android',
      team: '2 diseño / 4 ingeniería / 1 PM',
      timeline: '2024 · 4 meses',
      scope: 'Research, UX/UI, Design System, Prototipado, Handoff',
      accentColor: '#4B4FE0', // índigo del cliente, se usa muy diluido
    },
    intro:
      'Eqvista lleva las valoraciones de empresas privadas —lentas, opacas y reservadas a expertos— a una app móvil que las actualiza en tiempo real con datos de mercado y revisión experta. Lideré el diseño de punta a punta: onboarding, pantalla de valoración, sistema de componentes y temas claro/oscuro.',
    sections: [
      {
        title: 'El reto',
        body: 'Traducir un proceso de valoración lento y experto en algo que se sintiera vivo y accesible sin perder rigor.',
        image: '/images/projects/eqvista/reto.jpg',
      },
      {
        title: 'Onboarding sin fricción',
        body: 'Rediseñamos la entrada para que el primer valor apareciera en minutos, no en días.',
        image: '/images/projects/eqvista/onboarding.jpg',
      },
      {
        title: 'La valoración como dato vivo',
        body: 'La cifra central se comporta como un dato de mercado: se actualiza, respira, tiene historial.',
        image: '/images/projects/eqvista/valoracion.jpg',
      },
      {
        title: 'Contexto de mercado (public peers)',
        body: 'Comparativas con empresas públicas similares para dar contexto a cada valoración.',
        image: '/images/projects/eqvista/peers.jpg',
      },
      {
        title: 'Un sistema, dos temas',
        body: 'Un design system construido para sostener claro y oscuro de forma nativa desde el primer componente.',
        image: '/images/projects/eqvista/temas.jpg',
      },
    ],
    results: [
      '+62% activación en onboarding',
      '-41% time-to-first-valuation',
      '4,7★ en la App Store',
      '2 temas (claro/oscuro nativos)',
    ],
    gallery: [
      '/images/projects/eqvista/gallery-1.jpg',
      '/images/projects/eqvista/gallery-2.jpg',
      '/images/projects/eqvista/gallery-3.jpg',
    ],
    nextProjectId: 'vori',
  },
  {
    id: 'vori',
    name: 'Vori',
    result: 'TODO: resultado pendiente de redactar',
    context: 'TODO',
    year: '2024',
    cover: '/images/projects/vori/cover.jpg',
    hasFullCase: false, // usa versión mínima de la página hasta que se redacte
    nextProjectId: 'pregnancy-nutrition',
  },
  {
    id: 'pregnancy-nutrition',
    name: 'Pregnancy Nutrition',
    result: 'TODO: resultado pendiente de redactar',
    context: 'TODO',
    year: '2024',
    cover: '/images/projects/pregnancy-nutrition/cover.jpg',
    hasFullCase: false,
    nextProjectId: 'eqvista',
  },
];
