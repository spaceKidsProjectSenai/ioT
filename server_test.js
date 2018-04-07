var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});
var axios = require("axios");


board.on("ready", function () {
    // axios.post("https://spacekids-001-site1-.dtempurl.com/api/desempenho/iot", {"acertou":true,
    // "horaInicial":"2018-04-07 17:45:43",
    //  "horaFinal":"2018-04-07 19:45:43",
    //  "criancaId":8,
    //  "faseId":2
    // }).then(response => {
    //     console.log(response.data);

    })
    // Create a new `button` hardware instance.
    var button1 = new five.Button("P1-33");
    
   



    var led1 = new five.Led("P1-8");
    
    
    var acerto = 0;
    var erro = 0;

    var passo = 10;

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
});