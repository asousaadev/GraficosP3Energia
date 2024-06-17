const meses = ["jun-23", "jul-23", "ago-23", "set-23", "out-23", "nov-23", "dez-23", "jan-24", "fev-24", "mar-24", "abr-24", "mai-24"];
// grafico
const perdasReativo = ["1497", "0", "1899", "2061", "2250", "2301", "1143", "217", "0", "408", "627", "908"];
// grafico 1
const reativoExcedente = ["4158", "4392", "5274", "5724", "6249", "6392", "3174", "578", "0", "1133", "1687", "2364"];
// grafico 2
const perdasReativoR$ = ["39056", "7377", "39226", "44859", "51715", "47949", "39870", "23642", "14525", "11103", "12517", "4333"];
const perdasDemandaR$ = ["48479", "48557", "41774", "34869", "40229", "36538", "32506", "54694", "58214", "79787", "75174", "56937"];
const multasOutros = ["0", "0", "0", "5965", "11769", "0", "1017", "0", "0", "0", "0", "74"];
const totalPerdas = ["87536", "55935", "81001", "85695", "103715", "84488", "73393", "78336", "72739", "90890", "87691", "61345"];
// grafico 3
const nomePerdas = ["Total"];
const valorMercado = ["855123"];
const valorConcessionaria = ["1823177"];
const valorPerdas = ["61345"];

// grafico 4
const undCustoDez = ["FLORES", "ALVORADA", "COMPENSA", "PONTA NEGRA", "PATIO ADRIANOPOLIS", "GRANDE CIRCULAR", "TORRES", "BV SANTA TEREZA", "PV IMIGRANTES", "PATIO DJALMA"];
const totalEnergia = ["342.380", "222.306", "210.899", "190.842", "167.777", "157.480", "157.449", "144.646", "136.838", "135.767"];
const Concessionaria = ["198.255", "222.306", "122.197", "142.533", "99.638", "94.799", "95.407", "144.646", "78.175", "80.644"];
const mercadoLivre = ["144.053", "0", "88.702", "48.309", "68.138", "62.680", "62.042", "0", "58.662", "55.123"];
const perdas = ["1.673", "7.110", "1.233", "9.709", "2.802", "2.614", "0", "2.298", "2.867", "1.453"];

// grafico 5
const unidadesPerdasDez = ["BV RORAIMA", "PONTA NEGRA", "ALVORADA", "PV CANTUARIA", "BV EQUATORIAL", "PV IMIGANTE", "PATIO ADRIANOPOLIS", "GRANDE CIRCULAR", "BV SANTA TEREZA", "FLORES"];
const totalPerdasDez = ["10907", "9710", "7110", "6854", "4585", "2868", "2803", "2614", "2299", "1674"];
const PerdasReativoDez = ["0", "107", "0", "298", "1061", "3", "0", "20", "0", "56"];
const PerdasSobraDemandaDez = ["10907", "0", "0", "6555", "3524", "2864", "2803", "2594", "2299", "1618"];
const PerdasUtraDemandaDez = ["0", "9529", "7110", "0", "0", "0", "0", "0", "0", "0"];
const PerdasMultasOutrosDez = ["0", "74", "0", "0", "0", "0", "0", "0", "0", "0"];

// grafico 1
const createChartReativo = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Perdas por Reativo R$',
                data: perdasReativo,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// grafico 2
const createChartReativoExcedente = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Reativo Excedente KVAR',
                data: reativoExcedente,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// grafico 3
const createChartTotalPerdas = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Reativo',
                data: perdasReativoR$,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Demanda',
                data: perdasDemandaR$,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Multas e Outros',
                data: multasOutros,
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 12, 104, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Total de Perdas',
                data: totalPerdas,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.4,
                type: 'line'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true

                }
            }
        }
    });
}
// grafico 4
const createChartCustoEnergia = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: nomePerdas,
            datasets: [{
                label: 'Mercado livre R$',
                data: valorMercado,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Concessionária R$',
                data: valorConcessionaria,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Perdas R$',
                data: valorPerdas,
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 12, 104, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true

                }
            }
        }
    });
}

const createChartCustoTotalLoja = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: undCustoDez,
            datasets: [{
                axis: 'y',
                label: 'Concessionária',
                data: Concessionaria,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Mercado Livre',
                data: mercadoLivre,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Perdas',
                data: perdas,
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 12, 104, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Custo Total',
                data: totalEnergia,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.4,
                type: 'line'
            }]
        },
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true

                }
            }
        }
    });
}

const createChartPrdasDezMais = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: unidadesPerdasDez,
            datasets: [{
                axis: 'y',
                label: 'Perda Reativo',
                data: PerdasReativoDez,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Perda Sobra Demanda',
                data: PerdasSobraDemandaDez,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Perda Ultra Demanda',
                data: PerdasUtraDemandaDez,
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 12, 104, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Multas Outros',
                data: PerdasMultasOutrosDez,
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Total de Perdas',
                data: totalPerdasDez,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.4,
                type: 'line'
            }]
        },
        options: {
            indexAxis: 'y',
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true

                }
            }
        }
    });
}

createChartReativo('grafico1');
createChartReativoExcedente('grafico2');
createChartTotalPerdas('grafico3');
createChartCustoEnergia('grafico4');
createChartCustoTotalLoja('grafico5');
createChartPrdasDezMais('grafico6');
// createChart4('grafico7');

$('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
})
$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculoDeInteresse: {
            required: false
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Exitem ${camposIncorretos} campos incorretos`)
        }
    }
})

