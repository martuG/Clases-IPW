# Ejercicio — Maqueta semántica y layout

Armar una página mínima: primero la estructura semántica, después un layout con Flexbox (o con la grilla de Bootstrap).

Creen dos archivos en esta carpeta: `index.html` y `styles.css`.

## Consigna

1. Escriban un HTML con estas regiones, en este orden:
   - `header` con el título del sitio
   - `nav` con tres enlaces
   - `main` con un `h1` y un párrafo
   - `aside` con un bloque secundario
   - `footer` con un texto de pie

2. En el CSS:
   - El `body` usa un fondo claro y tipografía legible.
   - El `header` y el `nav` quedan en una barra superior con **Flexbox** (`display: flex`, espacio entre título y menú).
   - Desde `640px` hacia arriba, `main` y `aside` quedan en dos columnas (proporción aproximada 2:1). En móvil se apilan.
   - Usen `gap` o márgenes consistentes. No dejen el contenido pegado a los bordes.

3. Opcional: enlacen Bootstrap por CDN y reemplacen el layout de columnas por `container` / `row` / `col-12 col-md-8` y `col-12 col-md-4`.

## Criterios de aceptación

- El HTML usa las etiquetas semánticas pedidas (no todo en `div`).
- Hay una sola etiqueta `main`.
- En pantalla angosta el `aside` queda debajo de `main`; en ancha, al costado.
- La barra superior muestra el título a un lado y los enlaces al otro.

## Para entregar

`index.html` y `styles.css` en la carpeta de la ejercitación. Si usan Bootstrap, indíquenlo en un comentario al inicio del HTML.
