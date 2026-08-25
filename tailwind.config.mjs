/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Superficie y texto: monocromo, invertido entre temas.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        // Chip sólido invertido (mismo valor que bg/fg pero al revés).
        chipBg: 'rgb(var(--fg) / <alpha-value>)',
        chipFg: 'rgb(var(--bg) / <alpha-value>)',
        // Único color con vida del sitio: el estado de disponibilidad.
        available: 'rgb(var(--available) / <alpha-value>)',
        unavailable: 'rgb(var(--unavailable) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Apfel Grotezk"', '"Neue Haas Grotesk Display"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        // Solo regular y bold para la display: nunca pesos intermedios.
        regular: '400',
        bold: '700',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
