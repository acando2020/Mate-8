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
    var al1 = ["x","y","z","b","c","d","e","f","g"];
    var al2 = ["b","c","d","r","t","u","v","y","x","b","c","d","e","f","g"];
    
    for(var i=0; i<=12; i++){
      valoresA[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    } 
    $('#contenido').append('');
    for(var i=0; i<=12; i++){
      if(i==3 || i==6 || i==9)
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>) &nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else if(i==2 || i==4 || i==8)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>) &nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" placeholder=0  style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else if(i==1 || i==5 || i==7)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+al1[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+al1[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+al1[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+al1[i]+'</label>) &nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number" min="0" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      else
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+al2[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+al2[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+al2[i]+'</label>) &nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'"><SUP><input type="number"  placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>');
      
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
    var p = []
    var varA = [];
    var varB = [];
    var expA = [];
    var expB = [];
    var res3 = [];
    var operador = [];
    var a=[];

    for(var i=0; i<=12; i++){
        p[i] = $('#valorA'+i).text();
        varB[i] = $('#res'+i).val();
        expB[i] = parseInt($('#rE'+i).val());
    } 
   

    for(var i=0; i<=12; i++){
      //console.log(res3[i]);
      if(i==3 || i==6 || i==9){
        if(p[i] == varB[i] && expB[i] == 3){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          $('#rE'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
          $('#rE'+i).css("background-color", "red");
        }
      }
      else if(i==2 || i==4 || i==8){
          if(p[i] == varB[i] && expB[i] == 4){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          $('#rE'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
          $('#rE'+i).css("background-color", "red");
        }  
      }
      else if(i==1 || i==5 || i==7){
     
      if(p[i] == varB[i] && expB[i] == 4){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          $('#rE'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
          $('#rE'+i).css("background-color", "red");
        }      }
      else{
        if(p[i] == varB[i] && expB[i] == 3){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
          $('#rE'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
          $('#rE'+i).css("background-color", "red");
        }     
      }
    }
    console.log(p);
    console.log(varB);
    console.log(expB);

    var notaFinal = (nota*10)/13;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });