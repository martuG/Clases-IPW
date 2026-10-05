# Ejercicio — El pedido que viaja

Van a preparar el pedido de Ana en la página. Primero leen datos del navegador. Después el pedido se confirma, se convierte en texto JSON y el nombre queda en una cookie.

Creen dos archivos en la misma carpeta: `index.html` y `script.js`. El HTML se copia tal cual. El trabajo está en el script.

## HTML de partida

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>El pedido que viaja</title>
</head>
<body>
    <h1>El Break</h1>
    <p id="ventana"></p>
    <ul>
        <li id="href"></li>
        <li id="hostname"></li>
        <li id="pathname"></li>
        <li id="protocolo"></li>
        <li id="pantalla"></li>
        <li id="app-name"></li>
        <li id="app-code"></li>
        <li id="platform"></li>
        <li id="historial"></li>
    </ul>
    <button type="button" id="nombre">Pedir el nombre</button>
    <p id="nombre-cliente"></p>
    <button type="button" id="cerrar">Cerrar pedido</button>
    <p id="estado"></p>
    <pre id="texto"></pre>
    <p id="total"></p>
    <p id="cookie"></p>
    <p id="espera"></p>
    <p id="aviso"></p>
    <script src="script.js"></script>
</body>
</html>
```

Para escribir en la página usen `textContent`.

## Al cargar la página

Estos datos se escriben solos, sin esperar un clic.

1. En `#ventana`, comparen `window.document === document`. El texto queda `document es window.document: true`.
2. Completen la lista con estas lecturas:
   - `#href` → `href: ` y `window.location.href`
   - `#hostname` → `hostname: ` y `window.location.hostname`
   - `#pathname` → `pathname: ` y `window.location.pathname`
   - `#protocolo` → `protocol: ` y `window.location.protocol`
   - `#pantalla` → `pantalla: ` y `window.screen.width`
   - `#app-name` → `appName: ` y `window.navigator.appName`
   - `#app-code` → `appCodeName: ` y `window.navigator.appCodeName`
   - `#platform` → `platform: ` y `window.navigator.platform`
   - `#historial` → `historial: ` y `window.history.length`

`history.length` lee cuántas entradas hay. En este ejercicio alcanza con ese número.

## El botón Pedir el nombre

Escuchen el clic con `addEventListener`.

1. Abran `window.prompt("¿Cómo te llamás?", "Ana")`.
2. Si devuelve `null`, escriban `Sin nombre` en `#nombre-cliente`.
3. Si devuelve un texto, escriban `Cliente: ` y ese texto. Al aceptar sin cambiar el cuadro, queda `Cliente: Ana`.

## El botón Cerrar pedido

Escuchen el clic con `addEventListener`.

1. Abran `window.confirm("¿Confirmás el pedido de Ana?")`.
2. Si devuelve `false`, llamen a `window.alert("Pedido cancelado")`, escriban `Pedido cancelado` en `#estado` y terminen la función. El `pre`, el total, la cookie, la espera y el aviso siguen vacíos.
3. Si devuelve `true`, armen el objeto `pedido`:

| Nombre | Valor |
| --- | --- |
| cliente | `"Ana"` |
| producto | `"café"` |
| precio | `1800` |
| cantidad | `2` |

4. Escriban `Pedido confirmado` en `#estado`.
5. Conviertan el objeto con `JSON.stringify` y pongan ese texto en `#texto`.
6. Lean ese mismo texto con `JSON.parse`. El total es `precio * cantidad` del objeto que devolvió `parse`. Con estos datos da `3600`. Escríbanlo en `#total` como `Total: 3600`.
7. Guarden la cookie `cliente=Ana` con `document.cookie` y `path=/`. En `#cookie` escriban `Cookie: ` y el valor de `document.cookie`.
8. Arranquen un `setInterval` de `1000` milisegundos. Cada vuelta suma uno y escribe `Esperando: 1`, `Esperando: 2`, y así, en `#espera`.
9. Programen un `setTimeout` de `2000` milisegundos. Al cumplirse, frenen el intervalo con `clearInterval` y escriban `El café está listo` en `#aviso`.

## Cómo darse cuenta de que está listo

Al abrir la página, `#ventana` dice que `document` es `window.document`. La lista muestra la URL, el dominio, la ruta, el protocolo, el ancho de la pantalla, los tres datos de `navigator` y el largo del historial. `appName` y `appCodeName` quedan, en los navegadores actuales, en `Netscape` y `Mozilla`.

Si abren el archivo directo, `protocol` es `file:` y `hostname` puede quedar vacío. Con un servidor local se ven `http:` y el dominio.

`Pedir el nombre` deja `Cliente: Ana` si aceptan el cuadro, o `Sin nombre` si lo cancelan.

`Cerrar pedido`, al cancelar, avisa `Pedido cancelado` y no llena el resto.

`Cerrar pedido`, al aceptar, deja:

```text
Pedido confirmado
{"cliente":"Ana","producto":"café","precio":1800,"cantidad":2}
Total: 3600
```

`#cookie` contiene `cliente=Ana`. A los 2 segundos, `#aviso` dice `El café está listo` y `#espera` deja de crecer.

En el script tienen que aparecer `window.location`, `window.screen`, `window.navigator`, `window.history`, `window.prompt`, `window.confirm`, `window.alert`, `JSON.stringify`, `JSON.parse`, `document.cookie`, `setInterval`, `setTimeout` y `clearInterval`.
