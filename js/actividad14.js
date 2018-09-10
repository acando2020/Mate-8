    var valoresA = [];
    var valoresB = [];
    var valoresC = [];
    var valoresD = [];
    var pantallas = [];
    var respuestas = [];
    var resC1 = [];
    var resC2 = [];
    var resC3 = [];
    var resC4 = [];
    var resC5 = [];
    var res = [];
    var cadena1 = [];
    var cadena2 = [];
    var cadena3 = [];
    var conta = 0;
    notas = [];
    nota = 0;
function IniciaVariables(){
   valoresA = [];
   valoresB = [];
   valoresC = [];
     valoresD = [];
     pantallas = [];
     respuestas = [];
     resC1 = [];
     resC2 = [];
     resC3 = [];
     resC4 = [];
     resC5 = [];
     res = [];
     cadena1 = [];
     cadena2 = [];
     cadena3 = [];
     conta = 0;
    notas = [];
    nota = 0;
    acti = 1;
}


  function Inicio() {

    $('#nota-informativa').slideUp('slow');
    $('#res1').show();
    $('#res2').show();
    $('#res3').hide();
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
     $('#Terminar').hide();
     $("#Fin").html('');
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = Math.round(Math.random() * (100 - 1) + 1); 
      valoresB[i] = Math.round(Math.random() * (100 - 1) + 1); 
      valoresC[i] = Math.round(Math.random() * (100 - 1) + 1);
      valoresD[i] = Math.round(Math.random() * (100 - 1) + 1);  
    }
    $('#contenido').append('');
    $('#contenido1').append('');
    for(var i=0; i<=6; i++){
      if(i<=2)
      pantallas[i] = '<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresB[i]+'</label>)<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;<label id="valorC'+i+'">'+valoresC[i]+'</label> = ';
      else if(i>2 && i<=4)
      pantallas[i] ='<br><label id="valorA'+i+'">-'+valoresA[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresB[i]+'</label>'+signo[1]+'</label>&nbsp;<label id="valorC'+i+'">'+valoresC[i]+'</label> =  ';
      else 
      pantallas[i] = '<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresB[i]+'</label>' +signo[0]+'</label>&nbsp;<label id="valorC'+i+'">'+valoresC[i]+'</label>)'+signo[1]+'</label>&nbsp;<label id="valorD'+i+'">'+valoresD[i]+'</label> = ';
    }

    for(var j=0; j<=6; j++){
      if(j<=2){
      res[j]=parseInt(valoresA[j]) + parseInt(valoresB[j]);
      resC1[j]= parseInt(res[j]) - parseInt(valoresC[j]);
      }
      else if(j>2 && j<=4){
      resC2[j] = parseInt(valoresB[j])-parseInt(valoresA[j])-parseInt(valoresC[j]);
      }else{
      resC3[j] = parseInt(valoresA[j])-parseInt(valoresB[j]);
      resC4[j] = parseInt(valoresC[j])-parseInt(valoresD[j]);
      resC5[j] = parseInt(resC3[j])+parseInt(resC4[j])
      }
    }
    for(var i=0; i<=6; i++){
      if(i<=2){
        respuestas[i] = '<br><p id="AP1'+i+'" class="alert alert-info"><label id="valorA'+i+'">'+res[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresC[i]+'</label></p><p id="AR1'+i+'" class="alert alert-warning"><label>'+resC1[i]+'</label></p>';
      }else if(i>2 && i<=4){
       respuestas[i] ='<br><p id="AP2'+i+'" class="alert alert-info"><label id="valorA'+i+'">'+valoresB[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresA[i]+'</label>'+signo[1]+'</label>&nbsp;<label id="valorC'+i+'">'+valoresC[i]+'</label></p><p id="AR2'+i+'" class="alert alert-warning"><label>'+resC2[i]+'</label></p>';
      }else{ 
        respuestas[i] = '<br><p id="AP3'+i+'" class="alert alert-info"><label id="valorA'+i+'">'+valoresA[i]+'</label>&nbsp;<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;<label id="valorB'+i+'">'+valoresB[i]+'</label>' +signo[0]+'</label>&nbsp;(<label id="valorC'+i+'">'+valoresC[i]+'</label>'+signo[1]+'</label>&nbsp;<label id="valorD'+i+'">'+valoresD[i]+'</label>)</p><p id="AR3'+i+'" class="alert alert-warning"><label>'+resC3[i]+'</label>&nbsp;+&nbsp;<label>'+resC4[i]+'</label></p><p id="R3'+i+'" class="alert alert-success"><label>'+resC5[i]+'</label></p>';
      }
    }
    
    
    if(conta == 0){
    $("#contenido").append(pantallas[0]);
    $("#contenido1").append(respuestas[0]);
    $('#Anterior').hide();
    
    }
  };  


 

  function Siguientem(pantallas,respuestas,conta){
    $("txtNota").text("");
    $('#contenido').html('');
    $('#contenido1').html('');
    if(conta <= (pantallas.length-1)){
         $("#contenido").append(pantallas[conta]);
         $("#contenido1").append(respuestas[conta]);
       }
       else if (conta >= 6){
        $('#Siguiente').hide();

        $("#Fin").append('<div class="alert alert-danger"><strong></strong> Terminar Actividad? </div>');
       }
             
     };
     
     function Opciones(conta){
      var opcion = 0;
      
       if(conta >= 0 && conta <=2){
       opcion = "A"; 
       }
       else if (conta <= 4){
        opcion = "B";
       }
       else if(conta > 4 && conta <7){
        opcion = "C";
      }
        switch (opcion) {
        case "A":
        $("#txtNota").text("/3");
        cadena1[conta] = $("#res1 option:selected").text();
        cadena2[conta] = $("#res2 option:selected").text();
        if(cadena1[conta] == "Elemento Neutro")
           nota = nota + 1;
        if(cadena2[conta] == "Clausurativa")
           nota = nota + 1;
         notas[conta] = nota;
         $("#txtNota").text(notas[conta]+"/2");
         nota = 0;
        document.getElementById("res1").value = '0';
        document.getElementById("res2").value = '0';                   
        break;
        case "B":
        $("#txtNota").text("/2");
        cadena1[conta] = $("#res1 option:selected").text();
        cadena2[conta] = $("#res2 option:selected").text();
        if(cadena1[conta] == "Conmutativa")
           nota = nota + 1;
        if(cadena2[conta] == "Clausurativa")
           nota = nota + 1;
         document.getElementById("res1").value = '0';
        document.getElementById("res2").value = '0'; 
        notas[conta] = nota;
        $("#txtNota").text(notas[conta]+"/2");
        nota = 0;

        break;
        case "C":
        
        $("#txtNota").text("/3");
        cadena1[conta] = $("#res1 option:selected").text();
        cadena2[conta] = $("#res2 option:selected").text();
        cadena3[conta] = $("#res3 option:selected").text();
        if(cadena1[conta] == "Asociativa" || cadena1[conta] == "Opuesto Aditivo" )
           nota = nota + 1;
        if(cadena2[conta] == "Clausurativa")
           nota = nota + 1; 
        if(cadena3[conta] == "Clausurativa")
           nota = nota + 1;
           document.getElementById("res1").value = '0';
           document.getElementById("res2").value = '0';
           document.getElementById("res3").value = '0';
           notas[conta] = nota;
           $("#txtNota").text(notas[conta]+"/3");
           

           nota = 0;        
        break;       
      }

      };
      var total = 0; 
     // function Anteriorm(pantallas,respuestas,conta){
     //  console.log("Contador Anterior"+conta)
     //  $("txtNota").text("");
     //  $('#contenido').html('');
     //  $('#contenido1').html('');
     //  console.log("contador 2"+conta);
     //  if(conta >= 0){
     //    $("#contenido").append(pantallas[conta]);
     //    $("#contenido1").append(respuestas[conta]);
     //   }
     //   notas[conta] = 0;
     //   console.log(notas);
     // };
  function Cargar(){
    conta = 0;
   $('#contenido1').html('');
   $('#contenido').html('');
   $('#respuestas').show();     
   $('#res1').show();
   $('#res2').show();
   $('#res3').hide();      
   $('#Anterior').show();
   $('#Siguiente').show();
   IniciaVariables();
    $("#Act").text(""+1);
   Inicio(); 
  };


$(document).ready(function(){
   $('#Calificar').hide();
  Inicio();
  $("#Terminar").click(function(){
    var calc = 0;
    var total = 0;
    var calificacion = 10;
    var itemsT = 16;
    var suma;
    debugger;
    Opciones(conta);
        var incorrectos = 0;
        for(var i=0; i <= 6; i++)
          total = total + notas[i];
        incorrectos = 16-total;

        if (incorrectos == 0) {
          calc = (calificacion / itemsT);
        } else {
          calc = (calificacion / (itemsT + incorrectos));
        }
        suma = (total * calc);
        total = suma.toFixed(2);
        console.log(total);
        $("#txtNota").text(total+"/10");
        $("#Anterior").hide();
        $("#Terminar").hide();
        conta = 0;
        $('#contenido1').html('');
        $('#contenido').html('');
        $('#Fin').html('');
         $('#respuestas').hide();     
      $('#res1').hide();
      $('#res2').hide();
      $('#res3').hide();
      $('#Terminar').hide();      
      $('#Anterior').hide();
      $('#Siguiente').hide();
      acti=1;
        $("#Fin").append('<div class="alert alert-success"><strong>Aviso!</strong>Actividad Terminada</div>');             
      });

   // $("#Anterior").click(function(){
   //    console.log("contador Actual"+conta);
   //    Opciones(conta);
   //  conta = conta - 1;
   //  Anteriorm(pantallas,respuestas,conta);
   //  if(conta <= 0){
   //  $('#Anterior').hide();
   //  }
         
   //  });
  var acti = 1;
  $("#Siguiente").click(function(){
    
    Opciones(conta);
    conta = conta + 1;
    Siguientem(pantallas,respuestas,conta);
    cadena1[conta] = $("#res1 option:selected").text();
    cadena2[conta] = $("#res2 option:selected").text();
    if(conta > 0){

    }
    if(conta>4){
      $('#res3').show(); 
    }
    if(conta>=5 && conta >= 6){
      $('#respuestas').show();     
      $('#res1').show();
      $('#res2').show();
      $('#res3').show();
      $('#Terminar').show(); 
      $('#Siguiente').hide();
    }
    else if (conta == 7){
      $('#respuestas').hide();     
      $('#res1').hide();
      $('#res2').hide();
      $('#res3').hide();
      $('#Terminar').hide();      
      $('#Anterior').hide();
      $('#Siguiente').hide();

    }
    acti = acti+1; 
    $("#Act").text(""+acti); 
    console.log(conta);
    
    console.log("Notas son: "+ notas);
    });





});