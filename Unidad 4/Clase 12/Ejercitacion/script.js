"use strict";

document.getElementById("ventana").textContent =
    "document es window.document: " + (window.document === document);

document.getElementById("href").textContent = "href: " + window.location.href;
document.getElementById("hostname").textContent = "hostname: " + window.location.hostname;
document.getElementById("pathname").textContent = "pathname: " + window.location.pathname;
document.getElementById("protocolo").textContent = "protocol: " + window.location.protocol;
document.getElementById("pantalla").textContent = "pantalla: " + window.screen.width;
document.getElementById("app-name").textContent = "appName: " + window.navigator.appName;
document.getElementById("app-code").textContent = "appCodeName: " + window.navigator.appCodeName;
document.getElementById("platform").textContent = "platform: " + window.navigator.platform;
document.getElementById("historial").textContent = "historial: " + window.history.length;

document.getElementById("nombre").addEventListener("click", function () {
    const valor = window.prompt("¿Cómo te llamás?", "Ana");
    const salida = document.getElementById("nombre-cliente");
    if (valor === null) {
        salida.textContent = "Sin nombre";
        return;
    }
    salida.textContent = "Cliente: " + valor;
});

document.getElementById("cerrar").addEventListener("click", function () {
    const acepta = window.confirm("¿Confirmás el pedido de Ana?");
    if (!acepta) {
        window.alert("Pedido cancelado");
        document.getElementById("estado").textContent = "Pedido cancelado";
        return;
    }

    const pedido = {
        cliente: "Ana",
        producto: "café",
        precio: 1800,
        cantidad: 2
    };

    document.getElementById("estado").textContent = "Pedido confirmado";

    const texto = JSON.stringify(pedido);
    document.getElementById("texto").textContent = texto;

    const recuperado = JSON.parse(texto);
    const total = recuperado.precio * recuperado.cantidad;
    document.getElementById("total").textContent = "Total: " + total;

    document.cookie = "cliente=Ana;path=/";
    document.getElementById("cookie").textContent = "Cookie: " + document.cookie;

    let segundos = 0;
    const reloj = setInterval(function () {
        segundos += 1;
        document.getElementById("espera").textContent = "Esperando: " + segundos;
    }, 1000);

    setTimeout(function () {
        clearInterval(reloj);
        document.getElementById("aviso").textContent = "El café está listo";
    }, 2000);
});
