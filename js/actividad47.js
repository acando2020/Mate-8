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
    var respuestas =[];
    var aleatorio = Math.round(Math.random() * (2 - 1) + 1);
    for(var i=0; i<4; i++){ 
      valoresA[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
      valoresC[i] = 1 + Math.round(Math.random() * (50 - (-50)) + (-12));
      valoresB[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }  
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    valoresC = jQuery.unique(valoresC);
    $('#contenido').append('');
     for(var i=0; i<=5 ;i++){
      respuestas[i] = '<select id="r'+i+'">'+
                      '<option value="0" selected="selected">Seleccione una opción</option>'+
                      '<option value="3">43</option>'+
                      '<option value="2">'+valoresB[1]+'</option>'+
                      '<option value="1">'+valoresB[0]+'</option>'+
                      '<option value="4">'+valoresB[2]+'</option>'+                    
                      '</select>';
      }
      var preA = '<br><label>Un entero multiplicado por '+ valoresA[0] +' es igual a '+valoresA[0]*valoresB[0]+' ¿Cuál es el entero?'+respuestas[0]+'</label><br>';
      var preB = '<br><label>Un entero multiplicado por '+valoresA[1]+' es igual a '+valoresA[1]*valoresB[1]+' ¿Cuál es el entero?'+respuestas[1]+'</label><br>';
      var preC = '<br><label>Si al producto de -6 y un entero se les adiciona 6, el resultado es -6. ¿Cuál es el entero?'+respuestas[2]+'</label><br>';
      var preD = '<br><label>Si al producto de un entero y '+valoresA[2]+' se le adiciona '+valoresC[0]+', el resultado es '+(valoresB[2]*valoresA[2])+valoresC[0]+' ¿Cuál es el entero?'+ respuestas[3]+'</label><br>';
      if(aleatorio ==1)
      $("#contenido1").append( preA + preB + preC + preD);
      else
      $("#contenido1").append( preD + preC + preA + preB);

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
    var res3 = [];
    var operador = [];
    var a=[];
    debugger;
    varA[0] = $("#r0").val(); 
    varA[1] = $("#r1").val();
    varA[2] = $("#r2").val();
    varA[3] = $("#r3").val();
    varA[4] = $("#r4").val();
      
debugger;
    for(var i=0; i<=6; i++){
        if(i == 0){
        if(varA[i] == "1"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }
        if(i == 1){
        if(varA[i] == "2"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 2){
        if(varA[i] == "3"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
      }
      if(i == 3){
        if(varA[i] == "4"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
      }
      } 
    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });