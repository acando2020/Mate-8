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
    $("#texto1").html('');
    var valoresA = [];
    var valoresB = [];
    var valoresC = [];
    var valoresD = [];
    var orden = Math.round(Math.random() * (2 - 1) + 1);
    var signo = ["."];
    var texto1 = '<br><label>C = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="res1">';
      $("#texto1").append(texto1);
  };
  function Cargar(){
  $('#texto2').html('');

   
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    if($("#res1").val() == 5){
      nota = nota+1;
      $('#res1').css("background-color", "green");}
    
    else{
      $('#res1').css("background-color", "red");}
   
    var notaFinal =0; 
    notaFinal = (nota*10);
    notaFinal = notaFinal/1;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });