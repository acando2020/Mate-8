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
      valoresA[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = Math.round(Math.random() * (5 - 1) + 1); 
    }
    // Caso A
    var cad1= '((<label id="valorA'+0+'">'+valoresA[0]+'</label>)'+
              '<SUP id="expA'+0+'">'+valoresB[0]+'</SUP>)'+
              '<SUP id="expB'+0+'">'+valoresB[1]+'</SUP>'+
              '<label>&nbsp;x&nbsp </label>'+
              '((<label id="valorA'+1+'">'+valoresA[0]+'</label>)'+
              '<SUP id="expA'+1+'">'+valoresB[3]+'</SUP>)'+
              '<SUP id="expB'+1+'">'+valoresB[4]+'</SUP>';
    //Caso B
    var cad3 ='<label id="valorA'+2+'">'+valoresA[2]+'</label>'+
              '<SUP id="expA'+2+'">'+valoresB[5]+'</SUP>'+
              '<label>&nbsp;x&nbsp </label>'+

              '<label id="valorA'+3+'">'+valoresA[2]+'</label>'+
              '<SUP id="expA'+3+'">'+valoresB[6]+'</SUP>'; 
    //casoC
    var cad5= '(<label id="valorA'+4+'">'+valoresA[3]+'</label>)'+
              '<SUP id="expA'+4+'">'+valoresB[5]+'</SUP>'; 
    
    // Caso D
    var cad6= '(<label id="valorA'+5+'">'+valoresA[6]+'</label>)'+
              '<SUP id="expA'+5+'">'+valoresB[6]+'</SUP>'+
              '&nbsp; x &nbsp'+
              '(<label id="valorA'+6+'">'+valoresA[6]+'</label>)'+
              '<SUP id="expA'+6+'">'+valoresB[7]+'</SUP>';
    //Caso E
    
    var cad7= '(<label id="valorA'+7+'">'+valoresA[7]+'</label>)'+
              '<SUP id="expA'+7+'">'+valoresB[8]+'</SUP>'+
              '&nbsp;x&nbsp'+
              '(<label id="valorA'+8+'">'+valoresA[7]+'</label>)'+
              '<SUP id="expA'+8+'">'+valoresB[9]+'</SUP>';
    
    $('#contenido').append('');
    for(var i=0; i<=12; i++){
      if(i==0)
      $("#contenido").append('<br>'+cad1+'&nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else if(i==1)
      $("#contenido").append('<br>'+cad3+'&nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" placeholder=0  style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else if(i==2)
      $("#contenido").append('<br>'+cad5+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else if(i==3)
      $("#contenido").append('<br>'+cad6+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" min="0" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else if(i==4)
      $("#contenido").append('<br>'+cad7+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" min="0" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');  
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
    var varB = [];
    var expA = [];
    var eB = [];
    var res3 = [];
    var operador = [];
    var a=[];
    debugger;

    eB[0] = parseInt($('#expB0').text())
    eB[1] = parseInt($('#expB1').text())



    for(var i=0; i<=8; i++){
      expA[i]= parseInt($('#expA'+i).text());
      varB[i]= parseInt($('#valorA'+i).text());
    }
        if(parseInt($("#res0").val()) == varB[0] && parseInt($('#rE0').val()) == ((expA[0]*eB[0])+(expA[1]*eB[1]))){
          nota = nota+1;
          $('#res0').css("background-color", "green");
          $('#rE0').css("background-color", "green");
        }
        else{
          $('#res0').css("background-color", "red");
          $('#rE0').css("background-color", "red");
        }

        if(parseInt($("#res1").val()) == varB[2] && parseInt($('#rE1').val()) == ((expA[2])+(expA[3]))){
          nota = nota+1;
          $('#res1').css("background-color", "green");
          $('#rE1').css("background-color", "green");
        }
        else{
          $('#res1').css("background-color", "red");
          $('#rE1').css("background-color", "red");
        }

        if(parseInt($("#res2").val()) == Math.pow(varB[4],expA[4])){
          nota = nota+1;
          $('#res2').css("background-color", "green");
          $('#rE2').css("background-color", "green");
        }
        else{
          $('#res2').css("background-color", "red");
          $('#rE2').css("background-color", "red");
        }

        if(parseInt($("#res3").val()) == varB[5] && parseInt($('#rE3').val()) == ((expA[5])+(expA[6]))){
          nota = nota+1;
          $('#res3').css("background-color", "green");
          $('#rE3').css("background-color", "green");
        }
        else{
          $('#res3').css("background-color", "red");
          $('#rE3').css("background-color", "red");
        }
        
        if(parseInt($("#res4").val()) == varB[7] && parseInt($('#rE4').val()) == ((expA[7])+(expA[8]))){
          nota = nota+1;
          $('#res4').css("background-color", "green");
          $('#rE4').css("background-color", "green");
        }
        else{
          $('#res4').css("background-color", "red");
          $('#rE4').css("background-color", "red");
        }






    console.log(expA);
    console.log(varB);
    console.log(eB);

    var notaFinal = (nota*10)/13;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });