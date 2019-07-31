//Números Múltiplos
//4) Elaborar um programa em Javascript que lê 2 valores a e b e
//os escreve com a mensagem: ?São múltiplos? ou ?Não são múltiplos?
var a = parseInt(prompt("Digite um número:"));
var b = parseInt(prompt("Digite outro número:"));

if(a > b) {
  if(a % b === 0) {
      document.body.append("São múltiplos")
  } else {
    document.body.append("Nao são múltiplos")
  }

}else {
    if(b % a === 0) {
        document.body.append("São múltiplos")
    } else {
      document.body.append("Nao são múltiplos")
    }
}
// % = resto da divisão
