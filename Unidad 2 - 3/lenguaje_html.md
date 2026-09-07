# 🌐 Clase 5 — HTML: el lenguaje de la estructura

## Introducción

Esta clase forma parte de **Introducción a la Programación Web**.

Hasta ahora el foco estuvo en comprender **qué es Internet**, **qué es la Web** y **qué hace un desarrollador web**. A partir de aquí el trabajo pasa a ser práctico: construir páginas.

HTML, CSS y JavaScript cumplen roles distintos:

| Tecnología | Rol | Analogía |
|---|---|---|
| **HTML** | Estructura y contenido | El esqueleto y el contenido de un edificio |
| **CSS** | Presentación visual | Pintura, distribución de ambientes y estilo |
| **JavaScript** | Comportamiento | Instalaciones que responden a acciones |

> **HTML no es un lenguaje de programación.** Es un **lenguaje de marcado** (HyperText Markup Language). Su función es describir qué es cada parte del documento: un título, un párrafo, un enlace, una imagen, un formulario.

En esta materia, **HTML va en un archivo** (por convención `index.html`) y **CSS va en otro archivo** (por convención `styles.css`). No se mezclan estilos dentro del HTML salvo para ejercicios muy puntuales.

---

## Objetivos de la clase

Al finalizar este material, el estudiante debería poder:

- Explicar qué es HTML y para qué se usa.
- Armar un documento HTML5 válido.
- Distinguir etiqueta, elemento y atributo.
- Usar etiquetas semánticas para organizar una página.
- Incluir texto, listas, enlaces, imágenes, tablas y formularios básicos.
- Vincular un archivo CSS externo desde el HTML.
- Identificar errores frecuentes de estructura.

---

# 1. ¿Qué es HTML?

**HTML** significa *HyperText Markup Language* (lenguaje de marcado de hipertexto).

- **Hipertexto:** el contenido puede conectarse con otros documentos mediante enlaces.
- **Marcado:** se usan etiquetas para indicar el significado de cada fragmento.

HTML lo interpreta el **navegador**. El navegador no “ejecuta” HTML como si fuera un programa: **lee las etiquetas y construye una representación** del documento, conocida como **DOM** (Document Object Model). Esa representación es la que luego se puede estilizar con CSS y modificar con JavaScript.

### Para los alumnos

Una pregunta útil:

> **Si HTML no es un lenguaje de programación, ¿por qué lo estudiamos en una materia de programación web?**

Porque toda aplicación web tiene una interfaz. Esa interfaz se describe con HTML. Sin estructura no hay página, ni estilos, ni interacción.

---

# 2. El archivo HTML

Un sitio suele empezar con un archivo llamado `index.html`.

El nombre `index` no es casual: cuando un servidor web recibe una petición a una carpeta, busca por defecto un archivo `index.html`.

### Convención de la materia

```text
proyecto/
├── index.html      ← estructura y contenido
└── styles.css      ← presentación (se verá en el siguiente archivo)
```

El archivo HTML es un **documento de texto**. Se puede editar con cualquier editor (VS Code, Cursor, Notepad++). La extensión `.html` le indica al sistema y al navegador que se trata de una página web.

---

# 3. Anatomía de un documento HTML5

Este es el esqueleto mínimo que se usará en la materia:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hola, mundo</h1>
    <p>Esta es una página escrita en HTML.</p>
</body>
</html>
```

### ¿Qué hace cada parte?

| Parte | Función |
|---|---|
| `<!DOCTYPE html>` | Declara que el documento es HTML5. Debe ir primero. |
| `<html lang="es">` | Elemento raíz. `lang="es"` indica el idioma (útil para accesibilidad y SEO). |
| `<head>` | Metadatos: no se ven como contenido principal, pero el navegador los necesita. |
| `<meta charset="UTF-8">` | Codificación de caracteres. Permite tildes, eñes y símbolos. |
| `<meta name="viewport" ...>` | Indica cómo debe verse la página en celulares. Se retoma en diseño responsive. |
| `<title>` | Título de la pestaña del navegador. |
| `<link rel="stylesheet" href="styles.css">` | Vincula el CSS **externo**. HTML y CSS quedan en archivos separados. |
| `<body>` | Todo lo visible: títulos, textos, imágenes, formularios. |

> **Regla:** el contenido visible va en `<body>`. El `<head>` no es un “encabezado visual” de la página. El encabezado visual se arma con etiquetas como `<header>` dentro del `body`.

---

# 4. Etiqueta, elemento y atributo

Estos tres términos se mezclan con frecuencia. Conviene separarlos.

```html
<p class="destacado">Bienvenidos a la materia</p>
```

| Concepto | En el ejemplo | Definición |
|---|---|---|
| **Etiqueta de apertura** | `<p class="destacado">` | Marca el inicio. |
| **Etiqueta de cierre** | `</p>` | Marca el final. |
| **Contenido** | `Bienvenidos a la materia` | Lo que va entre las etiquetas. |
| **Elemento** | todo el conjunto | Etiqueta de apertura + contenido + etiqueta de cierre. |
| **Atributo** | `class="destacado"` | Información extra sobre el elemento. |

### Atributos

Un atributo tiene **nombre** y **valor**:

```html
<a href="https://www.unlp.edu.ar" target="_blank">Sitio de la UNLP</a>
```

- `href` indica a dónde apunta el enlace.
- `target="_blank"` pide abrir el enlace en una pestaña nueva.

### Elementos vacíos (sin cierre)

Algunos elementos no tienen contenido interno. Se escriben con una sola etiqueta:

```html
<img src="foto.jpg" alt="Estudiantes en el laboratorio">
<br>
<hr>
<meta charset="UTF-8">
<link rel="stylesheet" href="styles.css">
```

---

# 5. Anidamiento y estructura

Los elementos se **anidan**: un elemento puede contener a otros.

```html
<article>
    <h2>Horarios de consulta</h2>
    <p>Las consultas son los <strong>jueves</strong> a las 18 hs.</p>
</article>
```

Reglas:

1. Toda etiqueta de apertura debe cerrarse (salvo las vacías).
2. El anidamiento debe ser correcto: no se cruzan etiquetas.

**Incorrecto:**

```html
<p>Texto <strong>importante</p></strong>
```

**Correcto:**

```html
<p>Texto <strong>importante</strong></p>
```

El navegador intenta “arreglar” HTML mal formado, pero el resultado puede ser impredecible. En esta materia se exige HTML bien anidado.

---

# 6. HTML semántico

**Semántica** significa que las etiquetas describen el **significado** del contenido, no solo su apariencia.

Mal enfoque:

```html
<div>Título de la noticia</div>
<div>Texto de la noticia...</div>
```

Mejor enfoque:

```html
<article>
    <h2>Título de la noticia</h2>
    <p>Texto de la noticia...</p>
</article>
```

¿Por qué importa?

- El navegador y los lectores de pantalla entienden la estructura.
- Los buscadores interpretan mejor el contenido (SEO básico).
- El CSS se aplica sobre una estructura clara.
- El código es más fácil de mantener.

### Estructura típica de una página

```html
<body>
    <header>
        <h1>Nombre del sitio</h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Contenido principal</h2>
            <p>El contenido más importante de la página.</p>
        </article>

        <aside>
            <h3>Información relacionada</h3>
            <p>Datos secundarios, no el contenido central.</p>
        </aside>
    </main>

    <footer>
        <p>Materia: Introducción a la Programación Web</p>
    </footer>
</body>
```

| Etiqueta | Uso |
|---|---|
| `<header>` | Encabezado de la página o de una sección. |
| `<nav>` | Bloque de navegación. |
| `<main>` | Contenido principal. Debe haber **uno** por página. |
| `<article>` | Contenido independiente (noticia, ficha, publicación). |
| `<section>` | Agrupa contenido temáticamente relacionado. |
| `<aside>` | Contenido complementario. |
| `<footer>` | Pie de página o de sección. |

`<div>` y `<span>` no tienen significado semántico. Se usan cuando **ninguna etiqueta semántica representa mejor** ese bloque.

- `<div>`: contenedor en bloque.
- `<span>`: contenedor en línea, para un fragmento de texto.

---

# 7. Texto: títulos, párrafos y énfasis

### Títulos

Hay seis niveles: `<h1>` a `<h6>`.

```html
<h1>Introducción a la Programación Web</h1>
<h2>Unidad 2: HTML</h2>
<h3>Etiquetas semánticas</h3>
```

Reglas de la materia:

- Debe haber **un solo `<h1>`** por página, que represente el tema principal.
- Los niveles no se saltean: no se pasa de `h1` a `h3` sin un `h2`.
- Los títulos no se eligen por tamaño visual. El tamaño se controla con CSS.

### Párrafos y saltos

```html
<p>Este es un párrafo. El navegador deja espacio antes y después.</p>
<p>Este es otro párrafo.</p>
```

`<br>` fuerza un salto de línea **dentro** de un mismo bloque. No se usa para separar párrafos ni para “bajar” contenido. Eso se resuelve con CSS.

### Énfasis

| Etiqueta | Significado |
|---|---|
| `<strong>` | Importancia / énfasis fuerte. |
| `<em>` | Énfasis / entonación. |
| `<mark>` | Texto resaltado. |
| `<small>` | Comentario menor (por ejemplo, una aclaración legal). |

```html
<p>La entrega es el <strong>viernes</strong> y es <em>obligatoria</em>.</p>
```

`<b>` y `<i>` existen, pero en HTML5 se prefiere `<strong>` y `<em>` cuando hay significado, no solo apariencia.

---

# 8. Listas

### Lista no ordenada

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### Lista ordenada

```html
<ol>
    <li>Crear el archivo HTML</li>
    <li>Escribir la estructura</li>
    <li>Vincular el CSS</li>
</ol>
```

### Lista de definiciones

```html
<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para la estructura de una página.</dd>
    <dt>CSS</dt>
    <dd>Lenguaje de estilos para la presentación visual.</dd>
</dl>
```

Las listas se pueden anidar, por ejemplo un menú con submenús.

---

# 9. Enlaces e imágenes

### Enlaces

```html
<a href="https://developer.mozilla.org/es/docs/Web/HTML">Documentación de HTML</a>
<a href="contacto.html">Ir a contacto</a>
<a href="mailto:consulta@universidad.edu.ar">Escribir al docente</a>
<a href="#seccion-tablas">Saltar a tablas</a>
```

| Tipo | Ejemplo de `href` |
|---|---|
| Externo | `https://...` |
| Interno (otro archivo) | `contacto.html` |
| Correo | `mailto:direccion@dominio.com` |
| Ancla en la misma página | `#identificador` |

Para el ancla, el destino debe tener un `id`:

```html
<h2 id="seccion-tablas">Tablas</h2>
```

### Imágenes

```html
<img src="imagenes/laboratorio.jpg" alt="Estudiantes trabajando en computadoras">
```

- `src`: ruta del archivo.
- `alt`: texto alternativo. Es **obligatorio** en esta materia. Describe la imagen para quienes no pueden verla y para cuando la imagen no carga.

Rutas:

- Relativa: `imagenes/foto.jpg` (recomendada en proyectos locales).
- Absoluta: `https://ejemplo.com/foto.jpg`.

Una imagen **no reemplaza** un título. Si la imagen es decorativa, `alt` puede quedar vacío (`alt=""`), pero hay que justificarlo.

---

# 10. Tablas

Las tablas sirven para **datos tabulares**, no para armar el diseño de la página.

```html
<table>
    <caption>Horarios de la materia</caption>
    <thead>
        <tr>
            <th>Día</th>
            <th>Hora</th>
            <th>Aula</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lunes</td>
            <td>18:00</td>
            <td>204</td>
        </tr>
        <tr>
            <td>Miércoles</td>
            <td>18:00</td>
            <td>204</td>
        </tr>
    </tbody>
</table>
```

| Etiqueta | Función |
|---|---|
| `<table>` | Tabla. |
| `<caption>` | Título de la tabla. |
| `<thead>` / `<tbody>` / `<tfoot>` | Encabezado, cuerpo y pie. |
| `<tr>` | Fila. |
| `<th>` | Celda de encabezado. |
| `<td>` | Celda de dato. |

---

# 11. Formularios

Un formulario recolecta datos del usuario. En esta unidad se estudia la **estructura**. El envío al servidor se verá más adelante.

```html
<form action="#" method="get">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Correo</label>
    <input type="email" id="email" name="email" required>

    <label for="mensaje">Mensaje</label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>

    <button type="submit">Enviar</button>
</form>
```

Puntos importantes:

- Cada control debe tener un `<label>` asociado con `for` e `id`.
- `name` es el nombre del dato que se enviaría.
- `required` indica que el campo no puede quedar vacío.
- `type` cambia el teclado en celulares y la validación del navegador (`email`, `number`, `date`, etc.).

Tipos de `input` frecuentes: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file`.

---

# 12. Multimedia

```html
<audio controls>
    <source src="audio/presentacion.mp3" type="audio/mpeg">
    Tu navegador no soporta audio.
</audio>

<video controls width="640">
    <source src="video/clase.mp4" type="video/mp4">
    Tu navegador no soporta video.
</video>
```

`controls` muestra los botones de reproducción. El texto dentro de `<audio>` o `<video>` es un **fallback**: aparece solo si el navegador no puede reproducir el medio.

También se puede incrustar contenido externo con `<iframe>`, por ejemplo un mapa o un video de YouTube. Hay que usarlo con criterio: el contenido incrustado depende de un tercero.

---

# 13. Comentarios y validación

```html
<!-- Esto es un comentario: el navegador no lo muestra -->
```

Los comentarios sirven para dejar notas en el código. No reemplazan una explicación clara del HTML.

Antes de entregar un trabajo, conviene validar el documento en [https://validator.w3.org](https://validator.w3.org). El validador detecta etiquetas sin cerrar, atributos incorrectos y problemas de estructura.

---

# 14. Cómo se conecta HTML con CSS

En esta materia **el CSS no se escribe dentro del HTML**.

Forma correcta (archivo externo):

```html
<link rel="stylesheet" href="styles.css">
```

Formas que se mencionan solo para reconocerlas, no para usarlas como práctica habitual:

```html
<!-- En el head: CSS interno. No usar en los trabajos de la materia. -->
<style>
    p { color: navy; }
</style>

<!-- En un elemento: CSS en línea. Evitar. -->
<p style="color: navy;">Texto</p>
```

¿Por qué archivos separados?

- Un mismo CSS puede aplicarse a varias páginas.
- Se puede cambiar el diseño sin tocar el contenido.
- El HTML queda más legible.
- El navegador puede cachear el CSS.

El detalle de selectores y propiedades está en el archivo **lenguaje_css.md**.

---

# 15. Errores frecuentes

1. Olvidar `<!DOCTYPE html>` o `charset="UTF-8"` (aparecen caracteres rotos: `Ã¡` en lugar de `á`).
2. Poner contenido visible en el `<head>`.
3. Usar varios `<h1>` o elegir títulos por el tamaño que se ve en el navegador.
4. Armar el diseño con tablas.
5. Dejar imágenes sin `alt`.
6. Cruzar etiquetas.
7. Escribir estilos en el HTML en lugar de usar `styles.css`.
8. Guardar el archivo como `.txt` o con un nombre que no sea `index.html`.

---

# 16. Actividad práctica

Armar una carpeta `ficha-personal` con dos archivos: `index.html` y `styles.css` (el CSS puede quedar vacío por ahora).

La página debe incluir:

1. Documento HTML5 con `lang="es"`, charset, viewport, título y vínculo a `styles.css`.
2. `<header>` con el nombre del estudiante como `<h1>`.
3. `<nav>` con al menos dos enlaces (pueden ser anclas de la misma página).
4. `<main>` con:
   - una presentación en párrafos;
   - una lista de tecnologías que quiere aprender;
   - una imagen con `alt` descriptivo;
   - una tabla con horarios de cursada;
   - un formulario de contacto con nombre, email y mensaje.
5. `<footer>` con el nombre de la materia y el año.

Criterio de aprobación de la actividad: el HTML debe poder abrirse en el navegador, estar bien anidado y no tener estilos embebidos.

---

# 17. Preguntas de cierre

1. ¿Por qué se dice que HTML describe la estructura y no la apariencia?
2. ¿Cuál es la diferencia entre `<head>` y `<header>`?
3. ¿Qué problema resuelve el atributo `alt` en una imagen?
4. ¿Por qué conviene vincular CSS con `<link>` en lugar de usar `style=""`?
5. ¿Cuándo usarías `<article>` y cuándo un `<div>`?

---

# 18. Material de consulta

- MDN: [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- MDN: [Referencia de elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- Validador W3C: [https://validator.w3.org](https://validator.w3.org)
