# Unidad 6 — Maquetación web

La maquetación web es la etapa en la que se estructuran, organizan y distribuyen de manera gráfica los espacios y elementos que tendrá el sitio web. Contempla la ubicación de los menús, imágenes, botones, videos, enlaces, títulos y más, para luego pasar a una previsualización de cómo se verá el sitio terminado. También se eligen las paletas de colores, tipografías y estilo para que así el diseño del sitio web luzca bien de acuerdo a los requerimientos del usuario y sea funcional.

La etapa de maquetación es una parte esencial que no podemos omitir al momento de desarrollar un sitio web, aunque puede haber quienes decidan no hacerlo. Comenzar a construir un sitio web sin un mapa de cómo debe ser puede ser igual de problemático que construir una casa sin planos. La principal razón por la cual es importante realizar la maquetación del sitio previo a la programación del mismo es la organización de los elementos y el poder visualizar cómo será el sitio una vez sea publicado. Este proceso te permite conocer cada elemento que realmente requiere el sitio web y así realizar un buen diseño pensado en las necesidades de la organización y sobre todo en la experiencia del usuario, pues es la etapa en la que los diseñadores pueden crear y definir un estilo único para el sitio.

La experiencia del usuario o UX, por sus siglas en inglés (user experience), es el principal factor por el cual un visitante de tu sitio decide permanecer en él. La maqueta del sitio es de suma importancia en este aspecto, pues permite diseñar y rediseñar cuantas veces sea necesario con la finalidad de mejorar la experiencia del usuario. El realizar la maquetación ayuda a tener un mejor flujo de trabajo entre los departamentos de diseño y software, reduciendo el tiempo dedicado al desarrollo y codificación del sitio web.

---

## Wireframe, mockup y prototipo

Antes de escribir HTML conviene distinguir tres entregables que suelen mezclarse:

1. **Wireframe**: un esquema en gris, sin colores finales. Solo muestra bloques: dónde va el logo, el menú, el contenido y el pie. Sirve para discutir la estructura.
2. **Mockup**: ya trae colores, tipografías e imágenes. Se parece a la página, pero todavía no responde a clics.
3. **Prototipo**: una versión navegable (aunque sea parcial) para probar el recorrido del usuario.

Maquetar no es solo “hacerla linda”: es decidir jerarquía, recorridos y prioridades. Un wireframe barato de cambiar evita rehacer horas de CSS.

En el siguiente enlace hay una introducción visual a estos conceptos (material de apoyo):

Diseño de interfaces y prototipos — MDN

https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout

---

## HTML semántico: el esqueleto de la maqueta

En código, la maqueta empieza con la estructura. HTML5 ofrece etiquetas que nombran regiones de la página:

- `header`: cabecera del sitio o de una sección
- `nav`: navegación principal
- `main`: contenido principal (una sola vez por página)
- `section` / `article`: bloques temáticos
- `aside`: contenido relacionado (barra lateral, avisos)
- `footer`: pie de página

Usar estas etiquetas ayuda a lectores de pantalla, a buscadores y al equipo de desarrollo: todos entienden qué es cada zona sin mirar el CSS.

---

## De la caja al layout: Flexbox y Grid

En unidades anteriores se vio el modelo de caja y el diseño responsive. Para organizar varias cajas en la página hoy se usan sobre todo dos herramientas de CSS:

1. **Flexbox**: una dimensión a la vez (fila o columna). Ideal para menús, barras de herramientas y alinear ítems en una línea.
2. **CSS Grid**: dos dimensiones (filas y columnas a la vez). Ideal para el plano general de la página: cabecera, contenido, lateral y pie.

Las dos se complementan: Grid arma el plano; Flexbox ordena lo que hay dentro de cada celda.

Documentación de apoyo:

Flexbox — MDN

https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox

Grid — MDN

https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Grids

---

## Sitios adaptativos y responsive

Una forma moderna de diseñar es haciendo sitios que se adapten a distintos tamaños de pantalla. Conviene separar dos ideas:

- **Responsive**: una misma maqueta fluye y se reacomoda con unidades relativas, imágenes fluidas y media queries (enfoque habitual hoy, muchas veces *mobile-first*).
- **Adaptativo**: se preparan layouts distintos para anchos concretos (por ejemplo móvil, tablet y escritorio) y el sitio elige cuál mostrar.

En la práctica ambos buscan lo mismo: que el contenido se lea y se use bien en el celular y en la computadora. La diferencia está en cuánto se “reflujo” versus cuánto se “cambia de plantilla”.

Estos enfoques pueden lograrse a mano con CSS, o utilizando frameworks de maquetación con plantillas prediseñadas. Un ejemplo de esto es Bootstrap.

---

## Bootstrap

Bootstrap es un potente conjunto de herramientas de front-end repleto de funciones. Permite crear desde el prototipo hasta la versión de producción en tiempos acotados. Incluye:

- un **sistema de grilla** de 12 columnas
- **componentes** listos (navbar, cards, modales, formularios)
- utilidades de espaciado, tipografía y color
- comportamiento responsive integrado

Para incluirlo en una página se puede usar el CDN oficial (CSS y, si hace falta, el JavaScript del framework). La documentación oficial explica la instalación y la grilla:

Bootstrap — Getting started

https://getbootstrap.com/docs/5.3/getting-started/introduction/

Bootstrap — Grid system

https://getbootstrap.com/docs/5.3/layout/grid/

Sintaxis de contenedor y columnas:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">…</div>
    <div class="col-12 col-md-4">…</div>
  </div>
</div>
```

`col-12` ocupa las 12 columnas en móvil. Desde `md` hacia arriba, una columna puede tomar 8 y la otra 4. Eso es maquetación con grilla prediseñada.

---

## UX, UI y accesibilidad en la maqueta

- **UX (experiencia de usuario)**: cómo se siente usar el sitio: ¿se encuentra lo que se busca? ¿el recorrido es claro?
- **UI (interfaz de usuario)**: la capa visual: botones, colores, tipografía, iconos.
- La maqueta toca las dos: define la disposición (UX) y el estilo (UI).

Al maquetar también se decide si los botones son alcanzables con el teclado, si el contraste alcanza y si el orden visual coincide con el orden del HTML. Eso es accesibilidad aplicada al layout, no un agregado posterior.

---

## Flujo de trabajo recomendado

1. Listar contenidos y prioridades (qué no puede faltar).
2. Armar wireframes de las pantallas clave.
3. Definir paleta, tipografía y componentes (mockup).
4. Validar con un prototipo liviano.
5. Pasar a HTML semántico + CSS (Flex/Grid) o a un framework como Bootstrap.
6. Probar en distintos anchos y con teclado.

Finalmente, responder las preguntas del módulo denominado "Autoevaluación Formativa".
