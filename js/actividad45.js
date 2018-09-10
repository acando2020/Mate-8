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
    var valoresA1 = [];
    var valoresB = [];
    var valoresB1 = [];
    var valoresC = [];
    var valoresC1 = [];
    var valoresD = [];

    for(var i=0; i<=6; i++){
      valoresA[i] = Math.round(Math.random() * (10 - (-10)) + (-10)); 
      valoresA1[i] = Math.round(Math.random() * (10 - (-10)) + (-10)); 
      valoresB[i] = Math.round(Math.random() * (10 - (-10)) + (-10)); 
      valoresB1[i] = Math.round(Math.random() * (50 - 1) + 1); 
      valoresC[i] = Math.round(Math.random() * (50 - 1) + 1); 
      valoresC1[i] = Math.round(Math.random() * (50 - 1) + 1); 
      valoresD[i] = Math.round(Math.random() * (50 - 1) + 1);   

    } 
    $('#contenido').append('');
    for(var i=0; i<=4; i++){
      if(i==0)
      $("#contenido").append('<br><label id="valorA'+i+'">'+valoresA[i]+'</label> x <label id="valorA1'+i+'">'+valoresA1[i]+'</label><select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select><label id="valorB'+i+'">'+valoresB[i]+'</label> x <label id="valorB1'+i+'">'+valoresB1[i]+'</label><br>');
      else if(i==1)
      $("#contenido").append('<br><label id="valorA'+i+'">'+valoresA[i]+'</label> x <label id="valorA1'+i+'">'+valoresA1[i]+'</label> x <label id="valorC'+i+'">'+valoresC[i]+'</label><select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select><label id="valorB'+i+'">'+valoresB[i]+'</label> x <label id="valorB1'+i+'">'+valoresB1[i]+'</label> x <label id="valorC1'+i+'">'+valoresC1[i]+'</label><br>');
      else if(i==2)
      $("#contenido").append('<br><label id="valorA'+i+'">'+valoresA[i]+'</label> x (<label id="valorA1'+i+'">'+valoresA1[i]+'</label> + <label id="valorC'+i+'">'+valoresC[i]+'</label>)<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select>(<label id="valorB'+i+'">'+valoresB[i]+'</label> - <label id="valorB1'+i+'">'+valoresB1[i]+'</label>) x <label id="valorC1'+i+'">'+valoresC1[i]+'</label><br>');      
      else if(i==3)
      $("#contenido").append('<br><label id="valorA'+i+'">'+valoresA[i]+'</label> x (<label id="valorA1'+i+'">'+valoresA1[i]+'</label> - <label id="valorC'+i+'">'+valoresC[i]+'</label> + <label id="valorD'+i+'">'+valoresD[i]+'</label>)<select required="required" name="servicio" id="res'+i+'" style="text-align: center;font-size:20px ;width:40px;height:25px;"><option value="Seleccione una opción" selected="selected"></option><option value="M"><b>></b></option><option value="m"><b><</b></option><option value="i"><b>=</b></option></select><label id="valorB'+i+'">'+valoresB[i]+'</label> x (<label id="valorB1'+i+'">'+valoresB1[i]+'</label> + <label id="valorC1'+i+'">'+valoresC1[i]+'</label>)<br>');      

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
    //Variables Fila Respuesta
    var varA = [];
    var varA1 = [];
    var varB = [];
    var varB1 = [];
    var varC = [];
    var varC1 = [];
    var varD = [];

    var res3 = [];
    for(var i=0; i<=4; i++){
    varA[i] = parseInt($("#valorA"+i).text());
    varA1[i] = parseInt($("#valorA1"+i).text());
    varB[i] = parseInt($("#valorB"+i).text());
    varB1[i] = parseInt($("#valorB1"+i).text());
    varC[i] = parseInt($("#valorA1"+i).text());
    varC1[i] = parseInt($("#valorB"+i).text());
    varD[i] = parseInt($("#valorB1"+i).text());
    }  
    
    res3[0] = $( "#res0 option:selected").text();
    res3[1] = $( "#res1 option:selected").text();
    res3[2] = $( "#res2 option:selected").text();
    res3[3] = $( "#res3 option:selected").text();
    
    //console.log(res3);
    for(var i=0; i<=3; i++){
      console.log(res3[i]);
      switch (res3[i]){
        case "<":
        if(i==0){
        if(((varA[i])*(varA1[i])) < ((varB[i]) * (varB1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==1){
        if(((varA[i])*(varA1[i])*(varC[i])) < ((varB[i]) * (varB1[i])* (varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==2){
        if(((varA[i])*((varA1[i])+(varC[i]))) < (((varB[i]) - (varB1[i]))*(varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==3){
        if(((varA[i])*((varA1[i]) - (varC[i])+(varD[i]))) < ((varB[i]) * ((varB1[i])+(varC1[i])))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         }
        else{
          $('#res'+i).css("background-color", "red");
        }
       }
        break;

        case ">":
        if(i==0){
        if(((varA[i])*(varA1[i])) > ((varB[i]) * (varB1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==1){
        if(((varA[i])*(varA1[i])*(varC[i])) > ((varB[i]) * (varB1[i])* (varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==2){
        if(((varA[i])*((varA1[i])+(varC[i]))) > (((varB[i]) - (varB1[i]))*(varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==3){
        if(((varA[i])*((varA1[i]) - (varC[i])+(varD[i]))) > ((varB[i]) * ((varB1[i])+(varC1[i])))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         }
        else{
          $('#res'+i).css("background-color", "red");
        }
      }

        break;
        case "=":
        if(i==0){
        if(((varA[i])*(varA1[i])) == ((varB[i]) * (varB1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==1){
        if(((varA[i])*(varA1[i])*(varC[i])) == ((varB[i]) * (varB1[i])* (varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==2){
        if(((varA[i])*((varA1[i])+(varC[i]))) == (((varB[i]) - (varB1[i]))*(varC1[i]))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        }
        if(i==3){
        if(((varA[i])*((varA1[i]) - (varC[i])+(varD[i]))) == ((varB[i]) * ((varB1[i])+(varC1[i])))){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
         }
        else{
          $('#res'+i).css("background-color", "red");
        }
       }
        break;
       }
    }
    var notaFinal = (nota*10)/4;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });