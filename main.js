const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelectorAll(".caixa-principal")

const perguntas = [

    {
        enunciado: " O aumento do desemprego pode influenciar na prática de esportes e na poluição ambiental?",
        alternativas:[
            "A. Sim, porque com mais tempo livre, as pessoas podem se dedicar mais ao esporte, mas a falta de recursos financeiros pode limitar suas atividades, possivelmente levando a uma menor poluição.",

            "B. Não, porque a falta de emprego pode reduzir o acesso a atividades esportivas e aumentar o uso de recursos menos sustentáveis, aumentando a poluição."
        ]
    },

    {
        enunciado: "A prática regular de esportes pode ter um impacto no desemprego e na poluição ambiental?",
        alternativas:[
            "A. Sim, porque promover eventos esportivos pode gerar empregos e campanhas de sustentabilidade podem reduzir a poluição.",

            "B. Não, porque a prática de esportes não está diretamente ligada à criação de empregos e pode gerar poluição devido ao uso de recursos e infraestrutura."
        ]
    },

    {
        enunciado: "A poluição ambiental pode influenciar o desemprego e a prática de esportes?",
        alternativas:[
            "A. Sim, porque a poluição pode afetar a saúde das pessoas, reduzindo sua capacidade de trabalho e a prática de esportes ao ar livre.",

            "B. Não, porque a taxa de desemprego é mais influenciada por fatores econômicos do que ambientais, e a prática de esportes pode continuar em ambientes fechados."
        ]
    },
    
   
]

let atual = 0;
let perguntaAtual;
function mostrarPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[0].enunciado;
    function mostrarPerguntas(){
        if (atual >=perguntas.length)
        mostrarResultado();
    return;
    }
}
