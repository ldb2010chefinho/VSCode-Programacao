const espaco = document.getElementById("espaco");
const espaco_inicial = document.getElementById("espaco_inicial");
const posicao_inicial = document.getElementById("posicao_inicial");
const posicao = document.getElementById("posicao");
const velocidade_inicial = document.getElementById("velocidade_inicial");
const velocidade = document.getElementById("velocidade");
const tempo = document.getElementById("tempo");
const aceleracao = document.getElementById("aceleracao");
const variacaoEspaco = document.getElementById("variacaoEspaco");

const label_espaco = document.getElementById("label_espaco");
const label_espaco_inicial = document.getElementById(
    "label_espaco_inicial"
);
const label_posicao = document.getElementById("label_posicao");
const label_posicao_inicial = document.getElementById(
    "label_posicao_inicial"
);
const label_velocidade_inicial = document.getElementById(
    "label_velocidade_inicial"
);
const label_velocidade = document.getElementById("label_velocidade");
const label_tempo = document.getElementById("label_tempo");
const label_aceleracao = document.getElementById("label_aceleracao");
const label_variacaoEspaco = document.getElementById(
    "label_variacaoEspaco"
);

const btn_enviar = document.getElementById("btn_enviar");
const entradaValores = document.getElementById("entradaValores");
const tipo = document.getElementById("tipo");
const meu_form = document.getElementById("meu_form");

meu_form.addEventListener("submit", function (event) {
    event.preventDefault();
    criarGrafico(0, 0);
});

tipo.addEventListener("change", function () {
    entradaValores.style.display = "block";
    if (tipo.value === "mru") {
        label_espaco.style.display = "block";
        espaco.style.display = "block";

        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "none";
        velocidade_inicial.style.display = "none";

        label_velocidade.style.display = "block";
        velocidade.style.display = "block";

        label_tempo.style.display = "block";
        tempo.style.display = "block";

        label_variacaoEspaco.style.display = "none";
        variacaoEspaco.style.display = "none";

        aceleracao.style.display = "none";
        label_aceleracao.style.display = "none";

        // double espaco;
        //double espacoInicial;
        //double velocidade;
        //double tempo;
    } else if (tipo.value === "mruv1") {
        label_espaco.style.display = "none";
        label_espaco_inicial.style.display = "none";
        label_posicao_inicial.style.display = "none";
        label_posicao.style.display = "none";
        label_variacaoEspaco.style.display = "none";

        espaco.style.display = "none";
        espaco_inicial.style.display = "none";
        posicao_inicial.style.display = "none";
        posicao.style.display = "none";

        label_velocidade_inicial.style.display = "block";
        velocidade_inicial.style.display = "block";

        label_velocidade.style.display = "block";
        velocidade.style.display = "block";

        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";

        label_tempo.style.display = "block";

        variacaoEspaco.style.display = "none";

        //double aceleracao;
        //double velocidadeInicial;
        //double velocidade;
        //double tempo;
    } else if (tipo.value === "mruv2") {
        label_espaco.style.display = "block";
        espaco.style.display = "block";

        label_espaco_inicial.style.display = "block";
        espaco_inicial.style.display = "block";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        velocidade_inicial.style.display = "block";

        label_velocidade.style.display = "none";
        velocidade.style.display = "none";

        aceleracao.style.display = "block";

        tempo.style.display = "block";

        label_variacaoEspaco.style.display = "none";
        variacaoEspaco.style.display = "none";

        //double espaco;
        //double espacoInicial;
        //double velocidadeInicial;
        //double tempo;
        //double aceleracao;
    } else if (tipo.value === "mruv3") {
        label_espaco.style.display = "none";
        espaco.style.display = "none";

        label_espaco_inicial.style.display = "none";
        espaco_inicial.style.display = "none";

        label_posicao_inicial.style.display = "none";
        posicao_inicial.style.display = "none";

        label_posicao.style.display = "none";
        posicao.style.display = "none";

        velocidade_inicial.style.display = "block";
        velocidade.style.display = "block";

        velocidade.style.display = "block";
        label_velocidade.style.display = "block";

        label_aceleracao.style.display = "block";
        aceleracao.style.display = "block";

        tempo.style.display = "none";
        label_tempo.style.display = "none";

        label_variacaoEspaco.style.display = "block";
        variacaoEspaco.style.display = "block";

        //double velocidadeInicial;
        //double aceleracao;
        //double velocidade;
        //double variacaoEspaco;
    }
});

let graficoAtual = null; // guarda a instância para destruir antes de recriar

function criarGrafico(tempos, espacos) {
    const contexto = document.getElementById("grafico").getContext("2d");

    // Destrói o gráfico anterior se existir
    if (graficoAtual) {
        graficoAtual.destroy();
    }

    graficoAtual = new Chart(contexto, {
        type: "line",
        data: {
            labels: tempos,
            datasets: [{
                label: "Espaço x Tempo",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.8)",
                data: espacos
            }]
        },
        options: {
            legend: { display: true },
            scales: {
                xAxes: [{ scaleLabel: { display: true, labelString: "Tempo (s)" } }],
                yAxes: [{ scaleLabel: { display: true, labelString: "Espaço (m)" } }]
            }
        }
    });
}