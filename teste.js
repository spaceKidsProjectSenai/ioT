var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});
// var axios = require("axios");


board.on("ready", function () {
    // axios.post("https://spacekids-001-site1-.dtempurl.com/api/desempenho/iot", {"acertou":true,
    // "horaInicial":"2018-04-07 17:45:43",
    //  "horaFinal":"2018-04-07 19:45:43",
    //  "criancaId":8,
    //  "faseId":2
    // }).then(response => {
    //     console.log(response.data);

    //})
    // Create a new `button` hardware instance.
    var button1 = new five.Button(23);
    var button2 = new five.Button(24);
    var button3 = new five.Button(7);
    var button4 = new five.Button(0);
    var button5 = new five.Button(2);
    var button6 = new five.Button(3);
    var button7 = new five.Button(12);
    var button8 = new five.Button(13);
    var button9 = new five.Button(14);
    var button10 = new five.Button(25);
    var button11 = new five.Button(21);
    var button12 = new five.Button(22);


    var led3 = new five.Led(1);
    var led4 = new five.Led(4);
    var led5 = new five.Led(5);
    var led6 = new five.Led(6);
    var led7 = new five.Led(10);
    var led8 = new five.Led(11);
    var led9 = new five.Led(29);
    
    var led11 = new five.Led(27);
    var led12 = new five.Led(28);

    var acerto = 0;
    var erro = 0;

    var passo = 9;

    var resultNumber = init();

    button1.on("up", function () {
        console.log("Button1 pressed");
        if (resultNumber === 1) {
            resultNumber = ledOff(led3, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }

    });

    button2.on("up", function () {
        console.log("Button2 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led4, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button3.on("up", function () {
        console.log("Button3 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led5, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button4.on("up", function () {
        console.log("Button4 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led6, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button5.on("up", function () {
        console.log("Button5 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led7, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button6.on("up", function () {
        console.log("Button6 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led8, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button7.on("up", function () {
        console.log("Button7 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led9, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button8.on("up", function () {
        console.log("Button8 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led10, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button9.on("up", function () {
        console.log("Button9 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led11, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button10.on("up", function () {
        console.log("Button10 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led12, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button11.on("up", function () {
        console.log("Button11 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led13, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
            erro++;
            console.log(erro);
        }
    });
    button12.on("up", function () {
        console.log("Button12 pressed");
        if (resultNumber === 0) {
            resultNumber = ledOff(led12, passo);
            passo--;
            acerto++;
            console.log(acerto);
        } else {
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
        // if (number === 1) {
        //     led1.on();
        // } else if (number === 2){
        //     led2.on();
        // }else 
        if (number === 3) {
            led3.on();
        } else if (number === 4) {
            led4.on();
        } else if (number === 5) {
            led5.on();
        } else if (number === 6) {
            led6.on();
        } else if (number === 7) {
            led7.on();
        } else if (number === 8) {
            led8.on();
        } else if (number === 9) {
            led9.on();
        } else if (number === 11) {
            led11.on();
        } else {
            led12.on();
        }
        return number;
    };
});