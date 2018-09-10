 function Cargar(){
  $('#nota-informativa').slideUp('slow');
    $("#r1").css("background-color", "white");
    $("#r2").css("background-color", "white");
    $("#r3").css("background-color", "white");
    $("#r4").css("background-color", "white");
    $("#r5").css("background-color", "white");
    $("#r6").css("background-color", "white");
    $("#r7").css("background-color", "white");
    $("#r8").css("background-color", "white");
    $("#txtNota").text("");
    $("#Calificar").removeAttr("disabled");
    $('#Refrescar').attr('disabled', true);
    $('#r1').val("");
    $('#r2').val("");
    $('#r3').val("");
    $('#r4').val("");
    $('#r5').val("");
    $('#r6').val("");
    $('#r7').val("");
    $('#r8').val("");
    
    do{
    var a1 = 1 + Math.floor((Math.random() * 100) + 1);
    var rA1 = Math.pow(a1, 1/2);
    }while(rA1 % 1 != 0);
    do{
    var b1 = 1 + Math.floor((Math.random() * 100) + 1);
    var rB1 = Math.pow(b1, 1/2);
    }while(rB1 % 1 != 0);
    do{
    var c1 = 1 + Math.floor((Math.random() * 100) + 1);
    var rC1 = Math.pow(c1, 1/2);
    }while(rC1 % 1 != 0);
    
    do{
    var d1 = 1 + Math.floor((Math.random() * 100) + 1);
    var rD1 = Math.pow(d1, 1/2);
    }while(rD1 % 1 != 0);

    $("#a1").text(rA1);
    $("#a2").text(a1);
    $("#b1").text(rB1);
    $("#b2").text(b1);
    $("#c1").text(rC1);
    $("#c2").text(c1);
    $("#d1").text(rD1);
    $("#d2").text(d1);
    };
 
$(document).ready(function(){
Cargar();

$("#Calificar").click(function(){
nota = 0;
var a1 = $("#a1").text();
var a2 = $("#a2").text();
var b1 = $("#b1").text();
var b2 = $("#b2").text();
var c1 = $("#c1").text();
var c2 = $("#c2").text();
var d1 = $("#d1").text();
var d2 = $("#d2").text();

var rA1 = $("#r1").val();
var rA2 = $("#r2").val();
var rB1 = $("#r3").val();
var rB2 = $("#r4").val();
var rC1 = $("#r5").val();
var rC2 = $("#r6").val();
var rD1 = $("#r7").val();
var rD2 = $("#r8").val();

if(rA1 == a2){
   nota = nota+1;
   $("#r1").css("background-color", "green");
}
else{
  $("#r1").css("background-color", "red");
}
if(rA2 == a1){
   nota = nota+1;
   $("#r2").css("background-color", "green");
}
else{
  $("#r2").css("background-color", "red");
}

if(rB1 == b2){
   nota = nota+1;
   $("#r3").css("background-color", "green");
}
else{
  $("#r3").css("background-color", "red");
}

if(rB2 == b1){
   nota = nota+1;
   $("#r4").css("background-color", "green");
}
else{
  $("#r4").css("background-color", "red");
}

if(rC1 == c2){
   nota = nota+1;
   $("#r5").css("background-color", "green");
}
else{
  $("#r5").css("background-color", "red");
}

if(rC2 == c1){
   nota = nota+1;
   $("#r6").css("background-color", "green");
}
else{
  $("#r6").css("background-color", "red");
}

if(rD1 == d2){
   nota = nota+1;
   $("#r7").css("background-color", "green");
}
else{
  $("#r7").css("background-color", "red");
}

if(rD2 == d1){
   nota = nota+1;
   $("#r8").css("background-color", "green");
}
else{
  $("#r8").css("background-color", "red");
}
var notaFinal = (nota*10)/8;
    notaFinal = notaFinal.toFixed(2)
$("#txtNota").text(notaFinal +"/10");
$('#Calificar').attr('disabled', true);
$('#Refrescar').attr('disabled', false);
});
});
