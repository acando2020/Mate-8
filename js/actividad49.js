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
    var valoresA = [];
    var valoresB = [];
   
    for(var i=0; i<=12; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (20 - (-20)) + (-20)); 
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = 1 + Math.round(Math.random() * (3 - 1) + 1); 
    }
    // Caso A
    var cad1= '';

    var cad2 ='';
    var cad5= '';
    // Caso D 
    $('#contenido').html('');
    $('#contenido1').html('');

    for(var i=0; i<=6; i++){
      if(i==0){
      cad1= '((<label id="valorA'+i+'">'+valoresA[i]+'</label>)'+
              '<SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="exp'+i+'"></SUP>)'+
              '<label>&nbsp;=&nbsp </label>';
      $("#contenido").append('<br>'+cad1+'<label id="res'+i+'">'+Math.pow(valoresA[i],valoresB[i])+'</label><br>');
      }else if(i==1 || i==2){
      cad2 ='<label id="valorA'+i+'">'+valoresA[i]+'</label>'+
              '<SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="exp'+i+'"></SUP>'+
              '<label>&nbsp;=&nbsp </label>';
      $("#contenido").append('<br>'+cad2+'<label id="res'+i+'">'+Math.pow(valoresA[i],valoresB[i])+'</label><br>');
      }else{ 
      cad5=  '<label>&nbsp;=&nbsp </label>'+
             '<label id="res'+i+'">'+Math.pow(valoresA[i],valoresB[i])+'</label>';
      $("#contenido1").append('<br><input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="valorA'+i+'"/><SUP id="exp'+i+'">'+valoresB[i]+'</SUP>'+cad5+'<br>');
      }
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
    var p = []
    var varA = [];
    var resB = [];
    var expA = [];
    var eB = [];
    var res3 = [];
    var operador = [];
    var a=[];

    for(var i=0; i<=6; i++){
      if(i<=2){
       expA[i]= parseInt($('#exp'+i).val());
       varA[i]= parseInt($('#valorA'+i).text());
      }
      else{
      expA[i]= parseInt($('#exp'+i).text());
      varA[i]= parseInt($('#valorA'+i).val());
      }
      
      res3[i]= parseInt($('#res'+i).text());
      a[i] = Math.pow(varA[i],expA[i]);
    }
    console.log(expA);
    console.log(varA);
    console.log(res3);
    console.log(a);
    debugger;
    for(var i=0; i<=6; i++){
      if(i<=2){
        if(parseInt($("#res"+i).text()) == a[i]){
          nota = nota+1;
          $('#exp'+i).css("background-color", "green");
        }
        else{
          $('#exp'+i).css("background-color", "red");
        }
      }
      else{
        if(parseInt($("#res"+i).text()) == a[i]){
          nota = nota+1;
          $('#valorA'+i).css("background-color", "green");
        }
        else{
          $('#valorA'+i).css("background-color", "red");
        }
      }     
    }

    var notaFinal = (nota*10)/7;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });