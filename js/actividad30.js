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
    var array = [];

    for(var i=0; i<=5; i++){
      if(i==0 || i==2){
      valoresA[i] = Math.round(Math.random() * (10 - 1) + 1); 
      valoresB[i] = Math.pow(valoresA[i],2);
      }
      else if(i==1){
      valoresA[i] = Math.round(Math.random() * (5 - (-5)) + (-5)); 
      valoresB[i] = Math.pow(valoresA[i],5);
      }
      else if(i==3){
      valoresA[i] = Math.round(Math.random() * (10 - 1) + 1); 
      valoresB[i] = Math.pow(valoresA[i],3);
      }
      else if(i==4){
      valoresA[i] = Math.round(Math.random() * (5 - 1) + 1); 
      valoresB[i] = Math.pow(valoresA[i],4);
      }
      else if(i == 5){
      valoresB[i] = "b<sup>5</sup>";
      valoresA[i] = "b";  
      }
      array[i] = '<option>'+valoresA[i]+'</option>';
      }
      $("#contenido1").append('<label id="a1" style="font-size:30px">'+ valoresB[0]+'</label>');
      $("#contenido2").append('<label id="a2"style="font-size:30px">'+ valoresB[1]+'</label>');
      $("#contenido3").append('<label id="a3"style="font-size:30px">'+ valoresB[2]+'</label>');
      $("#contenido4").append('<label id="a4"style="font-size:30px">'+ valoresB[3]+'</label>');
      $("#contenido5").append('<label id="a5"style="font-size:30px">'+ valoresB[4]+'</label>');
      $("#contenido6").append('<label id="a6"style="font-size:30px">'+ valoresB[5]+'</label>');
          
      $("#texto1").append('<br><select id="respuesta1" style="width="100px"; height="80px;font-size:30px"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
      $("#texto2").append('<br><select id="respuesta2"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
      $("#texto3").append('<br><br><select id="respuesta3"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
      $("#texto4").append('<br><br><select id="respuesta4"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
      $("#texto5").append('<br><br><select id="respuesta5"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
      $("#texto6").append('<br><br><select id="respuesta6"><option>Seleccione una Respuestas</option><option>No hay solución en ℤ</option>'+array+'</select>');
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
    var corr = [];
    var a = [];
    debugger;
    res[1] = parseInt($('#respuesta1 option:selected').text());
    res[2] = parseInt($('#respuesta2 option:selected').text());
    res[3] = parseInt($('#respuesta3 option:selected').text());
    res[4] = parseInt($('#respuesta4 option:selected').text());
    res[5] = parseInt($('#respuesta5 option:selected').text());
    res[6] = $('#respuesta6 option:selected').text();
    for(var i=0; i<=6; i++){
      preg[i] = parseInt($("#a"+i).text());
      if(i==6)
      preg[i] = $("#a"+i).text();
    }
    console.log(preg)
    debugger; 
    for(var i=1; i<=7; i++){
      if(i==1 || i==3){
      corr[i] = Math.pow(parseInt(preg[i]),1/2);
      a[i] = 1;
      if(res[i] ==corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
      }
      else if(i==2){
        if(preg[i]<0){
          corr[i] = Math.pow(parseInt(-preg[i]),1/5);
        if(res[i] == -corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
        }
        else{
        corr[i] = Math.pow(parseInt(preg[i]),1/5);
             
        if(res[i] ==corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
      }
      }
      else if(i==4){
      corr[i] = Math.pow(parseInt(preg[i]),1/3).toFixed(1);
      a[i]=3;
       if(res[i] ==corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
      }
      else if(i==5){
      corr[i] = Math.pow(parseInt(preg[i]),1/4);
      a[i]=4;
      if(res[i] ==corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
      }
      else if(i == 6){
      corr[i] = 'b';
      a[i]=2;
      if(res[i] ==corr[i]){
          nota = nota+1;
          $('#respuesta'+i).css("background-color", "green");
          
        }
        else{
          $('#respuesta'+i).css("background-color", "red");
        }
    }
    } 
    console.log(corr) 
        
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });