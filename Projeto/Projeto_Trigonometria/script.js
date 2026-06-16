let inputAngulo = document.getElementById("input_angulo");

let saidaSeno = document.getElementById("saida_seno");
let saidaCosseno = document.getElementById("saida_cosseno");
let saidaTangente = document.getElementById("saida_tangente");

function calcularTrigonometria() {
    let graus = Number(inputAngulo.value);
    let radiano = graus * Math.PI / 180;
    let seno = Math.sin(radiano);
    let cosseno = Math.cos(radiano);
    let tangente;

    if (isNaN(graus)) {
        saidaSeno.textContent = "";
        saidaCosseno.textContent = "";
        saidaTangente.textContent = "";
        return;
    }

    
    if (Math.abs(cosseno) < 0.000001) {
        tangente = "indefinida";
    } else {
        tangente = Math.tan(radiano);
    }

    saidaSeno.textContent = seno.toFixed(4);
    saidaCosseno.textContent = cosseno.toFixed(4);

    if (tangente === "indefinida") {
        saidaTangente.textContent = "indefinida";
    } else {
        saidaTangente.textContent = tangente.toFixed(4);
    }
}

inputAngulo.addEventListener("input", calcularTrigonometria);
