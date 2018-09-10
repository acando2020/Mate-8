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
    var ejemplo = "";
    var region = []; 
    region[0] = '<tr><td style="text-align: center">América del Sur y Central</td><td style="text-align: center"><input type="number"  style="text-align: center;width:110px;height:20px; font-size: 12px" id="resB"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseB">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpB"></SUP></td></tr>';
    region[1] = '<tr><td style="text-align: center">Europa</td><td style="text-align: center"><input type="number"  style="text-align: center;width:110px;height:20px; font-size: 12px" id="resC"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseC">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpC"></SUP></td></tr>';
    region[2] = '<tr><td style="text-align: center">Medio Oriente</td><td style="text-align: center"><input type="number"  style="text-align: center;width:110px;height:20px; font-size: 12px" id="resD"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseD">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpD"></SUP></td></tr>';
    region[3] = '<tr><td style="text-align: center">Africa</td><td style="text-align: center"><input type="number"  style="text-align: center;width:110px;height:20px; font-size: 12px" id="resE"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseE">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpE"></SUP></td></tr>';
    region[4] = '<tr><td style="text-align: center">Oceania</td><td style="text-align: center"><input type="number"  style="text-align: center;width:110px;height:20px; font-size: 12px" id="resF"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseF">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpF"></SUP></td></tr>';
    var region1 = []; 
    region1[1] = '<tr><td style="text-align: center">América del Sur y Central</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resB"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseB">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpB"></SUP></td></tr>';
    region1[2] = '<tr><td style="text-align: center">Europa</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resC"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseC">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpC"></SUP></td></tr>';
    region1[3] = '<tr><td style="text-align: center">Medio Oriente</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resD"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseD">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpD"></SUP></td></tr>';
    region1[4] = '<tr><td style="text-align: center">Africa</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resE"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseE">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpE"></SUP></td></tr>';
    region1[0] = '<tr><td style="text-align: center">Oceania</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resF"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseF">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpF"></SUP></td></tr>';
    var region2 = []; 
    region2[4] = '<tr><td style="text-align: center">América del Sur y Central</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resB"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseB">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpB"></SUP></td></tr>';
    region2[3] = '<tr><td style="text-align: center">Europa</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resC"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseC">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpC"></SUP></td></tr>';
    region2[2] = '<tr><td style="text-align: center">Medio Oriente</td><td style="text-align: center"><input type="number"  step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resD"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseD">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpD"></SUP></td></tr>';
    region2[1] = '<tr><td style="text-align: center">Africa</td><td style="text-align: center"><input type="number"  step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resE"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseE">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpE"></SUP></td></tr>';
    region2[0] = '<tr><td style="text-align: center">Oceania</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resF"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseF">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpF"></SUP></td></tr>';
    var Total = '<tr><td style="text-align: center">Total</td><td style="text-align: center"><input type="number" step="0.10" style="text-align: center;width:110px;height:20px; font-size: 12px" id="resG"></td><td style="text-align: center"><input style="text-align: center;width:40px;height:20px; font-size: 12px" id="baseG">•<label>10</label><SUP><input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="ExpG"></SUP></td></tr>';
    ejemplo = '<tr><td style="text-align: center">América del Norte</td><td style="text-align: center"><label>217 000 000 000</label></td><td style="text-align: center"><label>2,1</label>•<label>10</label><SUP>11</SUP></td></tr>';

    aleatorio = Math.round(Math.random() * (3 - 1) + 1)
    console.log(aleatorio)
    if(aleatorio == 1){
      $("#contenido1").append(ejemplo+region+Total);
    }else if(aleatorio == 2){
      $("#contenido1").append(ejemplo+region1+Total);
      
    }
    else{
      $("#contenido1").append(ejemplo+region2+Total);
      
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
    var rB = parseInt($("#resB").val());
    var rC = parseInt($("#resC").val());
    var rD = parseInt($("#resD").val());
    var rE = parseInt($("#resE").val());
    var rF = parseInt($("#resF").val());
    var rG = parseInt($("#resG").val());

    var baseB = $("#baseB").val();
    var baseC = $("#baseC").val();
    var baseD = $("#baseD").val();
    var baseE = $("#baseE").val();
    var baseF = $("#baseF").val();
    var baseG = $("#baseG").val();
    
    var expB = $("#ExpB").val();
    var expC = $("#ExpC").val();
    var expD = $("#ExpD").val();
    var expE = $("#ExpE").val();
    var expF = $("#ExpF").val();
    var expG = $("#ExpG").val();
    debugger;
  
      if(rB == 325000000000){
        nota = nota + 1;
        $('#resB').css("background-color", "green");
        }
        else{
          $('#resB').css("background-color", "red");
        }
        if(baseB == "3,2"){
        nota = nota + 1;
        $('baseB').css("background-color", "green");
        }
        else{
          $('#baseB').css("background-color", "red");
        }
        if(expB == 11){
        nota = nota + 1;
        $('ExpB').css("background-color", "green");
        }
        else{
          $('#ExpB').css("background-color", "red");
        }

        if(rC == 141000000000){
        nota = nota + 1;
        $('#resC').css("background-color", "green");
        }
        else{
          $('#resC').css("background-color", "red");
        }
        if(baseC == "1,4"){
        nota = nota + 1;
        $('baseC').css("background-color", "green");
        }
        else{
          $('#baseC').css("background-color", "red");
        }
        if(expC == 11){
        nota = nota + 1;
        $('#ExpC').css("background-color", "green");
        }
        else{
          $('#ExpC').css("background-color", "red");
        }

        if(rD == 795000000000){
        nota = nota + 1;
        $('#resD').css("background-color", "green");
        }
        else{
          $('#resD').css("background-color", "red");
        }
        if(baseD == "7,9"){
        nota = nota + 1;
        $('#baseD').css("background-color", "green");
        }
        else{
          $('#baseD').css("background-color", "red");
        }
        if(expD == 11){
        nota = nota + 1;
        $('#ExpD').css("background-color", "green");
        }
        else{
          $('#ExpD').css("background-color", "red");
        }

        if(rE == 132000000000){
        nota = nota + 1;
        $('#resE').css("background-color", "green");
        }
        else{
          $('#resE').css("background-color", "red");
        }
        if(baseE == "1,3"){
        nota = nota + 1;
        $('#baseE').css("background-color", "green");
        }
        else{
          $('#baseE').css("background-color", "red");
        }
        if(expE == 11){
        nota = nota + 1;
        $('ExpE').css("background-color", "green");
        }
        else{
          $('#ExpE').css("background-color", "red");
        }

        if(rF == 41000000000){
        nota = nota + 1;
        $('#resF').css("background-color", "green");
        }
        else{
          $('#resF').css("background-color", "red");
        }
        if(baseF == "4,1"){
        nota = nota + 1;
        $('#baseF').css("background-color", "green");
        }
        else{
          $('#baseF').css("background-color", "red");
        }
        if(expF == 10){
        nota = nota + 1;
        $('#ExpF').css("background-color", "green");
        }
        else{
          $('#ExpF').css("background-color", "red");
        }

        if(rG == 1653000000000){
        nota = nota + 1;
        $('#resG').css("background-color", "green");
        }
        else{
          $('#resG').css("background-color", "red");
        }
        if(baseG == "1,6"){
        nota = nota + 1;
        $('baseG').css("background-color", "green");
        }
        else{
          $('#baseG').css("background-color", "red");
        }
        if(expG == 13){
        nota = nota + 1;
        $('ExpG').css("background-color", "green");
        }
        else{
          $('#ExpG').css("background-color", "red");
        }

    var notaFinal = (nota*10)/12;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });