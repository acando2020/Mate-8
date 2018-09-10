  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#r0").css("background-color", "white");
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $( "#r0 option:selected").text();
    $( "#r1 option:selected").text();
    $( "#r2 option:selected").text();
    $( "#r3 option:selected").text();
    $( "#r4 option:selected").text();
    $( "#r5 option:selected").text();
    $("#contenido").append('');
    var aleatorio=0;
    var pregunta1 = '<p><label id="pregunta1">Toda base diferente de cero con exponente cero es igual a:</label>&nbsp;<input type="text"  style="text-align: center;width:150px;height:20px; font-size: 12px" id="resA"></p>';
    var pregunta2 = '<p><label id="pregunta2">Si la base es cero y el exponente cero, entonces la potencia</label>&nbsp;<input type="text"  style="text-align: center;width:150px;height:20px; font-size: 12px" id="resB"></p>';
    var pregunta3 = '<p><label id="pregunta3">Toda base elevada a exponente uno es:</label>&nbsp;<input type="text"  style="text-align: center;width:150px;height:20px; font-size: 12px" id="resC"></p>';
    var pregunta4 = '<p><label id="pregunta4">El signo de la potencia de base positiva y exponente par es</label>&nbsp;<input type="text"  style="text-align: center;width:150px;height:20px; font-size: 12px" id="resD"></p>';
    var pregunta5 = '<p><label id="pregunta1">El signo de una potencia de base negativa y exponente impar es:</label>&nbsp;<input type="text"  style="text-align: center;width:150px;height:20px; font-size: 12px" id="resE"></p>';
    aleatorio = Math.round(Math.random() * (3 - 1) + 1)
    console.log(aleatorio)
    if(aleatorio == 1){
      $("#contenido").append(pregunta1+pregunta3+pregunta5+pregunta2+pregunta4);
    }else if(aleatorio == 2){
      $("#contenido").append(pregunta4+pregunta2+pregunta5+pregunta3+pregunta1);
    }
    else{
      $("#contenido").append(pregunta5+pregunta3+pregunta1+pregunta2+pregunta4);
    }   
  };
  function Cargar(){
   $('#contenido').html('');
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Respuestas Txt
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    var r5 = 0;
 debugger;
      r1 = $("#resA").val();
      r1.toLowerCase();
      r2 = $("#resB").val();
      r2.toLowerCase();
      r3 = $("#resC").val();
      r3.toLowerCase();
      r4 = $("#resD").val();
      r4.toLowerCase();
      r5 = $("#resE").val();
      r5.toLowerCase();
      if(r1 == "uno"){
        nota = nota + 1;
        $('#resA').css("background-color", "green");
        }
        else{
          $('#resA').css("background-color", "red");
        }
       if(r2=="no esta definida"){
        nota = nota + 1;
        $('#resB').css("background-color", "green");
        }
        else{
          $('#resB').css("background-color", "red");
        }
        if(r3=="la misma base"){
        nota = nota + 1;
        $('#resC').css("background-color", "green");
        }
        else{
          $('#resC').css("background-color", "red");
        }
        if(r4=="positiva"){
        nota = nota + 1;
        $('#resD').css("background-color", "green");
        }
        else{
          $('#resD').css("background-color", "red");
        }
        if(r5=="negativa"){
        nota = nota + 1;
        $('#resE').css("background-color", "green");
        }
        else{
          $('#resE').css("background-color", "red");
        }

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(r4);
    console.log(r5);

    var notaFinal = (nota*10)/5;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });