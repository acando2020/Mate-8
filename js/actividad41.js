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
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
      valoresC[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 
    } 
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    valoresC = jQuery.unique(valoresC);
    $('#contenido').append('');
     for(var i=0; i<=5 ;i++){
      respuestas[i] = '<select id="r'+i+'">'+
                      '<option value="0" selected="selected">Seleccione una opción</option>'+
                      '<option value="V">positivo</option>'+
                      '<option value="F">mayor</option>'+
                      '<option value="F">entero</option>'+
                      '</select>';
      }
      var preA = '<br><label>El número opuesto de un entero negativo es un entero'+respuestas[0]+'</label><br>';
      var preB = '<br><label>El valor absoluto de un entero negativo es un entero'+respuestas[1]+'</label><br>';
      var preC = '<br><label>Un entero negativo es '+respuestas[2]+'mientras más cerca esté del cero</label><br>';
      var preD = '<br><label>El'+respuestas[3]+'-5 es'+ respuestas[4]+'que el entero -6</label><br>';
      if(aleatorio == 1)
      $("#contenido1").append( preA + preB + preC + preD);
      else
      $("#contenido1").append( preB + preC + preC + preA);

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
    varA[0] = $("#r0 option:selected").text(); 
    varA[1] = $("#r1 option:selected").text();
    varA[2] = $("#r2 option:selected").text();
    varA[3] = $("#r3 option:selected").text();
    varA[4] = $("#r4 option:selected").text();
      

    for(var i=0; i<=6; i++){
        if(i == 0 || i==1){
        if(varA[i] == "positivo"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 2 || i==4){
        if(varA[i] == "mayor"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 3){
        if(varA[i] == "entero"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }
    } 
    var notaFinal = (nota*10)/5;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });