 function Inicio(){
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
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    var preguntas = [];
    preguntas[0] = "La altura del monte Everest 8 840m";
    preguntas[1] = "La profundidad de la fosa Marianas 11 035m";
    preguntas[2] = "La profundidad de una piscina 2,5cm";
    preguntas[3] = "La temperatura 10°C bajo cero";
    preguntas[4] = "El tercer piso de un edificio";
    var preguntas2 = [];
    preguntas2[0] = "La profundidad de la fosa Marianas 11 035m";
    preguntas2[1] = "La altura del monte Everest 8 840m";
    preguntas2[2] = "La temperatura 10°C bajo cero";
    preguntas2[3] = "El tercer piso de un edificio";
    preguntas2[4] = "La profundidad de una piscina 2,5cm";
    var cont1 = [];
    var cont2 = [];
    var ram = Math.floor((Math.random() * 2) + 1);
    for(var i = 0; i<=4; i++){
    cont1[i] = '<label id="pre'+i+'">'+preguntas[i]+'</label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res'+i+'"><option value="Seleccione una opción" selected="selected">Seleccione su respuesta</option><option value="c1">+8.840</option><option value="c2">-11035</option><option value="c3">+3</option><option value="c4">-10</option><option value="c5">-2.5</option></select><br><br>';
    cont2[i] = '<label id="pre'+i+'">'+preguntas2[i]+'</label>&nbsp;&nbsp;<select required="required" class="form-control" name="servicio" id="res'+i+'"><option value="Seleccione una opción" selected="selected">Seleccione su respuesta</option><option value="c1">+8.840</option><option value="c2">-11035</option><option value="c3">+3</option><option value="c4">-10</option><option value="c5">-2.5</option></select><br><br>';
    }
    if(ram == 1){
    $("#demo").append(cont1);
    }
    else if(ram == 2){
    $("#demo").html(cont2);
    }
    };
  function Cargar(){
   $('#demo').html('');
   Inicio(); 
  }
  $(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    var preguntas = [];
    var res = [];
    debugger;
    for(var j=0; j<=4; j++){
    res[j] = $('#res'+j).val();
    preguntas[j]=$('#pre'+j).text();      
    }
    for(var i=0; i<=4; i++){
      switch (preguntas[i]) {
        case "La altura del monte Everest 8 840m":
        if(res[i] =="c1"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
          else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "La profundidad de la fosa Marianas 11 035m":
        if(res[i] =="c2"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "El tercer piso de un edificio":
        if(res[i] =="c3"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "La temperatura 10°C bajo cero":
        if(res[i] =="c4"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
        case "La profundidad de una piscina 2,5cm":
        if(res[i] =="c5"){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;
       }
    }
    var notaFinal = (nota*10)/preguntas.length
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/"+preguntas.length);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });