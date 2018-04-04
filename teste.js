var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});


board.on("ready", function () {

// Identifica qual pino o Pi vai escutar para determinar o estado dos botões
var buttonGreen = new johnny.Button(6);
var buttonBlue = new johnny.Button(7);

// Determinam os pinos onde o lado positivo dos LEDs estarão
var ledGreen = new johnny.Led(8);
var ledBlue = new johnny.Led(9);

// Gera um número aleatório de 0 à 1 (cuidado que eles possuem cerca de 8 casas decimais, por isso devemos arredondar mais abaixo)
let random = Math.random();
let number = Math.round(random);

console.log(random);

// Lógica simples para ligar ou desligar um LED baseando-se no número aleatório gerado acima.
if (number === 1) {
ledGreen.on();
} else {
ledBlue.on();
}

// Comandos do botão
buttonGreen.on("down", function () {
console.log("Button pressed");

// Caso o LED correspondente à esse botão esteja aceso, esse código apaga-o
if (ledGreen.brightness > 0) {
ledGreen.off();
} else {
ledGreen.on();
}
});

buttonGreen.on("up", function () {
console.log("Button released");
ledGreen.off();
});

buttonBlue.on("down", function () {
console.log("Button pressed");
if (ledGreen.brightness > 0) {
ledBlue.off();
} else {
ledBlue.on();
}
});

buttonBlue.on("up", function () {
console.log("Button released");
ledBlue.off();
});

});