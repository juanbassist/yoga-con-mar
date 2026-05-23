# Yoga Con Mar

Landing page de una sola pagina para Yoga Con Mar, construida con Astro y Tailwind CSS. El sitio presenta clases, beneficios, testimonios, precios, FAQ y llamadas a la accion por WhatsApp.

## Stack

- Astro
- Tailwind CSS
- TypeScript

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Add Skill Astro

[.codex/config.toml](.codex/config.toml)

- Instalar skill de astro: `npx skills add delineas/astro-framework-agents --skill astro-framework`


## Estructura

- `src/pages/index.astro`: ensambla la landing principal.
- `src/components/`: secciones reutilizables del sitio.
- `src/data/site.ts`: datos compartidos, enlaces de contacto e imagenes.
- `src/styles/global.css`: estilos globales y tema visual.

## Pendiente antes de publicar

- Reemplazar el numero placeholder de WhatsApp en `src/data/site.ts`.
- Confirmar `SITE_URL`, `INSTAGRAM_URL`, textos, precios y testimonios finales.
