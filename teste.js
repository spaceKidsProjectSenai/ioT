var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});


board.on("ready", function () {

  // Create a new `button` hardware instance.
  var buttonGreen = new johnny.Button(6);
  var buttonBlue = new johnny.Button(7);

  var ledGreen = new johnny.Led(8);
  var ledBlue = new johnny.Led(9);

  var passo = 5;

  var resultNumber = init();

  buttonGreen.on("down", function () {
      console.log("Button pressed");
      if (resultNumber === 1) {
          resultNumber = ledOff(ledGreen, passo);
          passo--;
      }
  });


  buttonBlue.on("down", function () {
      console.log("Button pressed");
      if (resultNumber === 0) {
          resultNumber = ledOff(ledBlue, passo);
          passo--;
      }
  });

  function ledOff(led, passo) {
      led.off();
      if (passo != 0) {
          return init();
      } else {
          console.log("Acabooooou!")
      }
  }
  
  function init() {
  
      let random = Math.random();
      let number = Math.round(random);
  
      console.log(random);
      if (number === 1) {
          ledGreen.on();
      } else {
          ledBlue.on();
      }
      return number;
  }

});