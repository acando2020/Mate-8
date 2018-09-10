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
                      '<option value="V">+22</option>'+
                      '<option value="F">22</option>'+
                      '<option value="F">130</option>'+
                      '</select>';
      }
      var preA = '<br><label>El opuesto del valor absoluto de la suma de t y r.'+respuestas[0]+'</label><br>';
      var preB = '<br><label>La diferencia del opuesto de t con r'+respuestas[1]+'</label><br>';
      var preC = '<br><label>El opuesto de t adicionado con el valor absoluto de r.'+respuestas[2]+'</label><br>';
      var preD = '<br><label>La suma del valor absoluto de t con el opuesto de r.'+ respuestas[3]+'</label><br>';
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
        if(i == 0){
        if(varA[i] == "+22"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }


        if(i == 1 || i==3){
        if(varA[i] == "22"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        }

        if(i == 2){
        if(varA[i] == "130"){
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