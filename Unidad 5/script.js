"use strict";

/*
 * Demos de la unidad 5: XML.
 * Cada bloque está atado a una sección de index.html.
 * Los textos que se leen están fijos: nadie escribe XML libre en esta página.
 */

const NOTA_JUAN = `<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="12/11/2022">
  <para>Ana</para>
  <de>Juan</de>
  <encabezado>Pedido listo</encabezado>
  <cuerpo>El café está en la barra.</cuerpo>
</nota>`;

const NOTA_PEDRO = `<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="19/10/2026">
  <para>Lucía</para>
  <de>Pedro</de>
  <encabezado>Mesa libre</encabezado>
  <cuerpo>La mesa 4 quedó libre.</cuerpo>
</nota>`;

const NOTA_ATRIBUTOS = `<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="12/11/2022" para="Ana Lucía">
  <de>Juan</de>
</nota>`;

const NOTA_ELEMENTOS = `<?xml version="1.0" encoding="UTF-8"?>
<nota>
  <fecha>
    <dia>12</dia>
    <mes>11</mes>
    <anio>2022</anio>
  </fecha>
  <para>Ana</para>
  <para>Lucía</para>
  <de>Juan</de>
</nota>`;

const NOTA_VACIOS = `<?xml version="1.0" encoding="UTF-8"?>
<nota>
  <aviso></aviso>
  <listo/>
</nota>`;

const NOTA_ESPACIOS = `<?xml version="1.0" encoding="UTF-8"?>
<pedido xmlns:barra="http://elbreak.edu/barra" xmlns:mueble="http://elbreak.edu/muebles">
  <barra:mesa>4</barra:mesa>
  <mueble:mesa>roble</mueble:mesa>
</pedido>`;

const XSL_NOTA = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <article>
      <h3><xsl:value-of select="nota/encabezado"/></h3>
      <p>Para <xsl:value-of select="nota/para"/>. De <xsl:value-of select="nota/de"/>.</p>
      <p><xsl:value-of select="nota/cuerpo"/></p>
    </article>
  </xsl:template>
</xsl:stylesheet>`;

const NS_BARRA = "http://elbreak.edu/barra";
const NS_MUEBLE = "http://elbreak.edu/muebles";

let notaPractica = "";

function parsearXml(texto) {
    const documento = new DOMParser().parseFromString(texto, "application/xml");
    const error = documento.querySelector("parsererror");
    return {
        ok: error === null,
        doc: documento
    };
}

function textoDe(padre, nombre) {
    const elemento = padre.querySelector(nombre);
    if (!elemento) {
        return "";
    }
    return elemento.textContent;
}

function nombresHijos(elemento) {
    const nombres = [];
    let i = 0;
    for (i = 0; i < elemento.children.length; i += 1) {
        nombres.push(elemento.children[i].tagName);
    }
    return nombres;
}

function textosDe(padre, nombre) {
    const encontrados = [];
    let i = 0;
    for (i = 0; i < padre.children.length; i += 1) {
        if (padre.children[i].tagName === nombre) {
            encontrados.push(padre.children[i].textContent);
        }
    }
    return encontrados;
}

function clasificarNombre(nombre) {
    if (/\s/.test(nombre)) {
        return "contiene un espacio";
    }
    if (!/^[A-Za-z_áéíóúÁÉÍÓÚñÑüÜ]/.test(nombre)) {
        return "no empieza con una letra ni con un guión bajo";
    }
    if (/^xml/i.test(nombre)) {
        return "empieza con xml";
    }
    if (!/^[A-Za-z_áéíóúÁÉÍÓÚñÑüÜ][A-Za-z0-9_.\-áéíóúÁÉÍÓÚñÑüÜ]*$/.test(nombre)) {
        return "tiene un carácter que las reglas no admiten";
    }
    return "válido";
}

function pintarTicket(prefijo, campos) {
    document.querySelector("#" + prefijo + "-encabezado").textContent = campos.encabezado;
    document.querySelector("#" + prefijo + "-para").textContent = "Para: " + campos.para;
    document.querySelector("#" + prefijo + "-de").textContent = "De: " + campos.de;
    document.querySelector("#" + prefijo + "-cuerpo").textContent = campos.cuerpo;
    document.querySelector("#" + prefijo + "-fecha").textContent = "Fecha: " + campos.fecha;
}

function camposDe(textoXml) {
    const resultado = parsearXml(textoXml);
    if (!resultado.ok) {
        return null;
    }
    const nota = resultado.doc.documentElement;
    return {
        encabezado: textoDe(nota, "encabezado"),
        para: textoDe(nota, "para"),
        de: textoDe(nota, "de"),
        cuerpo: textoDe(nota, "cuerpo"),
        fecha: nota.getAttribute("fecha")
    };
}

function mostrarNota(textoXml, destinoXml, prefijo, mensaje) {
    const campos = camposDe(textoXml);
    document.querySelector(destinoXml).textContent = textoXml;
    pintarTicket(prefijo, campos);
    return mensaje + " Raíz: nota. Hijos: " + nombresHijos(parsearXml(textoXml).doc.documentElement).join(", ") + ".";
}

/* --- 1. Qué es --- */

document.querySelector("#btn-solo").addEventListener("click", function () {
    const resultado = parsearXml(NOTA_JUAN);
    const nota = resultado.doc.documentElement;
    document.querySelector("#salida-solo").textContent =
        "El parser leyó " + nota.tagName + ". " +
        textoDe(nota, "de") + " le escribe a " + textoDe(nota, "para") + ": " +
        textoDe(nota, "cuerpo") + " " +
        "Esas palabras salieron del XML. El documento no armó esta página: la armó el script.";
});

/* --- 2. Datos y presentación --- */

function cargarNotaEnDatos(textoXml, quien) {
    const mensaje = mostrarNota(
        textoXml,
        "#datos-xml",
        "datos",
        "Quedó la nota de " + quien + " en el mismo ticket."
    );
    document.querySelector("#salida-datos").textContent = mensaje;
}

document.querySelector("#btn-nota-juan").addEventListener("click", function () {
    cargarNotaEnDatos(NOTA_JUAN, "Juan");
});

document.querySelector("#btn-nota-pedro").addEventListener("click", function () {
    cargarNotaEnDatos(NOTA_PEDRO, "Pedro");
});

/* --- 3. Árbol --- */

document.querySelector("#btn-arbol").addEventListener("click", function () {
    const nota = parsearXml(NOTA_JUAN).doc.documentElement;
    const para = nota.querySelector("para");
    const hermanos = [];
    let i = 0;
    for (i = 0; i < nota.children.length; i += 1) {
        if (nota.children[i] !== para) {
            hermanos.push(nota.children[i].tagName);
        }
    }
    const lineas = [
        "documentElement → " + nota.tagName,
        "hijos → " + nombresHijos(nota).join(", "),
        "padre de para → " + para.parentElement.tagName,
        "hermanos de para → " + hermanos.join(", "),
        "texto de para → " + para.textContent,
        "children incluye fecha → " + nombresHijos(nota).includes("fecha"),
        "getAttribute(\"fecha\") → " + nota.getAttribute("fecha")
    ];
    document.querySelector("#salida-arbol").textContent = lineas.join("\n");
});

/* --- 4. Sintaxis --- */

function probarSintaxis(xml, esperaError, mensajeOk, detalle) {
    const resultado = parsearXml(xml);
    document.querySelector("#xml-sintaxis").textContent = xml;
    let mensaje = mensajeOk;
    if (esperaError && resultado.ok) {
        mensaje = "Este texto se leyó como XML bien formado. La regla no se vio.";
    }
    if (!esperaError && !resultado.ok) {
        mensaje = "Este texto no se pudo leer.";
    }
    if (!esperaError && resultado.ok && detalle) {
        mensaje = detalle(resultado.doc);
    }
    document.querySelector("#salida-sintaxis").textContent = mensaje;
}

document.querySelectorAll("[data-caso]").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const caso = boton.dataset.caso;
        if (caso === "con-prologo") {
            probarSintaxis(NOTA_JUAN, false, "", function (doc) {
                const nota = doc.documentElement;
                return "Bien formado. El prólogo está primero. La raíz es " + nota.tagName +
                    ". fecha vale " + nota.getAttribute("fecha") +
                    ". cuerpo vale " + textoDe(nota, "cuerpo");
            });
            return;
        }
        if (caso === "sin-prologo") {
            probarSintaxis(
                "<nota fecha=\"12/11/2022\"><para>Ana</para></nota>",
                false,
                "",
                function (doc) {
                    return "Bien formado. La raíz es " + doc.documentElement.tagName +
                        ". El prólogo es opcional: este documento no lo trae.";
                }
            );
            return;
        }
        if (caso === "prologo-tarde") {
            probarSintaxis(
                "<nota></nota>\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
                true,
                "El prólogo quedó después de la raíz. Si aparece, tiene que ser lo primero del documento."
            );
            return;
        }
        if (caso === "sin-cierre") {
            probarSintaxis(
                "<nota>\n  <para>Ana\n</nota>",
                true,
                "Falta el cierre de para. En XML todos los elementos se cierran."
            );
            return;
        }
        if (caso === "mal-anidada") {
            probarSintaxis(
                "<b><i>Este texto va en negrita y en cursiva</b></i>",
                true,
                "i se abrió dentro de b y el cierre quedó afuera. El cierre de i tiene que quedar dentro de b."
            );
            return;
        }
        if (caso === "sin-comillas") {
            probarSintaxis(
                "<nota fecha=12/11/2022>\n  <para>Ana</para>\n</nota>",
                true,
                "fecha no tiene comillas. En XML el valor del atributo va siempre entre comillas."
            );
            return;
        }
        if (caso === "mayuscula") {
            probarSintaxis(
                "<para>Ana</Para>",
                true,
                "La etiqueta abre como para y cierra como Para. Las mayúsculas forman parte del nombre."
            );
            return;
        }
        if (caso === "dos-raices") {
            probarSintaxis(
                "<nota></nota>\n<otra></otra>",
                true,
                "Hay dos raíces, nota y otra. El árbol empieza en un solo elemento raíz."
            );
        }
    });
});

/* --- 5. Elementos y nombres --- */

document.querySelector("#btn-vacios").addEventListener("click", function () {
    const nota = parsearXml(NOTA_VACIOS).doc.documentElement;
    const aviso = nota.children[0];
    const listo = nota.children[1];
    document.querySelector("#salida-vacios").textContent =
        aviso.tagName + " → hijos: " + aviso.children.length + " · texto: \"" + aviso.textContent + "\"\n" +
        listo.tagName + " → hijos: " + listo.children.length + " · texto: \"" + listo.textContent + "\"\n" +
        "aviso se escribió con apertura y cierre. listo se escribió con autocierre. Los dos están vacíos.";
});

document.querySelector("#btn-nombres").addEventListener("click", function () {
    document.querySelectorAll("#tabla-nombres tr").forEach(function (fila) {
        const nombre = fila.dataset.nombre;
        let texto = clasificarNombre(nombre);
        if (nombre === "Mesa" && texto === "válido") {
            texto = "válido. Es otro nombre que mesa";
        }
        fila.querySelector(".resultado").textContent = texto;
    });
});

/* --- 6. Atributos --- */

document.querySelector("#btn-atributos").addEventListener("click", function () {
    const conAtributos = parsearXml(NOTA_ATRIBUTOS).doc.documentElement;
    const conElementos = parsearXml(NOTA_ELEMENTOS).doc.documentElement;
    const fecha = conElementos.querySelector("fecha");
    const partes = [];
    let i = 0;
    for (i = 0; i < fecha.children.length; i += 1) {
        partes.push(fecha.children[i].tagName + "=" + fecha.children[i].textContent);
    }
    const lineas = [
        "Atributo para → " + conAtributos.getAttribute("para"),
        "Es un solo texto. El XML no separa a Ana de Lucía.",
        "",
        "Elementos para → " + textosDe(conElementos, "para").join(" | "),
        "Hay dos valores, cada uno en su elemento.",
        "",
        "Atributo fecha → " + conAtributos.getAttribute("fecha"),
        "children de esa nota → " + nombresHijos(conAtributos).join(", "),
        "",
        "Elemento fecha → " + partes.join(", "),
        "Sumar la hora sería otro hijo. En el atributo habría que cambiar el formato del texto."
    ];
    document.querySelector("#salida-atributos").textContent = lineas.join("\n");
});

/* --- 7. Espacios de nombres --- */

document.querySelector("#btn-espacios").addEventListener("click", function () {
    const pedido = parsearXml(NOTA_ESPACIOS).doc;
    const barra = pedido.getElementsByTagNameNS(NS_BARRA, "mesa")[0];
    const mueble = pedido.getElementsByTagNameNS(NS_MUEBLE, "mesa")[0];
    document.querySelector("#salida-espacios").textContent =
        barra.prefix + ":" + barra.localName + " → " + barra.textContent + "\n" +
        barra.namespaceURI + "\n\n" +
        mueble.prefix + ":" + mueble.localName + " → " + mueble.textContent + "\n" +
        mueble.namespaceURI + "\n\n" +
        "localName de las dos → " + barra.localName + ". El xmlns las separa.";
});

/* --- 8. Mostrar y XSLT --- */

document.querySelector("#btn-xslt").addEventListener("click", function () {
    const caja = document.querySelector("#xslt-resultado");
    const salida = document.querySelector("#salida-xslt");
    const xml = parsearXml(NOTA_JUAN);
    const xsl = parsearXml(XSL_NOTA);
    if (!xml.ok || !xsl.ok) {
        salida.textContent = "El XML o la plantilla no se pudo leer.";
        return;
    }
    if (typeof XSLTProcessor !== "function") {
        salida.textContent = "Este navegador no tiene XSLTProcessor. La plantilla quedó arriba, como texto.";
        return;
    }
    try {
        const procesador = new XSLTProcessor();
        procesador.importStylesheet(xsl.doc);
        const fragmento = procesador.transformToFragment(xml.doc, document);
        caja.replaceChildren(fragmento);
        salida.textContent = "XSLTProcessor aplicó la plantilla. El ticket es XHTML producido desde la nota de Juan.";
    } catch (error) {
        salida.textContent = error.name + ". La plantilla no se pudo aplicar.";
    }
});

document.querySelector("#btn-descarga").addEventListener("click", function () {
    const blob = new Blob([NOTA_JUAN], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "nota.xml";
    enlace.click();
    URL.revokeObjectURL(url);
    document.querySelector("#salida-xslt").textContent =
        "Se descargó nota.xml. Ábranlo en el navegador: se ve el documento con sus etiquetas, no el ticket.";
});

/* --- 9. Práctica --- */

function cargarPractica(textoXml, mensaje) {
    const campos = camposDe(textoXml);
    notaPractica = textoXml;
    document.querySelector("#prac-xml").textContent = textoXml;
    pintarTicket("prac", campos);
    const salida = document.querySelector("#salida-practica");
    salida.className = "salida";
    salida.textContent = mensaje;
}

document.querySelector("#btn-prac-juan").addEventListener("click", function () {
    cargarPractica(NOTA_JUAN, "La nota de Juan ya está en el ticket. Los elementos del HTML siguen siendo los mismos.");
});

document.querySelector("#btn-prac-pedro").addEventListener("click", function () {
    cargarPractica(NOTA_PEDRO, "La nota de Pedro reemplazó los textos. El ticket es el mismo HTML.");
});

document.querySelector("#btn-prac-comprobar").addEventListener("click", function () {
    const salida = document.querySelector("#salida-practica");
    const encabezado = document.querySelector("#prac-encabezado").textContent;
    const para = document.querySelector("#prac-para").textContent;
    const de = document.querySelector("#prac-de").textContent;
    const cuerpo = document.querySelector("#prac-cuerpo").textContent;
    const fecha = document.querySelector("#prac-fecha").textContent;
    const pedro =
        encabezado === "Mesa libre" &&
        para === "Para: Lucía" &&
        de === "De: Pedro" &&
        cuerpo === "La mesa 4 quedó libre." &&
        fecha === "Fecha: 19/10/2026";
    if (pedro && notaPractica === NOTA_PEDRO) {
        salida.className = "feedback is-ok";
        salida.textContent = "Listo. El ticket muestra la nota de Pedro y el XML de al lado es el de esa nota. El HTML no se reescribió.";
        return;
    }
    if (encabezado === "Pedido listo" && para === "Para: Ana") {
        salida.className = "feedback is-bad";
        salida.textContent = "La nota de Juan está en la página. Falta pasar la nota de Pedro por los mismos elementos.";
        return;
    }
    salida.className = "feedback is-bad";
    salida.textContent = "Todavía no está la nota de Pedro. Lean primero una nota y después la otra.";
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

cargarNotaEnDatos(NOTA_JUAN, "Juan");
document.querySelector("#prac-xml").textContent = "El XML de la nota aparece al leerla.";
actualizarPuntaje();
