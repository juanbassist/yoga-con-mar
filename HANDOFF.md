# HANDOFF

## Estado actual

- Proyecto Astro `yoga-con-mar` con landing page de una sola pagina para Yoga Con Mar.
- La pagina principal ensambla componentes en `src/pages/index.astro`.
- Los datos compartidos del sitio viven en `src/data/site.ts`.
- WhatsApp esta configurado con el numero real `524772593084`.
- Instagram esta configurado como `https://instagram.com/yogamartz`.
- `package.json` y `package-lock.json` estan en version `0.1.4`.
- `CHANGELOG.md` tiene como entrada mas reciente `0.1.4`.
- `Readme.md` documenta descripcion, stack, comandos, estructura, configuracion y pendientes de publicacion.
- El footer muestra la version actual leyendo `version` desde `package.json`.
- El footer usa iconos SVG externos para Instagram y WhatsApp desde `public/icons/`, sin contenedor circular, con tamano aumentado y animacion al pasar el mouse.
- `npm install` fue ejecutado para sincronizar `package-lock.json`.

## Pendiente

- Confirmar que `SITE_URL` apunta al dominio final de produccion.
- Revisar textos, precios, clases y testimonios con contenido final de negocio.
- Definir imagenes finales si se van a reemplazar las imagenes remotas de Unsplash.

## Bloqueos / Riesgos

- `AGENTS.md` menciona usar la skill `.agents\skills\astro-framework`, pero ese directorio no esta presente en el workspace.

## Siguiente paso sugerido

- Levantar `npm run dev`, revisar la landing completa en desktop y mobile, y validar que WhatsApp e Instagram abren correctamente.
