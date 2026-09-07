const liveBox = document.getElementById("live-box");
const paddingInput = document.getElementById("ctrl-padding");
const borderInput = document.getElementById("ctrl-border");
const marginInput = document.getElementById("ctrl-margin");
const formula = document.getElementById("box-formula");
const viewportWidth = document.getElementById("viewport-width");
const viewportLabel = document.getElementById("viewport-label");
const deviceScreen = document.getElementById("device-screen");
const demoWidth = document.getElementById("demo-width");

function labelForWidth(width) {
    if (width < 768) {
        return "celular";
    }
    if (width < 1024) {
        return "tablet";
    }
    return "escritorio";
}

function updateViewportChip() {
    const width = window.innerWidth;
    viewportWidth.textContent = `${width}px`;
    viewportLabel.textContent = labelForWidth(width);
}

function updateBoxLab() {
    const padding = Number(paddingInput.value);
    const border = Number(borderInput.value);
    const margin = Number(marginInput.value);

    liveBox.style.setProperty("--pad", `${padding}px`);
    liveBox.style.setProperty("--brd", `${border}px`);
    liveBox.style.setProperty("--mrg", `${margin}px`);

    document.getElementById("val-padding").textContent = `${padding}px`;
    document.getElementById("val-border").textContent = `${border}px`;
    document.getElementById("val-margin").textContent = `${margin}px`;

    const extra = (padding + border) * 2;
    formula.textContent = `padding ${padding}px · border ${border}px · margin ${margin}px. El margin no suma al ancho. En content-box, padding + border agregarían ${extra}px al width.`;
}

function setDeviceWidth(width, button) {
    deviceScreen.style.setProperty("--demo-w", `${width}px`);
    demoWidth.textContent = `${width}px`;
    document.querySelectorAll(".device-btn").forEach((item) => {
        item.classList.toggle("is-active", item === button);
    });
}

paddingInput.addEventListener("input", updateBoxLab);
borderInput.addEventListener("input", updateBoxLab);
marginInput.addEventListener("input", updateBoxLab);
window.addEventListener("resize", updateViewportChip);

document.querySelectorAll(".device-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setDeviceWidth(button.dataset.width, button);
    });
});

updateViewportChip();
updateBoxLab();
