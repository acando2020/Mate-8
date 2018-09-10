  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
      
    $('#contenido').html('');
   $("#botones").html('');
    var i=1;
    var valoresA = [];
    var valoresB = [];
    var valoresC = [];
    var valoresD = [];
    var resA = "";
    var a = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    var j=0;
    var fila1 = '<tr><td>1.Producto de potencias con bases iguales</td><td>a) (a•b)<SUP>n</SUP> = a<SUP>n</SUP>•b<SUP>n</SUP></td></tr>';
    var fila2 = '<tr><td>2.Potencias de una pontencia</td><td>b) a<SUP>m</SUP>•a<SUP>n</SUP> = a<SUP>m+n</SUP></td></tr>'
    var fila3 = '<tr><td>3.Potencias de un producto</td><td>c) (a<SUP>m</SUP>)<SUP>n</SUP> = a<SUP>m•n</SUP></td></tr>'
    $("#contenido").append(fila1+fila2+fila3);
    var botones = [];
    botones[0] = '<div class="btn-group-vertical"><button type="button" class="btn btn-success" id="res1" onclick="Incorrectas()">1c,2a,3b</button><button type="button" class="btn btn-success" id="res2" onclick="Incorrectas()">1a,2b,3c</button><button type="button" class="btn btn-success" id="res3"onclick="Incorrectas()">1b,2a,3c</button><button type="button" id="respuesta" class="btn btn-success" onclick="Respuestas()">1b,2c,3a</button></div>';
    botones[1] = '<div class="btn-group-vertical"><button type="button" class="btn btn-success" id="res1" onclick="Incorrectas()">1c,2a,3b</button><button type="button" id="respuesta" class="btn btn-success" onclick="Respuestas()">1b,2c,3a</button><button type="button" id="res2" onclick="Incorrectas()" class="btn btn-success">1a,2b,3c</button><button type="button" id="res3" class="btn btn-success" onclick="Incorrectas()">1b,2a,3c</button></div>';
    botones[2] = '<div class="btn-group-vertical"><button type="button" id="respuesta" class="btn btn-success" onclick="Respuestas()">1b,2c,3a</button><button type="button" class="btn btn-success" id="res1" onclick="Incorrectas()">1c,2a,3b</button><button type="button" class="btn btn-success" id="res2" onclick="Incorrectas()">1a,2b,3c</button><button type="button" class="btn btn-success" id="res3" onclick="Incorrectas()">1b,2a,3c</button></div>';
    botones[3] = '<div class="btn-group-vertical"><button type="button" class="btn btn-success" id="res1" onclick="Incorrectas()">1c,2a,3b</button><button type="button" class="btn btn-success" id="res2" onclick="Incorrectas()">1a,2b,3c</button><button type="button" id="respuesta" onclick="Respuestas()" class="btn btn-success">1b,2c,3a</button><button type="button" class="btn btn-success" id="res3" onclick="Incorrectas()">1b,2a,3c</button></div>';
    var ramdomico = Math.round(Math.random() * (2 - 0) + 1); 
    console.log(ramdomico);
   $("#botones").append(botones[ramdomico]);          
  };
  function Cargar(){
   $('#contenido').html('');
   $("#botones").html('<div class="btn-group-vertical"><button type="button" class="btn btn-success" id="res1" disabled>1c,2a,3b</button><button type="button" class="btn btn-success" id="res2" disabled>1a,2b,3c</button><button type="button" class="btn btn-success" id="res3" disabled>1b,2a,3c</button><button type="button" id="respuesta" class="btn btn-success" disabled>1b,2c,3a</button></div>');
   Inicio();   
  };
  function Respuestas(){
    var nota = 1;
    //Variables Respuestas Txt
    var notaFinal = (nota*10)/1;
    notaFinal = notaFinal.toFixed(2);
    $("#res1").removeClass("btn btn-success");
    $("#res1").addClass("btn btn-danger");
    $("#res2").removeClass("btn btn-success");
    $("#res2").addClass("btn btn-danger");
    $("#res3").removeClass("btn btn-success");
    $("#res3").addClass("btn btn-danger");
    $('#res1').prop('disabled', true);
   $('#res2').prop('disabled', true);
   $('#res3').prop('disabled', true);
   $('#respuesta').prop('disabled', true);
   

    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  };
  function Incorrectas(){
   $("#res1").removeClass("btn btn-success");
   $("#res2").removeClass("btn btn-success");
   $("#res3").removeClass("btn btn-success");
   $("#res1").addClass("btn btn-danger");
   $("#res2").addClass("btn btn-danger");
   $("#res3").addClass("btn btn-danger");
   $('#res1').prop('disabled', true);
   $('#res2').prop('disabled', true);
   $('#res3').prop('disabled', true);
   $('#respuesta').prop('disabled', true);
  }


$(document).ready(function(){
 
 
  Inicio();


  });