  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    $("#txtNota").text("/10");
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
    var valoresC = [];
    var valoresD = [];
    var resA = "";
    var a = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    var j=0;

    do{
     valoresB[j] = Math.round(Math.random() * (10 - 1) + 2);
     j = j+1;
    }while(j<=20)
    do{
        valoresA[i] = Math.round(Math.random() * (10 - 1) + 1); 
        valoresC[i] = Math.round(Math.random() * (4 - 1) + 1);
        i = i + 1;
    }while(i<=5);
    valoresB = jQuery.unique(valoresB);


    for(var i=0; i<=5;i++){
      if(i==0) 
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">5<SUP><label id="e'+i+'">3</SUP></td><td style="text-align:center"><label id="b'+i+'">5</td><td style="text-align:center"><label id="c'+i+'">3</td><td style="text-align:center"><label id="d'+i+'">125</td></tr>');
      else
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ valoresB[i] + '</label><SUP><label id="e'+i+'">'+ valoresC[i] + '</label></SUP></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB'+i+'"></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resC'+i+'"></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resD'+i+'"></td></tr>');
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
    var e = [];
    var res1 =[];
    var res3 = [];
     //Variables Fila encabezado
    var enc=[];
    for(var i=0; i<=4; i++){
      enc[i] = $("#fila"+i).text()
     }
    for(var i=1; i<=5; i++){
      a[i] = parseInt($("#resB"+i).val());
      b[i] = parseInt($("#resC"+i).val());
      d[i] = parseInt($("#resD"+i).val());
      e[i] = parseInt($("#e"+i).text());
      res1[i] = parseInt($('#a'+i).text());
      res3[i] = Math.pow(res1[i],e[i]);
    }
    for(var j=1; j<=5; j++){
      if(a[j]==res1[j]){
        nota = nota + 1;
        $('#resB'+j).css("background-color", "green");
        }
        else{
          $('#resB'+j).css("background-color", "red");
        }

      if(b[j]==e[j]){
        nota = nota + 1
        $('#resC'+j).css("background-color", "green");
        }
        else{
          $('#resC'+j).css("background-color", "red");
        }

        if(d[j]==res3[j]){
        nota = nota + 1
        $('#resD'+j).css("background-color", "green");
        }
        else{
          $('#resD'+j).css("background-color", "red");
        }
    }
    console.log(a);
    console.log(b);
    console.log(d);
    console.log(e);
    console.log(res1);
    console.log(res3);
    var notaFinal = (nota*10)/15;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });