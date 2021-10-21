function efetuarCalculoIMC(peso, altura){ //a funcao recebe dois parametros, peso e altura
  let imc = peso / (altura * altura); // em seguida calculamos o IMC. IMC = peso / (altura * altura);
  return imc; // e retornamos o resultado do calculao do IMC
}

exports.efetuarCalculoIMC = efetuarCalculoIMC; // exportamos a funcao efeutuarCalculoIMC
