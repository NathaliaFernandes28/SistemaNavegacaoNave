const pilotName = prompt("Qual o seu nome, piloto?");

let velocidadeInicial = 0;

const velocidadeNave = prompt("A que velocidade você gostaria de acelerar?");

let confirmacao = confirm(
  "Estamos acelerando para " + velocidadeNave + "km/s?"
);

if (confirmacao) {
  velocidadeInicial = velocidadeNave;
}

if (velocidadeInicial <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade!");
} else if (velocidadeInicial < 40) {
  alert("Você está devagar, podemos aumentar mais! ");
} else if (velocidadeInicial >= 40 && velocidadeInicial < 80) {
  alert("Parece uma boa velocidade para manter!");
} else if (velocidadeInicial >= 80 && velocidadeInicial < 100) {
  alert("Velocidade alta! Considere diminuir!");
} else if (velocidadeInicial >= 100) {
  alert("Velocidade perigosa. Controle automático forçado!");
}

let resultado = alert(
  "Piloto: " + pilotName + "\nVelocidade: " + velocidadeInicial + "Km/s"
);
