"use strict";

/*
 * Demos de la clase 12: BOM y JSON.
 * Cada bloque está atado a una sección de index.html.
 * Los textos que se ejecutan están fijos: nadie escribe código libre en esta página.
 */

var nombreVentana = "El Break";

function saludoVentana() {
    return "Hola desde " + nombreVentana;
}

const localKiosco = "El Break";
const PRECIO_CAFE = 1800;
const CANTIDAD = 2;

const pedido = {
    cliente: "Ana",
    producto: "café",
    precio: PRECIO_CAFE,
    cantidad: CANTIDAD,
    paraLlevar: true,
    nota: null,
    extras: ["medialuna"]
};

let textoPedido = "";
let avisoId = 0;
let relojId = 0;
let segundos = 0;
let nivelHistoria = 0;
let topeHistoria = 0;

function pesos(valor) {
    return valor.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    });
}

function textoValor(valor) {
    if (valor === null) {
        return "null";
    }
    if (typeof valor === "undefined") {
        return "undefined";
    }
    return String(valor);
}

function leerCookie(nombre) {
    const partes = document.cookie.split("; ");
    let i = 0;
    for (i = 0; i < partes.length; i += 1) {
        const parte = partes[i];
        const corte = parte.indexOf("=");
        if (corte === -1) {
            continue;
        }
        if (parte.slice(0, corte) === nombre) {
            return decodeURIComponent(parte.slice(corte + 1));
        }
    }
    return null;
}

function escribirCookie(nombre, valor) {
    const vence = new Date();
    vence.setDate(vence.getDate() + 7);
    document.cookie = nombre + "=" + encodeURIComponent(valor) +
        ";expires=" + vence.toUTCString() + ";path=/;SameSite=Lax";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax";
}

/* --- 1. window --- */

function pintarMedidas() {
    document.querySelector("#win-ancho").textContent = window.innerWidth + " px";
    document.querySelector("#win-alto").textContent = window.innerHeight + " px";
}

document.querySelector("#btn-ventana").addEventListener("click", function () {
    const lineas = [
        "window.document === document → " + (window.document === document),
        "window.nombreVentana → " + textoValor(window.nombreVentana),
        "window.saludoVentana() → " + window.saludoVentana(),
        "typeof window.alert → " + typeof window.alert,
        "localKiosco → " + localKiosco,
        "window.localKiosco → " + textoValor(window.localKiosco),
        "innerWidth × innerHeight → " + window.innerWidth + " × " + window.innerHeight
    ];
    document.querySelector("#salida-ventana").textContent = lineas.join("\n");
});

window.addEventListener("resize", pintarMedidas);

/* --- 2. screen --- */

function pintarScreen() {
    document.querySelector("#scr-width").textContent = screen.width + " px";
    document.querySelector("#scr-height").textContent = screen.height + " px";
    document.querySelector("#scr-avail-w").textContent = screen.availWidth + " px";
    document.querySelector("#scr-avail-h").textContent = screen.availHeight + " px";
    document.querySelector("#scr-depth").textContent = screen.colorDepth + " bits";
    document.querySelector("#salida-screen").textContent =
        "window.screen === screen → " + (window.screen === screen) +
        ". La tabla es el tamaño de la pantalla, no el de la ventana.";
}

document.querySelector("#btn-screen").addEventListener("click", pintarScreen);

/* --- 3. location --- */

function pintarLocation(mensaje) {
    const loc = window.location;
    document.querySelector("#loc-href").textContent = loc.href;
    document.querySelector("#loc-host").textContent = loc.hostname === "" ? "(vacío)" : loc.hostname;
    document.querySelector("#loc-path").textContent = loc.pathname;
    document.querySelector("#loc-proto").textContent = loc.protocol;
    document.querySelector("#salida-location").textContent = mensaje;
    document.querySelector("#loc-nota").textContent = loc.protocol === "file:"
        ? "Esta página se abrió como archivo. El protocolo es file: y el hostname queda vacío. En un servidor se ven http: o https: y el dominio."
        : "protocol → " + loc.protocol + ". hostname → " + (loc.hostname === "" ? "(vacío)" : loc.hostname) + ".";
}

document.querySelector("#btn-loc-leer").addEventListener("click", function () {
    pintarLocation("window.location === location → " + (window.location === location) + ".");
});

document.querySelector("#btn-loc-json").addEventListener("click", function () {
    window.location.hash = "json";
    pintarLocation("location.hash quedó en #json. El href cambió. La clase sigue abierta.");
});

window.addEventListener("hashchange", function () {
    pintarLocation("hashchange: la URL cambió dentro de esta página. href → " + window.location.href);
});

/* --- 4. history --- */

function describirHistoria(origen) {
    const carta = history.state && history.state.carta ? history.state.carta : "inicio";
    document.querySelector("#salida-historia").textContent =
        origen + "\n" +
        "Entrada actual: " + carta + "\n" +
        "history.length → " + history.length;
}

window.addEventListener("popstate", function (evento) {
    if (evento.state && typeof evento.state.n === "number") {
        nivelHistoria = evento.state.n;
    } else {
        nivelHistoria = 0;
    }
    const carta = evento.state && evento.state.carta ? evento.state.carta : "inicio";
    describirHistoria("popstate llegó con \"" + carta + "\".");
});

document.querySelector("#btn-hist-anotar").addEventListener("click", function () {
    nivelHistoria += 1;
    topeHistoria = nivelHistoria;
    const etiqueta = nivelHistoria === 1 ? "café" : "café " + nivelHistoria;
    history.pushState({ carta: etiqueta, n: nivelHistoria }, "", window.location.href);
    describirHistoria("pushState anotó \"" + etiqueta + "\".");
});

document.querySelector("#btn-hist-back").addEventListener("click", function () {
    if (nivelHistoria <= 0 && window.location.hash === "") {
        describirHistoria("Esta es la entrada inicial. back() desde acá sale de la página, igual que el botón Atrás.");
        return;
    }
    history.back();
});

document.querySelector("#btn-hist-forward").addEventListener("click", function () {
    if (nivelHistoria >= topeHistoria && window.location.hash === "") {
        describirHistoria("No hay una entrada más adelante. forward() es el botón Adelante.");
        return;
    }
    history.forward();
});

/* --- 5. navigator --- */

document.querySelector("#btn-nav").addEventListener("click", function () {
    document.querySelector("#salida-nav").textContent =
        "navigator.appName → " + navigator.appName + "\n" +
        "navigator.appCodeName → " + navigator.appCodeName + "\n" +
        "navigator.platform → " + navigator.platform + "\n" +
        "window.navigator === navigator → " + (window.navigator === navigator);
});

/* --- 6. Cuadros emergentes --- */

document.querySelector("#btn-alert").addEventListener("click", function () {
    const valor = window.alert("El café de Ana está listo.");
    document.querySelector("#salida-pop").textContent =
        "alert(...) → " + textoValor(valor) + "\n" +
        "typeof → " + typeof valor + ". El cuadro informa y no devuelve un dato.";
});

document.querySelector("#btn-confirm").addEventListener("click", function () {
    const acepta = window.confirm("¿Confirmás el pedido de Ana?");
    document.querySelector("#salida-pop").textContent =
        "confirm(...) → " + acepta + "\n" +
        (acepta ? "Aceptar devuelve true." : "Cancelar devuelve false.");
});

document.querySelector("#btn-prompt").addEventListener("click", function () {
    const nombre = window.prompt("¿Cómo te llamás?", "Ana");
    if (nombre === null) {
        document.querySelector("#salida-pop").textContent =
            "prompt(...) → null\nCancelar devuelve null. No quedó un nombre.";
        return;
    }
    document.querySelector("#salida-pop").textContent =
        "prompt(...) → " + JSON.stringify(nombre) + "\nAceptar devuelve el texto ingresado.";
});

/* --- 7. Temporizadores --- */

function pintarTiempo(mensaje) {
    document.querySelector("#salida-tiempo").textContent = mensaje;
}

document.querySelector("#btn-timeout").addEventListener("click", function () {
    if (avisoId) {
        clearTimeout(avisoId);
    }
    document.querySelector("#tiempo-estado").textContent = "El pedido de Ana está en preparación.";
    avisoId = setTimeout(function () {
        avisoId = 0;
        document.querySelector("#tiempo-estado").textContent = "El café de Ana está listo.";
        pintarTiempo("setTimeout corrió una vez, a los 2 segundos.");
    }, 2000);
    pintarTiempo("setTimeout quedó programado. clearTimeout lo puede frenar antes de los 2 segundos.");
});

document.querySelector("#btn-timeout-stop").addEventListener("click", function () {
    if (!avisoId) {
        pintarTiempo("No hay un setTimeout esperando.");
        return;
    }
    clearTimeout(avisoId);
    avisoId = 0;
    document.querySelector("#tiempo-estado").textContent = "El aviso se frenó con clearTimeout.";
    pintarTiempo("clearTimeout canceló el aviso. La función no va a correr.");
});

document.querySelector("#btn-interval").addEventListener("click", function () {
    if (relojId) {
        pintarTiempo("Ya hay un setInterval. clearInterval lo frena antes de empezar otro.");
        return;
    }
    relojId = setInterval(function () {
        segundos += 1;
        document.querySelector("#tiempo-cuenta").textContent = segundos + " s";
    }, 1000);
    pintarTiempo("setInterval repite la cuenta cada 1 segundo.");
});

document.querySelector("#btn-interval-stop").addEventListener("click", function () {
    if (!relojId) {
        pintarTiempo("No hay un setInterval corriendo.");
        return;
    }
    clearInterval(relojId);
    relojId = 0;
    pintarTiempo("clearInterval frenó el contador en " + segundos + " s.");
});

/* --- 8. Cookies --- */

function pintarCookie(mensaje) {
    document.querySelector("#salida-cookie").textContent = mensaje;
    const cruda = document.cookie === "" ? "(document.cookie está vacío)" : document.cookie;
    document.querySelector("#cookie-cruda").textContent = "document.cookie → " + cruda;
}

document.querySelector("#btn-cookie-guardar").addEventListener("click", function () {
    const nombre = document.querySelector("#cookie-nombre").value.trim();
    if (nombre === "") {
        pintarCookie("Hace falta un nombre para guardar en la cookie.");
        return;
    }
    escribirCookie("cliente", nombre);
    const leido = leerCookie("cliente");
    if (leido !== nombre) {
        pintarCookie("El navegador no guardó la cookie. Abierta como archivo, a veces queda bloqueada. En http:// sí se guarda.");
        return;
    }
    pintarCookie("La cookie cliente quedó en " + leido + ". Vence en 7 días.");
});

document.querySelector("#btn-cookie-leer").addEventListener("click", function () {
    const leido = leerCookie("cliente");
    if (leido === null) {
        pintarCookie("No hay una cookie cliente en esta página.");
        return;
    }
    pintarCookie("La cookie cliente vale " + leido + ".");
});

document.querySelector("#btn-cookie-borrar").addEventListener("click", function () {
    borrarCookie("cliente");
    const leido = leerCookie("cliente");
    if (leido !== null) {
        pintarCookie("La cookie cliente sigue en " + leido + ".");
        return;
    }
    pintarCookie("La cookie cliente se borró. El vencimiento quedó en el pasado.");
});

/* --- 11 y 12. JSON --- */

function pintarJson(texto, mensaje) {
    document.querySelector("#salida-json").textContent = texto;
    document.querySelector("#salida-parse").textContent = mensaje;
}

document.querySelector("#btn-tipo-json").addEventListener("click", function () {
    const muestra = JSON.parse('{"precio":1800,"etiqueta":"1800","paraLlevar":true,"nota":null,"extras":["medialuna"]}');
    const lineas = [
        "precio → " + muestra.precio + " · typeof " + typeof muestra.precio,
        "etiqueta → " + muestra.etiqueta + " · typeof " + typeof muestra.etiqueta,
        "paraLlevar → " + muestra.paraLlevar + " · typeof " + typeof muestra.paraLlevar,
        "nota → null · valor JSON null",
        "extras → " + JSON.stringify(muestra.extras) + " · Array.isArray " + Array.isArray(muestra.extras)
    ];
    document.querySelector("#salida-tipos").textContent = lineas.join("\n");
});

document.querySelector("#btn-tipo-raro").addEventListener("click", function () {
    const cuando = new Date("2026-10-05T15:00:00Z");
    const mesa = {
        cliente: "Ana",
        precio: PRECIO_CAFE,
        saludar: function () {
            return "hola";
        },
        nota: undefined,
        cuando: cuando
    };
    const texto = JSON.stringify(mesa);
    const otraVez = JSON.parse(texto);
    document.querySelector("#salida-tipos").textContent =
        texto + "\n\n" +
        "saludar y nota no están en el texto.\n" +
        "cuando salió como string. Al parsear, typeof cuando → " + typeof otraVez.cuando + ".";
});

document.querySelector("#btn-stringify").addEventListener("click", function () {
    textoPedido = JSON.stringify(pedido, null, 2);
    pintarJson(textoPedido, "JSON.stringify convirtió el objeto en texto. Todavía no se calculó el total.");
});

document.querySelector("#btn-parse").addEventListener("click", function () {
    let recuperado;
    try {
        recuperado = JSON.parse(textoPedido);
    } catch (error) {
        pintarJson(textoPedido, error.name + ". El texto no se pudo leer.");
        return;
    }
    const total = recuperado.precio * recuperado.cantidad;
    pintarJson(
        textoPedido,
        "JSON.parse rearmó el objeto.\n" +
        "Cliente: " + recuperado.cliente + "\n" +
        "Producto: " + recuperado.producto + "\n" +
        "Total: " + total + " (" + pesos(total) + ")"
    );
});

document.querySelector("#btn-parse-mal").addEventListener("click", function () {
    const roto = '{"cliente":Ana}';
    try {
        JSON.parse(roto);
        pintarJson(roto, "El texto se leyó.");
    } catch (error) {
        pintarJson(roto, error.name + ". Ana tiene que ir entre comillas: \"Ana\".");
    }
});

/* --- 13. Práctica --- */

function pintarPractica(mensaje, clase) {
    const salida = document.querySelector("#salida-practica");
    salida.className = clase;
    salida.textContent = mensaje;
}

document.querySelector("#btn-prac-texto").addEventListener("click", function () {
    textoPedido = JSON.stringify(pedido, null, 2);
    document.querySelector("#prac-json").textContent = textoPedido;
    pintarPractica("El pedido ya es texto. Ese texto es lo que podría viajar.", "salida");
});

document.querySelector("#btn-prac-leer").addEventListener("click", function () {
    let recuperado;
    try {
        recuperado = JSON.parse(textoPedido);
    } catch (error) {
        pintarPractica(error.name + ". Primero preparen el texto.", "feedback is-bad");
        return;
    }
    const total = recuperado.precio * recuperado.cantidad;
    document.querySelector("#ticket-prac").textContent =
        recuperado.cliente + " · " + recuperado.producto + " · " + pesos(total);
    pintarPractica("El texto volvió a ser objeto. El total es precio × cantidad.", "salida");
});

document.querySelector("#btn-prac-cookie").addEventListener("click", function () {
    escribirCookie("cliente", pedido.cliente);
    const leido = leerCookie("cliente");
    if (leido !== pedido.cliente) {
        pintarPractica("El navegador no guardó la cookie cliente.", "feedback is-bad");
        return;
    }
    pintarPractica("La cookie cliente quedó en " + leido + ".", "salida");
    document.querySelector("#cookie-cruda").textContent = "document.cookie → " + document.cookie;
});

document.querySelector("#btn-prac-comprobar").addEventListener("click", function () {
    let recuperado;
    try {
        recuperado = JSON.parse(textoPedido);
    } catch (error) {
        pintarPractica("Falta el texto del pedido. Preparen el JSON primero.", "feedback is-bad");
        return;
    }
    const total = recuperado.precio * recuperado.cantidad;
    const datosOk = recuperado.cliente === "Ana" && recuperado.producto === "café" && total === 3600;
    const cookie = leerCookie("cliente");
    if (datosOk && cookie === "Ana") {
        pintarPractica("Listo. El texto describe el café de Ana, el total es " + pesos(3600) + " y la cookie cliente vale Ana.", "feedback is-ok");
        return;
    }
    if (datosOk && cookie !== "Ana") {
        const detalle = cookie === null ? "no hay cookie cliente" : "la cookie cliente vale " + cookie;
        pintarPractica("El JSON cierra: total " + pesos(3600) + ". Falta la cookie de Ana: " + detalle + ".", "feedback is-bad");
        return;
    }
    pintarPractica("El texto no es el pedido de Ana. Tiene que cerrar en café, total 3600.", "feedback is-bad");
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

textoPedido = JSON.stringify(pedido, null, 2);
document.querySelector("#salida-json").textContent = textoPedido;
document.querySelector("#prac-json").textContent = textoPedido;
pintarMedidas();
pintarScreen();
pintarLocation("Estas cuatro propiedades salen de window.location.");
describirHistoria("Entrada inicial de la página. Anoten un café antes de usar back().");
const clienteGuardado = leerCookie("cliente");
pintarCookie(clienteGuardado === null
    ? "Todavía no se escribió la cookie de esta clase."
    : "Ya había una cookie cliente: " + clienteGuardado + ".");
actualizarPuntaje();
