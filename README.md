# Hugo Buenrostro — Portfolio

Sitio construido con **Astro + Tailwind v4** (vía el plugin oficial de Vite,
no la integración `@astrojs/tailwind`, que está deprecada), contenido
centralizado en un único archivo (`src/content/site.ts`), y preparado para
editarse luego con **Keystatic** y desplegarse en **Vercel**.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Estructura

```
src/
  content/site.ts        ← ÚNICO archivo de contenido (textos, proyectos, disponibilidad)
  layouts/Layout.astro   ← <head>, fuentes, script anti-parpadeo de tema
  components/
    Header.astro          Cabecera fija + botón de menú
    MenuOverlay.astro      Menú a pantalla completa (overlay, focus trap)
    Hero.astro              Frase con controles incrustados (Product Designer, disponibilidad, tema, CTA)
    ProjectsList.astro      Lista editorial de proyectos + scramble + imagen de fondo
    About.astro              Sobre mí en dos pantallas (foto en barras + experiencia / cómo trabajo + stack)
    Footer.astro              CONTÁCTAME + máscara en X + relojes + transición
  pages/
    index.astro
    contacto.astro
    proyecto/[slug].astro
```

## Pendiente antes de publicar (todo viene marcado TODO en el código y en 04-CONTENIDO)

- [ ] Archivos reales de la tipografía **Apfel Grotezk** (regular + bold) en `public/fonts/`
- [ ] Email real y enlaces de LinkedIn/Behance/Instagram en `src/content/site.ts`
- [ ] Fotos: portada (varias, para el hover de "Product Designer"), retrato de "sobre mí"
      (para las 5 barras), foto para la máscara del footer
- [ ] Logos SVG de Glovo, Typeform, Red Points, Cabify y del stack (Figma, React, Tailwind,
      Framer, Claude, Cursor) en `public/images/logos/`
- [ ] Portadas + imágenes de caso de los 3 proyectos en `public/images/projects/`
- [ ] Resultados y redacción completa de **Vori** y **Pregnancy Nutrition** (hoy usan la
      versión mínima — cambia `hasFullCase: true` en `site.ts` cuando estén listos)
- [ ] PDF del CV en `public/cv-hugo-buenrostro.pdf`
- [ ] Imagen `og:image` para compartir en redes (`public/images/og-image.jpg`)
- [ ] Favicon SVG real (hoy hay un placeholder en `public/favicon.svg`)

## Notas de implementación

- **Tema claro/oscuro**: el interruptor vive dentro de la frase del hero (no en la
  cabecera, tal y como pide el brief). Se guarda en `localStorage` y no parpadea al
  cargar gracias al script inline en `Layout.astro`.
- **Disponibilidad**: una sola fuente de verdad (`availability` en `site.ts`) que
  alimenta hero, cabecera y footer a la vez.
- **`prefers-reduced-motion`**: apaga el scramble, el giro de la máscara en X y las
  animaciones de scroll/hover en todo el sitio; queda todo legible con fundidos simples.
- **Scroll por secciones**: activo solo en desktop (`scroll-snap`), normal en móvil.
- **Formulario de contacto**: hoy envía por `mailto:`. Cuando quieras un backend real
  (Resend, Formspree, un endpoint propio…), solo hay que cambiar el `submit` handler
  en `src/pages/contacto.astro`.

## Próximos pasos (Keystatic + GitHub + Vercel)

1. Sube este proyecto a un repo de GitHub.
2. Instala Keystatic (`@keystatic/astro` + `@keystatic/core`) y decide qué partes de
   `site.ts` migran a colecciones editables (proyectos es el candidato más claro).
3. Configura el storage de Keystatic en modo `github` para que las ediciones del
   panel se guarden como commits.
4. Importa el repo en Vercel — detecta Astro automáticamente.
