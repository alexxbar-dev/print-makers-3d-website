# Print Makers 3D | Manufactura Aditiva e Ingeniería Industrial

![Node.js Version](https://img.shields.io/badge/Node.js-24.14.0--LTS-6aa65d?logo=node.js&logoColor=white)
![Eleventy Version](https://img.shields.io/badge/SSG-Eleventy--3.1.2-222222?logo=11ty&logoColor=white)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen?logo=lighthouse&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

Sitio en vivo: `https://alexxbar-dev.github.io/print-makers-3d-website/index.html`

Sitio web profesional de **Print Makers 3D**, especializado en **impresión 3D, diseño de componentes mecánicos y fabricación de moldes industriales**. El proyecto prioriza **rendimiento, accesibilidad y precisión visual** con arquitectura modular y mantenible.

Badges: `Node.js (.nvmrc)` · `Eleventy SSG` · `Lighthouse 90+`

## Tech Stack

| Capa | Tecnología | Propósito |
| --- | --- | --- |
| Runtime | Node.js (`.nvmrc`) | Paridad de versión y entorno reproducible |
| SSG | Eleventy (11ty) | TTFB mínimo y compilación estática rápida |
| Templating | Nunjucks | Componentes reutilizables y HTML limpio |
| Estilos | CSS Arquitectónico (BEM) | Escalabilidad visual y cero layout shift |
| JS Cliente | Vanilla JavaScript | Interactividad ligera con bundle mínimo |

## Key Features

- Manufactura aditiva y prototipado funcional de alta precisión.
- Diseño y fabricación de moldes industriales para botellas.
- Diseño CAD y mecanizado CNC como parte del flujo de servicio.
- Catálogo de capacidades de impresión y materiales (PLA, PETG).
- Portafolio visual con modal de imagen y zoom focalizado.

## Arquitectura y Componentes

- Layout base con **Nunjucks** y composición por includes (`header`, `hero`, `benefits`, `contact-cta`, `footer`).
- Pages dedicadas: `index`, `servicios-industriales`, `diseno-3d-personalizado`, `contacto`.
- Assets y scripts expuestos vía `passthroughCopy` para evitar bundling innecesario.
- `pathPrefix` listo para despliegue en subruta (hosting estático).

## Interactividad (JS)

- Header inteligente con ocultado por scroll y menú móvil con overlay.
- Modal de portafolio con zoom controlado y bloqueo de scroll.
- Tabs accesibles en servicios industriales con `role="tab"` y `role="tabpanel"`.
- Input file con vista previa de nombres para solicitudes técnicas.

## Performance & A11y

Este stack fue elegido para **alcanzar 90+ en Lighthouse** (Performance, Accessibility, Best Practices y SEO) y empujar consistentemente hacia **100/100** mediante:

- HTML estático optimizado con SSG para menor TTFB.
- CSS estructurado para evitar Layout Shift y facilitar mantenimiento.
- JavaScript mínimo y específico para reducir el costo de ejecución.
- Accesibilidad basada en WCAG con semántica ARIA y navegación por teclado.

## Decisiones Arquitectónicas

- Node.js `v24.14.0` **(LTS)** (`.nvmrc`): versión fijada para builds reproducibles y paridad entre entornos.
- Eleventy vs frameworks JS: se prioriza render estático para evitar hidratación innecesaria y mantener el sitio funcional desde el primer paint en conexiones variables.
- A11y explícita: `role="tablist"`, `role="tab"`, `role="tabpanel"` con `aria-selected`/`aria-hidden`, y selección de materiales con elementos navegables vía teclado (`tabindex`).

## Optimización de Imágenes

Se aplicó una estrategia de optimización enfocada en rendimiento real:

- Conversión a **WebP** como formato principal.
- Resoluciones proporcionales según uso (hero, secciones, miniaturas).
- Excepciones en **JPEG** cuando el balance peso/calidad fue superior.

## Installation & Usage

```bash
git clone https://github.com/alexxbar-dev/print-makers-3d-website.git
cd print-makers-3d-website
# Usa la versión de Node indicada en .nvmrc
nvm use
# Instala dependencias del proyecto
npm install
# Inicia Eleventy con servidor local
npm run start
```

Comandos útiles (Eleventy):

- `npm run start` construye el sitio y levanta el servidor local (`--serve`) para desarrollo. `Uso: Development`
- `npm run build` construye el sitio estático en `_site` para despliegue. `Uso: Production`
- `npm run clean` limpia la salida de Eleventy eliminando `_site`.

## Estructura del Proyecto

```text
src/
  _includes/
    components/
    layouts/
  assets/
  js/
    components/
    pages/
  pages/
  styles/
    components/
    pages/
```

## Licencia

Este es un proyecto de aprendizaje de código abierto bajo la Licencia MIT. Siéntete libre de explorar, clonar y adaptar el código para tus propios proyectos.

Copyright (c) 2026 - Print Makers 3D
