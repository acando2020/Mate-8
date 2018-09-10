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
    $("#contenido").html('');
    $("#contenido2").html('');
    var obj1 = {"V":"V","F":"F"};
    var obj2 = {"F":"F","V":"V"};
    var i=1;
    var preguntas = [];
    var respuestas = []; 
    preguntas[0] = '<label style="font-size:14px;font-weight:normal; font-style: normal;">Anuncian por la radio que la temperatura en la capital de Mongolia está bajando 2°C cada media hora, si la temperatura en la tabla se registró a las 16h00,¿a qué temperatura se encontrará a las 20h00?</label><br><br>';
    preguntas[1] = '<label style="font-size:14px;font-weight:normal;">Hace frío en el Parque Nacional Denali o hace calor en el Valle de la Muerte</label><br><br>';
    preguntas[2] = '<label style="font-size:14px;font-weight:normal;">Hace frío en el Parque Nacional Denali y hace calor en el valle de la Muerte</label><br><br>';
    preguntas[3] = '<label style="font-size:14px;font-weight:normal;">No hace frío en el Parque Nacional Denali y hace calor en el Valle de la Muerte</label><br><br>';
    preguntas[4] = '<label style="font-size:14px;font-weight:normal;">No hace frío en el Parque Nacional Denali o no hace calor en el valle de la Muerte</label><br><br>';
    preguntas[5] = '<label style="font-size:14px;font-weight:normal;">Hace frío en el Parque Nacional Denali y no hace calor en el Parque Nacional Denali</label><br><br>';
    
    for(var i=0; i<=5 ;i++){
      respuestas[i] = '<select id="r'+i+'">'+
                      '<option value="0" selected="selected">Seleccione una opción</option>'+
                      '<option value="V">Verdadero</option>'+
                      '<option value="F°">Falso</option>'+
                      '</select>';
      }
      $("#contenido").append(preguntas[0]);
      for(var i=1; i<=5; i++)
      $("#texto"+i).append(respuestas[i]);
      $("#contenido2").append(preguntas[1] + preguntas[2] +preguntas[3] + preguntas[4] +preguntas[5])
      
      };




  function Cargar(){
   debugger; 
   for(var i=0; i<=5;i++) 
   $("#texto"+i).html('');
   $("#contenido").append('');
   $("#contenido2").append('');
   $('#res1a').css("background-color", "white");

      
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();

  $("#Calificar").click(function(){
    $('#Calificar').attr('disabled', true);
    var nota = 0;
    //Variables Respuestas Txt
    var preg = [];
    var res = [];
    var corr = [];
    var a = [];
    debugger;
    res[1] = $('#r1 option:selected').text();
    res[2] = $('#r2 option:selected').text();
    res[3] = $('#r3 option:selected').text();
    res[4] = $('#r4 option:selected').text();
    res[5] = $('#r5 option:selected').text();
    res[6] = $('#res1a').val();
    for(var i=0; i<=6; i++){
      preg[i] = parseInt($("#a"+i).text());
      if(i==6)
      preg[i] = $("#a"+i).text();
    }
    console.log(preg)
    debugger; 
    for(var i=1; i<=7; i++){
      if(i==1 || i==2){
      if(res[i] =="Verdadero"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
      }
      if(i==3 || i==4 || i==5){
      if(res[i] =="Falso"){
          nota = nota+1;
          $('#r'+i).css("background-color", "green");
        }
        else{
          $('#r'+i).css("background-color", "red");
        }
      }
      if(i==6){
      if(res[i] =="-32°C"){
          nota = nota+1;
          $('#res1a').css("background-color", "green");
        }
        else{
          $('#res1a').css("background-color", "red");
        }
      }
    } 
    console.log(res) 
        
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });