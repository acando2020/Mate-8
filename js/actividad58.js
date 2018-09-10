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
    $('#contenido').append('');
    var i=1;
    var valoresA = ["V","V","V","V","F","F","F","F"];
    var valoresB = ["V","V","F","F","V","V","F","F"];
    var valoresC = ["V","F","V","F","V","F","V","F"];
    var valoresD = ["V","V","F","F"];
    var valoresE = ["V","F","V","F"];

    var signo = ["+","-"];
    var combo =[];
    var combo1 = [];
    for(var i = 0; i<=7;i++){
    combo[i] =  '<td style="text-align:center; width:250px"><select required="required" class="form-control" name="servicio" id="colA'+i+'">'+
                                '<option value="0" selected="selected">Elije una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>'+
                                '<td style="text-align:center;width:250px"><select required="required" class="form-control" name="servicio" id="colB'+i+'">'+
                                '<option value="0" selected="selected">Elije una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>'+
                                '<td style="text-align:center; width:250px"><select required="required" class="form-control" name="servicio" id="colC'+i+'">'+
                                '<option value="0" selected="selected">Elije una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>'+
                                '<td style="text-align:center;width:250px"><select required="required" class="form-control" name="servicio" id="colD'+i+'">'+
                                '<option value="0" selected="selected">Elije una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>';
    }

    for(var i=0; i<=7; i++){
      $("#contenido").append('<tr><td style="text-align:center"><label id="a'+i+'">'+ valoresA[i] + '</td><td style="text-align:center"><label id="b'+i+'">'+ valoresB[i] + '</td><td style="text-align:center"><label id="c'+i+'">'+ valoresC[i] + '</td>'+combo[i]+'</tr>');
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
    //Variables Respuestas Txt
    var filaA = [];
    var filaB = [];
    var filaC = [];
    var filaD = [];
    var filaE = [];
    for(var i=0; i<=7; i++){
      filaA[i] = $("#colA"+i).val();
      filaB[i] = $("#colB"+i).val();
      filaC[i] = $("#colC"+i).val();
      filaD[i] = $("#colD"+i).val();
     }

     for(var i=0; i<=8; i++){
         if(i<=5){
            if(filaA[i]=="V"){
              nota = nota+1;
              $('#colA'+i).css("background-color", "green");
            }
            else{
              $('#colA'+i).css("background-color", "red");
            }
          }
          else{
            if(filaA[i]=="F"){
              nota = nota+1;
              $('#colA'+i).css("background-color", "green");
            }
            else{
              $('#colA'+i).css("background-color", "red");
            }
          }
        }

        for(var i=0; i<=8; i++){
         if(i==6 || i==7){
            if(filaB[i]=="V"){
              nota = nota+1;
              $('#colB'+i).css("background-color", "green");
            }
            else{
              $('#colB'+i).css("background-color", "red");
            }
          }
          else{
            if(filaB[i]=="F"){
              nota = nota+1;
              $('#colB'+i).css("background-color", "green");
            }
            else{
              $('#colB'+i).css("background-color", "red");
            }
          }
          }

        for(var i=0; i<=8; i++){
         if(i==1 || i==3 || i==5 || i==7){
            if(filaC[i]=="V"){
              nota = nota+1;
              $('#colC'+i).css("background-color", "green");
            }
            else{
              $('#colC'+i).css("background-color", "red");
            }
          }
          else{
            if(filaC[i]=="F"){
              nota = nota+1;
              $('#colC'+i).css("background-color", "green");
            }
            else{
              $('#colC'+i).css("background-color", "red");
            }
          }
          }

        for(var i=0; i<=8; i++){
          if(filaD[i]=="F"){
              nota = nota+1;
              $('#colD'+i).css("background-color", "green");
            }
            else{
              $('#colD'+i).css("background-color", "red");
            }
          }       

    var notaFinal = (nota*10)/32;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });