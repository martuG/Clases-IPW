# Práctica integradora

Van a abrir la biblioteca El Faro, anotar el préstamo de Sol y confirmarlo. El préstamo se arma con una clase, se muestra en la página y después viaja como texto JSON. El nombre queda en una cookie. A los 2 segundos, los libros están listos.

Creen dos archivos en la misma carpeta: `index.html` y `script.js`. El HTML se copia tal cual. El trabajo está en el script.

La práctica junta las clases 9, 10, 11 y 12. Cada parte usa lo de la anterior: sin abrir la biblioteca no hay préstamo, y sin préstamo no hay confirmación.

## HTML de partida

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>El préstamo de la tarde</title>
</head>
<body>
    <h1 id="local"></h1>
    <p id="ventana"></p>
    <ul>
        <li id="protocolo"></li>
        <li id="pantalla"></li>
        <li id="plataforma"></li>
        <li id="historial"></li>
    </ul>
    <p id="cartel"></p>
    <button type="button" id="abrir">Abrir la biblioteca</button>
    <p id="stock"></p>
    <article id="ficha">
        <h2></h2>
        <p class="campo"></p>
        <p class="campo"></p>
        <p class="campo"></p>
    </article>
    <p id="conteo"></p>
    <ul id="prestamos"></ul>
    <button type="button" id="anotar">Anotar préstamo</button>
    <button type="button" id="confirmar">Confirmar préstamo</button>
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

Para escribir en la página usen `textContent`. El estilo se cambia con `style`. 

`document.write` no se usa: con la página ya cargada reemplazaría el documento.

El script empieza con `"use strict";` y un comentario de una línea que diga para qué es la página.

## Datos y función

Estas declaraciones quedan afuera de los botones, para que toda la página las comparta.


| Nombre       | Declaración | Valor inicial |
| ------------ | ----------- | ------------- |
| `LOCAL`      | `const`     | `"El Faro"`   |
| `SENA_LIBRO` | `const`     | `1800`        |
| `ejemplares` | `let`       | `20`          |
| `abierta`    | `let`       | `false`       |
| `prestamo`   | `let`       | `null`        |
| `confirmado` | `let`       | `false`       |


La seña es el depósito por ejemplar. Definan la función `calcular(sena, cantidad)`. Devuelve `sena * cantidad` con `return`. Con seña `1800` y cantidad `2`, da `3600`.

## Clases

`Publicacion` es la plantilla. `Novela` hereda de `Publicacion`. `Turno` solo cuenta, y el método vive en la clase.

```javascript
class Publicacion {
    constructor(titulo, sena) {
        this.titulo = titulo;
        this.sena = sena;
    }
    describir() {
        return this.titulo + " · " + this.sena;
    }
}

class Novela extends Publicacion {
    constructor(titulo, sena, genero) {
        super(titulo, sena);
        this.genero = genero;
    }
    describir() {
        return super.describir() + " · " + this.genero;
    }
}

class Turno {
    static siguiente() {
        Turno.numero += 1;
        return Turno.numero;
    }
}
Turno.numero = 0;
```

`this`, dentro del constructor, es el objeto nuevo. `super(titulo, sena)` llama al constructor de `Publicacion`. `Turno.siguiente()` se llama sobre la clase. Un turno creado con `new` no tiene ese método.

`new Novela("Atlas", SENA_LIBRO, "mapas")` describe así: `Atlas · 1800 · mapas`.

## Al cargar la página

Estos datos se escriben solos, sin esperar un clic.

1. En `#local`, escriban `LOCAL`.
2. En `#ventana`, comparen `window.document === document`. El texto queda `document es window.document: true`.
3. Completen la lista:
  - `#protocolo` → `protocol:`  y `window.location.protocol`
  - `#pantalla` → `pantalla:`  y `window.screen.width`
  - `#plataforma` → `platform:`  y `window.navigator.platform`
  - `#historial` → `historial:`  y `window.history.length`
4. Con `console.log`, escriban `El Faro listo`. El texto sale en la consola del navegador, no en la página.

`history.length` lee cuántas entradas hay. En esta práctica alcanza con ese número. No llamen a `history.back()`: se iría de la página.

## El botón Abrir la biblioteca

Escuchen el clic con `addEventListener`.

1. Pasen `abierta` a `true`.
2. En `#cartel`, escriban `ABIERTA`.
3. Pinten ese párrafo con `#cartel.style.color = "#1e3a5f"`.
4. En `#stock`, escriban `Ejemplares: 20`. El número sale de la variable `ejemplares`.
5. El botón pasa a decir `La biblioteca está abierta`.

## El botón Anotar préstamo

Escuchen el clic con `addEventListener`.

1. Si `abierta === false`, llamen a `window.alert("Primero abrí la biblioteca")` y terminen la función. La ficha, la lista y los ejemplares no cambian.
2. Abran `window.prompt("¿Cómo te llamás?", "Sol")`.
3. Si devuelve `null`, escriban `Sin nombre` en `#estado` y terminen. No cambien la ficha, la lista ni los ejemplares. `prestamo` queda como estaba.
4. Si devuelve un texto, creen `const libro = new Novela("Atlas", SENA_LIBRO, "mapas")`.
5. Armen el objeto `prestamo`. La cantidad se lee, más abajo, de las tres formas vistas en clase.


| Nombre   | Valor               |
| -------- | ------------------- |
| socio    | el texto del prompt |
| titulo   | `libro.titulo`      |
| sena     | `libro.sena`        |
| cantidad | `2`                 |
| genero   | `libro.genero`      |


1. Guarden el texto `"cantidad"` en una variable y usen esa variable entre corchetes cuando lean la cantidad.
2. Con `getElementById`, lleguen al `article` de la ficha.
3. Con `getElementsByTagName` sobre la ficha, lleguen al `h2` y escriban `El Faro`.
4. Con `getElementsByClassName` sobre la ficha, lleguen a los tres párrafos de clase `campo`. Escriban, en este orden:
  - `Socio:`  y `prestamo.socio` (con punto)
  - `Título:`  y `prestamo["titulo"]` (con corchetes)
  - `Total:`  y el resultado de `calcular`. La seña sale con punto. La cantidad sale con la variable del punto 6.
5. Con `querySelectorAll`, vuelvan a pedir los `.campo`. En `#conteo`, anoten cuántos encontró la colección del punto 9 y cuántos encontró este `NodeList`, separados por `y`. Los dos números tienen que coincidir. `#conteo` se busca con `querySelector`.
6. Creen un `li` con `document.createElement` y escríbanle `libro.describir()`. Insértenlo en `#prestamos` con `appendChild`.
7. Descuenten la cantidad de `ejemplares` con `-=` y vuelvan a escribir `#stock`. Con estos datos queda `Ejemplares: 18`.
8. Pasen `confirmado` a `false`, para que un préstamo nuevo se pueda confirmar.

Al aceptar el cuadro sin cambiar el texto, el socio es Sol y el total es `3600`.

## El botón Confirmar préstamo

Escuchen el clic con `addEventListener`.

1. Si `prestamo === null`, llamen a `window.alert("Primero anotá el préstamo")` y terminen.
2. Si `confirmado === true`, llamen a `window.alert("El préstamo ya está confirmado")` y terminen. No arranquen otro reloj.
3. Abran `window.confirm` con el texto `¿Confirmás el préstamo de`  , el socio y `?`. Con Sol queda `¿Confirmás el préstamo de Sol?`.
4. Si devuelve `false`, llamen a `window.alert("Préstamo cancelado")`, escriban `Préstamo cancelado` en `#estado` y terminen. El `pre`, el total, la cookie, la espera y el aviso siguen vacíos. La ficha y la lista se quedan como estaban. `confirmado` sigue en `false`.
5. Si devuelve `true`:
  - Pasen `confirmado` a `true`.
  - Llamen a `Turno.siguiente()` y guarden el número.
  - En `#estado`, escriban `Préstamo confirmado. Turno:`  y ese número. La primera vez es `Préstamo confirmado. Turno: 1`.
  - Pinten `#estado` con `style.color = "#1e3a5f"`.
  - Conviertan `prestamo` con `JSON.stringify` y pongan ese texto en `#texto`.
  - Lean ese mismo texto con `JSON.parse`. El total sale de `calcular`, con la seña y la cantidad del objeto que devolvió `parse`. Escríbanlo en `#total` como `Total: 3600`.
  - Guarden la cookie `socio=` y el nombre, con `document.cookie` y `path=/`. En `#cookie` escriban `Cookie:`  y el valor de `document.cookie`.
  - Arranquen un `setInterval` de `1000` milisegundos. Cada vuelta suma uno con `+=` y escribe `Esperando: 1`, `Esperando: 2`, y así, en `#espera`.
  - Programen un `setTimeout` de `2000` milisegundos. Al cumplirse, frenen el intervalo con `clearInterval` y escriban `Los libros están listos` en `#aviso`.

## Cómo darse cuenta de que está listo

Al abrir la página, `#local` dice `El Faro` y `#ventana` dice que `document` es `window.document`. La lista muestra el protocolo, el ancho de la pantalla, la plataforma y el largo del historial. En la consola aparece `El Faro listo`.

Si abren el archivo directo, `protocol` es `file:`. Con un servidor local se ve `http:` o `https:`.

Antes de cualquier clic, el cartel, los ejemplares, la ficha, el conteo y la lista de préstamos están vacíos.

`Anotar préstamo`, sin haber abierto, avisa `Primero abrí la biblioteca` y no llena nada.

`Abrir la biblioteca` deja el cartel en azul, con el texto `ABIERTA`, los ejemplares en `Ejemplares: 20` y el botón en `La biblioteca está abierta`.

`Anotar préstamo`, al cancelar el cuadro, deja `Sin nombre` en `#estado`.

`Anotar préstamo`, al aceptar `Sol`, deja:

```text
El Faro
Socio: Sol
Título: Atlas
Total: 3600
```

`#conteo` muestra `3 y 3`. `#stock` queda en `Ejemplares: 18`. La lista tiene un ítem: `Atlas · 1800 · mapas`.

`Confirmar préstamo`, sin haber anotado, avisa `Primero anotá el préstamo`.

`Confirmar préstamo`, al cancelar, avisa `Préstamo cancelado` y no llena el `pre`, el total, la cookie, la espera ni el aviso.

`Confirmar préstamo`, al aceptar, deja:

```text
Préstamo confirmado. Turno: 1
{"socio":"Sol","titulo":"Atlas","sena":1800,"cantidad":2,"genero":"mapas"}
Total: 3600
```

`#cookie` contiene `socio=Sol`. A los 2 segundos, `#aviso` dice `Los libros están listos` y `#espera` deja de crecer.

Un segundo clic en `Confirmar préstamo` avisa `El préstamo ya está confirmado` y no suma otro turno ni otro reloj.

Cada clic nuevo en `Anotar préstamo` agrega otro `li` y vuelve a descontar 2 ejemplares. Esa segunda vuelta otra vez se puede confirmar, y el turno pasa a `2`.

## Qué tiene que aparecer en el script

Clase 9. Lógica:

- `"use strict"`
- un comentario
- `const`, `let`, `function` y `return`
- `*` en `calcular`, `-=` en los ejemplares y `+=` en la espera
- `===` para decidir
- `console.log`

Clases 10 y 11. Objetos y DOM:

- `class`, `constructor`, `extends`, `super` y `static`
- `this`
- lectura con punto, con corchetes y con una variable
- `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelector` y `querySelectorAll`
- `addEventListener`
- `createElement` y `appendChild`
- `textContent` y `style`

Clase 12. Navegador y JSON:

- `window.document`, `window.location`, `window.screen`, `window.navigator` y `window.history`
- `window.prompt`, `window.confirm` y `window.alert`
- `JSON.stringify` y `JSON.parse`
- `document.cookie`
- `setInterval`, `setTimeout` y `clearInterval`

