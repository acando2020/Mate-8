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
     for(var i=0; i<=7 ;i++){
      respuestas[i] = '<select id="r'+i+'">'+
                      '<option value="0" selected="selected">Seleccione una opción</option>'+
                      '<option value="V">Conmutativa</option>'+
                      '<option value="F">Asociativa</option>'+
                      '<option value="F">Existencia del elemento neutro</option>'+
                      '<option value="F">Distributiva</option>'+
                      '</select>';
      }
      var preA = '<br><label>El orden de los factores no altera el porducto'+respuestas[0]+'</label><br>';
      var preB = '<br><label>El porducto de 2 por la suma de -9 y 7 es el mismo que la suma de 2(-9) más 2(7)'+respuestas[1]+'</label><br>';
      var preC = '<br><label>El 1 es el elemento neutro de la multiplicación.'+respuestas[2]+'</label><br>';
      var preD = '<br><label>No importa cómo se agrupen los factores en una multiplicación, el resultado se conserva. '+ respuestas[3]+'</label><br>';
      if(aleatorio == 1)
      $("#contenido1").append( preA + preB + preC + preD);
      else
      $("#contenido1").append( preB + preD + preC + preA);

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
  
    for(var i=0; i<=6; i++){
        if(i == 0){
        if(varA[i] == "Conmutativa"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 1){
        if(varA[i] == "Distributiva"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 2){
        if(varA[i] == "Existencia del elemento neutro"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }
        if(i == 3){
        if(varA[i] == "Asociativa"){
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