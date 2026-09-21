"use strict";

/*
 * Demos de la clase de introducción a JavaScript.
 * Cada bloque está atado a una sección de index.html.
 * Los textos que se ejecutan están fijos: nadie escribe código libre en esta página.
 */

const PRECIO_CAFE = 1800;
const PRECIO_MEDIALUNA = 900;

const consola = document.querySelector("#consola");
let invocaciones = 0;
let stock = 20;
let datoPaso = 0;

const pasosTipo = [
    {
        codigo: "let dato = 1800;",
        valor: "1800",
        tipo: "number",
        nota: "Un precio. En JavaScript 1800 y 1800.5 son el mismo tipo: number."
    },
    {
        codigo: 'dato = "café";',
        valor: "café",
        tipo: "string",
        nota: "La misma variable ahora guarda texto. No hizo falta declararla de nuevo."
    },
    {
        codigo: "dato = true;",
        valor: "true",
        tipo: "boolean",
        nota: "Un booleano es un sí o un no. Acá significa: el kiosco está abierto."
    },
    {
        codigo: 'dato = { producto: "café", precio: 1800 };',
        valor: '{ producto: "café", precio: 1800 }',
        tipo: "object",
        nota: "Un objeto junta varios datos con nombre. El pedido entero puede vivir en una variable."
    },
    {
        codigo: "dato = undefined;",
        valor: "undefined",
        tipo: "undefined",
        nota: "undefined aparece cuando la variable existe y todavía nadie le guardó un valor."
    },
    {
        codigo: "dato = null;",
        valor: "null",
        tipo: "object",
        nota: 'null significa "vacío a propósito". typeof null devuelve "object": es un caso histórico del lenguaje, y conviene recordarlo.'
    }
];

function escribirConsola(mensaje) {
    const linea = document.createElement("p");
    linea.className = "log-line";
    linea.textContent = mensaje;
    consola.appendChild(linea);
    consola.scrollTop = consola.scrollHeight;
    console.log(mensaje);
}

function pesos(valor) {
    return valor.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    });
}

function leerEntero(id) {
    const numero = Number(document.querySelector(id).value);
    if (!Number.isFinite(numero) || numero < 0) {
        return 0;
    }
    return Math.floor(numero);
}

function cobrar(cafes, medialunas) {
    invocaciones += 1;
    const contador = document.querySelector("#contador-invocaciones");
    if (contador) {
        contador.textContent = String(invocaciones);
    }
    return cafes * PRECIO_CAFE + medialunas * PRECIO_MEDIALUNA;
}

function prepararMarco(html) {
    const marco = document.querySelector("#marco-write");
    const doc = marco.contentDocument;
    doc.open();
    doc.write(html);
    doc.close();
}

function htmlMini(titulo, cuerpo) {
    return "<!DOCTYPE html><html><head><meta charset='utf-8'><style>" +
        "body{font-family:Segoe UI,sans-serif;margin:0;padding:1rem;background:#fffbeb;color:#1c1917}" +
        "h1{font-size:1.1rem;margin:0 0 .4rem}p{margin:0}</style></head><body>" +
        "<h1>" + titulo + "</h1><p>" + cuerpo + "</p></body></html>";
}

/* --- El cartel: un evento llama a una función --- */

function pintarCartel(abierto) {
    const cartel = document.querySelector("#cartel");
    const estado = document.querySelector("#estado-kiosco");
    const detalle = document.querySelector("#detalle-kiosco");
    const boton = document.querySelector("#btn-cartel");
    cartel.classList.toggle("is-closed", !abierto);
    if (abierto) {
        estado.textContent = "ABIERTO";
        detalle.textContent = "Hay café y medialunas.";
        boton.textContent = "Cerrar el kiosco";
    } else {
        estado.textContent = "CERRADO";
        detalle.textContent = "El cartel cambió porque corrió una función.";
        boton.textContent = "Abrir el kiosco";
    }
    boton.dataset.abierto = abierto ? "si" : "no";
}

document.querySelector("#btn-cartel").addEventListener("click", function () {
    const estaAbierto = document.querySelector("#btn-cartel").dataset.abierto === "si";
    pintarCartel(!estaAbierto);
});

/* --- Cuatro formas de mostrar información --- */

document.querySelector("#btn-log").addEventListener("click", function () {
    escribirConsola("Pedido: 2 cafés. Total " + pesos(PRECIO_CAFE * 2));
});

document.querySelector("#btn-limpiar-log").addEventListener("click", function () {
    consola.replaceChildren();
});

document.querySelector("#btn-alert").addEventListener("click", function () {
    window.alert("El Break: el pedido está listo. Son " + pesos(PRECIO_CAFE * 2) + ".");
});

document.querySelector("#btn-inner").addEventListener("click", function () {
    const destino = document.querySelector("#salida-html");
    destino.innerHTML = "<p>Ticket: <strong>2 cafés</strong></p><p>Total: " + pesos(3600) + "</p>";
});

document.querySelector("#btn-text").addEventListener("click", function () {
    const destino = document.querySelector("#salida-html");
    destino.textContent = "<p>Ticket: <strong>2 cafés</strong></p>";
});

document.querySelector("#btn-write").addEventListener("click", function () {
    prepararMarco(htmlMini("Ticket nuevo", "2 cafés · " + pesos(3600) + ". document.write() armó esta página."));
});

document.querySelector("#btn-write-pisar").addEventListener("click", function () {
    prepararMarco(htmlMini("Página reemplazada", "El ticket anterior ya no está. document.write() escribió un documento nuevo."));
});

document.querySelector("#btn-write-reset").addEventListener("click", function () {
    prepararMarco(htmlMini("Página original", "Este texto estaba antes. El próximo write lo va a reemplazar entero."));
});


/* --- Sintaxis: válido o con error --- */

document.querySelectorAll("[data-sintaxis]").forEach(function (tarjeta) {
    const esperado = tarjeta.dataset.sintaxis;
    const feedback = tarjeta.querySelector(".feedback");
    tarjeta.querySelectorAll("[data-juicio]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const acierto = boton.dataset.juicio === esperado;
            feedback.hidden = false;
            feedback.className = "feedback " + (acierto ? "is-ok" : "is-bad");
            feedback.textContent = acierto ? tarjeta.dataset.ok : tarjeta.dataset.bad;
        });
    });
});

/* --- Variables --- */

function mostrarVariable(texto) {
    document.querySelector("#salida-variables").textContent = texto;
}

/* --- Operadores aritméticos --- */

function pintarCuenta() {
    const cafes = leerEntero("#cafes");
    const medialunas = leerEntero("#medialunas");
    const total = cafes * PRECIO_CAFE + medialunas * PRECIO_MEDIALUNA;
    document.querySelector("#formula-cuenta").textContent =
        PRECIO_CAFE + " * " + cafes + " + " + PRECIO_MEDIALUNA + " * " + medialunas + " = " + total;
    document.querySelector("#total-cuenta").textContent = pesos(total);
}

document.querySelector("#cafes").addEventListener("input", pintarCuenta);
document.querySelector("#medialunas").addEventListener("input", pintarCuenta);
pintarCuenta();

document.querySelector("#btn-prec-1").addEventListener("click", function () {
    document.querySelector("#salida-prec").textContent =
        "2 + 3 * 4 = " + (2 + 3 * 4) + ". Primero se multiplica: 3 * 4 = 12, y después 2 + 12.";
});

document.querySelector("#btn-prec-2").addEventListener("click", function () {
    document.querySelector("#salida-prec").textContent =
        "(2 + 3) * 4 = " + ((2 + 3) * 4) + ". Los paréntesis obligan a sumar antes.";
});

document.querySelector("#btn-mas-texto").addEventListener("click", function () {
    document.querySelector("#salida-prec").textContent =
        '"2" + 2 = "' + ("2" + 2) + '" (el + une texto). "2" * 2 = ' + ("2" * 2) + " (el * calcula).";
});

function pintarCajas() {
    const unidades = leerEntero("#unidades");
    const porCaja = Math.max(1, leerEntero("#por-caja"));
    const cajas = Math.floor(unidades / porCaja);
    const sueltas = unidades % porCaja;
    document.querySelector("#salida-cajas").textContent =
        unidades + " / " + porCaja + " = " + (unidades / porCaja) +
        " → " + cajas + " cajas llenas. " +
        unidades + " % " + porCaja + " = " + sueltas + " medialunas sueltas.";
}

document.querySelector("#unidades").addEventListener("input", pintarCajas);
document.querySelector("#por-caja").addEventListener("input", pintarCajas);
pintarCajas();

/* --- Asignación --- */

function pintarStock(sentencia) {
    document.querySelector("#stock-valor").textContent = String(stock);
    document.querySelector("#stock-sentencia").textContent = sentencia;
    const ancho = Math.max(0, Math.min(100, (stock / 40) * 100));
    document.querySelector("#stock-bar").style.width = ancho + "%";
    document.querySelector("#btn-vender").disabled = stock < 1;
}

document.querySelector("#btn-vender").addEventListener("click", function () {
    if (stock < 1) {
        return;
    }
    stock -= 1;
    pintarStock("stock -= 1;  // stock vale " + stock);
});

document.querySelector("#btn-reponer").addEventListener("click", function () {
    stock += 5;
    pintarStock("stock += 5;  // stock vale " + stock);
});

document.querySelector("#btn-mitad").addEventListener("click", function () {
    stock /= 2;
    pintarStock("stock /= 2;  // stock vale " + stock);
});

document.querySelector("#btn-incremento").addEventListener("click", function () {
    stock++;
    pintarStock("stock++;  // equivale a sumar 1. stock vale " + stock);
});

/* --- Tipos --- */

function pintarTipo() {
    const paso = pasosTipo[datoPaso];
    document.querySelector("#tipo-codigo").textContent = paso.codigo;
    document.querySelector("#tipo-valor").textContent = paso.valor;
    document.querySelector("#tipo-typeof").textContent = paso.tipo;
    document.querySelector("#tipo-nota").textContent = paso.nota;
    document.querySelector("#tipo-indice").textContent = (datoPaso + 1) + " / " + pasosTipo.length;
}

document.querySelector("#btn-tipo-siguiente").addEventListener("click", function () {
    datoPaso = (datoPaso + 1) % pasosTipo.length;
    pintarTipo();
});

document.querySelector("#btn-tipo-reiniciar").addEventListener("click", function () {
    datoPaso = 0;
    pintarTipo();
});

pintarTipo();

/* --- Funciones --- */

function leerPedido() {
    return {
        cafes: leerEntero("#fn-cafes"),
        medialunas: leerEntero("#fn-medialunas"),
        nombre: document.querySelector("#fn-nombre").value.trim()
    };
}

document.querySelector("#btn-cobrar").addEventListener("click", function () {
    const pedido = leerPedido();
    const total = cobrar(pedido.cafes, pedido.medialunas);
    const saludo = pedido.nombre === "" ? "Cliente" : pedido.nombre;
    document.querySelector("#fn-salida").textContent =
        "Hola, " + saludo + ". " + pedido.cafes + " café(s) y " + pedido.medialunas +
        " medialuna(s): " + pesos(total) + ".";
});

document.querySelector("#btn-solo-definir").addEventListener("click", function () {
    document.querySelector("#fn-salida").textContent =
        "La función cobrar ya está definida desde que cargó la página. Invocaciones hasta ahora: " +
        invocaciones + ". Definirla no la ejecuta.";
});

/* --- Programa completo y práctica --- */

document.querySelector("#btn-programa").addEventListener("click", function () {
    const kiosco = "El Break";
    let cafes = 2;
    let medialunas = 3;
    const total = cobrar(cafes, medialunas);
    escribirConsola("Pedido en " + kiosco);
    escribirConsola(cafes + " cafés y " + medialunas + " medialunas");
    escribirConsola("Total: " + pesos(total));
    document.querySelector("#programa-ticket").innerHTML =
        "<h3>El Break</h3><p>2 cafés</p><p>3 medialunas</p><p class='ticket-total'>" +
        pesos(total) + "</p>";
});

document.querySelector("#btn-practica").addEventListener("click", function () {
    const cafe = leerEntero("#prac-cafe");
    const medialuna = leerEntero("#prac-medialuna");
    const total = 2 * cafe + 3 * medialuna;
    const salida = document.querySelector("#salida-practica");
    const expresion = "2 * " + cafe + " + 3 * " + medialuna + " = " + total;
    if (cafe === PRECIO_CAFE && medialuna === PRECIO_MEDIALUNA && total === 6300) {
        salida.className = "feedback is-ok";
        salida.textContent = expresion + ". El pedido cierra en " + pesos(6300) + ".";
    } else {
        salida.className = "feedback is-bad";
        salida.textContent = expresion + ". Con café a " + pesos(PRECIO_CAFE) +
            " y medialuna a " + pesos(PRECIO_MEDIALUNA) + " el total de 2 y 3 es " + pesos(6300) + ".";
    }
});

/* --- Chequeo rápido --- */

function actualizarPuntaje() {
    const items = document.querySelectorAll(".quiz-item");
    let correctas = 0;
    let respondidas = 0;
    items.forEach(function (item) {
        if (item.dataset.locked !== "si") {
            return;
        }
        respondidas += 1;
        if (item.dataset.acierto === "si") {
            correctas += 1;
        }
    });
    document.querySelector("#puntaje").textContent = correctas + " de " + items.length;
    document.querySelector("#puntaje-detalle").textContent =
        respondidas === 0 ? "Todavía no hay respuestas." : respondidas + " respondidas.";
}

document.querySelectorAll(".quiz-item").forEach(function (item) {
    const feedback = item.querySelector(".feedback");
    item.querySelectorAll("[data-value]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            if (item.dataset.locked === "si") {
                return;
            }
            item.dataset.locked = "si";
            const ok = boton.dataset.value === item.dataset.answer;
            item.dataset.acierto = ok ? "si" : "no";
            item.querySelectorAll("[data-value]").forEach(function (opcion) {
                opcion.disabled = true;
                if (opcion.dataset.value === item.dataset.answer) {
                    opcion.classList.add("is-correct");
                }
            });
            if (!ok) {
                boton.classList.add("is-wrong");
            }
            feedback.hidden = false;
            feedback.className = "feedback " + (ok ? "is-ok" : "is-bad");
            feedback.textContent = ok ? item.dataset.ok : item.dataset.bad;
            actualizarPuntaje();
        });
    });
});

document.querySelector("#btn-reiniciar-quiz").addEventListener("click", function () {
    document.querySelectorAll(".quiz-item").forEach(function (item) {
        item.dataset.locked = "no";
        item.dataset.acierto = "no";
        const feedback = item.querySelector(".feedback");
        feedback.hidden = true;
        feedback.textContent = "";
        item.querySelectorAll("[data-value]").forEach(function (boton) {
            boton.disabled = false;
            boton.classList.remove("is-correct", "is-wrong");
        });
    });
    actualizarPuntaje();
});

prepararMarco(htmlMini("Página original", "Este texto estaba antes. El próximo write lo va a reemplazar entero."));
actualizarPuntaje();
