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
      valoresB[i] = Math.pow(valoresA[i],3);
      valoresB1[i] = Math.pow(valoresC[i],3);
      
      }
      debugger;
      nuevo = Math.round(Math.random() * (3 - 1) + 1);
      if(nuevo==1){
        $("#ran1").show();
        $("#contenido1").append('<label style="font-size:25px"> x &nbsp; + &nbsp; 4 &nbsp;&nbsp; = &nbsp;&nbsp; +4 </label>');
        $("#contenido2").append('<label style="font-size:25px"> x &nbsp; + &nbsp; 2 &nbsp;&nbsp; = &nbsp;&nbsp; -2 </label>');
        $("#contenido3").append('<label style="font-size:25px"> x &nbsp; - &nbsp; 2 &nbsp;&nbsp; = &nbsp;&nbsp; -3 </label>');
        $("#contenido4").append('<label style="font-size:25px"> x &nbsp; - &nbsp; 6 &nbsp;&nbsp; = &nbsp;&nbsp; 6 </label>');
      
      }
      else{
      $("#ran2").show();
      $("#contenido6").append('<label style="font-size:25px"> x &nbsp; + &nbsp; 4 &nbsp;&nbsp; = &nbsp;&nbsp; +4 </label>');
      $("#contenido5").append('<label style="font-size:25px"> x &nbsp; + &nbsp; 2 &nbsp;&nbsp; = &nbsp;&nbsp; -2 </label>');
      $("#contenido8").append('<label style="font-size:25px"> x &nbsp; - &nbsp; 2 &nbsp;&nbsp; = &nbsp;&nbsp; -3 </label>');
      $("#contenido7").append('<label style="font-size:25px"> x &nbsp; - &nbsp; 6 &nbsp;&nbsp; = &nbsp;&nbsp; 6 </label>');
             
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
    debugger;
    res1[1] = $('#res1').val();
    res1[2] = $('#res2').val();
    res1[3] = $('#res3').val();
    res1[4] = $('#res4').val();
    res2[1] = $('#res6').val();
    res2[2] = $('#res5').val();
    res2[3] = $('#res8').val();
    res2[4] = $('#res7').val();
    var j = res1.length;


    for(var i=1; i<=4; i++){
      if(i==1){
        if(res1[i] == 252 || res2[i] == 252){
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
        if(res1[i] == -34 || res2[i] == -34){
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
        if(res1[i] == -25 || res2[i] == -25){
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
        if(res1[i] == 42 || res2[i] == 42){
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