const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        [
    {
        "enunciado": "Como você controla os gastos mensais?",
        "alternativas": [
            {
                "texto": "Aplicativos de controle financeiro (planilhas digitais, apps de orçamento).",
                "afirmacao": [
                    "Você acredita que registrar tudo em tempo real ajuda a manter as contas sob controle e evitar surpresas no fim do mês.",
                    "Você valoriza a praticidade e a geração automática de relatórios para analisar seu desempenho financeiro.",
                    "Sua estratégia é baseada em dados e na visão panorâmica oferecida pela tecnologia para otimizar suas decisões."
                ]
            },
            {
                "texto": "Anotações à mão em um caderno ou agenda física.",
                "afirmacao": [
                    "Você prefere o método tradicional porque sente que escrever reforça a consciência dos gastos.",
                    "Você valoriza a simplicidade e a menor dependência de tecnologia para gerenciar suas finanças.",
                    "Sua estratégia prioriza a memória e o envolvimento ativo no processo, facilitando a identificação de desvios."
                ]
            }
        ]
    },
    {
        "enunciado": "Quando recebe um dinheiro extra (salário bônus, devolução), qual é sua primeira atitude?",
        "alternativas": [
            {
                "texto": "Guardar parte para uma reserva de emergência ou objetivo futuro.",
                "afirmacao": [
                    "Você vê esse recurso como uma oportunidade de fortalecer sua segurança financeira.",
                    "Sua tomada de decisão é orientada para o futuro, priorizando a estabilidade de longo prazo sobre o consumo imediato.",
                    "Seu hábito é o de 'pagar a si mesmo' primeiro, transformando o extra em patrimônio ou segurança, não em despesa."
                ]
            },
            {
                "texto": "Usar imediatamente para pagar dívidas ou realizar algum desejo imediato.",
                "afirmacao": [
                    "Você prefere aplicar o valor onde ele trará alívio imediato ou satisfação pessoal.",
                    "Sua tomada de decisão é reativa, focada em solucionar problemas presentes (dívidas) ou buscar gratificação instantânea.",
                    "Você valoriza o sentimento de alívio ou recompensa imediata, mesmo que isso não fortaleça diretamente sua reserva futura."
                ]
            }
        ]
    },
    {
        "enunciado": "Como você costuma decidir quanto vai poupar a cada mês?",
        "alternativas": [
            {
                "texto": "Definir um percentual fixo da renda (ex.: 15% do salário).",
                "afirmacao": [
                    "Você acredita que reservar uma porcentagem constante facilita o controle e cria o hábito de economizar.",
                    "Sua estratégia é a da Poupança Automática, tratando a economia como uma despesa fixa e inegociável.",
                    "Seu hábito é de disciplina rigorosa, priorizando o objetivo de poupança acima das variações de custo do mês."
                ]
            },
            {
                "texto": "Avaliar as despesas do mês e poupar o que sobrar depois de pagar tudo.",
                "afirmacao": [
                    "Você prefere adaptar a poupança à realidade de cada período, ajustando‑se às variações de gasto.",
                    "Sua estratégia é a da Poupança Residual, dependendo do nível de gasto mensal para definir o valor a ser guardado.",
                    "Você tem um hábito flexível, permitindo que o consumo do mês determine o potencial de economia."
                ]
            }
        ]
    },
    {
        "enunciado": "Quando recebe um crédito em cartão de loja, qual a sua postura?",
        "alternativas": [
            {
                "texto": "Pagar a fatura integralmente no vencimento para evitar juros.",
                "afirmacao": [
                    "Você prioriza manter o custo do crédito zero, mesmo que isso signifique usar parte da reserva de emergência.",
                    "Sua tomada de decisão é de aversão ao risco/custo, evitando o endividamento custeado por juros a todo custo.",
                    "Seu hábito é o de manter o controle total do fluxo de caixa, recusando-se a financiar despesas por meio do cartão."
                ]
            },
            {
                "texto": "Aproveitar o parcelamento e pagar apenas o mínimo, usando o dinheiro para outras necessidades imediatas.",
                "afirmacao": [
                    "Você valoriza a flexibilidade de fluxo de caixa, aceitando pagar juros futuros para resolver prioridades atuais.",
                    "Sua tomada de decisão é de priorização de liquidez, valorizando ter dinheiro disponível no presente para outras finalidades.",
                    "Você tem um hábito de tolerância ao custo do crédito, utilizando o cartão como uma ferramenta para gerenciar o tempo do pagamento."
                ]
            }
        ]
    },
    {
        "enunciado": "Qual estratégia você usa para controlar gastos supérfluos?",
        "alternativas": [
            {
                "texto": "Criar “limites de despesa” por categoria (lazer, delivery, roupas) em um aplicativo de orçamento.",
                "afirmacao": [
                    "Você sente que limites pré-definidos evitam surpresas e mantêm o orçamento equilibrado.",
                    "Sua **estratégia é de Prevenção Ativa**, estabelecendo barreiras financeiras claras para evitar o gasto excessivo.",
                    "Você confia na metodologia do orçamento para orientar suas compras, e não apenas na sua força de vontade."
                ]
            },
            {
                "texto": "Esperar 24 horas antes de fazer uma compra não planejada e reavaliar a real necessidade.",
                "afirmacao": [
                    "Você acredita que o intervalo de tempo reduz compras impulsivas e ajuda a refletir sobre prioridades.",
                    "Sua estratégia é de Mitigação da Impulsividade, usando o tempo como um filtro para a tomada de decisão.",
                    "Seu hábito é de Reflexão Consciente**, reconhecendo o valor da pausa antes de se comprometer com um gasto supérfluo."
                ]
            }
        ]
    }
]
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível manter suas contas sob controle, o resultado final poderá valer a pena?"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();


