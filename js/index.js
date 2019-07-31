//Números Múltiplos
var a = parseInt(prompt("Digite um número:"));
var b = parseInt(prompt("Digite outro número:"));

if(a > b) {
  if(a % b === 0)
document.body.append("São múltiplos")
}else {
  if(a < b) {
    if(a % b !==0)
  document.body.append("Não são múltiplos")
}}
// % = resto da divisão
