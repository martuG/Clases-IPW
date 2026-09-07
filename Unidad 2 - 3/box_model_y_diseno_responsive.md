# 📦 Clase 5 — Modelo de caja y diseño responsive

## Introducción

En HTML, casi todo lo visible es una **caja rectangular**. Un párrafo, un título, una imagen, un botón y un `div` ocupan un rectángulo en la página.

CSS pinta y dimensiona esas cajas. Para controlar el espacio hay tres propiedades centrales:

- **`padding`**: espacio interno, entre el contenido y el borde.
- **`border`**: el borde de la caja.
- **`margin`**: espacio externo, entre el borde y los elementos vecinos.

Ese conjunto se llama **modelo de caja** (*box model*).

La segunda parte de este archivo responde otra pregunta del oficio: **¿cómo hace una misma página para verse bien en un celular, una tablet y una computadora?** Eso es **diseño responsive**.

Los dos temas van juntos: un sitio no se vuelve adaptable solo con media queries. También hay que entender cómo cada caja ocupa espacio.

---

## Objetivos de la clase

Al finalizar este material, el estudiante debería poder:

- Dibujar el modelo de caja y ubicar content, padding, border y margin.
- Decidir cuándo usar `padding` y cuándo `margin`.
- Aplicar bordes y entender `box-sizing`.
- Explicar qué es diseño responsive y por qué el viewport importa.
- Usar unidades relativas e imágenes fluidas.
- Escribir media queries básicas con enfoque mobile-first.

---

# Parte A — El modelo de caja

# 1. Las cuatro capas

De adentro hacia afuera:

```text
+-------------------------------------------+
|                  MARGIN                   |
|   +-----------------------------------+   |
|   |              BORDER               |   |
|   |   +---------------------------+   |   |
|   |   |         PADDING           |   |   |
|   |   |   +-------------------+   |   |   |
|   |   |   |     CONTENT       |   |   |   |
|   |   |   |  (texto / img)    |   |   |   |
|   |   |   +-------------------+   |   |   |
|   |   +---------------------------+   |   |
|   +-----------------------------------+   |
+-------------------------------------------+
```

| Capa | Propiedad | Qué es | ¿Se ve el color de fondo? |
|---|---|---|---|
| Contenido | `width` / `height` | Texto, imagen u otros elementos | Sí |
| Relleno | `padding` | Aire interno | Sí: el fondo llega hasta el borde |
| Borde | `border` | Línea que cierra la caja | El propio color del borde |
| Margen | `margin` | Aire externo | No: es transparente |

### Para los alumnos

Una analogía concreta:

> Pensá en un cuadro colgado en la pared.
>
> - El **contenido** es la pintura.
> - El **padding** es el paspartú (el marco interno en blanco).
> - El **border** es el marco de madera.
> - El **margin** es la distancia hasta el cuadro de al lado.

El fondo de la caja pinta contenido y padding. El margen no se pinta: deja ver lo que hay detrás (en general, el fondo del padre).

---

# 2. `padding`: espacio interno

`padding` aleja el contenido del borde **sin** separar la caja de sus vecinas.

```css
.tarjeta {
    background-color: #edf2f7;
    padding: 1.5rem;
}
```

Sin padding, el texto queda pegado al borde del fondo. Con padding, la caja “respira” por dentro.

### Las cuatro direcciones

```css
.caja {
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
}
```

Atajo `padding` (sentido horario, empezando arriba):

```css
padding: 16px;                 /* los cuatro lados */
padding: 16px 24px;            /* vertical | horizontal */
padding: 8px 16px 24px;        /* arriba | horizontal | abajo */
padding: 8px 16px 24px 32px;   /* arriba | derecha | abajo | izquierda */
```

El padding **no es negativo**. No se puede “meter” el contenido hacia afuera con padding.

---

# 3. `border`: el borde

```css
.tarjeta {
    border-width: 2px;
    border-style: solid;
    border-color: #2b6cb0;
}
```

Atajo:

```css
.tarjeta {
    border: 2px solid #2b6cb0;
}
```

`border-style` es obligatorio para que el borde se vea. Si falta, `width` y `color` no alcanzan.

Estilos habituales: `solid`, `dashed`, `dotted`, `double`, `none`.

También se puede bordar un solo lado:

```css
.aviso {
    border-left: 4px solid #c53030;
    padding-left: 1rem;
}
```

### Esquinas

```css
.tarjeta {
    border-radius: 8px;
}

.avatar {
    border-radius: 50%; /* círculo, si el ancho y el alto son iguales */
}
```

`border-radius` no es parte estricta de las cuatro capas, pero se enseña junto con el borde porque cambia la silueta de la caja.

---

# 4. `margin`: espacio externo

`margin` separa **cajas entre sí**. No empuja el contenido hacia adentro; aleja un elemento de los demás.

```css
h2 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
}

.tarjeta {
    margin-bottom: 1.5rem;
}
```

El atajo es igual que en padding:

```css
margin: 0 auto; /* arriba/abajo 0, izquierda/derecha automáticos */
```

`margin-left: auto` y `margin-right: auto` en un bloque con ancho definido **centran** la caja horizontalmente:

```css
.contenedor {
    width: 90%;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
}
```

A diferencia del padding, el margen **sí puede ser negativo**. En esta unidad introductoria se desaconseja, porque suele romper el flujo de forma difícil de depurar.

### Colapso de márgenes verticales

Entre dos bloques consecutivos, los márgenes superior e inferior **no siempre se suman**. En muchos casos prevalece el mayor.

```css
h2 { margin-bottom: 24px; }
p  { margin-top: 16px; }
```

El espacio visible entre el `h2` y el `p` suele ser **24px**, no 40px. Eso se llama *margin collapsing*.

Ocurre sobre todo con márgenes **verticales** de elementos en flujo normal. No ocurre con márgenes horizontales, ni (en general) con flex o grid.

Si se necesita un espacio interno estable, a menudo es más predecible usar `padding` en el contenedor.

---

# 5. ¿Padding o margin?

| Necesidad | Usar | Por qué |
|---|---|---|
| El texto no debe pegarse al fondo de color | `padding` | El fondo cubre el padding |
| Separar dos tarjetas vecinas | `margin` | El espacio es externo |
| Un botón con área de clic holgada | `padding` | Agranda la caja por dentro |
| Centrar un contenedor | `margin: 0 auto` | Es espacio externo |
| Una línea de acento a la izquierda del texto | `border` + `padding` | El padding evita que el texto tape el borde |
| Separar secciones de una página | `margin` o `padding` del padre | Depende de si hay fondo continuo |

Regla práctica:

> Si el espacio debe llevar el **mismo fondo** que el elemento, es padding.  
> Si el espacio debe ser **calle** entre elementos, es margin.

---

# 6. Ancho, alto y `box-sizing`

Por defecto, en CSS clásico:

```text
ancho total = width + padding izq/der + border izq/der
```

`width` se refiere al **contenido**, no a la caja visible completa.

```css
.caja {
    width: 300px;
    padding: 20px;
    border: 10px solid black;
}
```

Ancho real en el modelo por defecto (`content-box`): `300 + 40 + 20 = 360px`.

Eso sorprende: se pidió 300px y la caja ocupa más. En diseños con porcentajes, dos columnas de `width: 50%` **no entran** en una fila si además tienen padding.

### `border-box`

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

Con `border-box`, `width` incluye contenido, padding y borde. El ejemplo anterior ocuparía 300px en total; el contenido se achica para dejar lugar al padding y al borde.

En esta materia **se usa `box-sizing: border-box` en todos los proyectos**. Es la convención actual de la industria y evita cuentas inesperadas.

### `max-width` y `min-width`

```css
img {
    max-width: 100%;
    height: auto;
}

.contenedor {
    width: 90%;
    max-width: 960px;
}
```

- `max-width: 100%` impide que una imagen desborde a su padre.
- `height: auto` conserva la proporción.
- Un contenedor con `width: 90%` y `max-width: 960px` es un patrón clásico: en pantallas chicas usa el 90%; en pantallas grandes no crece sin límite.

---

# 7. Cómo inspeccionar el modelo de caja

En el navegador:

1. Clic derecho sobre un elemento → *Inspeccionar*.
2. En la pestaña *Computed* o en el gráfico del box model se ven margin (zona externa), border, padding y content.
3. Al pasar el cursor, el navegador colorea cada capa sobre la página.

Esa herramienta vale más que memorizar números. Si una caja “no entra”, lo habitual es que el padding o el borde estén sumando ancho, o que un margin esté empujando el layout.

---

# Parte B — Diseño responsive

# 8. ¿Qué es diseño responsive?

**Diseño responsive** (o adaptable) significa que **una misma página** se reorganiza según el tamaño de la pantalla, sin necesidad de un sitio distinto para celular.

No es “hacer una versión mobile”. Es construir un layout que **fluye**.

Problemas que resuelve:

- Texto que desborda o queda ilegible.
- Columnas de escritorio apiladas de forma ilegible en un teléfono.
- Imágenes más anchas que la pantalla, con scroll horizontal.
- Botones demasiado chicos para el dedo.
- Menús que no se pueden usar en 360px de ancho.

### Para los alumnos

> **¿Responsive es lo mismo que “se ve bien en el celular”?**

Es una parte. También implica tablets, netbooks y pantallas grandes. Un diseño que solo se pensó para 1366px y “después se achica” suele fallar. Por eso más abajo se trabaja **mobile-first**.

---

# 9. El viewport

En un teléfono, el navegador no asume automáticamente que la página fue pensada para 360 o 390 píxeles de ancho. Si falta la meta etiqueta, muchos navegadores simulan una pantalla de escritorio (~980px) y luego **escalan** todo: el sitio se ve pequeño y hay que hacer zoom.

Por eso el HTML de la materia incluye:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Parte | Significado |
|---|---|
| `width=device-width` | El ancho de diseño coincide con el ancho real del dispositivo |
| `initial-scale=1.0` | No se aplica zoom inicial |

Sin esta línea, las media queries no se comportan como se espera en el celular.

---

# 10. Estrategias para que el diseño se adapte

El responsive no empieza por las media queries. Empieza por **no fijar todo en píxeles**.

### 1) Layout fluido

```css
.contenedor {
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem;
}
```

El contenedor crece y se encoge con la pantalla, con un techo de 960px.

### 2) Imágenes fluidas

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

Sin esto, una foto de 1200px de ancho fuerza scroll horizontal en un teléfono.

### 3) Unidades relativas

```css
html {
    font-size: 100%; /* respeta, en muchos casos, la preferencia del usuario */
}

h1 {
    font-size: 1.75rem;
}

.grid > * {
    width: 100%;
}
```

`rem` escala con el tamaño base. `%` y `fr` (en grid) se reparten el espacio del padre. `px` rígidos en anchos de columna suelen romper el diseño.

### 4) Tipografía que no desborda

Evitar textos en una sola línea forzada (`white-space: nowrap`) en títulos largos. En pantallas chicas, el título debe poder partirse en varias líneas.

### 5) Áreas táctiles

Un enlace o botón debería tener un área de toque razonable. El padding ayuda:

```css
.boton {
    display: inline-block;
    padding: 0.75rem 1.25rem;
}
```

---

# 11. Media queries

Una **media query** aplica un bloque de CSS **solo si** se cumple una condición sobre el dispositivo o la ventana.

```css
/* Estilos base: pensados para pantalla chica */

.columnas {
    display: block;
}

.columnas > * {
    width: 100%;
    margin-bottom: 1rem;
}

/* A partir de 768px de ancho de viewport, dos columnas */
@media (min-width: 768px) {
    .columnas {
        display: flex;
        gap: 1.5rem;
    }

    .columnas > * {
        width: 50%;
        margin-bottom: 0;
    }
}
```

### Condiciones frecuentes

| Condición | Cuándo se usa |
|---|---|
| `(min-width: 768px)` | Escritorio/tablet hacia arriba (mobile-first) |
| `(max-width: 767px)` | Solo pantallas chicas (enfoque desktop-first) |
| `(orientation: landscape)` | Dispositivo en horizontal |
| `(prefers-color-scheme: dark)` | Si el usuario pidió tema oscuro |

En esta unidad el foco es `min-width` y `max-width`.

### Puntos de corte sugeridos (orientativos)

No hay un único estándar. Un esquema simple para los prácticos:

| Ancho | Dispositivo de referencia |
|---|---|
| menos de 768px | Celular |
| 768px – 1023px | Tablet |
| 1024px o más | Escritorio |

Los números se ajustan al diseño concreto, no al revés. El contenido dicta el corte: se ensancha la ventana hasta que el layout “se rompe”, y ahí se escribe la media query.

---

# 12. Mobile-first

**Mobile-first** significa:

1. Escribir primero el CSS para la pantalla **más chica**.
2. Agregar complejidad (columnas, menú horizontal, tipografías mayores) con `min-width`.

```css
/* Base: una columna, menú vertical */
nav a {
    display: block;
    padding: 0.75rem 1rem;
}

/* Escritorio: el menú se alinea en fila */
@media (min-width: 768px) {
    nav {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    nav a {
        display: inline-block;
    }
}
```

¿Por qué este orden?

- La mayoría del tráfico web es móvil.
- El CSS base queda más simple.
- Se **agrega** layout, en lugar de pelear contra un diseño de escritorio para desarmarlo con `max-width`.

Desktop-first (partir de escritorio y usar `max-width` para achicar) también funciona, pero en la materia se pide **mobile-first**.

---

# 13. Ejemplo integrado

`index.html` (fragmento):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styles.css">
```

```html
<main class="contenedor">
    <section class="columnas">
        <article class="tarjeta">
            <h2>HTML</h2>
            <p>Estructura y contenido del documento.</p>
        </article>
        <article class="tarjeta">
            <h2>CSS</h2>
            <p>Presentación visual y distribución.</p>
        </article>
    </section>
</main>
```

`styles.css`:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    background-color: #f7fafc;
}

.contenedor {
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem;
}

.tarjeta {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.25rem;
    margin-bottom: 1rem;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

@media (min-width: 768px) {
    .columnas {
        display: flex;
        gap: 1.5rem;
    }

    .tarjeta {
        margin-bottom: 0;
        width: 50%;
    }
}
```

Qué se está combinando:

- `box-sizing: border-box` para que el padding no desborde.
- `padding` interno en la tarjeta.
- `margin` entre tarjetas en móvil.
- `gap` (espacio entre ítems flex) en escritorio.
- contenedor fluido + `max-width`.
- una media query `min-width` para pasar de una columna a dos.

---

# 14. Cómo probar el diseño

No alcanza con achicar la ventana del editor.

1. Abrir la página en el navegador.
2. F12 → icono de dispositivo móvil (o `Ctrl+Shift+M` en Firefox / modo dispositivo en Chrome).
3. Probar anchos de 360px, 768px y 1280px.
4. Comprobar que no haya scroll horizontal.
5. Leer el texto: el tamaño debe seguir siendo cómodo.
6. Verificar que los botones se puedan tocar.

El emulador del navegador es una aproximación. En lo posible, abrir el archivo también en un celular de verdad (por ejemplo sirviendo la carpeta en la red local). Para esta unidad, el modo dispositivo del navegador es suficiente.

---

# 15. Errores frecuentes

1. Olvidar la meta `viewport`.
2. Poner `width` fijo en píxeles al `body` o a columnas (`width: 1200px`).
3. Imágenes sin `max-width: 100%`.
4. Usar `box-sizing: content-box` (el valor por defecto) y no entender por qué 50% + 50% no entra.
5. Confundir padding con margin y “arreglar” espacios a ciegas.
6. Media queries con `max-width` mezcladas sin criterio, peleando entre sí.
7. Diseñar solo en una ventana de escritorio y nunca achicarla.
8. Textos o botones que en celular quedan por debajo de 14–16px efectivos.

---

# 16. Actividad práctica

Tomar la ficha personal de los archivos anteriores y convertirla en una página responsive.

### Requisitos del modelo de caja

1. Resetear `box-sizing: border-box` en todos los elementos.
2. Un contenedor centrado con `width: 90%`, `max-width` y `margin: 0 auto`.
3. Al menos un bloque con fondo de color donde se note la diferencia entre padding (aire interno) y margin (separación respecto del siguiente bloque).
4. Un borde visible en las tarjetas o en el formulario.
5. Imágenes fluidas.

### Requisitos responsive

6. Meta viewport presente.
7. En pantallas chicas: una columna; navegación en bloque vertical.
8. A partir de 768px: el contenido principal en dos columnas **o** el menú en fila (al menos uno de los dos cambios).
9. Sin scroll horizontal en 360px.
10. Media queries con `min-width` (mobile-first).

### Entrega

Seguir la regla de la clase: `index.html` + `styles.css`. No incrustar el CSS en el HTML.

---

# 17. Preguntas de cierre

1. ¿Qué parte del modelo de caja hereda el color de fondo: padding o margin?
2. ¿Por qué dos cajas con `width: 50%` pueden no entrar en una misma fila?
3. ¿Qué problema concreto resuelve `box-sizing: border-box`?
4. ¿Qué ocurre en un celular si falta `<meta name="viewport" ...>`?
5. ¿Qué diferencia hay entre escribir estilos extra con `min-width` y con `max-width`?
6. Si el espacio entre dos títulos “no se suma”, ¿qué fenómeno de los márgenes puede estar ocurriendo?

---

# 18. Material de consulta

- MDN: [Modelo de caja](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Box_model)
- MDN: [margin](https://developer.mozilla.org/es/docs/Web/CSS/margin), [padding](https://developer.mozilla.org/es/docs/Web/CSS/padding), [border](https://developer.mozilla.org/es/docs/Web/CSS/border)
- MDN: [Diseño responsive](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- MDN: [Usar consultas de medios](https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries)
