(function () {
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const pantallaQuiz = document.getElementById("pantalla-quiz");
    const pantallaResultado = document.getElementById("pantalla-resultado");
    const filtroTema = document.getElementById("filtro-tema");
    const filtroNivel = document.getElementById("filtro-nivel");
    const btnComenzar = document.getElementById("btn-comenzar");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnSiguiente = document.getElementById("btn-siguiente");
    const btnComprobar = document.getElementById("btn-comprobar");
    const btnCorregir = document.getElementById("btn-corregir");
    const btnRevisar = document.getElementById("btn-revisar");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const progresoTexto = document.getElementById("progreso-texto");
    const barraProgreso = document.getElementById("barra-progreso");
    const etiquetas = document.getElementById("etiquetas");
    const tituloPregunta = document.getElementById("titulo-pregunta");
    const bloqueCodigo = document.getElementById("bloque-codigo");
    const zonaRespuesta = document.getElementById("zona-respuesta");
    const feedback = document.getElementById("feedback");
    const puntajeGeneral = document.getElementById("puntaje-general");
    const desglose = document.getElementById("desglose");
    const revision = document.getElementById("revision");

    const ETIQUETAS = {
        html: { clase: "badge-html", texto: "HTML" },
        css: { clase: "badge-css", texto: "CSS" },
        box: { clase: "badge-box", texto: "Caja y responsive" }
    };

    const TIPOS = {
        mc: "Multiple choice",
        tf: "Verdadero / Falso",
        fill: "Completar la frase"
    };

    let recorido = [];
    let indice = 0;
    let respuestas = [];
    let corregido = false;

    function normalizar(texto) {
        return String(texto)
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ");
    }

    function esCorrecta(pregunta, valor) {
        if (valor === null || valor === undefined || valor === "") {
            return false;
        }
        if (pregunta.tipo === "fill") {
            const dado = normalizar(valor);
            return pregunta.aceptadas.some(function (opcion) {
                return normalizar(opcion) === dado;
            });
        }
        return Number(valor) === pregunta.correcta;
    }

    function filtrarPreguntas() {
        const tema = filtroTema.value;
        const nivel = filtroNivel.value;
        return PREGUNTAS.filter(function (pregunta) {
            const okTema = tema === "todos" || pregunta.tema === tema;
            const okNivel = nivel === "todos" || pregunta.nivel === nivel;
            return okTema && okNivel;
        });
    }

    function badge(clase, texto) {
        return '<span class="badge ' + clase + '">' + texto + "</span>";
    }

    function pintarEtiquetas(pregunta) {
        const nivelClase = pregunta.nivel === "bajo" ? "badge-bajo" : "badge-medio";
        const nivelTexto = pregunta.nivel === "bajo" ? "Nivel bajo" : "Nivel medio-alto";
        const tema = ETIQUETAS[pregunta.tema];
        const enfoque = pregunta.enfoque === "aplicada" ? "Teoría aplicada" : "Teoría";
        etiquetas.innerHTML = [
            badge(nivelClase, nivelTexto),
            badge(tema.clase, tema.texto),
            badge("badge-tipo", TIPOS[pregunta.tipo]),
            badge("badge-enfoque", enfoque)
        ].join("");
    }

    function guardarRespuestaActual() {
        const pregunta = recorido[indice];
        if (!pregunta) {
            return;
        }
        if (pregunta.tipo === "fill") {
            const campo = zonaRespuesta.querySelector("input");
            respuestas[indice] = campo ? campo.value : "";
            return;
        }
        const elegida = zonaRespuesta.querySelector("input:checked");
        respuestas[indice] = elegida ? Number(elegida.value) : null;
    }

    function mostrarFeedback(pregunta, valor) {
        feedback.classList.remove("oculto", "ok", "mal");
        if (valor === null || valor === undefined || valor === "") {
            feedback.classList.add("mal");
            feedback.textContent = "Todavía no respondiste esta consigna.";
            return;
        }
        const bien = esCorrecta(pregunta, valor);
        feedback.classList.add(bien ? "ok" : "mal");
        feedback.innerHTML = bien
            ? "<strong>Correcto.</strong> " + pregunta.explicacion
            : "<strong>Incorrecto.</strong> " + pregunta.explicacion;
    }

    function marcarOpciones(pregunta) {
        if (pregunta.tipo === "fill") {
            return;
        }
        const valor = respuestas[indice];
        zonaRespuesta.querySelectorAll(".opcion").forEach(function (label) {
            const input = label.querySelector("input");
            label.classList.remove("correcta", "incorrecta");
            if (Number(input.value) === pregunta.correcta) {
                label.classList.add("correcta");
            } else if (valor !== null && Number(input.value) === Number(valor)) {
                label.classList.add("incorrecta");
            }
        });
    }

    function renderPregunta() {
        const pregunta = recorido[indice];
        const total = recorido.length;
        progresoTexto.textContent = "Pregunta " + (indice + 1) + " de " + total;
        barraProgreso.style.width = ((indice + 1) / total) * 100 + "%";
        pintarEtiquetas(pregunta);
        tituloPregunta.innerHTML = pregunta.enunciado;

        if (pregunta.codigo) {
            bloqueCodigo.classList.remove("oculto");
            bloqueCodigo.querySelector("code").textContent = pregunta.codigo;
        } else {
            bloqueCodigo.classList.add("oculto");
            bloqueCodigo.querySelector("code").textContent = "";
        }

        if (pregunta.tipo === "fill") {
            const valor = respuestas[indice] || "";
            zonaRespuesta.innerHTML =
                '<label>Tu respuesta' +
                '<input class="campo-completar" type="text" autocomplete="off" spellcheck="true" value="">' +
                "</label>";
            zonaRespuesta.querySelector("input").value = valor;
        } else {
            const grupo = "pregunta-" + pregunta.id;
            zonaRespuesta.innerHTML = '<div class="opciones"></div>';
            const caja = zonaRespuesta.querySelector(".opciones");
            pregunta.opciones.forEach(function (texto, i) {
                const id = grupo + "-" + i;
                const label = document.createElement("label");
                label.className = "opcion";
                label.setAttribute("for", id);
                label.innerHTML =
                    '<input type="radio" name="' + grupo + '" id="' + id + '" value="' + i + '">' +
                    "<span>" + texto + "</span>";
                caja.appendChild(label);
            });
            if (respuestas[indice] !== null && respuestas[indice] !== undefined) {
                const actual = zonaRespuesta.querySelector(
                    'input[value="' + respuestas[indice] + '"]'
                );
                if (actual) {
                    actual.checked = true;
                }
            }
        }

        btnAnterior.disabled = indice === 0;
        btnSiguiente.textContent = indice === total - 1 ? "Ir a corregir" : "Siguiente";

        if (corregido) {
            mostrarFeedback(pregunta, respuestas[indice]);
            marcarOpciones(pregunta);
        } else {
            feedback.classList.add("oculto");
            feedback.textContent = "";
        }

        const foco = zonaRespuesta.querySelector("input");
        if (foco) {
            foco.focus();
        }
    }

    function iniciar() {
        recorido = filtrarPreguntas();
        if (recorido.length === 0) {
            window.alert("No hay preguntas para ese filtro. Elegí otra combinación.");
            return;
        }
        indice = 0;
        respuestas = recorido.map(function () {
            return null;
        });
        corregido = false;
        revision.innerHTML = "";
        pantallaInicio.classList.add("oculto");
        pantallaResultado.classList.add("oculto");
        pantallaQuiz.classList.remove("oculto");
        renderPregunta();
    }

    function irAnterior() {
        guardarRespuestaActual();
        if (indice > 0) {
            indice -= 1;
            renderPregunta();
        }
    }

    function irSiguiente() {
        guardarRespuestaActual();
        if (indice < recorido.length - 1) {
            indice += 1;
            renderPregunta();
            return;
        }
        corregirTodo();
    }

    function comprobarActual() {
        guardarRespuestaActual();
        const pregunta = recorido[indice];
        mostrarFeedback(pregunta, respuestas[indice]);
        marcarOpciones(pregunta);
    }

    function ficha(titulo, correctas, total) {
        const porcentaje = total === 0 ? 0 : Math.round((correctas / total) * 100);
        return (
            '<article class="ficha-desglose">' +
            "<strong>" + titulo + "</strong>" +
            "<span>" + correctas + " / " + total + " (" + porcentaje + "%)</span>" +
            "</article>"
        );
    }

    function textoRespuesta(pregunta, valor) {
        if (valor === null || valor === undefined || valor === "") {
            return "Sin responder";
        }
        if (pregunta.tipo === "fill") {
            return String(valor);
        }
        return pregunta.opciones[valor];
    }

    function corregirTodo() {
        guardarRespuestaActual();
        corregido = true;
        let correctas = 0;
        const porTema = {
            html: { ok: 0, total: 0 },
            css: { ok: 0, total: 0 },
            box: { ok: 0, total: 0 }
        };
        const porNivel = {
            bajo: { ok: 0, total: 0 },
            "medio-alto": { ok: 0, total: 0 }
        };

        recorido.forEach(function (pregunta, i) {
            const bien = esCorrecta(pregunta, respuestas[i]);
            if (bien) {
                correctas += 1;
            }
            porTema[pregunta.tema].total += 1;
            porNivel[pregunta.nivel].total += 1;
            if (bien) {
                porTema[pregunta.tema].ok += 1;
                porNivel[pregunta.nivel].ok += 1;
            }
        });

        const total = recorido.length;
        const porcentaje = Math.round((correctas / total) * 100);
        puntajeGeneral.textContent = correctas + " de " + total + " respuestas correctas (" + porcentaje + "%).";

        desglose.innerHTML = [
            ficha("Nivel bajo", porNivel.bajo.ok, porNivel.bajo.total),
            ficha("Nivel medio-alto", porNivel["medio-alto"].ok, porNivel["medio-alto"].total),
            ficha("HTML", porTema.html.ok, porTema.html.total),
            ficha("CSS", porTema.css.ok, porTema.css.total),
            ficha("Modelo de caja y responsive", porTema.box.ok, porTema.box.total)
        ].filter(function (html, i) {
            const totales = [
                porNivel.bajo.total,
                porNivel["medio-alto"].total,
                porTema.html.total,
                porTema.css.total,
                porTema.box.total
            ];
            return totales[i] > 0;
        }).join("");

        revision.innerHTML = "<h3>Revisión</h3>";
        recorido.forEach(function (pregunta, i) {
            const bien = esCorrecta(pregunta, respuestas[i]);
            const tema = ETIQUETAS[pregunta.tema];
            const nivelClase = pregunta.nivel === "bajo" ? "badge-bajo" : "badge-medio";
            const nivelTexto = pregunta.nivel === "bajo" ? "Nivel bajo" : "Nivel medio-alto";
            const item = document.createElement("article");
            item.className = "item-revision";
            item.innerHTML =
                '<div class="etiquetas">' +
                badge(nivelClase, nivelTexto) +
                badge(tema.clase, tema.texto) +
                badge("badge-tipo", TIPOS[pregunta.tipo]) +
                "</div>" +
                "<h3>" + (i + 1) + ". " + pregunta.enunciado + "</h3>" +
                (pregunta.codigo ? "<pre><code></code></pre>" : "") +
                '<p class="tu-respuesta"><strong>Tu respuesta:</strong> ' + textoRespuesta(pregunta, respuestas[i]) + "</p>" +
                '<p class="tu-respuesta"><strong>Resultado:</strong> ' + (bien ? "Correcta" : "Incorrecta") + "</p>" +
                '<p class="explicacion">' + pregunta.explicacion + "</p>";
            if (pregunta.codigo) {
                item.querySelector("code").textContent = pregunta.codigo;
            }
            revision.appendChild(item);
        });

        pantallaQuiz.classList.add("oculto");
        pantallaResultado.classList.remove("oculto");
        pantallaResultado.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function volverInicio() {
        pantallaResultado.classList.add("oculto");
        pantallaQuiz.classList.add("oculto");
        pantallaInicio.classList.remove("oculto");
        recorido = [];
        indice = 0;
        respuestas = [];
        corregido = false;
    }

    btnComenzar.addEventListener("click", iniciar);
    btnAnterior.addEventListener("click", irAnterior);
    btnSiguiente.addEventListener("click", irSiguiente);
    btnComprobar.addEventListener("click", comprobarActual);
    btnCorregir.addEventListener("click", corregirTodo);
    btnRevisar.addEventListener("click", function () {
        revision.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    btnReiniciar.addEventListener("click", volverInicio);
})();
