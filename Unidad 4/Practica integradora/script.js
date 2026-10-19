"use strict";

// El Faro abre, anota el préstamo de Sol y lo confirma.

const LOCAL = "El Faro";
const SENA_LIBRO = 1800;

let ejemplares = 20;
let abierta = false;
let prestamo = null;
let confirmado = false;

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

function calcular(sena, cantidad) {
    return sena * cantidad;
}

document.getElementById("local").textContent = LOCAL;

document.getElementById("ventana").textContent =
    "document es window.document: " + (window.document === document);

document.getElementById("protocolo").textContent = "protocol: " + window.location.protocol;
document.getElementById("pantalla").textContent = "pantalla: " + window.screen.width;
document.getElementById("plataforma").textContent = "platform: " + window.navigator.platform;
document.getElementById("historial").textContent = "historial: " + window.history.length;

console.log(LOCAL + " listo");

document.getElementById("abrir").addEventListener("click", function () {
    abierta = true;
    const cartel = document.getElementById("cartel");
    cartel.textContent = "ABIERTA";
    cartel.style.color = "#1e3a5f";
    document.getElementById("stock").textContent = "Ejemplares: " + ejemplares;
    document.getElementById("abrir").textContent = "La biblioteca está abierta";
});

document.getElementById("anotar").addEventListener("click", function () {
    if (abierta === false) {
        window.alert("Primero abrí la biblioteca");
        return;
    }

    const nombre = window.prompt("¿Cómo te llamás?", "Sol");
    if (nombre === null) {
        document.getElementById("estado").textContent = "Sin nombre";
        return;
    }

    const libro = new Novela("Atlas", SENA_LIBRO, "mapas");
    const claveCantidad = "cantidad";

    prestamo = {
        socio: nombre,
        titulo: libro.titulo,
        sena: libro.sena,
        cantidad: 2,
        genero: libro.genero
    };

    const ficha = document.getElementById("ficha");
    const titulos = ficha.getElementsByTagName("h2");
    titulos[0].textContent = LOCAL;

    const campos = ficha.getElementsByClassName("campo");
    campos[0].textContent = "Socio: " + prestamo.socio;
    campos[1].textContent = "Título: " + prestamo["titulo"];
    campos[2].textContent = "Total: " + calcular(prestamo.sena, prestamo[claveCantidad]);

    const camposLista = document.querySelectorAll(".campo");
    document.querySelector("#conteo").textContent = campos.length + " y " + camposLista.length;

    const li = document.createElement("li");
    li.textContent = libro.describir();
    document.getElementById("prestamos").appendChild(li);

    ejemplares -= prestamo[claveCantidad];
    document.getElementById("stock").textContent = "Ejemplares: " + ejemplares;
    confirmado = false;
});

document.getElementById("confirmar").addEventListener("click", function () {
    if (prestamo === null) {
        window.alert("Primero anotá el préstamo");
        return;
    }
    if (confirmado === true) {
        window.alert("El préstamo ya está confirmado");
        return;
    }

    const acepta = window.confirm("¿Confirmás el préstamo de " + prestamo.socio + "?");
    if (acepta === false) {
        window.alert("Préstamo cancelado");
        document.getElementById("estado").textContent = "Préstamo cancelado";
        return;
    }

    confirmado = true;
    const turno = Turno.siguiente();
    const estado = document.getElementById("estado");
    estado.textContent = "Préstamo confirmado. Turno: " + turno;
    estado.style.color = "#1e3a5f";

    const texto = JSON.stringify(prestamo);
    document.getElementById("texto").textContent = texto;

    const recuperado = JSON.parse(texto);
    const claveCantidad = "cantidad";
    const total = calcular(recuperado.sena, recuperado[claveCantidad]);
    document.getElementById("total").textContent = "Total: " + total;

    document.cookie = "socio=" + recuperado.socio + ";path=/";
    document.getElementById("cookie").textContent = "Cookie: " + document.cookie;

    let segundos = 0;
    const reloj = setInterval(function () {
        segundos += 1;
        document.getElementById("espera").textContent = "Esperando: " + segundos;
    }, 1000);

    setTimeout(function () {
        clearInterval(reloj);
        document.getElementById("aviso").textContent = "Los libros están listos";
    }, 2000);
});
