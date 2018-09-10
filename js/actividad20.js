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
    var valoresA = 0;
    var valoresB = 0;
    var valoresC = 0;
    var valoresE = 0;
    var resA = "";
    var conte1 = 0;
    var conte2 = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    do{
    valoresA = Math.round(Math.random() * (20 - 1) + 1);
    valoresB = Math.round(Math.random() * (20 - 1) + 1);
    valoresC = Math.round(Math.random() * (20 - 1) + 1);
    }while((valoresA*valoresB)%valoresC != 0);
    conte1 = '<p>(5) • (20) ➗ (4)</p><p>(100) ➗ (4)</p><p>25</p>';
    conte2 = '<p>|5 • 15 ➗ 4|</p><p>|25|</p><p>25</p>';



    for(var i=0; i<=3;i++){
      if(i==0) 
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'"> 5 </td><td style="text-align:center"><label id="b'+i+'">15</td><td style="text-align:center"><label id="c'+i+'"> 4 </td><td style="text-align:center">'+conte1+'</td><td style="text-align:center">'+conte2+'</td></tr>');
      else if(i==1)
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ valoresA + '</td><td style="text-align:center"><label id="b'+i+'">'+ valoresB + '</td><td style="text-align:center"><label id="c'+i+'">'+ valoresC + '</td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resA'+i+'"></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB'+i+'"></td></tr>');
      else if(i==2)
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ valoresA + '</td><td style="text-align:center"><label id="b'+i+'">-'+ valoresB + '</td><td style="text-align:center"><label id="c'+i+'">'+ valoresC + '</td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resA'+i+'"></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB'+i+'"></td></tr>');
      else
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">-'+ valoresA + '</td><td style="text-align:center"><label id="b'+i+'">-'+ valoresB + '</td><td style="text-align:center"><label id="c'+i+'">-'+ valoresC + '</td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resA'+i+'"></td><td style="text-align:center"><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB'+i+'"></td></tr>');
    
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
    var colA = [];
    var colB = [];
    var respA = [];
    var respB = [];
    for(var i=1; i<=3; i++){
      a[i] = parseInt($("#a"+i).text());
      b[i] = parseInt($("#b"+i).text());
      c[i] = parseInt($("#c"+i).text());
      colA[i] = parseInt($("#resA"+i).val());
      colB[i] = Math.abs($("#resB"+i).val());
      respA[i] = ((Math.abs(a[i]))*b[i])/c[i];
      respB[i] = Math.abs((a[i]*b[i])/c[i]);
    }
    for(var j=1; j<=4; j++){
      if(colA[j]==respA[j]){
        nota = nota + 1;
        $('#resA'+j).css("background-color", "green");
        }
        else{
          $('#resA'+j).css("background-color", "red");
        }
       if(colB[j]==respB[j]){
        nota = nota + 1
        $('#resB'+j).css("background-color", "green");
        }
        else{
          $('#resB'+j).css("background-color", "red");
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(colA);
    console.log(respA);
    console.log(colB);
    console.log(respB);    
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });