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
    $('#contenido1').html('');
   $('#contenido').html('');
   
    var valoresA = [];
    var valoresB = [];
    var i=0;
    do{
      valoresA[i] = 5 + Math.round(Math.random() * (160 - (-160)) + (-160)); 
      valoresB[i] = 1 + Math.round(Math.random() * (20 - (-20)) + (-20));
      if(valoresA[i]%valoresB[i]==0)
      i = i+1; 
    }while(i<=6); 
    $('#contenido').append('');
    for(var i=0; i<=5; i++){
      if(i<=2)
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp; ÷ &nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp; ÷ &nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');  
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
        varA[i] = parseInt($('#valorA'+i).text());
        varB[i] = parseInt($('#valorB'+i).text());
        res3[i] = parseInt($('#res'+i).val())
        a[i] = varA[i]/varB[i];
        if(a[i] == res3[i]){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{

          $('#res'+i).css("background-color", "red");
        }

    }   
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });