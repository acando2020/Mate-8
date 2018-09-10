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
    var obj1 = {"Conjunción": "<big><b>^</b></big>", "Disyunción inclusiva" : "V", "Disyunción excluyente": "<u>V</u>", "Negación" : "<big><b>~</b></big>", "Condicional": "=>", "Bicondicional":"<=>"};
    var obj2 = {"Disyunción inclusiva" : "V", "Disyunción excluyente": "<u>V</u>", "Conjunción": "<big><b>^</b></big>", "Condicional": "=>", "Bicondicional":"<=>","Negación" : "<big><b>~</b></big>"};
    var obj3 = {"Disyunción inclusiva" : "V", "Negación" : "<big><b>~</b></big>","Conjunción": "<big><b>^</b></big>", "Condicional": "=>", "Bicondicional":"<=>", "Disyunción excluyente": "<u>V</u>"};
    $('#contenido').append('');
    var i=0;
    var ran = Math.floor((Math.random() * 3) + 1);
        if(ran == 1){
        $.each(obj1, function(key, value){
            $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ key + "</label></td><td style='text-align:center'>" + value + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="r'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="y">y</option><option value="ó">ó</option><option value="óe">ó Excluyente</option><option value="No">No</option><option value="c">Si..,entonces</option><option value="bc">Si..solo</option></select>' + '</td></tr>');
            i=i+1;
        });
        }
        else if(ran == 2){
        $.each(obj2, function(key, value){
            $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ key + "</label></td><td style='text-align:center'>" + value + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="r'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="y">y</option><option value="ó">ó</option><option value="óe">ó Excluyente</option><option value="No">No</option><option value="c">Si..,entonces</option><option value="bc">Si..solo</option></select>' + '</td></tr>');
            i=i+1;
        });
        }
        else{
        $.each(obj3, function(key, value){
            $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ key + "</label></td><td style='text-align:center'>" + value + '</td><td style="text-align:center">'+ '<select required="required" class="form-control" name="servicio" id="r'+i+'"><option value="Seleccione una opción" selected="selected"></option><option value="y">y</option><option value="ó">ó</option><option value="óe">ó Excluyente</option><option value="No">No</option><option value="c">Si..,entonces</option><option value="bc">Si..solo</option></select>' + '</td></tr>');
            i=i+1;
        });
        } 
  };
  function Cargar(){
    
   $('#contenido').html('');
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    var r = [];
    r[0] = $("#a0").text();
    r[1] = $("#a1").text();
    r[2] = $("#a2").text();
    r[3] = $("#a3").text();
    r[4] = $("#a4").text();
    r[5] = $("#a5").text();
      //Variables Fila Respuesta
    var res = [];
    res[0] = $( "#r0 option:selected").text();
    res[1] = $( "#r1 option:selected").text();
    res[2]= $( "#r2 option:selected").text();
    res[3] = $( "#r3 option:selected").text();
    res[4]= $( "#r4 option:selected").text();
    res[5] = $( "#r5 option:selected").text();
    conta = 0;

    for(var i=0; i<=6; i++){
      switch (r[i]) {
        case "Conjunción":
        if(res[i] =="y"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
        case "Disyunción inclusiva":
        if(res[i] =="ó"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
        case "Disyunción excluyente":
        if(res[i] =="ó Excluyente"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
        case "Negación":
        if(res[i] =="No"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
        case "Condicional":
        if(res[i] =="Si..,entonces"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
        case "Bicondicional":
        if(res[i] =="Si..solo"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
          console.log('r'+i);
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
        break;
       }
    }
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });