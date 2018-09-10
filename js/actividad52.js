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
  
    for(var i=0; i<=7; i++){
      valoresA[i] = Math.round(Math.random() * (10 - 1) + 1);
      valoresC[i] = Math.round(Math.random() * (10 - 1) + 1);  
     }
      
      nuevo = Math.round(Math.random() * (3 - 1) + 1);
      if(nuevo==1){
        $("#ran1").show();
        $("#contenido1").append('<label style="font-size:25px" id="A0">'+ Math.pow(valoresA[0],4) +'</label>');
        $("#contenido2").append('<label style="font-size:25px" id="A1">'+ Math.pow(valoresA[1],5) +'</label>');
        $("#contenido3").append('<label style="font-size:25px" id="A2">'+ Math.pow(valoresA[2],3) +'</label>');
        $("#contenido4").append('<label style="font-size:25px" id="A3">'+ Math.pow(valoresA[3],2) +'</label>');
      
      }
      else{
      $("#ran2").show();
      $("#contenido5").append('<label style="font-size:25px" id="A4">'+ Math.pow(valoresA[4],5) +'</label>');
      $("#contenido6").append('<label style="font-size:25px" id="A5">'+ Math.pow(valoresA[5],4) +'</label>');
      $("#contenido7").append('<label style="font-size:25px" id="A6">'+ Math.pow(valoresA[6],2) +'</label>');
      $("#contenido8").append('<label style="font-size:25px" id="A7">'+ Math.pow(valoresA[7],3) +'</label>');        
      }
      console.log(nuevo);
      };




  function Cargar(){
  for(var i=1; i<=8;i++){
   $('#contenido'+i).html('');
   $('#res'+i).val('');   
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
     debugger;
    console.log($('#A0').text());

    for(var i=1; i<=4; i++){
      if(i==1){
        if(res1[i] !="" && res1[i] == (Math.pow($('#A0').text(),1/4))){
          nota = nota+1;
          $('#res1').css("background-color", "green");
          }
          else{
          $('#res1').css("background-color", "red");
          }

          if(res2[i] !="" && res2[i] == (Math.pow($('#A5').text(),1/4)) ){
          nota = nota+1;
          $('#res6').css("background-color", "green");
          }
          else{
          $('#res6').css("background-color", "red");
          }
        }

        if(i==2){
        if(res1[i] !="" && res1[i] == (Math.pow($('#A1').text(),1/5))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          }
          if(res2[i] !="" && res2[i] == (Math.pow($('#A4').text(),1/5))){
          nota = nota+1;
          $('#res5').css("background-color", "green");
          }
          else{
          $('#res5').css("background-color", "red");
          }
        }
        if(i==3){
        if(res1[i] !="" && res1[i] == (Math.pow($('#A2').text(),1/3))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          }
          if(res2[i] !="" && res2[i] == (Math.pow($('#A7').text(),1/3))){
          nota = nota+1;
          $('#res8').css("background-color", "green");
          }
          else{
          $('#res8').css("background-color", "red");
          }
        }
        if(i==4 ){
        if(res1[i] !="" && res1[i] == Math.pow($('#A3').text(),1/2)){
          nota = nota+1;
          j= j+1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          }

          if(res2[i] !="" && res2[i] == Math.pow($('#A6').text(),1/2)){
          nota = nota+1;
          j= j+1;
          $('#res7').css("background-color", "green");
          }
          else{
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