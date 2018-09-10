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
    var i = 0;
    do{
      valoresA[i] = 5 + Math.round(Math.random() * (160 - (-160)) + (-160)); 
      valoresB[i] = 1 + Math.round(Math.random() * (20 - (-20)) + (-20));
      if(valoresA[i]%valoresB[i]==0)
      i = i+1; 
    }while(i<=6);

    $('#contenido').append('');
    
    for(var i=0; i<=6; i++){
      if(i%2 ==0)
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;<label id="signo'+i+'">÷</label>&nbsp;(<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'">)&nbsp; = &nbsp; <label id="valorB'+i+'">'+valoresB[i]+'</label><br>');
      else 
      $("#contenido").append('<br>(<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'">)&nbsp;<label>÷</label>&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp; = &nbsp; <label id="valorB'+i+'">'+valoresB[i]+'</label><br>');
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

    for(var i=0; i<=6; i++){
        varA[i] = parseInt($('#valorA'+i).text());
        varB[i] = parseInt($('#valorB'+i).text());
        if(i%2 ==0){
          a[i]= varA[i]/varB[i];          
        }
        else{
          a[i]=varA[i]*varB[i];
        }
      }
      for(var i=0; i<=6; i++){
        res3[i] = parseInt($('#res'+i).val());
        if(a[i]==res3[i]){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }

    }  
    console.log(varA);
    console.log(varB);
    console.log(operador);
    
    var notaFinal = (nota*10)/7;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });