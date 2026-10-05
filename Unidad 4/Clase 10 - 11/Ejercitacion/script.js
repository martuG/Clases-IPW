"use strict";

const pedido = {
    cliente: "Ana",
    producto: "café",
    precio: 1800,
    cantidad: 2
};

const claveCantidad = "cantidad";

const boton = document.querySelector("button");

boton.addEventListener("click", function () {
    const ficha = document.getElementById("ficha");

    const titulos = ficha.getElementsByTagName("h1");
    titulos[0].textContent = "El Break";

    const campos = ficha.getElementsByClassName("campo");
    campos[0].textContent = "Cliente: " + pedido.cliente;
    campos[1].textContent = "Producto: " + pedido["producto"];
    campos[2].textContent = "Total: " + pedido.precio * pedido[claveCantidad];

    const camposLista = document.querySelectorAll(".campo");
    const conteo = document.querySelector("#conteo");
    conteo.textContent = campos.length + " y " + camposLista.length;

    const estado = document.getElementById("estado");
    estado.textContent = JSON.stringify(pedido);
});
