// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53

const totalVendas = SP + RJ + MG + ES + Outros

console.log(`Total de Vendas: ${totalVendas}`);
console.log(`****Percentual Mensal****`)
console.log(`Sp: ${(SP / totalVendas).toFixed(3) * 100} %`)
console.log(`RJ: ${(RJ / totalVendas).toFixed(3) * 100} %`)
console.log(`MG: ${(MG / totalVendas).toFixed(3) * 100} %`)
console.log(`ES: ${(ES / totalVendas).toFixed(3) * 100} %`)
console.log(`Outros: ${(Outros / totalVendas).toFixed(3) * 100} %`)
