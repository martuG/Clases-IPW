"use strict";

/*
 * Demos de las clases 10 y 11: objetos, clases y DOM.
 * Cada bloque está atado a una sección de index.html.
 * Los textos que se ejecutan están fijos: nadie escribe código libre en esta página.
 */

const PRECIO_CAFE = 1800;
const PRECIO_MEDIALUNA = 900;

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
        return null;
    }
    return Math.floor(numero);
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Combo(nombre) {
    this.nombre = nombre;
}

class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    describir() {
        return this.nombre + " · " + this.precio;
    }
}

class Bebida extends Articulo {
    constructor(nombre, precio, tamano) {
        super(nombre, precio);
        this.tamano = tamano;
    }
    describir() {
        return super.describir() + " · " + this.tamano;
    }
}

class Etiqueta {}

class Turno {
    constructor(cliente) {
        Turno.ultimo += 1;
        this.numero = Turno.ultimo;
        this.cliente = cliente;
    }
    static reiniciar() {
        Turno.ultimo = 0;
    }
}

Turno.ultimo = 0;

const productoLiteral = {
    nombre: "café",
    precio: 1800,
    disponible: true
};

const pedidoVista = {
    cliente: "Ana",
    producto: "café",
    cantidad: 2
};

const cafeAcceso = {
    nombre: "Café",
    _precio: 1800,
    get precio() {
        return this._precio;
    },
    set precio(valor) {
        if (!Number.isFinite(valor) || valor < 0) {
            return;
        }
        this._precio = valor;
    },
    get etiqueta() {
        return this.nombre + " · " + this.precio;
    }
};

const combos = [new Combo("Desayuno"), new Combo("Merienda")];
const turnos = [];
const creadosCtor = [];
const creadosClase = [];
const carta = [];
const heladera = { cafe: 12, medialuna: 20 };

let mesa = { cliente: "Ana", producto: "café", precio: 1800 };
let primPaso = 0;
let extraCombos = 0;
let escuchando = false;
let clicsEscucha = 0;
let frameId = 0;
let posTaza = 8;
let agregadosColeccion = 0;

const pasosPrimitivos = [
    {
        codigo: 'const dato = "café";',
        valor: "café",
        primitivo: "string",
        nota: "string es texto. Escrito así, el valor es primitivo."
    },
    {
        codigo: "const dato = 3.14;",
        valor: 3.14,
        primitivo: "number",
        nota: "3.14 es un primitivo. El número no necesita propiedades para existir."
    },
    {
        codigo: "const dato = true;",
        valor: true,
        primitivo: "boolean",
        nota: "Un booleano primitivo es true o false."
    },
    {
        codigo: "const dato = null;",
        valor: null,
        primitivo: "null",
        nota: 'null es primitivo y significa vacío a propósito. typeof null devuelve "object": es un caso histórico del lenguaje.'
    },
    {
        codigo: "let dato;",
        valor: undefined,
        primitivo: "undefined",
        nota: "undefined: la variable existe y todavía no tiene un valor guardado."
    },
    {
        codigo: 'const dato = Symbol("pedido");',
        valor: Symbol("pedido"),
        primitivo: "symbol",
        nota: "symbol identifica un valor único. No se une a un texto con el operador +."
    },
    {
        codigo: "const dato = 10n;",
        valor: null,
        primitivo: "bigint",
        especial: "bigint",
        nota: "bigint es un entero que puede ser enorme. El literal lleva una n al final."
    }
];

function textoValor(valor) {
    if (valor === null) {
        return "null";
    }
    if (typeof valor === "undefined") {
        return "undefined";
    }
    return String(valor);
}

/* --- 1. Objeto literal --- */

document.querySelectorAll("[data-prop]").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const clave = boton.dataset.prop;
        const valor = productoLiteral[clave];
        document.querySelector("#salida-objeto").textContent =
            "producto." + clave + " → " + valor + "    ·    typeof " + typeof valor;
    });
});

/* --- 2. Eventos de introducción --- */

function marcarCarga() {
    document.querySelector("#aviso-carga").textContent = "load: la página terminó de cargarse.";
}

if (document.readyState === "complete") {
    marcarCarga();
} else {
    window.addEventListener("load", marcarCarga);
}

document.querySelector("#campo-cambio").addEventListener("change", function () {
    const campo = document.querySelector("#campo-cambio");
    const valor = campo.value.trim();
    document.querySelector("#salida-cambio").textContent = valor === ""
        ? "change: el campo quedó vacío."
        : 'change: el campo quedó en "' + valor + '".';
});

document.querySelector("#btn-clic-simple").addEventListener("click", function () {
    document.querySelector("#salida-clic-simple").textContent = "click: se hizo clic en el botón.";
});

/* --- 3. Primitivos --- */

function pintarPrimitivo() {
    const paso = pasosPrimitivos[primPaso];
    let valor = paso.valor;
    if (paso.especial === "bigint") {
        valor = BigInt(10);
    }
    document.querySelector("#prim-codigo").textContent = paso.codigo;
    document.querySelector("#prim-valor").textContent = textoValor(valor);
    document.querySelector("#prim-typeof").textContent = typeof valor;
    document.querySelector("#prim-nombre").textContent = paso.primitivo;
    document.querySelector("#prim-nota").textContent = paso.nota;
    document.querySelector("#prim-indice").textContent = (primPaso + 1) + " / " + pasosPrimitivos.length;
}

document.querySelector("#btn-prim-siguiente").addEventListener("click", function () {
    primPaso = (primPaso + 1) % pasosPrimitivos.length;
    pintarPrimitivo();
});

document.querySelector("#btn-prim-reiniciar").addEventListener("click", function () {
    primPaso = 0;
    pintarPrimitivo();
});

document.querySelector("#btn-new-objeto").addEventListener("click", function () {
    const lineas = [
        'typeof "café" → ' + typeof "café",
        'typeof new String("café") → ' + typeof new String("café"),
        "typeof 3.14 → " + typeof 3.14,
        "typeof new Number(3.14) → " + typeof new Number(3.14),
        "typeof true → " + typeof true,
        "typeof new Boolean(true) → " + typeof new Boolean(true)
    ];
    document.querySelector("#salida-new").textContent = lineas.join("\n");
});

function agregarMuestra(titulo, detalle) {
    const article = document.createElement("article");
    article.className = "kv";
    const strong = document.createElement("strong");
    strong.textContent = titulo;
    const parrafo = document.createElement("p");
    parrafo.textContent = detalle;
    article.appendChild(strong);
    article.appendChild(parrafo);
    document.querySelector("#siempre-objetos").appendChild(article);
}

function pintarSiempreObjetos() {
    const fecha = new Date();
    const funcion = function () {
        return "listo";
    };
    agregarMuestra("Date", "typeof → " + typeof fecha + ". Las fechas son siempre objetos.");
    agregarMuestra("Math", "typeof → " + typeof Math + ". Math.PI → " + Math.PI + ". Math es siempre un objeto.");
    agregarMuestra("RegExp", "typeof → " + typeof /café/ + ". Una expresión regular es siempre un objeto.");
    agregarMuestra("Array", "typeof → " + typeof ["café"] + ". Array.isArray → true. Un arreglo es siempre un objeto.");
    agregarMuestra("Función", "typeof → " + typeof funcion + ". instanceof Object → " + (funcion instanceof Object) + ". Las funciones son objetos.");
    agregarMuestra("Objeto", "typeof → " + typeof { nombre: "café" } + ". Un objeto es un objeto.");
}

/* --- 4. Constructores --- */

function pintarCtor(nota) {
    const lista = document.querySelector("#lista-ctor");
    lista.replaceChildren();
    if (creadosCtor.length === 0) {
        const vacio = document.createElement("li");
        vacio.textContent = "Todavía no hay productos.";
        lista.appendChild(vacio);
    }
    creadosCtor.forEach(function (objeto) {
        const li = document.createElement("li");
        li.textContent = objeto.nombre + " · " + objeto.precio +
            " · instanceof Producto: " + (objeto instanceof Producto);
        lista.appendChild(li);
    });
    document.querySelector("#salida-ctor").textContent = nota;
}

document.querySelector("#btn-construir").addEventListener("click", function () {
    const nombre = document.querySelector("#ctor-nombre").value.trim();
    const precio = leerEntero("#ctor-precio");
    if (nombre === "" || precio === null) {
        pintarCtor("Hace falta un nombre y un precio de 0 para arriba.");
        return;
    }
    const objeto = new Producto(nombre, precio);
    creadosCtor.push(objeto);
    pintarCtor("new Producto. Dentro del constructor, this era este objeto.");
});

document.querySelector("#btn-sin-new").addEventListener("click", function () {
    try {
        Producto("Café", PRECIO_CAFE);
        pintarCtor("La llamada sin new se ejecutó.");
    } catch (error) {
        pintarCtor("Sin new, this no es un objeto nuevo. Con use strict, la llamada lanza " + error.name + ".");
    }
});

document.querySelector("#btn-ctor-limpiar").addEventListener("click", function () {
    creadosCtor.length = 0;
    pintarCtor("La lista volvió a cero. La función Producto sigue definida.");
});

/* --- 5. Propiedades --- */

function valorPropiedad(clave) {
    if (!/^[$A-Za-z_\u00C0-\u024F][\w\u00C0-\u024F]*$/.test(clave)) {
        return "(ese nombre no se usa en el ejemplo)";
    }
    if (!Object.prototype.hasOwnProperty.call(mesa, clave)) {
        return "(no está en el objeto)";
    }
    return JSON.stringify(mesa[clave]);
}

function pintarMesa(mensaje) {
    const expr = document.querySelector("#expr-prop").value.trim();
    const exprValor = expr === "" ? "(escribí un nombre)" : valorPropiedad(expr);
    document.querySelector("#mesa-lecturas").textContent =
        "mesa.cliente → " + JSON.stringify(mesa.cliente) + "\n" +
        'mesa["producto"] → ' + JSON.stringify(mesa.producto) + "\n" +
        "mesa[" + expr + "] → " + exprValor;
    document.querySelector("#mesa-json").textContent = JSON.stringify(mesa, null, 2);
    document.querySelector("#mesa-nota").textContent = mensaje;
}

document.querySelector("#expr-prop").addEventListener("input", function () {
    pintarMesa("Lectura con la expresión del campo.");
});

document.querySelector("#btn-mesa-precio").addEventListener("click", function () {
    const nuevo = leerEntero("#mesa-precio");
    if (nuevo === null) {
        pintarMesa("El precio tiene que ser un número de 0 para arriba.");
        return;
    }
    try {
        mesa.precio = nuevo;
        pintarMesa("mesa.precio = " + nuevo);
    } catch (error) {
        pintarMesa(error.name + ": precio es de solo lectura. El valor sigue en " + mesa.precio + ".");
    }
});

document.querySelector("#btn-mesa-agregar").addEventListener("click", function () {
    mesa.listo = true;
    pintarMesa("mesa.listo = true. Se agregó una propiedad.");
});

document.querySelector("#btn-mesa-borrar").addEventListener("click", function () {
    delete mesa.listo;
    pintarMesa("delete mesa.listo. Si la propiedad no estaba, el objeto queda igual.");
});

document.querySelector("#btn-mesa-readonly").addEventListener("click", function () {
    Object.defineProperty(mesa, "precio", { writable: false });
    pintarMesa("Object.defineProperty dejó precio en solo lectura. Probar a cambiarlo lanza un error.");
});

document.querySelector("#btn-mesa-reset").addEventListener("click", function () {
    mesa = { cliente: "Ana", producto: "café", precio: 1800 };
    pintarMesa("Objeto inicial.");
});

/* --- 6. Métodos y this --- */

const caja = {
    local: "El Break",
    total: 2700,
    resumen: function () {
        return this.local + ": " + this.total;
    }
};

document.querySelector("#btn-metodo").addEventListener("click", function () {
    document.querySelector("#salida-this").textContent =
        "caja.resumen() → " + caja.resumen() + "\n" +
        "typeof caja.resumen → " + typeof caja.resumen + ". Un método es una propiedad que guarda una función.";
});

document.querySelector("#btn-this-suelto").addEventListener("click", function () {
    const resumen = caja.resumen;
    try {
        const resultado = resumen();
        document.querySelector("#salida-this").textContent = "fn() → " + resultado;
    } catch (error) {
        document.querySelector("#salida-this").textContent =
            "const fn = caja.resumen; fn(); → " + error.name +
            ". Con use strict, this ya no es caja: la función se llamó suelta y this.local no se puede leer.";
    }
});

/* --- 7. Mostrar el objeto --- */

document.querySelector("#btn-ver-nombre").addEventListener("click", function () {
    document.querySelector("#salida-ver").textContent =
        "pedido.cliente → " + pedidoVista.cliente + "\n" +
        "pedido.producto → " + pedidoVista.producto + "\n" +
        "pedido.cantidad → " + pedidoVista.cantidad;
});

document.querySelector("#btn-ver-bucle").addEventListener("click", function () {
    const lineas = [];
    for (const clave in pedidoVista) {
        if (Object.prototype.hasOwnProperty.call(pedidoVista, clave)) {
            lineas.push(clave + ": " + pedidoVista[clave]);
        }
    }
    document.querySelector("#salida-ver").textContent =
        "for (const clave in pedido)\n" + lineas.join("\n");
});

document.querySelector("#btn-ver-values").addEventListener("click", function () {
    document.querySelector("#salida-ver").textContent =
        "Object.values(pedido) → " + JSON.stringify(Object.values(pedidoVista));
});

document.querySelector("#btn-ver-json").addEventListener("click", function () {
    document.querySelector("#salida-ver").textContent = JSON.stringify(pedidoVista, null, 2);
});

/* --- 8. Getter y setter --- */

function pintarAcceso(mensaje) {
    document.querySelector("#salida-accesor").textContent =
        mensaje + "\n" +
        "cafe.precio → " + cafeAcceso.precio + "\n" +
        "cafe.etiqueta → " + cafeAcceso.etiqueta;
}

document.querySelector("#btn-set-precio").addEventListener("click", function () {
    const nuevo = Number(document.querySelector("#precio-set").value);
    if (!Number.isFinite(nuevo)) {
        pintarAcceso("Eso no es un número. El setter no corre con un valor inválido de este campo.");
        return;
    }
    const anterior = cafeAcceso.precio;
    cafeAcceso.precio = nuevo;
    if (cafeAcceso.precio !== nuevo) {
        pintarAcceso("El setter rechazó " + nuevo + ". El precio sigue en " + anterior + ".");
        return;
    }
    pintarAcceso("cafe.precio = " + nuevo + ". El setter guardó el número y la etiqueta se volvió a armar.");
});

document.querySelector("#btn-get-etiqueta").addEventListener("click", function () {
    pintarAcceso("Lectura. etiqueta no está guardada como texto fijo: el getter la arma.");
});

/* --- 9. Prototipos --- */

function pintarCombos(nota) {
    const lista = document.querySelector("#lista-combos");
    lista.replaceChildren();
    combos.forEach(function (combo) {
        const li = document.createElement("li");
        const notaPropia = Object.prototype.hasOwnProperty.call(combo, "nota") ? combo.nota : "—";
        const etiqueta = typeof combo.etiqueta === "function" ? combo.etiqueta() : "—";
        const propia = Object.prototype.hasOwnProperty.call(combo, "etiqueta");
        li.textContent = combo.nombre + " · nota propia: " + notaPropia +
            " · etiqueta(): " + etiqueta + " · etiqueta es propia: " + propia;
        lista.appendChild(li);
    });
    document.querySelector("#combo-nota").textContent = nota;
}

function pintarCadenas() {
    const combo = combos[0];
    const protoCombo = Object.getPrototypeOf(combo);
    const protoObjeto = Object.getPrototypeOf(protoCombo);
    const fin = Object.getPrototypeOf(protoObjeto);
    const cadenaOk = protoCombo === Combo.prototype && protoObjeto === Object.prototype && fin === null;
    document.querySelector("#cadena-proto").textContent = cadenaOk
        ? "Desayuno → Combo.prototype → Object.prototype → null"
        : "La cadena del combo no coincide con lo esperado.";

    const fechaOk = Object.getPrototypeOf(new Date()) === Date.prototype;
    const arregloOk = Object.getPrototypeOf([]) === Array.prototype;
    const suben = Object.getPrototypeOf(Date.prototype) === Object.prototype &&
        Object.getPrototypeOf(Array.prototype) === Object.prototype;
    document.querySelector("#cadena-nativos").textContent =
        "Date hereda de Date.prototype: " + fechaOk +
        ". Array hereda de Array.prototype: " + arregloOk +
        ". Esos prototipos heredan de Object.prototype: " + suben + ".";
}

document.querySelector("#btn-proto-etiqueta").addEventListener("click", function () {
    Combo.prototype.etiqueta = function () {
        return "Combo: " + this.nombre;
    };
    pintarCombos("etiqueta quedó en Combo.prototype. Los combos la usan y ninguno la tiene como propiedad propia.");
});

document.querySelector("#btn-proto-nota").addEventListener("click", function () {
    combos[0].nota = "para llevar";
    pintarCombos("La nota está solo en Desayuno. Merienda no la tiene: es una propiedad de ese objeto.");
});

document.querySelector("#btn-proto-nuevo").addEventListener("click", function () {
    extraCombos += 1;
    const nombre = extraCombos === 1 ? "Cena" : "Combo " + (combos.length + 1);
    combos.push(new Combo(nombre));
    pintarCombos("new Combo. Si el prototipo ya tiene etiqueta, el combo nuevo también la tiene.");
});

/* --- 10. ES5 --- */

document.querySelector("#btn-keys").addEventListener("click", function () {
    document.querySelector("#salida-es5").textContent =
        "Object.keys(heladera) → " + JSON.stringify(Object.keys(heladera));
});

document.querySelector("#btn-freeze").addEventListener("click", function () {
    Object.freeze(heladera);
    try {
        heladera.cafe = 99;
        document.querySelector("#salida-es5").textContent = "La asignación se escribió.";
    } catch (error) {
        document.querySelector("#salida-es5").textContent =
            "Object.freeze(heladera). heladera.cafe = 99 → " + error.name +
            ". Object.isFrozen → " + Object.isFrozen(heladera) + ".";
    }
});

document.querySelector("#btn-create").addEventListener("click", function () {
    const base = { local: "El Break" };
    const sucursal = Object.create(base);
    sucursal.horario = "mañana";
    document.querySelector("#salida-es5").textContent =
        "sucursal.local → " + sucursal.local + " (sale del prototipo)\n" +
        "Object.keys(sucursal) → " + JSON.stringify(Object.keys(sucursal)) + "\n" +
        "Object.getPrototypeOf(sucursal) === base → " + (Object.getPrototypeOf(sucursal) === base);
});

/* --- 11. Clases --- */

function pintarClase(nota) {
    const lista = document.querySelector("#lista-clase");
    lista.replaceChildren();
    creadosClase.forEach(function (articulo) {
        const li = document.createElement("li");
        li.textContent = articulo.describir() + " · constructor: " + articulo.constructor.name;
        lista.appendChild(li);
    });
    document.querySelector("#salida-clase").textContent = nota;
}

document.querySelector("#btn-clase").addEventListener("click", function () {
    const nombre = document.querySelector("#clase-nombre").value.trim();
    const precio = leerEntero("#clase-precio");
    if (nombre === "" || precio === null) {
        document.querySelector("#salida-clase").textContent = "Hace falta un nombre y un precio de 0 para arriba.";
        return;
    }
    creadosClase.push(new Articulo(nombre, precio));
    pintarClase('new Articulo("' + nombre + '", ' + precio + "). El constructor corrió solo.");
});

document.querySelector("#btn-clase-vacia").addEventListener("click", function () {
    const etiqueta = new Etiqueta();
    document.querySelector("#salida-clase").textContent =
        "class Etiqueta {} → new Etiqueta() → " + JSON.stringify(etiqueta) +
        ". No se escribió constructor: JavaScript agregó uno vacío.";
});

/* --- 12. Herencia --- */

document.querySelector("#btn-her-articulo").addEventListener("click", function () {
    const medialuna = new Articulo("Medialuna", PRECIO_MEDIALUNA);
    document.querySelector("#salida-herencia").textContent =
        "new Articulo → " + medialuna.describir() +
        "\ninstanceof Articulo: " + (medialuna instanceof Articulo) +
        "\ninstanceof Bebida: " + (medialuna instanceof Bebida);
});

document.querySelector("#btn-her-bebida").addEventListener("click", function () {
    const bebida = new Bebida("Café con leche", 2200, "grande");
    document.querySelector("#salida-herencia").textContent =
        "new Bebida → " + bebida.describir() +
        "\ninstanceof Bebida: " + (bebida instanceof Bebida) +
        "\ninstanceof Articulo: " + (bebida instanceof Articulo) +
        "\nsuper guardó nombre y precio. describir de Bebida agrega el tamaño.";
});

/* --- 13. Estáticos --- */

function pintarTurno(mensaje) {
    document.querySelector("#turno-contador").textContent = String(Turno.ultimo);
    document.querySelector("#salida-turno").textContent = mensaje;
}

document.querySelector("#btn-turno").addEventListener("click", function () {
    const cliente = document.querySelector("#turno-cliente").value.trim();
    const nombre = cliente === "" ? "Cliente" : cliente;
    const turno = new Turno(nombre);
    turnos.push(turno);
    pintarTurno("new Turno → número " + turno.numero + " · " + turno.cliente);
});

document.querySelector("#btn-turno-reset").addEventListener("click", function () {
    Turno.reiniciar();
    pintarTurno("Turno.reiniciar() dejó el contador en " + Turno.ultimo + ". Los turnos ya sacados conservan su número.");
});

document.querySelector("#btn-turno-instancia").addEventListener("click", function () {
    const ultimo = turnos[turnos.length - 1];
    if (!ultimo) {
        pintarTurno("Primero saquen un turno. reiniciar se llama sobre la clase Turno.");
        return;
    }
    try {
        ultimo.reiniciar();
        pintarTurno("La llamada sobre el objeto se ejecutó.");
    } catch (error) {
        pintarTurno(error.name + ". reiniciar está en la clase Turno. El turno de " + ultimo.cliente + " no tiene ese método.");
    }
});

/* --- 14. document --- */

document.querySelector("#doc-titulo").textContent = document.title;

document.querySelector("#btn-doc").addEventListener("click", function () {
    document.getElementById("doc-muestra").textContent =
        "Este texto lo escribió document.getElementById.";
});

/* --- 15. Encontrar elementos --- */

document.querySelector("#form-busqueda").addEventListener("submit", function (evento) {
    evento.preventDefault();
});

function decirAcceso(texto) {
    document.querySelector("#salida-acceso").textContent = texto;
}

document.querySelector("#btn-acc-id").addEventListener("click", function () {
    const titulo = document.getElementById("titulo-busqueda");
    decirAcceso('document.getElementById("titulo-busqueda") → ' + titulo.textContent);
});

document.querySelector("#btn-acc-tag").addEventListener("click", function () {
    const cajaBusqueda = document.getElementById("caja-busqueda");
    const parrafos = cajaBusqueda.getElementsByTagName("p");
    decirAcceso('getElementsByTagName("p") dentro de la caja → ' + parrafos.length +
        " párrafos. El primero: " + parrafos[0].textContent);
});

document.querySelector("#btn-acc-class").addEventListener("click", function () {
    const piezas = document.getElementsByClassName("pieza-busqueda");
    decirAcceso('document.getElementsByClassName("pieza-busqueda") → ' + piezas.length + " elementos.");
});

document.querySelector("#btn-acc-qs").addEventListener("click", function () {
    const uno = document.querySelector("#caja-busqueda .pieza-busqueda");
    decirAcceso("document.querySelector(...) → el primero: " + uno.textContent);
});

document.querySelector("#btn-acc-all").addEventListener("click", function () {
    const todos = document.querySelectorAll("#caja-busqueda .pieza-busqueda");
    decirAcceso("document.querySelectorAll(...) → NodeList con " + todos.length + " elementos.");
});

document.querySelector("#btn-acc-forms").addEventListener("click", function () {
    const form = document.forms.namedItem("formBusqueda");
    const cliente = form.elements.namedItem("cliente");
    decirAcceso('document.forms.namedItem("formBusqueda") → el campo cliente vale "' + cliente.value +
        '". En toda la página hay ' + document.forms.length + " formulario(s) y " +
        document.links.length + " enlace(s).");
});

/* --- 16. Cambiar HTML, estilo y animación --- */

document.querySelector("#btn-inner-dom").addEventListener("click", function () {
    document.querySelector("#ticket-dom").innerHTML =
        "<p>Ticket: <strong>café</strong></p><p>Total: " + pesos(PRECIO_CAFE) + "</p>";
});

document.querySelector("#btn-text-dom").addEventListener("click", function () {
    document.querySelector("#ticket-dom").textContent = "<p>Ticket: <strong>café</strong></p>";
});

document.querySelector("#btn-color").addEventListener("click", function () {
    const cajaEstilo = document.querySelector("#estilo-caja");
    cajaEstilo.style.backgroundColor = "#14532d";
    cajaEstilo.style.color = "#ffffff";
});

document.querySelector("#btn-tamano").addEventListener("click", function () {
    document.querySelector("#estilo-caja").style.fontSize = "1.4rem";
});

document.querySelector("#btn-estilo-reset").addEventListener("click", function () {
    const cajaEstilo = document.querySelector("#estilo-caja");
    cajaEstilo.style.backgroundColor = "";
    cajaEstilo.style.color = "";
    cajaEstilo.style.fontSize = "";
});

const taza = document.querySelector("#taza");
const pista = document.querySelector("#pista");

function detenerAnimacion() {
    if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
    }
}

document.querySelector("#btn-animar").addEventListener("click", function () {
    if (frameId) {
        return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maximo = Math.max(0, pista.clientWidth - taza.offsetWidth);
    if (reduce) {
        taza.style.left = Math.floor(maximo * 0.7) + "px";
        document.querySelector("#anim-nota").textContent =
            "El sistema pidió menos movimiento. La taza salta adelante en la pista.";
        return;
    }
    function paso() {
        const tope = Math.max(0, pista.clientWidth - taza.offsetWidth);
        posTaza += 2;
        if (posTaza > tope) {
            posTaza = 0;
        }
        taza.style.left = posTaza + "px";
        frameId = requestAnimationFrame(paso);
    }
    frameId = requestAnimationFrame(paso);
    document.querySelector("#anim-nota").textContent = "Cada cuadro escribe taza.style.left.";
});

document.querySelector("#btn-animar-stop").addEventListener("click", function () {
    detenerAnimacion();
    document.querySelector("#anim-nota").textContent = "La animación está detenida.";
});

/* --- 17. Eventos del DOM --- */

window.registrarOnclick = function () {
    document.querySelector("#salida-onclick").textContent =
        "onclick: el atributo HTML llamó a una función publicada en window.";
};

function alEscuchar() {
    clicsEscucha += 1;
    document.querySelector("#salida-escucha").textContent =
        "addEventListener: el botón lleva " + clicsEscucha + " clic(s) contados.";
}

const btnEscucharClic = document.querySelector("#btn-escuchar-clic");

document.querySelector("#btn-poner-escucha").addEventListener("click", function () {
    if (escuchando) {
        document.querySelector("#salida-escucha").textContent = "Ya había un escuchador. No se agregó otro.";
        return;
    }
    btnEscucharClic.addEventListener("click", alEscuchar);
    escuchando = true;
    document.querySelector("#salida-escucha").textContent = "Listo. Ahora el botón de contar escucha el clic.";
});

document.querySelector("#btn-sacar-escucha").addEventListener("click", function () {
    btnEscucharClic.removeEventListener("click", alEscuchar);
    escuchando = false;
    document.querySelector("#salida-escucha").textContent =
        "removeEventListener sacó esa función. El botón queda en silencio.";
});

const zonaMouse = document.querySelector("#zona-mouse");

zonaMouse.addEventListener("mouseenter", function () {
    zonaMouse.textContent = "mouseenter: el mouse está sobre la caja.";
});

zonaMouse.addEventListener("mouseleave", function () {
    zonaMouse.textContent = "mouseleave: el mouse salió de la caja.";
});

document.querySelector("#tecla-evento").addEventListener("keydown", function (evento) {
    const tecla = evento.key === " " ? "Espacio" : evento.key;
    document.querySelector("#salida-tecla").textContent = "keydown: " + tecla;
});

document.querySelector("#form-evento").addEventListener("submit", function (evento) {
    evento.preventDefault();
    const valor = document.querySelector("#tecla-evento").value.trim();
    document.querySelector("#salida-envio").textContent = valor === ""
        ? "submit: el formulario no se envió. preventDefault frenó la recarga."
        : 'submit: "' + valor + '" se quedó en la página. preventDefault frenó la recarga.';
});

/* --- 18. Nodos --- */

const arbol = document.querySelector("#arbol-vivo");
const listaNodos = document.querySelector("#lista-nodos");
let nodoActual = listaNodos.children[1];

function nombreNodo(nodo) {
    if (nodo.nodeType === 3) {
        return 'texto "' + nodo.textContent.trim() + '"';
    }
    if (nodo.nodeType === 1) {
        return nodo.nodeName.toLowerCase();
    }
    return nodo.nodeName;
}

function describirActual(extra) {
    const lineas = [];
    if (extra) {
        lineas.push(extra);
    }
    lineas.push("Ahora: " + nombreNodo(nodoActual));
    if (nodoActual.nodeType === 1) {
        lineas.push("nodeType 1 (elemento)");
    } else if (nodoActual.nodeType === 3) {
        lineas.push("nodeType 3 (texto)");
    }
    if (nodoActual === arbol) {
        lineas.push("Esta es la raíz del ejemplo.");
    } else if (nodoActual.parentElement) {
        lineas.push("Padre: " + nombreNodo(nodoActual.parentElement));
    }
    if (nodoActual.nodeType === 1) {
        lineas.push("Hijos elemento (children): " + nodoActual.children.length);
        lineas.push("Nodos hijos (childNodes): " + nodoActual.childNodes.length);
        lineas.push("Hermano anterior: " + (nodoActual.previousElementSibling ? nombreNodo(nodoActual.previousElementSibling) : "—"));
        lineas.push("Hermano siguiente: " + (nodoActual.nextElementSibling ? nombreNodo(nodoActual.nextElementSibling) : "—"));
    }
    document.querySelector("#nodo-salida").textContent = lineas.join("\n");
    arbol.classList.remove("is-current");
    arbol.querySelectorAll(".is-current").forEach(function (elemento) {
        elemento.classList.remove("is-current");
    });
    const marca = nodoActual.nodeType === 1 ? nodoActual : nodoActual.parentElement;
    if (marca && arbol.contains(marca)) {
        marca.classList.add("is-current");
    }
}

document.querySelector("#btn-nodo-padre").addEventListener("click", function () {
    const padre = nodoActual.parentElement;
    if (!padre || !arbol.contains(padre)) {
        describirActual("Esta es la raíz del ejemplo. El padre ya es el resto de la página.");
        return;
    }
    nodoActual = padre;
    describirActual();
});

document.querySelector("#btn-nodo-hijo").addEventListener("click", function () {
    if (nodoActual.nodeType !== 1 || !nodoActual.firstElementChild) {
        describirActual("No hay un hijo elemento. Un li suele guardar un nodo de texto, no otro elemento.");
        return;
    }
    nodoActual = nodoActual.firstElementChild;
    describirActual();
});

document.querySelector("#btn-nodo-ant").addEventListener("click", function () {
    if (nodoActual.nodeType !== 1) {
        describirActual("El nodo de texto se mueve con su elemento. Subí al padre para buscar hermanos.");
        return;
    }
    if (!nodoActual.previousElementSibling) {
        describirActual("No hay hermano anterior.");
        return;
    }
    nodoActual = nodoActual.previousElementSibling;
    describirActual();
});

document.querySelector("#btn-nodo-sig").addEventListener("click", function () {
    if (nodoActual.nodeType !== 1) {
        describirActual("El nodo de texto se mueve con su elemento. Subí al padre para buscar hermanos.");
        return;
    }
    if (!nodoActual.nextElementSibling) {
        describirActual("No hay hermano siguiente.");
        return;
    }
    nodoActual = nodoActual.nextElementSibling;
    describirActual();
});

document.querySelector("#btn-nodo-texto").addEventListener("click", function () {
    const texto = nodoActual.firstChild;
    if (!texto || texto.nodeType !== 3) {
        describirActual("Este nodo no tiene un hijo de texto.");
        return;
    }
    nodoActual = texto;
    describirActual();
});

document.querySelector("#btn-nodo-raiz").addEventListener("click", function () {
    nodoActual = arbol;
    describirActual();
});

document.querySelector("#btn-nodo-crear").addEventListener("click", function () {
    const nombre = document.querySelector("#nodo-nombre").value.trim();
    if (nombre === "") {
        describirActual("Escribí el texto del nuevo elemento.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = nombre;
    listaNodos.appendChild(li);
    nodoActual = li;
    describirActual('createElement("li") y appendChild insertaron "' + nombre + '".');
});

document.querySelector("#btn-nodo-borrar").addEventListener("click", function () {
    const elemento = nodoActual.nodeType === 1 ? nodoActual : nodoActual.parentElement;
    if (!elemento || elemento.nodeName !== "LI" || !listaNodos.contains(elemento)) {
        describirActual("removeChild, en este ejemplo, saca un li de la lista.");
        return;
    }
    const padre = elemento.parentNode;
    const siguiente = elemento.nextElementSibling || elemento.previousElementSibling || padre;
    padre.removeChild(elemento);
    nodoActual = siguiente;
    describirActual("removeChild sacó el ítem.");
});

/* --- Colecciones y NodeList --- */

const zonaColeccion = document.querySelector("#zona-coleccion");
const coleccionViva = zonaColeccion.getElementsByClassName("item-carta");
let listaFija = zonaColeccion.querySelectorAll(".item-carta");

function pintarColecciones(nota) {
    document.querySelector("#col-viva").textContent = String(coleccionViva.length);
    document.querySelector("#col-fija").textContent = String(listaFija.length);
    document.querySelector("#col-children").textContent = String(zonaColeccion.children.length);
    document.querySelector("#col-child").textContent = String(zonaColeccion.childNodes.length);
    document.querySelector("#col-tipos").textContent =
        "getElementsByClassName → " + coleccionViva.constructor.name +
        " · querySelectorAll → " + listaFija.constructor.name +
        " · childNodes → " + zonaColeccion.childNodes.constructor.name +
        " · Array.isArray(HTMLCollection) → " + Array.isArray(coleccionViva);
    document.querySelector("#col-nota").textContent = nota;
}

document.querySelector("#btn-col-agregar").addEventListener("click", function () {
    agregadosColeccion += 1;
    const parrafo = document.createElement("p");
    parrafo.className = "item-carta";
    parrafo.textContent = agregadosColeccion === 1 ? "Jugo" : "Extra " + agregadosColeccion;
    zonaColeccion.appendChild(parrafo);
    pintarColecciones("Se agregó un elemento. La HTMLCollection viva creció. El NodeList guardado sigue en el número anterior.");
});

document.querySelector("#btn-col-requery").addEventListener("click", function () {
    listaFija = zonaColeccion.querySelectorAll(".item-carta");
    pintarColecciones("Se volvió a llamar querySelectorAll. Este NodeList nuevo ve los elementos de ahora.");
});

/* --- 19. Práctica --- */

function pintarCartaJson() {
    document.querySelector("#carta-json").textContent = JSON.stringify(carta, null, 2);
}

function tieneProducto(nombre, precio) {
    return carta.some(function (item) {
        return item.nombre.toLowerCase() === nombre && item.precio === precio;
    });
}

document.querySelector("#btn-prac-agregar").addEventListener("click", function () {
    const nombre = document.querySelector("#prac-nombre").value.trim();
    const precio = leerEntero("#prac-precio");
    const salida = document.querySelector("#salida-practica");
    if (nombre === "") {
        salida.className = "feedback is-bad";
        salida.textContent = "El producto necesita un nombre.";
        return;
    }
    if (precio === null) {
        salida.className = "feedback is-bad";
        salida.textContent = "El precio tiene que ser un número de 0 para arriba.";
        return;
    }
    const item = new Articulo(nombre, precio);
    carta.push(item);
    const li = document.createElement("li");
    li.textContent = item.describir();
    li.addEventListener("click", function () {
        li.classList.toggle("is-chosen");
    });
    document.querySelector("#carta-practica").appendChild(li);
    salida.className = "salida";
    salida.textContent = "new Articulo y appendChild. Hay " + carta.length + " producto(s). Un clic en la fila lo marca.";
    pintarCartaJson();
});

document.querySelector("#btn-prac-json").addEventListener("click", function () {
    pintarCartaJson();
    document.querySelector("#salida-practica").className = "salida";
    document.querySelector("#salida-practica").textContent =
        "JSON.stringify muestra el arreglo. Cada fila es un objeto Articulo.";
});

document.querySelector("#btn-prac-comprobar").addEventListener("click", function () {
    const cafe = tieneProducto("café", PRECIO_CAFE) || tieneProducto("cafe", PRECIO_CAFE);
    const medialuna = tieneProducto("medialuna", PRECIO_MEDIALUNA);
    const salida = document.querySelector("#salida-practica");
    if (cafe && medialuna) {
        salida.className = "feedback is-ok";
        salida.textContent = "La carta de muestra está: café a " + pesos(PRECIO_CAFE) + " y medialuna a " + pesos(PRECIO_MEDIALUNA) + ".";
        return;
    }
    salida.className = "feedback is-bad";
    salida.textContent = "Faltan datos de la muestra. Hace falta un café a " + pesos(PRECIO_CAFE) + " y una medialuna a " + pesos(PRECIO_MEDIALUNA) + ".";
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

pintarPrimitivo();
pintarSiempreObjetos();
pintarCtor("El constructor espera un new.");
pintarMesa("Objeto inicial. Las tres lecturas usan punto, corchetes y expresión.");
pintarAcceso("cafe.etiqueta se arma al leerla.");
pintarCombos("Desayuno y Merienda salieron de new Combo. Todavía no comparten un método.");
pintarCadenas();
pintarTurno("El contador Turno.ultimo arranca en 0.");
describirActual("El recorrido empieza en Medialuna.");
pintarColecciones("Al cargar, la colección viva y el NodeList coinciden. childNodes puede superar a children: los saltos de línea también son nodos.");
actualizarPuntaje();
