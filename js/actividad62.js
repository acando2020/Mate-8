  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
      
    $('#contenido').html('');
   $("#botones").html('');
    var i=1;
    var aleatorioA = Math.round(Math.random() * (2 - 0) + 1);
    var respuesta1 = [];
    var respuesta2 = [];
    var respuesta3 = [];
    
    var valoresC = [];
    var valoresD = [];
    var resA = "";
    var a = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    var j=0;
    nota = 0;
   $("#txtNota").text(nota +"/10");

    var fila1 = '<tr><td><label>Radio del átomo de hidrógeno:0,000000005 cm</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuesta1"></td></tr>';
    respuesta1[0] = '<button type="button" class="btn btn-success" id="res1a" onclick="IncorrectasA()">5 x 10<sup>8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2a" onclick="IncorrectasA()">5 x 10<sup>-8</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="RespuestasA()">5 x 10<sup>-9</sup></button>';
    respuesta1[1] = '<button type="button" class="btn btn-success" id="res2a" onclick="IncorrectasA()">5 x 10<sup>-8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1a" onclick="IncorrectasA()">5 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="RespuestasA()">5 x 10<sup>-9</sup></button>'; 
    respuesta1[2] = '<button type="button" class="btn btn-success" id="res1a" onclick="IncorrectasA()">5 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="RespuestasA()">5 x 10<sup>-9</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2a" onclick="IncorrectasA()">5 x 10<sup>-8</sup></button>';
    
    var fila2 = '<tr><td><label>Número de átomos de una célula:<br>1000000000000 átomos.</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuesta2"></td></tr>';
    respuesta2[0] = '<button type="button" class="btn btn-success" id="res1b" onclick="IncorrectasB()">1 x 10<sup>13</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2b" onclick="IncorrectasB()">1 x 10<sup>11</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="RespuestasB()">1 x 10<sup>12</sup></button>';
    respuesta2[1] = '<button type="button" class="btn btn-success" id="res2b" onclick="IncorrectasB()">1 x 10<sup>11</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1b" onclick="IncorrectasB()">1 x 10<sup>13</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="RespuestasB()">1 x 10<sup>12</sup></button>'; 
    respuesta2[2] = '<button type="button" class="btn btn-success" id="res1b" onclick="IncorrectasB()">1 x 10<sup>13</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="RespuestasB()">1 x 10<sup>12</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2b" onclick="IncorrectasB()">1 x 10<sup>11</sup></button>';
    
    var fila3 = '<tr><td><label>Habitantes de la provincia de Pichincha:<br>2 576 287.</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuesta3"></td></tr>';
    respuesta3[0] = '<button type="button" class="btn btn-success" id="res1c" onclick="IncorrectasC()">2,5 x 10<sup>7</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2c" onclick="IncorrectasC()">2,5 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="RespuestasC()">2,5 x 10<sup>6</sup></button>';
    respuesta3[1] = '<button type="button" class="btn btn-success" id="res2c" onclick="IncorrectasC()">2,5 x 10<sup>8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1c" onclick="IncorrectasC()">2,5 x 10<sup>7</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="RespuestasC()">2,5 x 10<sup>6</sup></button>'; 
    respuesta3[2] = '<button type="button" class="btn btn-success" id="res1c" onclick="IncorrectasC()">2,5 x 10<sup>7</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="RespuestasC()">2,5 x 10<sup>6</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2c" onclick="IncorrectasC()">2,5 x 10<sup>8</sup></button>';
                    




    var ramdomico = Math.round(Math.random() * (2 - 0) + 0); 
    console.log(ramdomico);
    $("#contenido").append(fila1+fila2+fila3);
    $("#respuesta1").append(respuesta1[ramdomico]);
    $("#respuesta2").append(respuesta2[ramdomico]);
    $("#respuesta3").append(respuesta3[ramdomico]);


    };
  function Cargar(){
   $('#contenido').html('');
   $("#botones").html('<div class="btn-group-vertical"><button type="button" class="btn btn-success" id="res1" disabled>1c,2a,3b</button><button type="button" class="btn btn-success" id="res2" disabled>1a,2b,3c</button><button type="button" class="btn btn-success" id="res3" disabled>1b,2a,3c</button><button type="button" id="respuesta" class="btn btn-success" disabled>1b,2c,3a</button></div>');

   Inicio();   
  };
  var nota = 0;
  function RespuestasA(){
    nota = nota+1;
    //Variables Respuestas Txt
    var notaFinal = (nota*10)/3;
    notaFinal = notaFinal.toFixed(2);
    $("#res1a").removeClass("btn btn-success");
    $("#res1a").addClass("btn btn-danger");
    $("#res2a").removeClass("btn btn-success");
    $("#res2a").addClass("btn btn-danger");
    $("#res3a").removeClass("btn btn-success");
    $("#res3a").addClass("btn btn-danger");
    $('#res1a').prop('disabled', true);
    $('#res2a').prop('disabled', true);
    $('#res3a').prop('disabled', true);
    $('#respuestaA').prop('disabled', true);
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  };
  function RespuestasB(){
    //Variables Respuestas Txt
    nota = nota+1;
    var notaFinal = (nota*10)/3;
    notaFinal = notaFinal.toFixed(2);
    $("#res1b").removeClass("btn btn-success");
    $("#res1b").addClass("btn btn-danger");
    $("#res2b").removeClass("btn btn-success");
    $("#res2b").addClass("btn btn-danger");
    $("#res3b").removeClass("btn btn-success");
    $("#res3b").addClass("btn btn-danger");
    $('#res1b').prop('disabled', true);
    $('#res2b').prop('disabled', true);
    $('#res3b').prop('disabled', true);
    $('#respuestaB').prop('disabled', true);
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  };  
  function RespuestasC(){
    //Variables Respuestas Txt
    nota = nota+1;
    var notaFinal = (nota*10)/3;
    notaFinal = notaFinal.toFixed(2);
    $("#res1c").removeClass("btn btn-success");
    $("#res1c").addClass("btn btn-danger");
    $("#res2c").removeClass("btn btn-success");
    $("#res2c").addClass("btn btn-danger");
    $("#res3c").removeClass("btn btn-success");
    $("#res3c").addClass("btn btn-danger");
    $('#res1c').prop('disabled', true);
    $('#res2c').prop('disabled', true);
    $('#res3c').prop('disabled', true);
    $('#respuestaC').prop('disabled', true);
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  };

  function IncorrectasA(){
   $("#res1a").removeClass("btn btn-success");
   $("#res2a").removeClass("btn btn-success");
   $("#res3a").removeClass("btn btn-success");
   $("#res1a").addClass("btn btn-danger");
   $("#res2a").addClass("btn btn-danger");
   $("#res3a").addClass("btn btn-danger");
   $('#res1a').prop('disabled', true);
   $('#res2a').prop('disabled', true);
   $('#res3a').prop('disabled', true);
   $('#respuestaA').prop('disabled', true);
  }
  function IncorrectasB(){
   $("#res1b").removeClass("btn btn-success");
   $("#res2b").removeClass("btn btn-success");
   $("#res3b").removeClass("btn btn-success");
   $("#res1b").addClass("btn btn-danger");
   $("#res2b").addClass("btn btn-danger");
   $("#res3b").addClass("btn btn-danger");
   $('#res1b').prop('disabled', true);
   $('#res2b').prop('disabled', true);
   $('#res3b').prop('disabled', true);
   $('#respuestaB').prop('disabled', true);
  }function IncorrectasC(){
   $("#res1c").removeClass("btn btn-success");
   $("#res2c").removeClass("btn btn-success");
   $("#res3c").removeClass("btn btn-success");
   $("#res1c").addClass("btn btn-danger");
   $("#res2c").addClass("btn btn-danger");
   $("#res3c").addClass("btn btn-danger");
   $('#res1c').prop('disabled', true);
   $('#res2c').prop('disabled', true);
   $('#res3c').prop('disabled', true);
   $('#respuestaC').prop('disabled', true);
  }


$(document).ready(function(){
 
 
  Inicio();


  });