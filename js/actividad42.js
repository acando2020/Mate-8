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
    $('#contenido').append('');
    $('#clov0').html('');
    $('#clov1').html('');
    $('#clov2').html('');
    $('#clov3').html('');
    
    var valoresA = [];
    var valoresB = [];
    var conte1 = [];
    var conteA = [];
    var conteB = [];
    var conteC = [];
    var conteD = [];

    var b = 0;
    var resB = "";
    var i = 0;
    for(var i=0; i<=16; i++){
      valoresA[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 
      valoresB[i] = 1 + Math.round(Math.random() * (100 - (-100)) + (-100)); 

    } 
    valoresA = jQuery.unique(valoresA);
    valoresB = jQuery.unique(valoresB);
    $('#clov0').append(valoresA[0]);
    $('#clov1').append(valoresA[1]);
    $('#clov2').append(valoresA[2]);
    $('#clov3').append(valoresA[3]);
    var k=0;
    for(var i=0; i<=3;i++){
      for(var j=0; j<=3;j++){
    conte1[k] = '<td style="text-align:center"><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="res'+k+'"></td>';
    k= k+1;
    }
  } 
   conteA = conte1.splice(0,4);
   conteB = conte1.splice(0,4);
   conteC = conte1.splice(0,4);
   conteD = conte1.splice(0,4);
   for(var i=0; i<=3;i++){
   if(i==0) 
   $("#contenido").append('<tr><td style="text-align:center"><label id="fila'+i+'">'+ valoresB[i] + '</td>'+conteA+'</tr>');
   if(i==1)
   $("#contenido").append('<tr><td style="text-align:center"><label id="fila'+i+'">'+ valoresB[i] + '</td>'+conteB+'</tr>');
   if(i==2)
   $("#contenido").append('<tr><td style="text-align:center"><label id="fila'+i+'">'+ valoresB[i] + '</td>'+conteC+'</tr>');
   if(i==3)
   $("#contenido").append('<tr><td style="text-align:center"><label id="fila'+i+'">'+ valoresB[i] + '</td>'+conteD+'</tr>');
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
    var columna1 = [];
    var fila1 = [];
    var c = [];
    var filaA = [];
    var filaB = [];
    var filaC = [];
    var filaD = [];
    
    var colB = [];
    var respA = [];
    var respB = [];
    debugger;
    for(var i=0; i<=16; i++){
     respA[i]= $("#res"+i).val();    
    }
    for(var i=0; i<=3; i++){
    columna1[i]= parseInt($('#fila'+i).text());
    }
    for(var i=0; i<=3; i++){
    fila1[i]= parseInt($('#clov'+i).text());
    }
    k=0;
    for(var i=0; i<=3;i++){
      for(var j=0; j<=3;j++){
      c[k] = columna1[i]+fila1[j];
      k= k+1; 
      }    
    }
    for(var i=0; i<=16; i++){
      if(c[i]==respA[i]){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }     
    }
    var notaFinal = (nota*10)/16;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10 );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
});