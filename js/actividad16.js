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
    var valoresC = [];
    var valoresD = [];
    var orden = Math.round(Math.random() * (2 - 1) + 1);
    var signo = ["."];
    var texto1 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="res1">';
    var texto2 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px" id="res2">';
    var contenido1 = '<svg width=300 height=150><rect x=10 y=20 width="300" height="100" fill="#ff4d4d"/><text x=120 y=40>3cm</text><text x=20 y=80>2cm</text></svg>';
    var contenido2 = '<svg  width=300 height=150><rect x= 10 y=10 width="65" height="140" fill="#0080ff"/><text x=17 y=30>2cm</text><rect x=75 y=10 width="300" height="140" fill="#ffff80"/><text x=170 y=30>5cm</text><text x=250 y=80>3cm</text></svg>';
    if(orden == 1){
      $("#contenido1").append(contenido1);
      $("#contenido2").append(contenido2);
      $("#texto1").append(texto1);
      $("#texto2").append(texto2);
    }
    else{
    $("#contenido1").append(contenido2);
    $("#contenido2").append(contenido1);
    $("#texto1").append(texto2);
    $("#texto2").append(texto1);
  }
  };
  function Cargar(){
   $('#contenido1').html('');
   $('#contenido2').html('');
   $('#texto1').html('');
   $('#texto2').html('');

   
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    if($("#res1").val() == 6){
      nota = nota+1;
      $('#res1').css("background-color", "green");}
    
    else{
      $('#res1').css("background-color", "red");}
    if($("#res2").val() == 21){
    nota = nota + 1;
    $('#res2').css("background-color", "green");}
    else{
      $("#res2").css("background-color", "red");}
    

debugger;
    var notaFinal =0; 
    notaFinal = (nota*10);
    notaFinal = notaFinal/2;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });