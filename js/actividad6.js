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
    var ran = Math.floor((Math.random() * 2) + 1);
        if(ran == 1){
        $.each(obj1, function(value){
            $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ value + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="b'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="F">F</option><option value="V">V</option></select>' + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="c'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="F">F</option><option value="V">V</option></select>' + '</td></tr>');
            i=i+1;
        });
        }
        else if(ran == 2){
        $.each(obj2, function(value){
            $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ value + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="b'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="F">F</option><option value="V">V</option></select>' + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="c'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="F">F</option><option value="V">V</option></select>' + '</td></tr>');
            i=i+1;
        });
        }
        
  };
  function Cargar(){
    debugger;
   $('#contenido').html('');
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    var r = [];
    r[1] = $("#a1").text();
    r[2] = $("#a2").text();
    //Variables Fila Respuesta
    var res1 = [];
    var res2 = [];
    res1[1] = $( "#b1 option:selected").text();
    res1[2] = $( "#b2 option:selected").text();
    res2[1] = $( "#c1 option:selected").text();
    res2[2] = $( "#c2 option:selected").text();
    conta = 0;
    debugger;

    for(var i=0; i<=2; i++){
      switch (r[i]) {
        case "F":
        if(res1[i] =="V"){
          nota = nota+1;
          $('#b'+i).css("background-color", "green");
        }
        else{
          $('#b'+i).css("background-color", "red");
        }
        if(res2[i] =="V"){
          nota = nota+1;
          $('#c'+i).css("background-color", "green");
         }
        else{
        $('#c'+i).css("background-color", "red");
        }
        break;
        case "V":
        if(res1[i] =="F"){ 
          nota = nota+1;
          $('#b'+i).css("background-color", "green");
        }
        else{
          $('#b'+i).css("background-color", "red");
        }
        if(res2[i]=="F"){
          nota = nota + 1; 
          $('#c'+i).css("background-color", "green");
        }
        else{
          $('#c'+i).css("background-color", "red");
        }
        
        break;
       }
    }
    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });