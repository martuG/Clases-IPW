# Ejercicio — La nota en XML

Van a leer la nota de Juan y mostrarla en la página. El HTML no se edita cuando cambian los datos: el script lee otro XML y vuelve a escribir en los mismos elementos.

Creen dos archivos en la misma carpeta: `index.html` y `script.js`. El HTML se copia tal cual. El trabajo está en el script.

## HTML de partida

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>La nota en XML</title>
</head>
<body>
    <h1>El Break</h1>
    <p id="para"></p>
    <p id="de"></p>
    <p id="encabezado"></p>
    <p id="cuerpo"></p>
    <p id="fecha"></p>
    <p id="raiz"></p>
    <p id="hijos"></p>
    <button type="button" id="otra">Otra nota</button>
    <button type="button" id="revisar">Revisar un XML mal anidado</button>
    <p id="sintaxis"></p>
    <script src="script.js"></script>
</body>
</html>
```

Para escribir en la página usen `textContent`.

## Al cargar la página

Este XML se lee solo, sin esperar un clic.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="12/11/2022">
  <para>Ana</para>
  <de>Juan</de>
  <encabezado>Pedido listo</encabezado>
  <cuerpo>El café está en la barra.</cuerpo>
</nota>
```

1. Léenlo con `new DOMParser().parseFromString(texto, "application/xml")`.
2. La raíz es `documentElement`.
3. Completen los párrafos:
   - `#para` → `Para: ` y el texto del elemento `para`
   - `#de` → `De: ` y el texto del elemento `de`
   - `#encabezado` → `Encabezado: ` y el texto del elemento `encabezado`
   - `#cuerpo` → `Cuerpo: ` y el texto del elemento `cuerpo`
   - `#fecha` → `Fecha: ` y el atributo `fecha`
   - `#raiz` → `Raíz: ` y el nombre de la raíz
   - `#hijos` → `Hijos: ` y los nombres de `children`, separados por coma y espacio

El atributo se lee con `getAttribute("fecha")`. Los elementos se pueden buscar con `querySelector`. Los hijos se recorren con `children`.

Con este XML, la página queda así:

```text
Para: Ana
De: Juan
Encabezado: Pedido listo
Cuerpo: El café está en la barra.
Fecha: 12/11/2022
Raíz: nota
Hijos: para, de, encabezado, cuerpo
```

## El botón Otra nota

Escuchen el clic con `addEventListener`.

Lean este otro XML y escriban en los mismos párrafos. El HTML no se modifica: cambian los textos.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="19/10/2026">
  <para>Lucía</para>
  <de>Pedro</de>
  <encabezado>Mesa libre</encabezado>
  <cuerpo>La mesa 4 quedó libre.</cuerpo>
</nota>
```

El resultado queda así:

```text
Para: Lucía
De: Pedro
Encabezado: Mesa libre
Cuerpo: La mesa 4 quedó libre.
Fecha: 19/10/2026
Raíz: nota
Hijos: para, de, encabezado, cuerpo
```

## El botón Revisar un XML mal anidado

Escuchen el clic con `addEventListener`.

1. Lean este texto con `DOMParser` y `"application/xml"`:

```xml
<nota><para>Ana</de></para></nota>
```

2. Si el documento tiene un `parsererror`, escriban `XML inválido` en `#sintaxis`.
3. Si no lo tiene, escriban `XML válido`.

`DOMParser` no lanza una excepción cuando el XML está mal formado. Devuelve un documento con `parsererror`. Con este texto, `#sintaxis` queda en `XML inválido`. Los párrafos de la nota no se tocan.

## Cómo darse cuenta de que está listo

Al abrir la página están Ana, Juan, el encabezado "Pedido listo", el café, la fecha 12/11/2022, la raíz `nota` y los cuatro hijos.

`Otra nota` deja a Lucía, Pedro, "Mesa libre", la mesa 4 y la fecha 19/10/2026 en los mismos párrafos.

`Revisar un XML mal anidado` escribe `XML inválido`.

En el script tienen que aparecer `DOMParser`, `parseFromString`, `"application/xml"`, `documentElement`, `getAttribute`, `children`, `querySelector` y `parsererror`.
