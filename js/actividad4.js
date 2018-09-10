 function Contenido(){
    $('#nota-informativa').slideUp('slow');
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#r6").css("background-color", "white");
    $("#txtNota").text("");
    $( "#res1").text();
    $( "#res2").text();
    $( "#res3").text();
    $( "#res4").text();
    $( "#res5").text();
    $( "#res6").text();
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    var preguntas = [];
    preguntas[0] = "q:Ibarra es la capital de Imbabura";
    preguntas[1] = "r:El número 15 es múltiplo de 3";
    preguntas[2] = "s: El gato es un reptil.";
    preguntas[3] = "t: Todos los triángulos tiene cuatro ángulos";
    preguntas[4] = "u: ¿Qué día es hoy?";
    preguntas[5] = "t:¡Feliz cumpleaños!";
    var ram = Math.floor((Math.random() * 3) + 1);
    var cont1 = '<label id="pre1"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res1"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre2"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res2"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre3"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res3"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre4"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res4"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre5"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res5"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre6"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res6"><option value="Seleccione una opción" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br>';
    var cont2 = '<label id="pre6"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res6"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre2"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res2"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre5"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res5"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre4"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res4"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre3"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res3"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre1"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res1"><option value="Seleccione una opción" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br>';
    var cont3 = '<label id="pre3"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res3"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre1"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res1"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre2"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res2"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre5"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res5"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre6"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res6"><option value="0" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br><label id="pre4"></label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res4"><option value="Seleccione una opción" selected="selected">Seleccione una opción</option><option value="V">Verdadero</option><option value="F">Falso</option><option value="N">No es una proposición</option></select><br><br>'
    debugger;
    if(ram == 1){
    $("#demo").html(cont1);
    }
    else if(ram == 2){
    $("#demo").html(cont2);
    }
    else{
     $("#demo").html(cont3); 
    }
    $("#pre1").text(preguntas[0]);
    $("#pre2").text(preguntas[1]);
    $("#pre3").text(preguntas[2]);
    $("#pre4").text(preguntas[3]);
    $("#pre5").text(preguntas[4]);
    $("#pre6").text(preguntas[5]);
    };

  $(document).ready(function(){
  Contenido();
  $("#Calificar").click(function(){
    var nota = 0;
   
    var res1 = $( "#res1 option:selected").text();
    var res2 = $( "#res2 option:selected").text();
    var res3 = $( "#res3 option:selected").text();
    var res4 = $( "#res4 option:selected").text();
    var res5 = $( "#res5 option:selected").text();
    var res6 = $( "#res6 option:selected").text();
    if(res1 == "Verdadero" || res1 == "verdadero"){
      nota = nota+1;
      $("#res1").css("background-color", "green");
    }
    else{
    $("#res1").css("background-color", "red");
    }
    
    if(res2 == "Verdadero"){
      nota = nota+1;
      $("#res2").css("background-color", "green");
    }
    else{
    $("#res2").css("background-color", "red");
    }

    if(res3 == "Falso"){
      nota = nota+1;
      $("#res3").css("background-color", "green");
    }
    else{
    $("#res3").css("background-color", "red");
    }

    if(res4 == "Falso"){
      nota = nota+1;
      $("#res4").css("background-color", "green");
    }
    else{
    $("#res4").css("background-color", "red");
    }

    if(res5 == "No es una proporsción"){
      nota = nota+1;
      $("#res5").css("background-color", "green");
    }
    else{
    $("#res5").css("background-color", "red");
    }

    if(res6 == "No es una proporsción"){
      nota = nota+1;
      $("#res6").css("background-color", "green");
    }
    else{
    $("#res6").css("background-color", "red");
    }
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });