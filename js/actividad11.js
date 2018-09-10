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
    var signo = ["+","-"];
    for(var i=0; i<=12; i++){
      valoresA[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=12; i++){
      valoresB[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    } 
    $('#contenido').append('');
    for(var i=0; i<=12; i++){
      if(i==3 || i==6 || i==9)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;(<label id="valorA'+i+'">'+valoresA[i]+'</label>) &nbsp; =&nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else if(i==2 || i==4 || i==8)
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp;<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else if(i==1 || i==5 || i==7)
      $("#contenido").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>) &nbsp<label id="signo'+i+'">'+signo[0]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
      else
      $("#contenido1").append('<br>(<label id="valorA'+i+'">'+valoresA[i]+'</label>)&nbsp&nbsp<label id="signo'+i+'">'+signo[1]+'</label>&nbsp;(<label id="valorB'+i+'">'+valoresB[i]+'</label>)&nbsp; = &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res'+i+'"><br>');
    }        
  };
  function Cargar(){
   $('#contenido1').html('');
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
    var varB = [];
    var res3 = [];
    var operador = [];
    var a=[];

    for(var i=0; i<=12; i++){
        varA[i] = parseInt($('#valorA'+i).text());
        varB[i] = parseInt($('#valorB'+i).text());
        if($('#signo'+i).text() == "+"){
          operador[i]="Suma";
        }
        else{
          operador[i]="Resta";
        }
        res3[i] = parseInt($('#res'+i).val());

    }   
    for(var i=0; i<=12; i++){
      //console.log(res3[i]);
      switch (operador[i]) {
        case "Suma":
        a[i] = varA[i]+varB[i]; 
        if(a[i] == res3[i]){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{

          $('#res'+i).css("background-color", "red");
        }
        break;

        case "Resta":
        a[i] = varA[i]-varB[i];
        if(a[i] == res3[i]){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
        }
        else{
          $('#res'+i).css("background-color", "red");
        }
        break;  
       }
     }
    var notaFinal = (nota*10)/varA.length;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+varA.length );
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });