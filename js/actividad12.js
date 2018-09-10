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
    var obj1 = {"V":"V","F":"F"};
    var obj2 = {"F":"F","V":"V"};
    $('#contenido').append('');
    var i=1;
    var valoresA = [];
    var valoresB = [];
    var signo = ["+","-"];
    for(var i=0; i<=4; i++){
      valoresA[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=4; i++){
      valoresB[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=4; i++){
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ valoresA[i] + '</td><td style="text-align:center"><label id="b'+i+'">'+ valoresB[i] + '</td><td style="text-align:center">'+ '<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resA'+i+'">' + '</td><td style="text-align:center">'+ '<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB'+i+'">' + '</td><td style="text-align:center">'+ '<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resC'+i+'">' + '</td><td style="text-align:center">'+ '<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resD'+i+'">' + '</td></tr>');
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
    //Variables Respuestas Txt
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    //variables labels
    var l1=[];
    var l2=[];
    //Variables Fila encabezado
    var enc=[];
    for(var i=0; i<=4; i++){
      enc[i] = $("#fila"+i).text()
     }
    for(var i=0; i<=4; i++){
      a[i] = parseInt($("#resA"+i).val());
      b[i] = parseInt($("#resB"+i).val());
      c[i] = parseInt($("#resC"+i).val());
      d[i] = parseInt($("#resD"+i).val());
      l1[i] = parseInt($("#a"+i).text());
      l2[i] = parseInt($("#b"+i).text());
    }   
    var aux = 0;
    var res = 0;
    for(var j=0; j<=4; j++){
      switch (enc[j]) {
        case "-a":
        for(var i=0; i<=4; i++){
        aux = -l1[i];
        if(aux == a[i]){
          nota = nota+1;
          $('#resA'+i).css("background-color", "green");
        }
        else{
          $('#resA'+i).css("background-color", "red");
        }
      }
        break;
        
        case "-b":
        for(var i=0; i<=4; i++){
        aux = -l2[i];
        if(aux == b[i]){
          nota = nota+1;
          $('#resB'+i).css("background-color", "green");
        }
        else{
          $('#resB'+i).css("background-color", "red");
        }
      }
        break;

        case "a+b":
        for(var i=0; i<=4; i++){
        res = l1[i] + l2[i];
        if(res == c[i]){
          nota = nota+1;
          $('#resC'+i).css("background-color", "green");
        }
        else{
          $('#resC'+i).css("background-color", "red");
        }
      }
        break;

        case "a-b":
        for(var i=0; i<=4; i++){
        res = l1[i] - l2[i];
        if(res == d[i]){
          nota = nota+1;
          $('#resD'+i).css("background-color", "green");
        }
        else{
          $('#resD'+i).css("background-color", "red");
        }
      }
        break; 
    }
  }
    var notaFinal = (nota*10)/20;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });