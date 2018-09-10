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
    for(var i=0; i<=12; i++){
      valoresA[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    } 
    $('#contenido').append('');
    for(var i=0; i<=12; i++){
      if(i==3 || i==6 || i==9)
      $("#contenido").append('<br>|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select>&nbsp|<label id="valorB'+i+'">'+valoresB[i]+'</label>|<br>');
      else if(i==2 || i==4 || i==8)
      $("#contenido").append('<br>-|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select>&nbsp|<label id="valorB'+i+'">'+valoresB[i]+'</label>|<br>');
      else if(i==1 || i==5 || i==7)
      $("#contenido").append('<br>-|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select>&nbsp-|<label id="valorB'+i+'">'+valoresB[i]+'</label>|<br>');
      else
      $("#contenido").append('<br>-(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select>&nbsp(<label id="valorB'+i+'">'+valoresB[i]+'</label>)<br>');
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
    var a=0;
    debugger;
    for(var i=0; i<=12; i++){
      if(i == 3 || i == 6 || i ==9){
        varA[i] = Math.abs($('#valorA'+i).text());
        varB[i] = Math.abs($('#valorB'+i).text());
      }
      else if(i == 1 || i == 5 || i == 7){
      varA[i] = -(Math.abs($('#valorA'+i).text()));
      varB[i] = -(Math.abs($('#valorB'+i).text()));
      }
      else if(i == 2 || i == 4 || i == 8){
      varA[i] = -(Math.abs($('#valorA'+i).text()));
      varB[i] = Math.abs($('#valorB'+i).text());
      }
      else{
      varA[i] = -$('#valorA'+i).text();
      varB[i] = $('#valorB'+i).text();
      }
      res3[i] = $( '#res'+i).val();
    }
    console.log(varA);
    console.log(varB);
    console.log(res3);
    
    for(var i=0; i<=12; i++){
      //console.log(res3[i]);
      switch (res3[i]) {
        case "m":

        if((varA[i]) < (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{

          $('#res'+i).css("background-color", "red");
        }
        break;
        case "M":
          console.log('caso'+res3[i]);

        if((varA[i]) > (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "i":
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
    var notaFinal = (nota*10)/13;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/13");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });