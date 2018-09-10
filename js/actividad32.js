  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    for(var i=1; i<=8;i++){
      $('#res'+i).css("background-color", "white");
      $('#contenido'+i).html('');

    }
    $('#contenido').append('');
    var i=1;
    var valoresA = [];
    var valoresB = [];
    var valoresB1 = [];
    var valoresC = [];
    var signo = ["+","-"];
    var array = [];
    var nuevo = ["Verdadero","Falso"];
    debugger;
    for(var i=0; i<=7; i++){
      if(i == 5){
      valoresA[i] = Math.round(Math.random() * (3 - 1) + 1);
      valoresC[i] = Math.round(Math.random() * (3 - 1) + 1);  
      valoresB[i] = Math.pow(valoresA[i],3);
      valoresB1[i] = Math.pow(valoresC[i],3);
      }
      else{
      valoresA[i] = Math.round(Math.random() * (5 - 1) + 1);
      valoresC[i] = Math.round(Math.random() * (5 - 1) + 1);  
      
      valoresB[i] = Math.pow(valoresA[i],2);
      valoresB1[i] = Math.pow(valoresC[i],2);
      }
      }
      array[i] = '<option>'+nuevo+'</option>';

      $("#contenido1").append('<label style="font-size:25px">'+ valoresB[0]+'&nbsp; • &nbsp;'+ valoresB1[0]+'&nbsp;&nbsp;=&nbsp;'+ Math.pow(valoresB[0],1/2) +'&nbsp; • &nbsp;'+ Math.pow(valoresB1[0],1/2)+'&nbsp; = &nbsp;&nbsp;'+Math.pow(valoresB[0],1/2)*Math.pow(valoresB1[0],1/2)+'</label>');
      $("#contenido2").append('<label style="font-size:25px">('+ valoresB[1]+'&nbsp; - &nbsp;'+ valoresB1[1]+')<sup>2</sup>&nbsp;&nbsp;= &nbsp;&nbsp;'+ valoresB[1] +'&nbsp;&nbsp; - &nbsp;&nbsp;</label><label style="left: 230px;position: absolute;top:0px;font-size:25px">'+valoresB1[1]+'</label>');
      $("#contenido3").append('<label style="font-size:25px">'+ valoresB[2]+'&nbsp; + &nbsp;'+ valoresB1[2]+'&nbsp;&nbsp;=&nbsp;'+ Math.pow(valoresB[2],1/2) +'&nbsp; + &nbsp;'+ Math.pow(valoresB1[2],1/2) +'&nbsp; = &nbsp;&nbsp;'+ (Math.pow(valoresB[2],1/2) + Math.pow(valoresB1[2],1/2)) +'</label>');
      $("#contenido4").append('<label style="font-size:25px">'+ valoresB[3]+'&nbsp;&nbsp;= &nbsp;&nbsp;2 • &nbsp;&nbsp<label style="left: 120px;position: absolute;top:0px;font-size:25px">'+valoresB[3]+'</label>');
      $("#contenido5").append('<label style="font-size:25px">'+ valoresB[4]+'</label>&nbsp; • &nbsp;<label style="left: 100px;position: absolute;top:0px;font-size:25px">'+ valoresB1[4]+'&nbsp;=</label><label style="left: 220px;position: absolute;top:0px;font-size:25px">'+ (valoresB[4] * valoresB1[4]) +'</label>');
      $("#contenido6").append('<label style="font-size:25px">'+ valoresB[5]+'</label>&nbsp; • &nbsp;<label style="left: 100px;position: absolute;top:0px;font-size:25px">'+ valoresB1[5]+'&nbsp;=</label><label style="left: 220px;position: absolute;top:0px;font-size:25px">'+ (valoresB[5] * valoresB1[5]) +'=</label><label style="left: 300px;position: absolute;top:0px;font-size:25px">'+ Math.pow((valoresB[5] * valoresB1[5]),1/3).toFixed(0) +'</label>');
      $("#contenido7").append('<label style="font-size:25px">'+ valoresB[6]+'/'+valoresB1[6]+'</label>&nbsp; = &nbsp;<label>'+ (Math.pow(valoresB[6],1/2))+'/'+(Math.pow(valoresB1[6],1/2))+'</label>&nbsp;&nbsp;');
      $("#contenido8").append('<label style="font-size:25px"> x <sup>2</sup>&nbsp; = x </label>');
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
    var res = [];
    
    var a = [];
    for(var i=0; i<=9; i++){
      res [i] = $('#res'+i).val();
      //res[i].toLowerCase();
    }
    debugger;
    for(var i=1; i<=8; i++){
      res[i] = res[i].toLowerCase();
      if(i==1 || i==6 || i==8){
        if(res[i] =="verdadero"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          }
        }
        else{
          if(res[i] =="falso"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          }
          else{
          $('#res'+i).css("background-color", "red");
          }
          
        }
     }  
    console.log(res); 
        
    var notaFinal = (nota*10)/8;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });