  function Inicio() {
     $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $('#nota-informativa').slideUp('slow');
    for(var i=1; i<=8;i++){
      $('#res'+i).css("background-color", "white");
      $('#contenido'+i).html('');
    }
    $("#ran1").hide();
    $("#ran2").hide();

    var i=1;
    var valoresA = [];
    var valoresB = [];
    var valoresB1 = [];
    var valoresC = [];
    var signo = ["+","-"];
    var array = [];
    var nuevo = 0;
    var j=0; 
    do{
      valoresA[j] = Math.round(Math.random() * (20- 1) + 1);
      valoresB[j] = 2 + Math.round(Math.random() * (20 - 1) + 1);  
      if(valoresA[j]>valoresB[j] && valoresA[j]%valoresB[j] == 0)
      j++; 
     }while(j<=10)
 
     nuevo = Math.round(Math.random() * (3 - 1) + 1);
      if(nuevo==1){
        $("#ran1").show();
        $("#contenido1").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A0">'+ Math.pow(valoresA[0],4) +'</label></td></tr><tr><td><label style="font-size:25px" id="B0">'+ Math.pow(valoresB[0],4) +'</label><td></tr>');
        $("#contenido2").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A1">'+ Math.pow(valoresA[1],5) +'</label></td></tr><tr><td><label style="font-size:25px" id="B1">'+ Math.pow(valoresB[1],5) +'</label></td></tr>');
        $("#contenido3").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A2">'+ Math.pow(valoresA[2],3) +'</label></td></tr><tr><td><label style="font-size:25px" id="B2">'+ Math.pow(valoresB[2],3) +'</label></td></tr>');
        $("#contenido4").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A3">'+ Math.pow(valoresA[3],2) +'</label></td></tr><tr><td><label style="font-size:25px" id="B3">'+ Math.pow(valoresB[3],2) +'</label></td></tr>');
      
      }
      else{
      $("#ran2").show();
      $("#contenido5").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A4">'+ Math.pow(valoresA[4],5) +'</label></td></tr><tr><td><label style="font-size:25px" id="B4">'+ Math.pow(valoresB[4],5) +'</label></td></tr>');
      $("#contenido6").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A5">'+ Math.pow(valoresA[5],4) +'</label></td></tr><tr><td><label style="font-size:25px" id="B5">'+ Math.pow(valoresB[5],4) +'</label></td></tr>');
      $("#contenido7").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A6">'+ Math.pow(valoresA[6],2) +'</label></td></tr><tr><td><label style="font-size:25px" id="B6">'+ Math.pow(valoresB[6],2) +'</label></td></tr>');
      $("#contenido8").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:25px" id="A7">'+ Math.pow(valoresA[7],3) +'</label></td></tr><tr><td><label style="font-size:25px" id="B7">'+ Math.pow(valoresB[7],3) +'</label></td></tr>');        
      }
      console.log(nuevo);
      };




  function Cargar(){
  for(var i=1; i<=6;i++){
   $('#contenido'+i).html('');
   $('#texto'+i).html('');   
   }
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();

  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Respuestas Txt
    var preg = [];
    var res1 = [];
    var res2 = [];
    
    var a = [];
   
    res1[1] = $('#res1').val();
    res1[2] = $('#res2').val();
    res1[3] = $('#res3').val();
    res1[4] = $('#res4').val();
    res2[1] = $('#res6').val();
    res2[2] = $('#res5').val();
    res2[3] = $('#res8').val();
    res2[4] = $('#res7').val();
    var j = res1.length;
    for(var i=0; i<=7; i++)
      a[i]=parseInt($('#A'+i).text())/parseInt($('#B'+i).text());
    
    console.log(a)

    for(var i=1; i<=4; i++){
      if(i==1){
        if(res1[i] == Math.pow(a[0],1/4) || res2[i] == Math.pow(a[5],1/4) ){
          nota = nota+1;
          j = j+1;
          $('#res'+i).css("background-color", "green");
          $('#res6').css("background-color", "green");

          }
          else{
          $('#res'+i).css("background-color", "red");
          $('#res6').css("background-color", "red");
          }
        }
        if(i==2){
        if(res1[i] == Math.pow(a[1],1/5) || res2[i] == Math.pow(a[4],1/5)){
          nota = nota+1;
          j = j + 1;
          $('#res'+i).css("background-color", "green");
          $('#res5').css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          $('#res5').css("background-color", "red");

          }
        }
        if(i==3){
        if(res1[i] == Math.pow(a[2],1/3) || res2[i] == Math.pow(a[7],1/3)){
          nota = nota+1;
          j= j+1;
          $('#res'+i).css("background-color", "green");
          $('#res8').css("background-color", "green");

          }
          else{
          $('#res'+i).css("background-color", "red");
          $('#res8').css("background-color", "red");


          }
        }
        if(i==4 ){
        if(res1[i] == Math.pow(a[3],1/2) || res2[i] == Math.pow(a[6],1/2)){
          nota = nota+1;
          j= j+1;
          $('#res'+i).css("background-color", "green");
          $('#res7').css("background-color", "green");
          
          }
          else{
          $('#res'+i).css("background-color", "red");
          $('#res7').css("background-color", "red");

          }
        }
     }  
        
    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });