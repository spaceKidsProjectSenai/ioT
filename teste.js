var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});
var axios = require("axios");


board.on("ready", function () {
    axios.post("https://spacekids-001-site1-.dtempurl.com/api/desempenho/cadastrar", {"acertou":true,
    "horaInicial":"2018-04-07 17:45:43",
     "horaFinal":"2018-04-07 19:45:43",
     "criancaId":7,
     "faseId":2}).then(response => {
        console.log(response.data);
    })
    // Create a new `button` hardware instance.
    var button1 = new five.Button("P1-16");
    var button2 = new five.Button("P1-7");
    // var button3 = new five.Button("P1-16");
    // var button4 = new five.Button("P1-7");
    // var button5 = new five.Button("P1-16");
    // var button6 = new five.Button("P1-7");
    // var button7 = new five.Button("P1-16");
    // var button8 = new five.Button("P1-7");
    // var button9 = new five.Button("P1-16");
    // var button10 = new five.Button("P1-7");
    // var button11 = new five.Button("P1-16");
    // var button12 = new five.Button("P1-7");



    var led1 = new five.Led("P1-13");
    var led2 = new five.Led("P1-11");
    // var led3 = new five.Led("P1-13");
    // var led4 = new five.Led("P1-11");
    // var led5 = new five.Led("P1-13");
    // var led6 = new five.Led("P1-11");
    // var led7 = new five.Led("P1-13");
    // var led8 = new five.Led("P1-11");
    // var led9 = new five.Led("P1-13");
    // var led10 = new five.Led("P1-11");
    // var led11 = new five.Led("P1-13");
    // var led12 = new five.Led("P1-11");
    
    var acerto = 0;
    var erro = 0;

    var passo = 12;

    var resultNumber = init();

    button1.on("up", function () {
        console.log("Button1 pressed");
        if (resultNumber === 1) {
            resultNumber = ledOff(led1, passo);
            passo--;
            acerto++;
            console.log(acerto);
        }else{
            erro++;
            console.log(erro);
        }
        
    });

    button2.on("up", function () {
        console.log("Button2 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led2, passo);
            passo--;
            acerto++;
            console.log(acerto);
        }else{
            erro++;
            console.log(erro);
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
            led1.on();
        } else {
            led2.on();
        }
        return number;
    }

});