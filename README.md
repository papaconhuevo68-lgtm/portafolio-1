# 🚀 Portfolio Web - Gerardo Caycho

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

### Pasos de instalación

```bash
# Clone repository
git clone https://github.com/tu-usuario/my-portfolio-web.git
cd my-portfolio-web

# Install dependencies
pnpm install

# Execute project
pnpm dev
```

### Scripts disponibles

| Comando        | Descripción                                          |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Construye la aplicación para producción              |
| `pnpm preview` | Previsualiza la build de producción                  |
| `pnpm astro`   | Ejecuta comandos de la CLI de Astro                  |

---

## 🧱 Arquitectura y Convenciones

Esta base usa Astro con React y Tailwind. Para escalar cómodamente (y preparar la migración a Astro 5 y Tailwind 4), se adoptan alias y una estructura por dominios.

### Estructura de carpetas propuesta

```
src/
  components/
    astro/           # Componentes Astro atómicos (UI puros, sin lógica de negocio)
    react/           # Componentes React (interactividad, client:* directives)
    ui/              # Primitivas de UI reutilizables (botones, badges, etc.)
    icons/           # Íconos
    (feature-*/)**   # Opcional: agrupar por feature si crece el proyecto
  layouts/           # Layouts
  pages/             # Rutas
  styles/            # CSS global, tokens y utilidades de estilos
  lib/               # Utilidades puras, helpers, constantes
```

Mantén `public/` para assets estáticos (imágenes, fuentes, favicon, etc.).

### Aliases de importación

Definidos en `tsconfig.json`:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `@styles/*` → `src/styles/*`
- `@lib/*` → `src/lib/*`
- `@ui/*` → `src/components/ui/*`
- `@icons/*` → `src/components/icons/*`
- `@astro/*` → `src/components/astro/*`
- `@react/*` → `src/components/react/*`

Ejemplo en `src/pages/index.astro`:

```astro
---
import Layout from "@layouts/Layout.astro";
import Meteors from "@atoms/meteors";
import Header from "@components/HeaderComponent.astro";
---
```

### Convenciones de nombres

- Componentes Astro: `PascalCase` y sufijo opcional `.astro` (p.ej. `Header.astro`).
- Componentes React: `PascalCase.tsx` (p.ej. `ModeToggle.tsx`).
- Primitivas UI: nombres semánticos y neutrales (`Button.tsx`, `Badge.tsx`).
- Archivos utilitarios en `lib/`: `kebab-case` (`utils.ts`, `format-date.ts`).
- Evita nombres con sufijos largos como `Component`; prefiere `Header.astro` en lugar de `HeaderComponent.astro`. La migración puede hacerse en dos fases (ver plan abajo).

## 🔄 Plan de migración de nombres de componentes (seguro, sin romper)

Fase 1 (no disruptiva):

1. Mantener archivos actuales y crear re-exportaciones con nombres nuevos si aplica.
2. Actualizar imports gradualmente a los nuevos nombres y/o rutas con alias.

Fase 2 (limpieza):

1. Renombrar archivos físicos (`HeaderComponent.astro` → `Header.astro`).
2. Ejecutar búsqueda y reemplazo de imports restantes.
3. Eliminar re-exportaciones temporales.

Sugerencias de renombre:

- `HeaderComponent.astro` → `Header.astro`
- `HeroComponent.astro` → `Hero.astro`
- `ProjectsComponent.astro` → `Projects.astro`
- `StudiesComponent.astro` → `Studies.astro`
- `SkillsComponent.astro` → `Skills.astro`
- `AboutComponent.astro` → `About.astro`
- `FooterComponent.astro` → `Footer.astro`

## ⬆️ Plan para Astro 5 y Tailwind CSS 4

Astro 5:

- Revisa breaking changes en la guía oficial. Ajusta integraciones si cambian (`@astrojs/react`, `@astrojs/tailwind`).
- Ejecuta `pnpm update astro @astrojs/react @astrojs/tailwind` y corrige advertencias.
- Valida `client:*` directives y props de componentes React/Islas.

Tailwind 4:

- Actualiza a `tailwindcss@^4` y revisa cambios de configuración (nuevo preset, posibles cambios en `content`, tokens y `@tailwind base/components/utilities`).
- Si se utiliza `tailwind-merge` o `tailwindcss-animate`, verifica compatibilidad de versiones.
- Revisa clases personalizadas y utilidades que pudieran cambiar en TW4.

Checklist sugerida:

1. Actualizar dependencias: `astro`, `@astrojs/*`, `tailwindcss`, plugins.
2. Revisar `tailwind.config.mjs` y `globals.css` (tokens, baseStyles, dark mode).
3. Ejecutar `pnpm build` y corregir warnings/errores.
4. Validar rutas e imports con alias nuevos.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---
