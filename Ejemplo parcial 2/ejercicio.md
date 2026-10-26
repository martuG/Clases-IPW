# Ejemplo parcial 2 — La nómina en JSON

Van a tomar la nómina de una empresa, pasarla de XML a JSON y mostrarla en la página. El HTML no se edita cuando cambian los datos: el script lee el objeto JSON y vuelve a escribir en los mismos elementos.

En la carpeta hay un archivo `datos.xml`. **No lo lean con `DOMParser`.** Lo convierten a mano a un objeto JavaScript (JSON) y trabajan solo con ese objeto.

Creen dos archivos en la misma carpeta: `index.html` y `script.js`. El HTML se copia tal cual. El trabajo está en el script.

## HTML de partida

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>La nómina en JSON</title>
</head>
<body>
    <h1 id="razon"></h1>
    <p id="cuit"></p>
    <p id="cantidad"></p>
    <p id="nombres"></p>
    <h2 id="nombre"></h2>
    <p id="area"></p>
    <p id="activo"></p>
    <p id="legajo"></p>
    <button type="button" id="siguiente">Siguiente empleado</button>
    <button type="button" id="exportar">Exportar JSON</button>
    <pre id="salida"></pre>
    <script src="script.js"></script>
</body>
</html>
```

Para escribir en la página usen `textContent`.

El script empieza con `"use strict";`.

## Del XML al JSON

El archivo `datos.xml` tiene esta forma (está en la carpeta; ábranlo y úsenlo como fuente):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<empresa razonSocial="Norte Logística SA" cuit="30-71234567-8">
  <empleado legajo="1042">
    <nombre>Martina Ríos</nombre>
    <area>Ventas</area>
    <activo>si</activo>
  </empleado>
  <empleado legajo="1108">
    <nombre>Diego Paredes</nombre>
    <area>Operaciones</area>
    <activo>si</activo>
  </empleado>
  <empleado legajo="1185">
    <nombre>Carla Méndez</nombre>
    <area>Administración</area>
    <activo>no</activo>
  </empleado>
</empresa>
```

En `script.js` arman un objeto equivalente. Los atributos de la raíz pasan a propiedades. Los `empleado` van en un arreglo. `activo` es booleano (`true` si el texto es `si`, `false` si es `no`).

Queda así (pueden pegarlo o escribirlo a mano; el resultado tiene que ser este objeto):

```javascript
const empresa = {
    razonSocial: "Norte Logística SA",
    cuit: "30-71234567-8",
    empleados: [
        { legajo: "1042", nombre: "Martina Ríos", area: "Ventas", activo: true },
        { legajo: "1108", nombre: "Diego Paredes", area: "Operaciones", activo: true },
        { legajo: "1185", nombre: "Carla Méndez", area: "Administración", activo: false }
    ]
};
```

También declaran un `let indice = 0;` para saber qué empleado se está mostrando.

## Función `mostrarEmpleado`

Definan `mostrarEmpleado()`. Usa `empresa` e `indice`. Completa:

- `#razon` → el valor de `empresa.razonSocial`
- `#cuit` → `CUIT: ` y `empresa.cuit`
- `#cantidad` → `Empleados: ` y la cantidad de elementos en `empresa.empleados`
- `#nombres` → `Nombres: ` y los `nombre` de todos los empleados, separados por coma y espacio
- `#nombre` → el `nombre` del empleado en `indice`
- `#area` → `Área: ` y el `area` del empleado en `indice`
- `#activo` → `Activo` si `activo` es `true`; `Inactivo` si es `false`
- `#legajo` → `Legajo: ` y el `legajo` del empleado en `indice`

Los nombres se pueden armar recorriendo `empresa.empleados` (por ejemplo con un `for` y un arreglo auxiliar, o con `map` y `join`).

## Al cargar la página

Llamen a `mostrarEmpleado()` una vez. Con `indice` en `0`, la página queda así:

```text
Norte Logística SA
CUIT: 30-71234567-8
Empleados: 3
Nombres: Martina Ríos, Diego Paredes, Carla Méndez
Martina Ríos
Área: Ventas
Activo
Legajo: 1042
```

## El botón Siguiente empleado

Escuchen el clic con `addEventListener`.

1. Sumen `1` a `indice`.
2. Si `indice` llega a `empresa.empleados.length`, vuelvan a `0`.
3. Llamen a `mostrarEmpleado()`.

El HTML no se modifica: cambian los textos.

Tras el primer clic queda Diego Paredes, Área Operaciones, Activo y Legajo 1108.  
Tras el segundo clic queda Carla Méndez, Área Administración, Inactivo y Legajo 1185.  
Tras el tercero vuelve a Martina Ríos.

## El botón Exportar JSON

Escuchen el clic con `addEventListener`.

Escriban en `#salida` el texto que devuelve `JSON.stringify(empresa, null, 2)`.

Con este objeto, `#salida` muestra el JSON indentado de toda la empresa (razón social, CUIT y empleados). Los párrafos del empleado no se tocan.

## Cómo darse cuenta de que está listo

Al abrir la página están Norte Logística SA, el CUIT, 3 empleados, los tres nombres, Martina Ríos, Ventas, Activo y legajo 1042.

`Siguiente empleado` pasa a Diego Paredes, después a Carla Méndez (Inactivo) y vuelve a Martina.

`Exportar JSON` deja en `#salida` el JSON de `empresa` con sangría.

En el script tienen que aparecer el objeto convertido desde el XML, `indice`, `mostrarEmpleado`, `addEventListener`, `JSON.stringify` y el uso de `empresa.empleados` (largo, acceso por índice y recorrido de nombres). No usen `DOMParser` ni `parseFromString` en esta consigna.
