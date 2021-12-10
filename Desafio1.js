const idade = parseInt(prompt("Qual e sua idade?"));
const peso = parseFloat(prompt("Qual seu peso?"));
const altura = parseFloat(prompt("Qual sua altura?"));
const imc = (peso / (altura * altura)).toFixed(2);

const checaIdade = (idade) => { //Arrow function 
  if (idade >= 65) {
    return "Voce e idoso";
  } else if (idade >= 18) {
    return"Voce e Adulto";
  } else if (idade >= 12) {
    return"Voce e adolescente";
  } else if (idade >= 4) {
    return"voce e crianca";
  } else if (idade < 4 && idade > 0) {
    return"Voce e bebe";
  } else if (idade == -1) {
    return"IDADE VAZIO TIO TA TIRANDO";
  }
}

function checaImc (imc) { //Normal Function
  if (imc >= 40) {
    return "Obesidade Morbida";
  } else if (imc >= 35) {
    return"Obesidade 2";
  } else if (imc >= 30) {
    return"Obesidade 1";
  } else if (imc >= 25) {
    return"Sobrepeso";
  } else if (imc >= 18.5) {
    return"Peso Normal";
  } else if (imc < 18.5) {
    return"Abaixo do peso";
  } else if (imc == -1) {
    return"IDADE VAZIO TIO TA TIRANDO";
  }
}

console.log(`Sua idade eh: ${idade} e voce e um(a): `+ checaIdade(idade));
console.log(`Seu Imc eh: ${imc} e voce esta: ` + checaImc(imc));
