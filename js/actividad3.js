 function Inicio(){
  $('#nota-informativa').slideUp('slow');
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#r6").css("background-color", "white");
    $("#txtNota").text("");
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $('#r1').val("");
    $('#r2').val("");
    $('#r3').val("");
    $('#r4').val("");
    $('#r5').val("");
    $('#r6').val("");
    var res = [];
    var dolar = [];
    var conta = 0;
    do{
    dolar[conta] = 10 * Math.floor((Math.random() * 2) + 1);
    res[conta] = dolar[conta] / 10;
    conta = conta+1;
    }while(res[conta] % 1 != 0 && conta !=5);
    
    var monto=[];
    var tipo = [];
    for(var i=0;i<=6;i++){
    monto[i] = 1 + Math.floor((Math.random() * 100) + 1);
    tipo [i] = Math.floor((Math.random() * 3) + 1);
    }
    var monedas = Math.floor((Math.random() * 3) +1)
    var mon50 = 0;
    var mon25 = 0;

    console.log(monto);
    console.log(tipo);
    console.log(dolar);
    console.log(500%10)
    var dinero = [];


    for(var i=1; i<=6;i++){
    cont = '<br>Si <label id="a'+i+'">0</label> <label id="dinero'+i+'"></label> de $<label id="monto'+i+'"></label> = <input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="ra'+i+'"><label id="res'+i+'"></label><input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="rb'+i+'"> => <input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="rc'+i+'"><br>';
    $("#contenido").append(cont);
    }

    for(var i=0; i<=6;i++){
    $("#a"+i).text(monto[i]);
    $("#monto"+i).text(dolar[i]);
    $("#dinero"+i).text(dinero[i]);
    $("#res"+i).text($("#dinero"+i).text()+" de ");
    }
    for(var i=0; i<=6; i++){
    if(tipo[i] == 1 &&  dolar[i]%10 ==0){

      dinero[i] = "billetes";
    }
    else if(tipo[i] == 2){
    dolar[i] = "0.50";
    dinero[i] = "monedas";
    }
    else{
     dolar[i] = 0.25;
     dinero[i] = "monedas";
    }
    }

    var cont = 0;
    
   

    for(var i=0; i<=6;i++){
    $("#a"+i).text(monto[i]);
    $("#monto"+i).text(dolar[i]);
    $("#dinero"+i).text(dinero[i]);
    $("#res"+i).text($("#dinero"+i).text()+" de ");
    }
   };

   function Cargar(){
   $('#contenido').html('');
   Inicio(); 
  }
 
$(document).ready(function(){
Cargar();
$("#Calificar").click(function(){
nota = 0;
 var ai = [];
 var ra = [];
 var rb = [];
 var rc = [];
 var monto = [];
 var d =[];
 var res = [];
 debugger;
 var resultado = 0
 for(var i=1; i<=6; i++){
  ai[i] = $("#a"+i).text();
  monto[i] =parseFloat($("#monto"+i).text());
  ra[i] = parseFloat($("#ra"+i).val());
  rb[i] = parseFloat($("#rb"+i).val());
  rc[i] = parseFloat($("#rc"+i).val());
  d[i] = $("#dinero"+i).text();
  res[i] = monto[i]*ai[i];
  resultado = parseFloat(resultado) + parseFloat(res[i]); 
 } 

for(var n=1; n<=6; n++){ 
if(ai[n]==ra[n] && monto[n]==rb[n]){
   nota = nota+3;
   $("#ra"+n).css("background-color", "green");
   $("#rb"+n).css("background-color", "green");
}
else{
  $("#ra"+n).css("background-color", "red");
  $("#rb"+n).css("background-color", "red");
}
if(res[n] == rc[n]){
   nota = nota+2;
   $("#ra"+n).css("background-color", "green");
   $("#rb"+n).css("background-color", "green");
   $("#rc"+n).css("background-color", "green");
}
else{
  $("#ra"+n).css("background-color", "red");
  $("#rb"+n).css("background-color", "red");
  $("#rc"+n).css("background-color", "red");
}
}
if($('#resultado').val() == resultado){
  nota = nota+1;
  $("#resultado").css("background-color", "green");
}
else{
  $("#resultado").css("background-color", "red");
}
var notaFinal = (nota*10)/19;
    notaFinal = notaFinal.toFixed(2);
$("#txtNota").text(+notaFinal +"/10");
$('#Calificar').attr('disabled', true);
$('#Refrescar').attr('disabled', false);
});
});
