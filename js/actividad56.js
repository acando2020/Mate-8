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
    var obj1 = ["p ∨ q","p ∧ q","∼p","∼p ∧ q","p ∨ ∼q","∼(p ∧ q) ∨ p"];
    var combo= [];
    var obj2 = ["∼(p ∧ q) ∨ p","p ∨ ∼q","∼p ∧ q","∼p","p ∧ q","p ∨ q"]
    var j=7;
    for(var i = 0; i<=6;i++){
    combo[i] =  '<td style="text-align:center"><select required="required" class="form-control" name="servicio" id="a'+i+'">'+
                                '<option value="0" selected="selected">Seleccione una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>';
    }
    nuevo = Math.round(Math.random() * (3 - 1) + 1);
      if(nuevo==1){
    for(var i=0; i<=5;i++){
      $("#contenido").append('<tr><td style="text-align:center"><label id="valor'+i+'">'+ obj1[i] + '</label></td>'+combo[i]+'</tr>');
    }
    }
    else{
    for(var i=0; i<=5;i++){
      $("#contenido").append('<tr><td style="text-align:center"><label id="valor'+i+'">'+ obj2[i] + '</label></td>'+combo[i]+'</tr>');
     
    }  
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
    for(var i = 0; i<=7;i++){
    r[i] = $("#a"+i).val();
    }
      //Variables Fila Respuesta
    for(var i=0; i<=7; i++){
        if(i==0 || i==1 || i==4 || i==5){
        if(r[i]=="V"){
          nota = nota+1;
          $('#a'+i).css("background-color", "green");
        }
        else{
          $('#a'+i).css("background-color", "red");
        }        
       }
       else{
        if(r[i]=="F"){
          nota = nota+1;
          $('#a'+i).css("background-color", "green");
        }
        else{
          $('#a'+i).css("background-color", "red");
        }        
       }
     }
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });