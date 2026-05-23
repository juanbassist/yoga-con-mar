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

## Estructura

- `src/pages/index.astro`: ensambla la landing principal.
- `src/components/`: secciones reutilizables del sitio.
- `src/data/site.ts`: datos compartidos, enlaces de contacto e imagenes.
- `src/styles/global.css`: estilos globales y tema visual.

## Configuracion del sitio

- WhatsApp e Instagram se configuran en `src/data/site.ts`.
- Los enlaces de WhatsApp usan `whatsappLink()` para incluir el mensaje inicial de contacto.
- La version visible en el footer se lee desde `package.json`.

## Pendiente antes de publicar

- Confirmar que `SITE_URL` apunta al dominio final de produccion.
- Revisar textos, precios, clases y testimonios con contenido final de negocio.
- Probar los enlaces de WhatsApp e Instagram en el navegador antes de publicar.
