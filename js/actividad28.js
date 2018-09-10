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
    $("#contenido1").append('');
    var aleatorio=0;
    var pregunta = [];
    pregunta[0] = '<p><label id="pregunta1">Exa (E) = 1 000 000 000 000 000 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resA"><label>&nbsp;=&nbsp;</label> 10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resA1"></sup>';
    pregunta[1] = '<p><label id="pregunta1">Peta (P) = 1 000 000 000 000 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resB"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resB1"></sup>';
    pregunta[2] = '<p><label id="pregunta1">Tera (T) = 1 000 000 000 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resC"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resC1"></sup>';
    pregunta[3] = '<p><label id="pregunta1">Giga (G) = 1 000 000 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resD"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resD1"></sup>';
    pregunta[4] = '<p><label id="pregunta1">Mega (M) = 1 000 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resE"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resE1"></sup>';
    pregunta[5] = '<p><label id="pregunta1">Kilo (K) = 1 000</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resF"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resF1"></sup>';
    pregunta[6] = '<p><label id="pregunta1">Hecto (h) = 1 00</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resG"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resG1"></sup>';
    pregunta[7] = '<p><label id="pregunta1">Deca (da) = 1 0</label></p><input type="text" style="text-align: center;width:50px;height:20px; font-size: 12px" id="resH"><label>&nbsp;=&nbsp;</label>10 <sup><input type="text" style="text-align: center;width:40px;height:20px; font-size: 12px" id="resH1"></sup>';
    debugger;
    aleatorio = Math.round(Math.random() * (3 - 1) + 1)
    console.log(aleatorio)
    if(aleatorio == 1){
      $("#contenido1").append(pregunta);
    }else if(aleatorio == 2){
      $("#contenido1").append(pregunta);
    }
    else{
      $("#contenido1").append(pregunta);
    }   
  };
  function Cargar(){
   $('#contenido1').html('');
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Respuestas Txt
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    var r5 = 0;
    var r6 = 0;
    var r7 = 0;
    var r8 = 0;

    var rA1 = 0;
    var rB2 = 0;
    var rC3 = 0;
    var rD4 = 0;
    var rE5 = 0;
    var rF6 = 0;
    var rG7 = 0;
    var rH8 = 0;
    


 debugger;
      r1 = $("#resA").val();
      
      r2 = $("#resB").val();
      r3 = $("#resC").val();
      r4 = $("#resD").val();
      r5 = $("#resE").val();
      r6 = $("#resF").val();
      r7 = $("#resG").val();
      r8 = $("#resH").val();
      
      rA1 = $("#resA1").val();
      rA1.toLowerCase();
      rB2 = $("#resB1").val();
      rB2.toLowerCase();
      rC3 = $("#resC1").val();
      rC3.toLowerCase();
      rD4 = $("#resD1").val();
      rD4.toLowerCase();
      rE5 = $("#resE1").val();
      rE5.toLowerCase();
      rF6 = $("#resF1").val();
      rF6.toLowerCase();
      rG7 = $("#resG1").val();
      rG7.toLowerCase();
      rH8 = $("#resH1").val();
      rH8.toLowerCase();
      
      if(r1 == "Exa (E)"){
        nota = nota + 1;
        $('#resA').css("background-color", "green");
        }
        else{
          $('#resA').css("background-color", "red");
        }
       if(r2=="Peta (P)"){
        nota = nota + 1;
        $('#resB').css("background-color", "green");
        }
        else{
          $('#resB').css("background-color", "red");
        }
        if(r3=="Tera (T)"){
        nota = nota + 1;
        $('#resC').css("background-color", "green");
        }
        else{
          $('#resC').css("background-color", "red");
        }
        if(r4=="Giga (G)"){
        nota = nota + 1;
        $('#resD').css("background-color", "green");
        }
        else{
          $('#resD').css("background-color", "red");
        }
        if(r5=="Mega (M)"){
        nota = nota + 1;
        $('#resE').css("background-color", "green");
        }
        else{
          $('#resE').css("background-color", "red");
        }
        if(r6=="Kilo (K)"){
        nota = nota + 1;
        $('#resF').css("background-color", "green");
        }
        else{
          $('#resF').css("background-color", "red");
        }
        if(r7=="Hecto (H)"){
        nota = nota + 1;
        $('#resG').css("background-color", "green");
        }
        else{
          $('#resG').css("background-color", "red");
        }
        if(r8=="Deca (da)"){
        nota = nota + 1;
        $('#resH').css("background-color", "green");
        }
        else{
          $('#resH').css("background-color", "red");
        }

        if(rA1 == "18"){
        nota = nota + 1;
        $('#resA1').css("background-color", "green");
        }
        else{
          $('#resA1').css("background-color", "red");
        }
       if(rB2=="15"){
        nota = nota + 1;
        $('#resB1').css("background-color", "green");
        }
        else{
          $('#resB1').css("background-color", "red");
        }
        if(rC3=="12"){
        nota = nota + 1;
        $('#resC1').css("background-color", "green");
        }
        else{
          $('#resC1').css("background-color", "red");
        }
        if(rD4=="9"){
        nota = nota + 1;
        $('#resD1').css("background-color", "green");
        }
        else{
          $('#resD1').css("background-color", "red");
        }
        if(rE5=="6"){
        nota = nota + 1;
        $('#resE1').css("background-color", "green");
        }
        else{
          $('#resE1').css("background-color", "red");
        }
        if(rF6=="3"){
        nota = nota + 1;
        $('#resF1').css("background-color", "green");
        }
        else{
          $('#resF1').css("background-color", "red");
        }
        if(rG7=="2"){
        nota = nota + 1;
        $('#resG1').css("background-color", "green");
        }
        else{
          $('#resG1').css("background-color", "red");
        }
        if(rH8=="1"){
        nota = nota + 1;
        $('#resH1').css("background-color", "green");
        }
        else{
          $('#resH1').css("background-color", "red");
        }

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(r4);
    console.log(r5);

    var notaFinal = (nota*10)/16;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });