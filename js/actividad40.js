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
    
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
      if(valoresA[i] == 0)
      valoresA[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
      
      valoresC[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));
      if(valoresC[i] == 0)
      valoresC[i] = 1 + Math.round(Math.random() * (12 - (-12)) + (-12));

    }
    for(var i=0; i<=12; i++){

      valoresB[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 
      if(valoresB[i] == 0)
      valoresB[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 

    } 
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    valoresC = jQuery.unique(valoresC);
    $('#contenido').append('');
    for(var i=0; i<=6; i++){
      if(i%2==0)
      $("#contenido1").append('<br>|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp; X &nbsp;|<label id="valorB'+i+'">'+valoresC[i]+'</label>| =&nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else
      $("#contenido").append('<br>|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp; + &nbsp;|<label id="valorB'+i+'">'+valoresB[i]+'</label>| =&nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
        
    }        
  };
  function Cargar(){
   $('#contenido1').html('');
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
    var operador = [];
    var a=[];
    debugger;

    for(var i=0; i<=6; i++){
        res3[i] = $('#res'+i).val();
        varA[i] = $('#valorA'+i).text();
        varB[i] = $('#valorB'+i).text();
        if(i%2 == 0){
        if(res3[i] == (Math.abs(varA[i])*Math.abs(varB[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        else{
          if(res3[i] == (Math.abs(varA[i])+Math.abs(varB[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
            
    } 
    var notaFinal = (nota*10)/7;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });