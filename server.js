var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function () {
    var button = new five.Button("P1-13");
    // var led = new five.Led("P1-13");

    button.on("down", function(){
        console.log("botao clicado")
    })
});