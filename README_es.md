<div align="center">

[![English](https://img.shields.io/badge/English-4A90E2?style=for-the-badge&logoColor=white)](README.md)
[![Spanish](https://img.shields.io/badge/Spanish-FFDE59?style=for-the-badge&logoColor=white)](README_es.md)

# λ Symbols Cheat

---

Una landing page con los símbolos que se usan en las fórmulas matemáticas — letras griegas, blackboard bold, caligráficas, fraktur y operadores — listos para copiar y pegar en Markdown, LaTeX, HTML o VS Code con un solo clic.

[![Ir a la Aplicación](https://img.shields.io/badge/🚀_Ir_a_la_Aplicación-Click_Aquí-6366f1?style=for-the-badge&logoColor=white)](https://isabosdev.com/symbols-cheat/)

<!-- Tech Stack Badges -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![KaTeX](https://img.shields.io/badge/KaTeX-008080?style=for-the-badge&logo=latex&logoColor=white)

</div>

---

## ✨ Funcionalidades

- **Copia con un clic** del propio símbolo, su comando LaTeX, su entidad HTML o su código Unicode.
- **Categorías**: alfabeto griego (con variantes como `ϵ`, `ϑ`, `ϕ`), blackboard bold (`ℝ ℂ ℕ ℤ`), caligráficas/script (`ℒ ℋ ℱ`), fraktur (`𝔤 𝔭`) y operadores de cálculo/lógica (`∇ ∂ ∞ ∫ ∀ ∃`).
- **Búsqueda** por símbolo, nombre, comando LaTeX o entidad HTML.
- **Vista de tabla y de tarjetas**.
- **Barra de "más usados"** con los símbolos más comunes siempre a mano.
- **Scratchpad con vista previa** para comprobar cómo queda una fórmula antes de pegarla.
- **Guía rápida** de la sintaxis matemática en Markdown, las entidades HTML y los selectores Unicode nativos de Windows/macOS.

## 🧭 Cómo se usa

### Copiar un símbolo

Haz clic en cualquier elemento de la tabla y se copia directamente al portapapeles. Cada columna copia un formato distinto del mismo símbolo:

| Clic en… | Obtienes | Para usarlo en |
|---|---|---|
| El glifo (`γ`) | El propio carácter | Cualquier texto, VS Code, chats, documentos |
| El comando LaTeX (`\gamma`) | El comando | LaTeX, fórmulas en Markdown (`$\gamma$`) |
| La entidad HTML (`&gamma;`) | La entidad | HTML, tablas y encabezados de Markdown |
| El código Unicode (`U+03B3`) | El code point | Selectores de caracteres, código |

El botón de la última columna copia juntas la minúscula y la mayúscula (`γ Γ`).

### Encontrar un símbolo rápido

- Pulsa `/` en cualquier parte de la página para ir al buscador.
- Busca por nombre (`lambda`), por el símbolo (`λ`), por LaTeX (`\lambda`) o por entidad HTML (`&lambda;`).
- Usa las pestañas de categoría para acotar la lista, y cambia entre las vistas **Table** y **Cards**.

### Redactar una fórmula en el scratchpad

1. Escribe en el scratchpad, o inserta una de las **quick snippet templates**.
2. Mantén `Shift` al hacer clic en cualquier símbolo de la tabla para añadirlo al scratchpad (también se copia).
3. La **vista previa** de al lado muestra la fórmula renderizada, tal como se verá en tu documento.
4. Pulsa **Copy all** y pégala en tu archivo Markdown.

### Escribir fórmulas en Markdown (VS Code, GitHub)

- Fórmula en línea: `$\alpha + \beta$` — sin espacios justo después del `$` de apertura ni antes del de cierre.
- Fórmula en bloque, centrada en su propia línea: `$$\sum_{i=1}^n x_i$$`.
- ¿Sin soporte para fórmulas? Pega el propio glifo (`α`) o la entidad HTML (`&alpha;`), que se ven en cualquier visor de Markdown.

> La página necesita conexión a internet en la primera carga, ya que los estilos, las fuentes y el renderizador de fórmulas vienen de CDN públicos.
