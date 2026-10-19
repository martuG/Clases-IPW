"use strict";

const notaJuan = `<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="12/11/2022">
  <para>Ana</para>
  <de>Juan</de>
  <encabezado>Pedido listo</encabezado>
  <cuerpo>El café está en la barra.</cuerpo>
</nota>`;

const notaPedro = `<?xml version="1.0" encoding="UTF-8"?>
<nota fecha="19/10/2026">
  <para>Lucía</para>
  <de>Pedro</de>
  <encabezado>Mesa libre</encabezado>
  <cuerpo>La mesa 4 quedó libre.</cuerpo>
</nota>`;

const notaRota = "<nota><para>Ana</de></para></nota>";

function pintarNota(textoXml) {
    const documento = new DOMParser().parseFromString(textoXml, "application/xml");
    const nota = documento.documentElement;
    const nombres = [];
    let i = 0;

    for (i = 0; i < nota.children.length; i += 1) {
        nombres.push(nota.children[i].tagName);
    }

    document.getElementById("para").textContent = "Para: " + nota.querySelector("para").textContent;
    document.getElementById("de").textContent = "De: " + nota.querySelector("de").textContent;
    document.getElementById("encabezado").textContent = "Encabezado: " + nota.querySelector("encabezado").textContent;
    document.getElementById("cuerpo").textContent = "Cuerpo: " + nota.querySelector("cuerpo").textContent;
    document.getElementById("fecha").textContent = "Fecha: " + nota.getAttribute("fecha");
    document.getElementById("raiz").textContent = "Raíz: " + nota.tagName;
    document.getElementById("hijos").textContent = "Hijos: " + nombres.join(", ");
}

pintarNota(notaJuan);

document.getElementById("otra").addEventListener("click", function () {
    pintarNota(notaPedro);
});

document.getElementById("revisar").addEventListener("click", function () {
    const documento = new DOMParser().parseFromString(notaRota, "application/xml");
    const error = documento.querySelector("parsererror");
    document.getElementById("sintaxis").textContent = error ? "XML inválido" : "XML válido";
});
