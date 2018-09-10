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
    var valoresD = [];
    var signo = ["."];
    var i = 0, j = 0,k = 0, l=0; 
    do{
      valoresA[i] = Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      if(valoresA[i] == 0)
      valoresA[i] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      i = i +1; 
    }while( valoresA[i] != 0  && i<= 12);
    do{
      valoresB[j] = Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      if(valoresB[j] == 0)
      valoresB[j] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      j = j +1; 
    }while( valoresB[j] != 0  && j<= 12); 
    do{ 
      valoresC[k] = Math.round(Math.random() * (10 - (-10)) + (-10)) + 1;
      if(valoresC[k] == 0)
      valoresC[k] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      k = k +1; 
    }while( valoresC[k] != 0  && k<= 12); 
    do{
      valoresD[l] = Math.round(Math.random() * (10 - (-10)) + (-10)) + 1;
      if(valoresD[l] == 0)
      valoresD[l] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
      l  = l + 1;
    }while( valoresD[l] != 0  && l<= 12); 
    $('#contenido').append('');
    for(var i=0; i<=12; i++){
      if(i==0 || i==2 || i==4)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else if(i==1 || i==3 || i==5)
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp;&nbsp;<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorC'+i+'">'+valoresC[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else if(i==6 || i==8 || i==10)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>) &nbsp<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp<label id="signo'+i+'">'+signo[0]+'</label>&nbsp(<label id="valorC1'+i+'">'+valoresC[i]+'</label>) &nbsp<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorD'+i+'">'+valoresD[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else
      $("#contenido1").append('<br>|<label id="valorA'+i+'">'+valoresA[i]+'</label>|&nbsp&nbsp<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;|<label id="valorB'+i+'">'+valoresB[i]+'</label>|&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
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
    var varC = [];
    var varD = [];
    var varC1 = [];
    var res1 = 0;
    var res2 = 0;
    var res4 = 0;
    var res3 = [];
    var res5 = 0;
    var operacion = [];
    var j=0;
    var k=0;
      
    for(var i=0; i<=12; i++){
        varA[i] = parseInt($('#valorA'+i).text());
        varB[i] = parseInt($('#valorB'+i).text());
        varC[i] = parseInt($('#valorC'+i).text());
        varD[i] = parseInt($('#valorD'+i).text());
        varC1[i] = parseInt($('#valorC1'+i).text());
        res3[i] = parseInt($('#res'+i).val());
      }
        varC1 = varC1.filter(Boolean);
        varC = varC.filter(Boolean);
        varD = varD.filter(Boolean);
        debugger;
        for(var i=0; i<=12; i++){
        if(i==0 || i==2 || i==4){
          res1 = varA[i] * varB[i];
          if(res3[i] == res1){
            nota = nota + 1;
          $('#res'+i).css("background-color", "green");}
          else{
          $('#res'+i).css("background-color", "red");
        }
      }      
      else if(i==1 || i==3 || i==5){
          res2 = varA[i] * varB[i] * varC[j];
          if(res3[i] == parseInt(res2)){
            nota = nota + 1;
          $('#res'+i).css("background-color", "green");
          }else{
          $('#res'+i).css("background-color", "red");
          }
          j= j+1;
        }
      else if(i==6 || i==8 || i==10){
          res4 = varA[i] * varB[i] * varC1[k] * varD[k] ;
          if(res3[i] == parseInt(res4)){
          nota = nota + 1;
          $('#res'+i).css("background-color", "green");
          }else{
          $('#res'+i).css("background-color", "red");
          k = k+1;
        }
      }
      else{
          res5 = Math.abs(varA[i]) * Math.abs(varB[i]);
          if(res3[i] == res5){
          nota = nota + 1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
        }
      }
      }
    var notaFinal = (nota*10)/varA.length
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });