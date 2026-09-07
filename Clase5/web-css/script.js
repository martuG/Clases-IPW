const selectorStage = document.getElementById("selector-stage");
const selectorHint = document.getElementById("selector-hint");
const specSample = document.getElementById("muestra");
const specHint = document.getElementById("spec-hint");
const emRange = document.getElementById("em-range");
const emParent = document.getElementById("em-parent");
const emVal = document.getElementById("em-val");
const emChildVal = document.getElementById("em-child-val");
const typeSample = document.getElementById("type-sample");
const displayStage = document.getElementById("display-stage");
const displayHint = document.getElementById("display-hint");

const displayHints = {
    block: "block: cada uno ocupa todo el ancho disponible y arranca en una línea nueva.",
    inline: "inline: fluyen con el texto. width y el margen vertical casi no sirven.",
    "inline-block": "inline-block: fluyen como texto, pero sí aceptan ancho, alto y márgenes.",
    none: "none: no se muestran y no ocupan espacio. El escenario queda vacío."
};

function clearMatches() {
    selectorStage.querySelectorAll(".is-match").forEach((node) => {
        node.classList.remove("is-match");
    });
}

function applySelector(selector, button) {
    document.querySelectorAll("#selector-btns button").forEach((item) => {
        item.classList.toggle("is-active", item === button && selector !== "");
    });
    clearMatches();

    if (!selector) {
        selectorHint.textContent = "Todavía no hay selector aplicado.";
        return;
    }

    const matches = selectorStage.querySelectorAll(selector);
    matches.forEach((node) => node.classList.add("is-match"));
    const word = matches.length === 1 ? "coincidencia" : "coincidencias";
    selectorHint.textContent = `${matches.length} ${word} para ${selector}.`;
}

function updateSpecificity() {
    const checked = {
        element: document.querySelector('[data-rule="element"]').checked,
        className: document.querySelector('[data-rule="class"]').checked,
        id: document.querySelector('[data-rule="id"]').checked,
        inline: document.querySelector('[data-rule="inline"]').checked
    };

    let color = "";
    let winner = "Ninguna regla extra: hereda el color de la página.";

    if (checked.element) {
        color = "black";
        winner = "Gana p (elemento).";
    }
    if (checked.className) {
        color = "crimson";
        winner = "Gana .destacado (la clase pesa más que el elemento).";
    }
    if (checked.id) {
        color = "navy";
        winner = "Gana #muestra (el id pesa más que la clase).";
    }
    if (checked.inline) {
        color = "green";
        winner = "Gana style en línea (más específico que id, clase y elemento).";
    }

    specSample.style.color = color;
    specHint.textContent = winner;
}

function updateEmLab() {
    const size = Number(emRange.value);
    emParent.style.fontSize = `${size}px`;
    emVal.textContent = `${size}px`;
    emChildVal.textContent = `${Math.round(size * 1.5)}px`;
}

function applyType(mode, button) {
    const map = {
        sans: "is-sans",
        serif: "is-serif",
        mono: "is-mono",
        bold: "is-bold",
        italic: "is-italic",
        center: "is-center",
        upper: "is-upper"
    };

    if (mode === "reset") {
        typeSample.className = "type-sample";
        document.querySelectorAll("#type-controls button").forEach((item) => {
            item.classList.remove("is-active");
        });
        return;
    }

    if (mode === "sans") {
        typeSample.classList.remove("is-serif", "is-mono");
    }
    if (mode === "serif" || mode === "mono") {
        typeSample.classList.remove("is-serif", "is-mono");
    }

    typeSample.classList.toggle(map[mode]);
    button.classList.toggle("is-active", typeSample.classList.contains(map[mode]));
}

function applyDisplay(value, button) {
    document.querySelectorAll("#display-btns button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
    });
    displayStage.querySelectorAll(".display-item").forEach((item) => {
        item.style.display = value;
    });
    displayHint.textContent = displayHints[value];
}

document.querySelectorAll("#selector-btns button").forEach((button) => {
    button.addEventListener("click", () => applySelector(button.dataset.selector, button));
});

document.querySelectorAll("#spec-btns input").forEach((input) => {
    input.addEventListener("change", updateSpecificity);
});

emRange.addEventListener("input", updateEmLab);

document.querySelectorAll("#type-controls button").forEach((button) => {
    button.addEventListener("click", () => applyType(button.dataset.type, button));
});

document.querySelectorAll("#display-btns button").forEach((button) => {
    button.addEventListener("click", () => applyDisplay(button.dataset.display, button));
});

updateEmLab();
updateSpecificity();
