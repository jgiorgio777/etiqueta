// Logica Área
const inputTexto0 = document.getElementById('area-input');
const divTexto0 = document.getElementById('area-output');

inputTexto0.addEventListener('input', () => {
    const textoIngresado = inputTexto0.value;
    divTexto0.textContent = textoIngresado;
});

// Logica de "Laboratorio"
function mostrarSeleccionadoLaboratorio() {
    var selectElement = document.getElementById("lista-laboratorio");
    var selectedValue = selectElement.value;
    var divElement = document.getElementById("texto-laboratorio");

    divElement.textContent = selectedValue;
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("lista-laboratorio");
    selectElement.addEventListener("change", mostrarSeleccionadoLaboratorio);
});

// Logica de casillero de texto subarea - laboratorio
const inputTexto1 = document.getElementById('subarea-e');
const divTexto1 = document.getElementById('subarea-s');

inputTexto1.addEventListener('input', () => {
    const textoIngresado = inputTexto1.value;
    divTexto1.textContent = textoIngresado;
});

// NFPA
const inputTexto2 = document.getElementById('NFPA-1');
const divTexto2 = document.getElementById('NFPA1');

inputTexto2.addEventListener('input', () => {
    const textoIngresado = inputTexto2.value;
    divTexto2.textContent = textoIngresado;
});

const inputTexto3 = document.getElementById('NFPA-2');
const divTexto3 = document.getElementById('NFPA2');

inputTexto3.addEventListener('input', () => {
    const textoIngresado = inputTexto3.value;
    divTexto3.textContent = textoIngresado;
});

const inputTexto4 = document.getElementById('NFPA-3');
const divTexto4 = document.getElementById('NFPA3');

inputTexto4.addEventListener('input', () => {
    const textoIngresado = inputTexto4.value;
    divTexto4.textContent = textoIngresado;
});
// NFPA4

function mostrarSeleccionadoRiesgo() {
    var selectElement = document.getElementById("NFPA-4");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var divElement = document.getElementById("NFPA4");

    if (selectedValue !== "") {
        var imageAlt = selectedOption.dataset.alt;
        var imageSrc = selectedValue;
        divElement.innerHTML = "<img src='" + imageSrc + "' alt='" + imageAlt + "'>";
    } else {
        divElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("NFPA-4");
    selectElement.addEventListener("change", mostrarSeleccionadoRiesgo);
});

// Sustancia Química

/* ------------------ */
const inputTexto5 = document.getElementById('compuestoid');
const divTexto5 = document.getElementById('compuestoid-output');

inputTexto5.addEventListener('input', () => {
    const textoIngresado = inputTexto5.value;
    divTexto5.innerHTML = `<span>${textoIngresado}</span>`;
    ajustarTamanoLetra1();
});

function ajustarTamanoLetra1() {
    const contenedor = document.getElementById('compuestoid-output');
    const textoSpan = document.getElementById('compuestoid-output').querySelector('span');

    let fontSize = 370; /* Tamaño de letra inicial más grande */
    textoSpan.style.fontSize = fontSize + '%';

    while (textoSpan.scrollHeight > contenedor.offsetHeight || textoSpan.scrollWidth > contenedor.offsetWidth) {
        fontSize--;
        textoSpan.style.fontSize = fontSize + '%';
    }
}



// Formula/Conc
const inputTexto6 = document.getElementById('formula');
const divTexto6 = document.getElementById('formula-output');

inputTexto6.addEventListener('input', () => {
    const textoIngresado = inputTexto6.value;
    divTexto6.innerHTML = `<span>${textoIngresado}</span>`;
    ajustarTamanoLetra2();
});

function ajustarTamanoLetra2() {
    const contenedor = document.getElementById('formula-output');
    const textoSpan = document.getElementById('formula-output').querySelector('span');

    let fontSize = 250; /* Tamaño de letra inicial más grande */
    textoSpan.style.fontSize = fontSize + '%';

    while (textoSpan.scrollHeight > contenedor.offsetHeight || textoSpan.scrollWidth > contenedor.offsetWidth) {
        fontSize--;
        textoSpan.style.fontSize = fontSize + '%';
    }
}

// SGA 1
function mostrarSeleccionadoRiesgoSGA1() {
    var selectElement = document.getElementById("SGA-1");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var divElement = document.getElementById("SGA1");

    if (selectedValue !== "") {
        var imageAlt = selectedOption.dataset.alt;
        var imageSrc = selectedValue;
        divElement.innerHTML = "<img src='" + imageSrc + "' alt='" + imageAlt + "'>";
    } else {
        divElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("SGA-1");
    selectElement.addEventListener("change", mostrarSeleccionadoRiesgoSGA1);
});

// SGA 2
function mostrarSeleccionadoRiesgoSGA2() {
    var selectElement = document.getElementById("SGA-2");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var divElement = document.getElementById("SGA2");

    if (selectedValue !== "") {
        var imageAlt = selectedOption.dataset.alt;
        var imageSrc = selectedValue;
        divElement.innerHTML = "<img src='" + imageSrc + "' alt='" + imageAlt + "'>";
    } else {
        divElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("SGA-2");
    selectElement.addEventListener("change", mostrarSeleccionadoRiesgoSGA2);
});

// SGA 3
function mostrarSeleccionadoRiesgoSGA3() {
    var selectElement = document.getElementById("SGA-3");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var divElement = document.getElementById("SGA3");

    if (selectedValue !== "") {
        var imageAlt = selectedOption.dataset.alt;
        var imageSrc = selectedValue;
        divElement.innerHTML = "<img src='" + imageSrc + "' alt='" + imageAlt + "'>";
    } else {
        divElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("SGA-3");
    selectElement.addEventListener("change", mostrarSeleccionadoRiesgoSGA3);
});

// SGA 4
function mostrarSeleccionadoRiesgoSGA4() {
    var selectElement = document.getElementById("SGA-4");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var divElement = document.getElementById("SGA4");

    if (selectedValue !== "") {
        var imageAlt = selectedOption.dataset.alt;
        var imageSrc = selectedValue;
        divElement.innerHTML = "<img src='" + imageSrc + "' alt='" + imageAlt + "'>";
    } else {
        divElement.innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("SGA-4");
    selectElement.addEventListener("change", mostrarSeleccionadoRiesgoSGA4);
});


// Nota
const inputTexto7 = document.getElementById('nota');
const divTexto7 = document.getElementById('nota-output');

inputTexto7.addEventListener('input', () => {
    const textoIngresado = inputTexto7.value;
    divTexto7.innerHTML = `<span>${textoIngresado}</span>`;
    ajustarTamanoLetra3();
});

function ajustarTamanoLetra3() {
    const contenedor = document.getElementById('nota-output');
    const textoSpan = document.getElementById('nota-output').querySelector('span');

    let fontSize = 100; /* Tamaño de letra inicial más grande */
    textoSpan.style.fontSize = fontSize + '%';

    while (textoSpan.scrollHeight > contenedor.offsetHeight || textoSpan.scrollWidth > contenedor.offsetWidth) {
        fontSize--;
        textoSpan.style.fontSize = fontSize + '%';
    }
}


