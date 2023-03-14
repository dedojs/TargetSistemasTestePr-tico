// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const jsonData = require("./dados.json")

const faturamento = jsonData.map(item => item.valor).filter(item => item != 0);

const menorFaturamento = Math.min(...faturamento);
const maiorFaturamento = Math.max(...faturamento);
const mediaFaturamento = faturamento.reduce((total, dia) => total + dia, 0) / faturamento.length;
const diasAcimaMedia = faturamento.filter(valor => valor > mediaFaturamento);

//console.log(faturamento);
console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${menorFaturamento.toFixed(2)}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${maiorFaturamento.toFixed(2)}`);
//console.log(mediaFaturamento);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaMedia.length}`);
