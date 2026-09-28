# Ejercicio — El pedido en la ficha

Van a mostrar un pedido del kiosco en la página. El pedido vive en un objeto. Cada dato de la ficha se escribe buscando el elemento de una forma distinta.

Creen dos archivos en la misma carpeta: `index.html` y `script.js`. El HTML se copia tal cual. El trabajo está en el script.

## HTML de partida

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>El pedido</title>
</head>
<body>
    <article id="ficha">
        <h1></h1>
        <p class="campo"></p>
        <p class="campo"></p>
        <p class="campo"></p>
        <button type="button">Armar pedido</button>
    </article>
    <p id="conteo"></p>
    <pre id="estado"></pre>
    <script src="script.js"></script>
</body>
</html>
```

## El objeto

En `script.js` declaren un objeto `pedido` con estos pares:

| Nombre | Valor |
| --- | --- |
| cliente | `"Ana"` |
| producto | `"café"` |
| precio | `1800` |
| cantidad | `2` |

El total del pedido es `precio * cantidad`. Con estos datos, da `3600`.

Lean las propiedades de las tres maneras vistas en clase:

- `cliente` con punto: `pedido.cliente`
- `producto` con corchetes: `pedido["producto"]`
- `cantidad` con una expresión. Guarden el texto `"cantidad"` en una variable y usen esa variable entre corchetes.

## Al hacer clic en el botón

El botón no tiene `id`. Encuéntrenlo con `querySelector` y escuchen el clic con `addEventListener`.

Dentro de esa función hagan esto:

1. Con `getElementById`, lleguen al `article` de la ficha.
2. Con `getElementsByTagName`, lleguen al `h1` que está adentro y escriban `El Break`.
3. Con `getElementsByClassName` llamado sobre la ficha, lleguen a los tres párrafos de clase `campo`. Escriban, en este orden:
   - `Cliente: Ana`
   - `Producto: café`
   - `Total: 3600`
4. Con `querySelectorAll`, vuelvan a pedir los `.campo`. En el párrafo `#conteo` anoten cuántos encontró la colección del punto 3 y cuántos encontró este `NodeList`. Los dos números tienen que coincidir.
5. Con `getElementById`, lleguen al `pre` de `id="estado"` y muestren el objeto con `JSON.stringify(pedido)`.

Para escribir en la página usen `textContent`.

El `#conteo` puede llenarse con `getElementById` o con `querySelector`. El `pre` del estado queda para el otro de esos dos.

## Cómo darse cuenta de que está listo

Antes del clic, el título y los tres párrafos están vacíos.

Después del clic se tiene que leer:

```text
El Break
Cliente: Ana
Producto: café
Total: 3600
```

Debajo, el conteo muestra `3` y `3`. El `pre` muestra el objeto, con `cliente`, `producto`, `precio` y `cantidad`.

En el script tienen que aparecer estas cinco búsquedas: `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelector` y `querySelectorAll`.
