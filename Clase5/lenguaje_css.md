# 🎨 Clase 5 — CSS: el lenguaje de la presentación

## Introducción

HTML describe **qué es** cada parte de la página. CSS describe **cómo se ve**.

**CSS** significa *Cascading Style Sheets* (hojas de estilo en cascada). Es el lenguaje que controla colores, tipografía, tamaños, distribución y, en gran medida, la experiencia visual de un sitio.

En esta materia rige una regla de trabajo:

> **HTML en un archivo. CSS en otro archivo.**

```text
proyecto/
├── index.html
└── styles.css
```

El archivo HTML se vincula así:

```html
<link rel="stylesheet" href="styles.css">
```

Esa línea va en el `<head>`. Si el nombre o la ruta están mal, la página se verá sin estilos: el HTML sigue funcionando, pero “desnudo”.

---

## Objetivos de la clase

Al finalizar este material, el estudiante debería poder:

- Explicar el rol de CSS y por qué se separa del HTML.
- Escribir reglas CSS con selectores y declaraciones.
- Usar selectores de elemento, clase, identificador y algunos combinadores.
- Aplicar colores, tipografía, fondos y unidades.
- Entender cascada, herencia y especificidad a nivel introductorio.
- Mantener un archivo `styles.css` vinculado desde `index.html`.

El **modelo de caja** (`margin`, `padding`, `border`) y el **diseño responsive** se estudian en el archivo `box_model_y_diseno_responsive.md`.

---

# 1. ¿Qué problema resuelve CSS?

Sin CSS, el navegador muestra el HTML con estilos por defecto: títulos grandes, enlaces azules subrayados, párrafos negros, sin diseño de página.

Eso alcanza para leer contenido, pero no para construir una interfaz. CSS permite:

- Definir una identidad visual (colores, tipografía, espaciado).
- Distribuir el contenido en la pantalla.
- Adaptar la presentación sin reescribir el HTML.
- Reutilizar el mismo estilo en varias páginas.

### Para los alumnos

> **Si cambio el CSS y no toco el HTML, ¿cambia el significado de la página?**

En principio, no. El documento sigue diciendo “esto es un título” o “esto es un párrafo”. Cambia la presentación. Por eso HTML semántico y CSS van juntos: la estructura se mantiene; el diseño se puede reemplazar.

---

# 2. Tres formas de aplicar CSS (y cuál usar)

| Forma | Dónde se escribe | ¿Se usa en la materia? |
|---|---|---|
| **En línea** | `style=""` en un elemento HTML | No, salvo demostraciones puntuales |
| **Interna** | `<style>` dentro del `<head>` | No como práctica habitual |
| **Externa** | archivo `.css` vinculado con `<link>` | **Sí: es la forma obligatoria** |

### En línea (evitar)

```html
<p style="color: crimson;">Texto</p>
```

Problemas: mezcla estructura y presentación, no se reutiliza, es difícil de mantener.

### Interna (reconocer, no adoptar)

```html
<head>
    <style>
        p { color: crimson; }
    </style>
</head>
```

Sirve para pruebas rápidas. En un trabajo de la materia se espera un archivo CSS aparte.

### Externa (forma correcta)

`index.html`:

```html
<link rel="stylesheet" href="styles.css">
```

`styles.css`:

```css
p {
    color: crimson;
}
```

Si hay varias páginas (`index.html`, `contacto.html`), todas pueden apuntar al mismo `styles.css`. Un cambio de color se refleja en todo el sitio.

---

# 3. Sintaxis de una regla

```css
selector {
    propiedad: valor;
    otra-propiedad: valor;
}
```

Ejemplo:

```css
h1 {
    color: #1a365d;
    font-size: 2rem;
    text-align: center;
}
```

| Parte | En el ejemplo | Función |
|---|---|---|
| Selector | `h1` | Indica a qué elementos aplica la regla |
| Declaración | `color: #1a365d;` | Una propiedad y su valor |
| Bloque | el contenido entre `{ }` | Conjunto de declaraciones |

Reglas de escritura:

- Cada declaración termina en **punto y coma**.
- Los nombres de propiedades van en minúsculas y usan guion: `font-size`, `background-color`.
- CSS ignora saltos de línea y espacios extra: la indentación es para personas, no para el navegador.
- Los comentarios se escriben con `/* ... */`.

```css
/* Títulos principales del sitio */
h1 {
    color: #1a365d;
}
```

CSS **no admite** comentarios con `//` ni con `<!-- -->`.

---

# 4. Selectores

El selector es la parte más importante de una regla: decide **qué se estiliza**.

### Selector de elemento

Aplica a todas las etiquetas de ese tipo.

```css
p {
    line-height: 1.6;
}
```

### Selector de clase

Es el más usado en proyectos reales. En HTML se asigna con `class`. En CSS se antepone un punto.

```html
<p class="destacado">Inscripción abierta</p>
```

```css
.destacado {
    color: #9b2c2c;
    font-weight: bold;
}
```

Un elemento puede tener varias clases:

```html
<p class="destacado aviso">Inscripción abierta</p>
```

### Selector de identificador

En HTML se usa `id`. En CSS se antepone `#`. Un `id` debe ser **único** en la página.

```html
<section id="contacto">...</section>
```

```css
#contacto {
    background-color: #edf2f7;
}
```

En esta materia se prefiere **clase** para estilos. El `id` se reserva para anclas, formularios y casos puntuales.

### Selector universal

```css
* {
    box-sizing: border-box;
}
```

Aplica a todos los elementos. Se usa con cuidado, sobre todo para resetear márgenes o unificar `box-sizing`.

### Selectores de atributo (introducción)

```css
a[target="_blank"] {
    color: #2b6cb0;
}

input[type="email"] {
    border-color: #2b6cb0;
}
```

---

# 5. Combinadores y pseudo-clases

### Combinadores frecuentes

```css
/* Descendiente: cualquier p dentro de article */
article p {
    margin-bottom: 1rem;
}

/* Hijo directo */
nav > ul {
    list-style: none;
}

/* Hermano adyacente: p que está justo después de h2 */
h2 + p {
    font-size: 1.1rem;
}
```

### Pseudo-clases

Una pseudo-clase selecciona un **estado** o una posición, no un elemento distinto.

```css
a:hover {
    text-decoration: underline;
}

a:visited {
    color: #553c9a;
}

input:focus {
    outline: 2px solid #2b6cb0;
}

li:first-child {
    font-weight: bold;
}
```

`:hover` y `:focus` son importantes para usabilidad. El foco aparece al navegar con teclado: no debe eliminarse sin reemplazo visible.

### Pseudo-elementos (mención)

```css
p::first-line {
    font-weight: bold;
}
```

Se escriben con dos puntos dobles en CSS3 (`::before`, `::after`, `::first-line`). Alcanza con conocer que existen; no son el centro de esta clase.

---

# 6. Cascada, herencia y especificidad

El nombre *cascading* no es decorativo. Cuando varias reglas apuntan al mismo elemento, CSS decide cuál gana.

### 1) Origen y orden

Si dos reglas tienen la misma especificidad, **gana la que aparece última**.

```css
p { color: black; }
p { color: navy; } /* esta prevalece */
```

Por eso el `<link>` al CSS suele ir al final del `<head>`: así el archivo de la materia puede sobrescribir estilos por defecto del navegador.

### 2) Especificidad (versión introductoria)

De menor a mayor peso, de forma simplificada:

1. Selector de elemento (`p`, `h1`)
2. Selector de clase (`.destacado`)
3. Selector de id (`#contacto`)
4. Estilo en línea (`style=""`)
5. `!important` (evitar)

```css
p { color: black; }           /* pierde */
.destacado { color: crimson; } /* gana: la clase pesa más */
```

No hace falta memorizar la fórmula numérica en esta unidad. Sí hay que entender la idea: **cuanto más específico es el selector, más difícil es de sobrescribir**.

### 3) Herencia

Algunas propiedades pasan de padres a hijos: `color`, `font-family`, `line-height`.

Otras no se heredan: `margin`, `padding`, `border`, `width`, `background`.

```css
body {
    font-family: Georgia, serif;
    color: #1a202c;
}
```

Con esa regla, los párrafos y títulos heredan tipografía y color, salvo que otra regla lo cambie.

### Para los alumnos

Si un estilo “no se aplica”, el orden de chequeo es:

1. ¿El archivo CSS está bien vinculado?
2. ¿El selector coincide con el HTML? (un punto o un id mal escrito alcanza para fallar)
3. ¿Otra regla más específica o posterior está ganando?

Las herramientas de desarrollador del navegador (F12 → pestaña *Elements* / *Inspector*) muestran qué reglas se aplican y cuáles quedan tachadas.

---

# 7. Colores

Formas habituales:

```css
h1 {
    color: navy;                 /* nombre */
    background-color: #edf2f7;   /* hexadecimal */
}

.aviso {
    color: rgb(155, 44, 44);
}

.ok {
    color: hsl(142, 52%, 32%);
}
```

| Notación | Ejemplo | Comentario |
|---|---|---|
| Nombre | `crimson` | Fácil de leer, paleta limitada |
| Hexadecimal | `#2b6cb0` | La más usada en la práctica |
| RGB | `rgb(43, 108, 176)` | Mismos colores que hex, otra escritura |
| HSL | `hsl(207, 61%, 43%)` | Útil para variar luminosidad |

Hexadecimal corto: `#fff` equivale a `#ffffff`.

Transparencia:

```css
.tarjeta {
    background-color: rgba(26, 32, 44, 0.8);
}
```

El último valor (`0.8`) es la opacidad: `0` es invisible, `1` es opaco.

Contraste: el texto debe poder leerse sobre el fondo. Un gris claro sobre blanco no es un detalle estético menor: es un problema de accesibilidad.

---

# 8. Unidades

CSS admite unidades absolutas y relativas.

| Unidad | Tipo | Uso típico |
|---|---|---|
| `px` | absoluta (en la práctica) | Bordes, sombras, ajustes finos |
| `%` | relativa al contenedor | Anchos de columnas |
| `em` | relativa al `font-size` del elemento | Espaciados ligados al texto |
| `rem` | relativa al `font-size` de `html` | Tipografía y márgenes consistentes |
| `vw` / `vh` | relativa al viewport | Alturas o anchos respecto de la ventana |

Ejemplo:

```css
html {
    font-size: 16px;
}

p {
    font-size: 1rem;      /* 16px */
    margin-bottom: 1.5rem;
}

.titulo {
    font-size: 2rem;      /* 32px */
}
```

En esta materia se recomienda **`rem` para tipografía** y **porcentajes o `rem` para anchos**, dejando `px` para detalles. Las unidades relativas son la base del diseño responsive, que se desarrolla en el tercer archivo de la clase.

---

# 9. Tipografía

```css
body {
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #1a202c;
}

h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
}

.cita {
    font-style: italic;
    text-align: center;
    text-transform: none;
    letter-spacing: 0.02em;
}
```

| Propiedad | Qué controla |
|---|---|
| `font-family` | Familia tipográfica. Se declara una lista de respaldo. |
| `font-size` | Tamaño del texto. |
| `font-weight` | Grosor (`normal`, `bold`, o números 100–900). |
| `font-style` | `normal` o `italic`. |
| `line-height` | Interlineado. Adimensional (`1.6`) suele ser una buena práctica. |
| `text-align` | Alineación: `left`, `center`, `right`, `justify`. |
| `text-decoration` | Subrayado, tachado. En enlaces suele quitarse y reponerse en `:hover`. |
| `text-transform` | Mayúsculas / minúsculas. |

`font-family` se escribe como una pila: si la primera fuente no está instalada, el navegador prueba la siguiente y termina en una genérica (`serif`, `sans-serif`, `monospace`).

---

# 10. Fondo, display y visibilidad

### Fondo

```css
body {
    background-color: #f7fafc;
}

.hero {
    background-image: url("imagenes/portada.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

`background` es un atajo. Al inicio conviene escribir las propiedades por separado para entenderlas.

### `display`

Define cómo participa el elemento en el flujo de la página.

| Valor | Comportamiento |
|---|---|
| `block` | Ocupa todo el ancho disponible. Empieza en una línea nueva. (`p`, `h1`, `div`) |
| `inline` | Fluye con el texto. No acepta `width`/`height` de forma útil. (`span`, `a`, `strong`) |
| `inline-block` | Fluye como texto, pero sí acepta ancho, alto y márgenes verticales. |
| `none` | El elemento no se muestra y no ocupa espacio. |
| `flex` / `grid` | Modelos de distribución. Se introducen cuando haga falta armar filas y columnas. |

```css
nav a {
    display: inline-block;
    padding: 0.5rem 1rem;
}
```

`padding` aparece acá solo como uso práctico. Su teoría completa está en el archivo del modelo de caja.

### Mostrar u ocultar

```css
.oculto {
    display: none;
}

.invisible {
    visibility: hidden; /* sigue ocupando espacio */
}
```

No son equivalentes. `display: none` saca el elemento del flujo. `visibility: hidden` lo deja invisible pero reserva su lugar.

---

# 11. Un archivo CSS ordenado

Un `styles.css` de trabajo práctico puede organizarse así:

```css
/* 1. Reset mínimo */
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1a202c;
    background-color: #f7fafc;
}

/* 2. Tipografía */
h1, h2, h3 {
    line-height: 1.2;
}

p {
    line-height: 1.6;
}

/* 3. Enlaces */
a {
    color: #2b6cb0;
    text-decoration: none;
}

a:hover,
a:focus {
    text-decoration: underline;
}

/* 4. Componentes */
.boton {
    display: inline-block;
    background-color: #2b6cb0;
    color: #fff;
    padding: 0.6rem 1.2rem;
    border: none;
    cursor: pointer;
}
```

Buenas prácticas:

- Nombres de clase en minúsculas, con guion: `.tarjeta-curso`, no `.tarjetaCurso` (en esta materia).
- Clases que describan función o componente (`.aviso`, `.boton`), no apariencia rígida (`.texto-rojo-grande`).
- No repetir las mismas declaraciones en diez selectores si se pueden agrupar.

---

# 12. Errores frecuentes

1. El CSS “no funciona” porque `href="styles.css"` no coincide con el nombre o la carpeta del archivo.
2. Escribir `class="destacado"` en HTML y `.Destacado` en CSS: los nombres distinguen mayúsculas.
3. Olvidar el punto de la clase o el `#` del id.
4. Olvidar el punto y coma al final de una declaración: a veces se rompe toda la regla.
5. Usar `style=""` en cada etiqueta en lugar de clases.
6. Crear un `id` distinto para cada estilo, en vez de reutilizar clases.
7. Confundir `font-size` con el tamaño de la caja del elemento.
8. Poner el `<link>` en el `<body>` o con la ruta mal escrita.

---

# 13. Actividad práctica

Partir del HTML de la ficha personal (archivo `lenguaje_html.md`) y completar `styles.css`.

Requisitos:

1. Vincular `styles.css` desde `index.html`. No usar estilos en línea ni `<style>`.
2. Definir tipografía y color de texto en `body` para que hereden los demás elementos.
3. Estilizar el `<h1>` del encabezado.
4. Quitar el subrayado de los enlaces del `nav` y mostrarlo en `:hover` y `:focus`.
5. Crear una clase `.tarjeta` y aplicarla a un bloque del `main` (fondo, tipografía).
6. Estilizar la tabla (encabezados con fondo distinto al cuerpo).
7. Estilizar el formulario: labels en bloque, inputs con un borde visible, botón con clase `.boton`.

Todavía no se pide un diseño responsive completo ni un estudio detallado de márgenes. Eso corresponde al siguiente archivo. Sí se pueden usar `padding` y `margin` de forma intuitiva.

---

# 14. Preguntas de cierre

1. ¿Qué ventaja tiene un CSS externo frente a los estilos en línea?
2. ¿Cuál es la diferencia entre una clase y un id a la hora de escribir CSS?
3. Si un `p` y un `.destacado` definen colores distintos, ¿cuál gana y por qué?
4. ¿Qué propiedades se heredan y cuáles no? Mencionar dos de cada grupo.
5. ¿Cómo verificarías en el navegador por qué una regla no se está aplicando?

---

# 15. Material de consulta

- MDN: [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- MDN: [Selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors)
- MDN: [Cascada, especificidad y herencia](https://developer.mozilla.org/es/docs/Web/CSS/Cascade)
- Validador CSS del W3C: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
