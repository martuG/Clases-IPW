"use strict";

/*
 * Demos de la unidad 6: maquetación web.
 * Cada bloque está atado a una sección de index.html.
 */

/* --- 4. Wireframe / mockup / prototipo --- */

const ETAPAS = {
    wire: "Wireframe: bloques sin color final.",
    mock: "Mockup: ya hay color y tipografía. Todavía no navega.",
    proto: "Prototipo: los bloques se pueden usar para probar el recorrido."
};

document.querySelectorAll("[data-etapa]").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const modo = boton.dataset.etapa;
        const stage = document.querySelector("#preview-stage");
        stage.dataset.mode = modo;
        document.querySelector("#preview-label").textContent = ETAPAS[modo];
        document.querySelectorAll("[data-etapa]").forEach(function (otro) {
            if (otro === boton) {
                otro.classList.remove("btn-light");
            } else {
                otro.classList.add("btn-light");
            }
        });
    });
});

document.querySelectorAll(".preview-card").forEach(function (card) {
    card.addEventListener("click", function () {
        const stage = document.querySelector("#preview-stage");
        if (stage.dataset.mode !== "proto") {
            return;
        }
        document.querySelector("#preview-label").textContent =
            "Prototipo: se eligió “" + card.textContent + "”. Eso ya es una prueba de recorrido.";
    });
});

/* --- 5. Esqueleto semántico --- */

const ESQUELETO = `<body>
  <header>…</header>
  <nav>…</nav>
  <main>
    <section>…</section>
    <aside>…</aside>
  </main>
  <footer>…</footer>
</body>`;

document.querySelector("#btn-semantico").addEventListener("click", function () {
    document.querySelector("#salida-semantico").textContent = ESQUELETO;
});

/* --- 6. Flex / Grid --- */

document.querySelector("#btn-flex").addEventListener("click", function () {
    const lab = document.querySelector("#layout-lab");
    lab.dataset.mode = "flex";
    document.querySelector("#salida-layout").textContent =
        "Flexbox: los tres ítems comparten una fila y se espacian con justify-content.";
    document.querySelector("#btn-flex").classList.remove("btn-light");
    document.querySelector("#btn-grid").classList.add("btn-light");
});

document.querySelector("#btn-grid").addEventListener("click", function () {
    const lab = document.querySelector("#layout-lab");
    lab.dataset.mode = "grid";
    document.querySelector("#salida-layout").textContent =
        "Grid: tres columnas fijas (1fr 2fr 1fr). El plano ya no es solo una fila flexible.";
    document.querySelector("#btn-grid").classList.remove("btn-light");
    document.querySelector("#btn-flex").classList.add("btn-light");
});

/* --- 7. Viewport --- */

const VP_TEXTOS = {
    mobile: "En móvil, contenido y lateral se apilan en una columna.",
    tablet: "En tablet, vuelven las dos columnas con menos ancho.",
    desktop: "En escritorio, contenido y lateral van en dos columnas."
};

document.querySelectorAll("[data-vp]").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const size = boton.dataset.vp;
        document.querySelector("#viewport-frame").dataset.size = size;
        document.querySelector("#salida-vp").textContent = VP_TEXTOS[size];
        document.querySelectorAll("[data-vp]").forEach(function (otro) {
            if (otro === boton) {
                otro.classList.remove("btn-light");
            } else {
                otro.classList.add("btn-light");
            }
        });
    });
});

/* --- 8. Bootstrap grid demo --- */

function pintarBs(split, mensaje) {
    const row = document.querySelector("#bs-row-demo");
    row.dataset.split = split;
    const main = document.querySelector("#bs-main");
    const side = document.querySelector("#bs-side");
    if (split === "8-4") {
        main.textContent = "col-md-8 · contenido";
        side.textContent = "col-md-4 · lateral";
        side.hidden = false;
    } else if (split === "6-6") {
        main.textContent = "col-md-6 · contenido";
        side.textContent = "col-md-6 · lateral";
        side.hidden = false;
    } else {
        main.textContent = "col-12 · una sola columna";
        side.hidden = true;
    }
    document.querySelector("#salida-bs").textContent = mensaje;
}

document.querySelector("#btn-bs-8-4").addEventListener("click", function () {
    pintarBs("8-4", "La grilla suma 12. Acá: 8 para el contenido y 4 para el lateral.");
});

document.querySelector("#btn-bs-6-6").addEventListener("click", function () {
    pintarBs("6-6", "Mitad y mitad: 6 + 6 = 12.");
});

document.querySelector("#btn-bs-12").addEventListener("click", function () {
    pintarBs("12", "col-12 ocupa las doce columnas. En móvil es el comportamiento por defecto.");
});

/* --- 10. Práctica --- */

document.querySelector("#btn-prac-estructura").addEventListener("click", function () {
    const board = document.querySelector("#prac-board");
    board.dataset.estructura = "si";
    board.dataset.grilla = "no";
    board.innerHTML =
        '<div class="prac-header">&lt;header&gt;</div>' +
        '<div class="prac-body">' +
        '<div class="prac-main">&lt;main&gt;</div>' +
        '<div class="prac-aside">&lt;aside&gt;</div>' +
        "</div>" +
        '<div class="prac-footer">&lt;footer&gt;</div>';
    const salida = document.querySelector("#salida-practica");
    salida.className = "salida";
    salida.textContent = "Estructura lista. Ahora aplicá la grilla 8+4.";
});

document.querySelector("#btn-prac-grilla").addEventListener("click", function () {
    const board = document.querySelector("#prac-board");
    const salida = document.querySelector("#salida-practica");
    if (board.dataset.estructura !== "si") {
        salida.className = "feedback is-bad";
        salida.textContent = "Primero poné la estructura semántica.";
        return;
    }
    board.dataset.grilla = "si";
    salida.className = "salida";
    salida.textContent = "Grilla 8+4 aplicada (2fr + 1fr). Ya se puede comprobar.";
});

document.querySelector("#btn-prac-comprobar").addEventListener("click", function () {
    const board = document.querySelector("#prac-board");
    const salida = document.querySelector("#salida-practica");
    if (board.dataset.estructura === "si" && board.dataset.grilla === "si") {
        salida.className = "feedback is-ok";
        salida.textContent =
            "Listo. Hay header, main, aside y footer, y el cuerpo reparte contenido y lateral.";
        return;
    }
    if (board.dataset.estructura === "si") {
        salida.className = "feedback is-bad";
        salida.textContent = "La estructura está. Falta aplicar la grilla 8+4.";
        return;
    }
    salida.className = "feedback is-bad";
    salida.textContent = "Todavía no hay estructura. Empezá por el primer botón.";
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

actualizarPuntaje();
