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
    for(var i=0; i<=6; i++){
      valoresA[i] = Math.round(Math.random() * (1000 - (-1000)) + (-1000)); 
    }
    for(var i=0; i<=6; i++){
      valoresB[i] = Math.round(Math.random() * (1000 - (-1000)) + (-1000)); 
    } 
    $('#contenido').append('');
    for(var i=0; i<=6; i++){
      $("#contenido").append('<br><label id="valorA'+i+'">'+valoresA[i]+'</label><select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select><label id="valorB'+i+'">'+valoresB[i]+'</label><br>');
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
    //Variables Fila 1
    //Variables Fila Respuesta
    var varA = [];
    var varB = [];
    var res3 = [];
    varA[0] = parseInt($("#valorA0").text());
    varA[1] = parseInt($("#valorA1").text());
    varA[2] = parseInt($("#valorA2").text());
    varA[3] = parseInt($("#valorA3").text());
    varA[4] = parseInt($("#valorA4").text());
    varA[5] = parseInt($("#valorA5").text());
    varA[6] = parseInt($("#valorA6").text());

   // console.log(varA);



    varB[0] = parseInt($("#valorB0").text());
    varB[1] = parseInt($("#valorB1").text());
    varB[2] = parseInt($("#valorB2").text());
    varB[3] = parseInt($("#valorB3").text());
    varB[4] = parseInt($("#valorB4").text());
    varB[5] = parseInt($("#valorB5").text());
    varB[6] = parseInt($("#valorB6").text());

    //console.log(varB);
    
    res3[0] = $( "#res0 option:selected").text();
    res3[1] = $( "#res1 option:selected").text();
    res3[2] = $( "#res2 option:selected").text();
    res3[3] = $( "#res3 option:selected").text();
    res3[4] = $( "#res4 option:selected").text();
    res3[5] = $( "#res5 option:selected").text();
    res3[6] = $( "#res6 option:selected").text();
    //console.log(res3);
    for(var i=0; i<=6; i++){
      //console.log(res3[i]);
      switch (res3[i]) {
        case "<":
        console.log('caso'+res3[i]);
        console.log(varA[i]);
        console.log(varB[i]);
          console.log((varA[i]) < (varB[i]));

        if((varA[i]) < (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         
         }
        else{

          $('#res'+i).css("background-color", "red");
        }
        break;
        case ">":
          console.log('caso'+res3[i]);

        if((varA[i]) > (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         
         }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "=":
          console.log('caso'+res3[i]);

        if((varA[i]) == (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         
         }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
       }
    }
    var notaFinal = (nota*10)/7;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });