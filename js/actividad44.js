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
    var valoresA = [];
    var valoresB = [];
    var valoresC = [];
    var valoresD = [];
    var respuestas =[];
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (100 - 1) + 1);
      valoresB[i] = 1 + Math.round(Math.random() * (100 - 1) + 1);
      valoresC[i] = 1 + Math.round(Math.random() * (100 - 1) + 1);
      valoresD[i] = 1 + Math.round(Math.random() * (100 - 1) + 1);
      
    }
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    valoresC = jQuery.unique(valoresC);
    valoresD = jQuery.unique(valoresD);
    
    $('#contenido').append('');
     for(var i=0; i<=6 ;i++){
      respuestas[i] = '<input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="r'+i+'">';
      }
      var preA = '<br>-<label id="valoresA1">'+valoresA[0]+'</label> + '+respuestas[0]+'-<label id="valoresA2">'+valoresA[1]+'</label> +'+respuestas[1]+' = <label id="valoresA3">'+valoresA[2]+'</label><br>';
      var preB = '<br>'+respuestas[2]+' + <label id="valorB1">'+valoresB[0]+'</label> - <label id="valorB2">'+valoresB[1]+'</label> - '+respuestas[3]+'- <label id="valorB3">'+valoresB[2]+'</label> = -<label id="valorB4">'+valoresA[3]+'</label><br>';
      var preC = '<br>-<label id="valorC1">'+valoresC[0]+'</label> - <label id="valorC2">'+ valoresC[0]+'</label> + '+respuestas[4]+'+ <label id="valorC3">'+valoresB[2]+'</label> - <label id="valorC4">'+valoresC[3]+'</label> -'+respuestas[5]+' = <label id="valorC5">'+valoresC[4]+'</label><br>';
      var preD = '<br><label id="valorD1">'+valoresD[0]+'</label> - <label id="valorD2">'+valoresD[1]+'</label> + '+respuestas[6]+'- <label id="valorD3">'+valoresD[2]+'</label> = -<label id="valorD4">'+valoresD[3]+'</label><br>';
      $("#contenido1").append( preA + preB + preC + preD);
             
  };
  function Cargar(){
   $('#contenido1').html('');
   $('#contenido').html('');
   $("#txtNota").text("/"+10 );
   
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    var varA = [];
    var varB = [];
    var varC = [];
    var varD = [];

    var res3 = [];
    var operador = [];
    var a=[];
    debugger;
    varA[0] = parseInt($("#valoresA3").text()) + parseInt($("#valoresA1").text()) + parseInt($("#valoresA2").text());
    varA[1] = parseInt($("#r0").val()) + parseInt($("#r1").val());
    varB[0] = parseInt($("#r2").val()) + parseInt($("#valorB1").text()) - parseInt($("#valorB2").text()) - parseInt($("#r3").val()) - parseInt($("#valorB3").text()); 
    varB[1] = -parseInt($("#valorB4").text());
    varC[0] = -parseInt($("#valorC1").text()) - parseInt($("#valorC2").text()) + parseInt($("#r4").val()) + parseInt($("#valorC3").text()) - parseInt($("#valorC4").text()) - parseInt($("#r5").val()) ; 
    varC[1] = parseInt($("#valorC5").text());
    varD[0] = parseInt($("#valorD1").text()) - parseInt($("#valorD2").text()) + parseInt($("#r6").val()) - parseInt($("#valorD3").text()); 
    varD[1] = -parseInt($("#valorD4").text());
    
    

    console.log(varB[0]);
    console.log(varB[1]);
            if(varA[0]== varA[1] ){
              nota = nota+1;
              $('#r0').css("background-color", "green");
              $('#r1').css("background-color", "green");
            }
            else{
              $('#r0').css("background-color", "red");
              $('#r1').css("background-color", "red");             
            }
            if(varB[0]== varB[1] ){
              nota = nota+1;
              $('#r2').css("background-color", "green");
              $('#r3').css("background-color", "green");
            }
            else{
              $('#r2').css("background-color", "red");
              $('#r3').css("background-color", "red");             
            }
            if(varC[0]== varC[1]){
              nota = nota+1;
              $('#r4').css("background-color", "green");
              $('#r5').css("background-color", "green");
            }
            else{
              $('#r4').css("background-color", "red");
              $('#r5').css("background-color", "red");             
            }
            if(varD[0]== varD[1]){
              nota = nota+1;
              $('#r6').css("background-color", "green");
            }
            else{
              $('#r6').css("background-color", "red");
            }

    var notaFinal = (nota*10)/7;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });