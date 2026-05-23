# HANDOFF

## Estado actual

- Proyecto Astro `yoga-con-mar` con landing page de una sola pagina para Yoga Con Mar.
- La pagina principal ensambla componentes en `src/pages/index.astro`.
- Los datos compartidos del sitio viven en `src/data/site.ts`.
- `package.json` y `package-lock.json` estan en version `0.1.2`.
- `CHANGELOG.md` tiene como entrada mas reciente `0.1.2`.
- `Readme.md` documenta brevemente descripcion, stack, comandos, estructura y pendientes de publicacion.
- El footer muestra la version actual leyendo `version` desde `package.json`.
- `npm install` fue ejecutado para sincronizar `package-lock.json`.

## Pendiente

- Reemplazar `WHATSAPP_NUMBER` en `src/data/site.ts` por el numero real.
- Confirmar `SITE_URL` e `INSTAGRAM_URL` antes de publicar.
- Revisar textos, precios y testimonios con contenido final de negocio.

## Bloqueos / Riesgos

- El numero de WhatsApp actual es placeholder, por lo que los enlaces de contacto no estan listos para produccion.
- `AGENTS.md` menciona usar la skill `.agents\skills\astro-framework`, pero ese directorio no esta presente en el workspace.
- El repositorio tambien contiene cambios no relacionados pendientes: `.gitignore`, `.codex/config.toml` y `AGENTS.md` sin trackear.

## Siguiente paso sugerido

- Completar datos reales de contacto y negocio, luego ejecutar `npm run build` antes de publicar.
