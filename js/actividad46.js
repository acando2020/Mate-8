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
     var valoresE = [];
    var respuestas =[];
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (20 - 1) + 1);
      valoresB[i] = 1 + Math.round(Math.random() * (20 - 1) + 1);  
      valoresE[i] = 1 + Math.round(Math.random() * (20 - 1) + 1);  
      valoresD[i] = 1 + Math.round(Math.random() * (20 - 1) + 1);
      valoresC[i] = 1 + Math.round(Math.random() * (20 - 1) + 1);

    }
    debugger;
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    valoresC = jQuery.unique(valoresC);
    valoresD = jQuery.unique(valoresD);
    valoresE = jQuery.unique(valoresE);

    $('#contenido').append('');
     for(var i=0; i<=6 ;i++){
      respuestas[i] = '<input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="r'+i+'">';
      }
      var preA = '<br>'+
                 '<label id="a1">'+valoresA[1]*2+'</label>'+
                 '<label id="signoA1">&nbsp; ÷ &nbsp;</label>'+
                 '<label id="a2">'+valoresA[1]+'</label>'+
                 '<label id="signoA2">&nbsp;-&nbsp;</label>'+
                 '<label id="a3">'+valoresA[2]+'</label>'+
                 '<label id="signoA3">&nbsp;x&nbsp;</label>'+
                 '<label id="a4">'+valoresA[3]+'</label>'+
                 '<label id="signoA4">&nbsp;-&nbsp;</label>'+
                 '(<label id="a5">'+-1*valoresA[4]+'</label>)'+
                 '='+respuestas[0]+
                 '<br>';

      var preB = '<br>'+
                 '<label id="b1">'+valoresB[0]+'</label>'+
                 '<label id="signoB1">&nbsp;+&nbsp;</label>'+
                 '<label id="b2">'+valoresB[1]+'</label>'+
                 '<label id="signoB2">&nbsp;x&nbsp;</label>'+
                 '(<label id="b3">'+-1*valoresB[3]*2+'</label>)'+
                 '<label id="signoB3">&nbsp;÷&nbsp;</label>'+
                 '(<label id="b4">'+-1*valoresB[3]+'</label>)'+
                 '='+respuestas[1]+
                 '<br>';
      var preC = '<br>'+
                 '<label id="c1">'+valoresC[1]*2+'</label>'+
                 '<label id="signoC1">&nbsp;÷&nbsp;</label>'+
                 '(<label id="c2">'+ -1 * valoresC[1]+'</label>)'+
                 '<label id="signoC2">&nbsp;x&nbsp;</label>'+
                 '<label id="c3">'+valoresC[2]+'</label>'+
                 '<label id="signoC3">&nbsp;x&nbsp;</label>'+
                 '(<label id="c4">'+ -1*valoresC[3]+'</label>)'+
                 '<label id="signoC4">&nbsp;-&nbsp;</label>'+
                 '<label id="c5">'+valoresC[4]+'</label>'+
                 '<label id="signoC5">&nbsp;+&nbsp;</label>'+
                 '<label id="c6">'+valoresC[5]+'</label>'+             
                 '='+respuestas[2]+
                 '<br>';
       var preD = '<br>'+
                 '<label id="d1">'+valoresD[1]*2 +'</label>'+
                 '<label id="signoD1">&nbsp;÷&nbsp;</label>'+
                 '(<label id="d2">'+ -1 * valoresD[1]+'</label>)'+
                 '<label id="signoD2">&nbsp;+&nbsp;</label>'+
                 '<label id="d3">'+valoresD[2]+'</label>'+
                 '<label id="signoD3">&nbsp;x&nbsp;</label>'+
                 '(<label id="d4">'+ -1*valoresD[3]+'</label>)'+
                 '='+respuestas[3]+
                 '<br>';
       var preE = '<br>'+
                 '<label id="e1">'+valoresE[0]+'</label>'+
                 '<label id="signoE1">&nbsp;+&nbsp;</label>'+
                 '<label id="e2">'+valoresE[2] *3 +'</label>'+
                 '<label id="signoE2">&nbsp;÷&nbsp;</label>'+
                 '(<label id="e3">'+ -1*valoresE[2]+'</label>)'+
                 '<label id="signoE3">&nbsp;x&nbsp;</label>'+
                 '<label id="e4">'+valoresE[3]+'</label>'+
                 '='+respuestas[4]+
                 '<br>';

      $("#contenido1").append( preA + preB + preC + preD + preE);
             
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
    var a=[];
    var b=[];
    var c=[];
    var d=[];
    var e=[];
    var resA = [];
    var resB = [];
    var resC = [];
    var resD = [];
    var resE = [];
    
    var operador = [];
    var a=[];
    debugger;
    for(var i=0; i<=6;i++)
    varA[i] = parseInt($("#r"+i).val()); 
    for(var j=0; j<=6;j++){
      a[j]= parseInt($("#a"+j).text());
      b[j]= parseInt($("#b"+j).text());
      c[j]= parseInt($("#c"+j).text());
      d[j]= parseInt($("#d"+j).text());
      e[j]= parseInt($("#e"+j).text());
    }
    resA[0] = a[3]*a[4];
    resA[1] = resA[0]-a[5];
    resA[2] = a[1]/a[2];
    resA[3] = resA[2]-resA[1]; 
        if(varA[0] == resA[3]){
        nota = nota+1;
        $('#r0').css("background-color", "green");
        }
        else{
          $('#r0').css("background-color", "red");
        }

    resB[0] = b[3]/b[4];
    resB[1] = resB[0]*b[2];
    resB[2] = b[1]+resB[1];
        if(varA[1] == resB[2]){
        nota = nota+1;
        $('#r1').css("background-color", "green");
        }
        else{
          $('#r1').css("background-color", "red");
        }
    
    resC[0] = c[1]/c[2];
    resC[1] = resC[0]*c[3];
    resC[2] = resC[1]*c[4];
    resC[3] = resC[2]-c[5];
    resC[4] = resC[3]+c[6];
        if(varA[2] == resC[4]){
        nota = nota+1;
        $('#r2').css("background-color", "green");
        }
        else{
          $('#r2').css("background-color", "red");
        }
    resD[0] = d[1]/d[2];
    resD[1] = d[3]*d[4];
    resD[2] = resD[0]+resD[1];
        if(varA[3] == resD[2]){
        nota = nota+1;
        $('#r3').css("background-color", "green");
        }
        else{
          $('#r3').css("background-color", "red");
        }
debugger;

    resE[0] = e[2]/e[3];
    resE[1] = resE[0]+e[1];
    resE[2] = resE[1]*e[4];
        if(varA[4] == resE[2]){
        nota = nota+1;
        $('#r4').css("background-color", "green");
        }
        else{
          $('#r4').css("background-color", "red");
        }
    
    console.log(resA[3] +','+resB[2]+','+resC[4]+','+resD[2]+','+resE[2]);

   
    var notaFinal = (nota*10)/5;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });