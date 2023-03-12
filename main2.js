console.log ("Qual é seu nome?")
const nome = prompt("Digite seu nome:");

console.log ("Quantos anos você tem?")
const idade = prompt("Digite sua idade:");

console.log("Qual linguagem de programação você está estudando?")
const linguagem = prompt("Digite a linguagem:");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
alert (msg);

//console.log(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO`)
//const SIM = 1
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO`)
if ( resposta == 1){
    const afirmativa = "1 > Muito bom! Continue estudando e você terá muito sucesso."
    alert (afirmativa);
}
if (resposta == 2){
    const negativa = "2 > Ahh que pena... Já tentou aprender outras linguagens?"
    alert (negativa);
}