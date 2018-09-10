  var valoresB = [];
  
  var valoresC = ['1','10','100','1000','10000','100000','1000000','10000000','100000000','1000000000','10000000000','100000000000','1000000000000','1000000000000'];
  
  var valoresC1 = ['1','0.1','0.01','0.001','0.0001','0.00001','0.000001','0.0000001','0.00000001','0.000000001','0.0000000001','0.00000000001','0.000000000001','0.0000000000001'];
    
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
    var valoresA = [];
    var a =0;
   debugger;
   do{
      valoresA[a] = Math.round(Math.random() * (99 - 2) + 2); 
      if(valoresA[a]%10 !=0){
      	a = a+1;
      }
    }while(a<=5);
    for(var i=0; i<=12; i++){
      valoresB[i] = Math.round(Math.random() * (11 - 2) + 2); 
    }
    // Caso A
    var cad1= [];
    var cad2= [];
    $('#contenido').append('');
    for(var i=0; i<=5; i++){
      if(i!=0){
       cad1[i] = '<br><label id="valorA'+i+'">'+valoresA[i] * valoresC[valoresB[i]]+'</label>'+
                 '<label>&nbsp; = &nbsp </label>'+
                 '<input type="number" style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'">'+
                 '<label> X 10</label>'+
                 '<SUP><input type="number" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>';
                  
      }
      else{
      cad1[i] = '<br><label id="valorA'+i+'">'+ valoresC1[valoresB[i]].concat(valoresA[i]) +'</label>'+
                 '<label>&nbsp; = &nbsp </label>'+
                 '<input type="number" style="text-align: center;width:40px;height:20px; font-size: 12px" id="res'+i+'">'+
                 '<label> X 10</label>'+
                 '<SUP><input type="number" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE'+i+'"></SUP><br>';
                 
      }
    }
    for(var i=0 ; i<=5; i++){
        if(i<3){
         $('#contenido1').append('<br>'+cad1[i]); 
        }
        else{
        $('#contenido').append('<br>'+cad1[i]); 
        }
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
    var p = []
    var varA = [];
    var varB = [];
    var expA = [];
    var eB = [];
    var res3 = [];
    var operador = [];
    var a=[];

    eB[0] = parseInt($('#expB0').text())
    eB[1] = parseInt($('#expB1').text())

    for(var i=0; i<=8;i++){
      if(i==0){
        p[i]= valoresC1[valoresB[i]];
        valoresB[i] = (valoresB[i]+1) * (-1);  
      }else{
        p[i] = valoresC[valoresB[i]];
        valoresB[i] = (valoresB[i]+1);  
      }
      
    }
    console.log("===>>"+ p);
    console.log("===>>"+ valoresB);
    
    var conta = []
    conta[0] = $('#valorA0').text().length;
    conta[0] = conta-3;
    debugger;
    for(var i=0; i<=5; i++){
      if(i==0){
      varB[i]= ($('#valorA'+i).text() * Math.pow(10,conta[0])).toFixed(1);
      }
      else{
      	   conta[i] = $('#valorA'+i).text().length;
      	   conta[i] =conta[i]-1;
            varB[i]= ($('#valorA'+i).text()/Math.pow(10,conta[i])).toFixed(1);
      }
      if($("#res"+i).val() == (varB[i])){
          nota = nota+1;
          $('#res'+i).css("background-color", "green");
      }
      else{
      	$('#res'+i).css("background-color", "red");   
      }
      if($('#rE'+i).val() == valoresB[i]){
      	nota= nota+1;
      	 $('#rE'+i).css("background-color", "green");
      }
      else{     
          $('#rE'+i).css("background-color", "red");
      }
    }
    console.log(varB);
    console.log(conta);

    var notaFinal = (nota*10)/12;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal+"/"+10);
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });