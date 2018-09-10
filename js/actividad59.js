  var tipo = [];
  var caso1a=[];
  var caso2a=[];
  var caso3a=[];
  var caso4a=[];
  var caso1b=[];
  var caso2b=[];
  var caso3b=[];
  var caso4b=[];
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
    $('#contenido').append('');
    $('#contenido1').append('');
    var conta=0;
    var conta1=0;
    
    var arrA =[];
    var arrB =[];
    var arrC =[];
    var pos =[];
    var celdas =[];
    var celdas1 =[];
    for(var i=0; i<=6; i++){
     pos[i] = Math.round(Math.random() * (3 - 1) + 1);       
    }
    for(var i=0; i<=6; i++){
    arrA[i] = 1 + Math.round(Math.random() * (9 - (-9)) + (-9)); 
    arrB[i] = 1 + Math.round(Math.random() * (9 - (-9)) + (-9));
    arrC[i] = 1 + Math.round(Math.random() * (9 - (-9)) + (-9));
     
    }

    arrA = jQuery.unique(arrA);
    arrB = jQuery.unique(arrB);

   
    // Matriz A
    if(pos[0] == 1){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+ (arrA[0]-(arrB[0]+arrC[0])) +'</td>';
      else if(i==4) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+arrA[0]+'</td>';
      else if(i==7) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]+(arrB[0]+arrC[0]))+'</td>';
      else if(i==6) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]-(arrC[0]))+'</td>';
      else
      celdas[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="res'+i+'"/></td>';
      }
      tipo[0] = 3;
      caso1a[0] = (arrA[0]+arrB[0]);
      caso1a[1] = (arrA[0]+arrC[0]);
      caso1a[2] = (arrA[0]-(arrB[0]-arrC[0]));
      caso1a[3] = (arrA[0]+(arrB[0]-arrC[0]));
      caso1a[4] = (arrA[0]-arrB[0]);
    } 
    if(pos[0] == 2){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+ (arrA[0]-(arrB[0]+arrC[0])) +'</td>';
      else if(i==4) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+arrA[0]+'</td>';
      else if(i==7) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]+(arrB[0]+arrC[0]))+'</td>';
      else if(i==8) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+((arrA[0])-(arrB[0]))+'</td>';
      else
      celdas[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="res'+i+'"/></td>';
      }
      tipo[0] = 4;
      caso2a[0] = (arrA[0]+arrB[0]);
      caso2a[1] = (arrA[0]+arrC[0]);
      caso2a[2] = (arrA[0]-(arrB[0]-arrC[0]));
      caso2a[3] = (arrA[0]+(arrB[0]-arrC[0]));
      caso2a[4] = (arrA[0]-arrC[0]);
    }
    if(pos[0] == 3){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]-(arrB[0]+arrC[0]))+'</td>';
      else if(i==4) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+arrA[0]+'</td>';
      else if(i==7) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]+(arrB[0]+arrC[0]))+'</td>';
      else if(i==2) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+ ((arrA[0])+(arrC[0])) +'</td>';
      else
      celdas[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="res'+i+'"/></td>';
      }
      tipo[0] = 5;
      caso3a[0] = (arrA[0]+arrB[0]);
      caso3a[1] = (arrA[0]-(arrB[0]-arrC[0]));
      caso3a[2] = (arrA[0]+(arrB[0]-arrC[0]));
      caso3a[3] = (arrA[0]-arrC[0]);
      caso3a[4] = (arrA[0]-arrB[0]);
    }
    if(pos[0] == 4){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+(arrA[0]-(arrB[0]+arrC[0]))+'</td>';
      else if(i==4) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+arrA[0]+'</td>';
      else if(i==7) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+((arrA[0])+(arrB[0]+arrC[0]))+'</td>';
      else if(i==0) 
      celdas[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="a'+i+'" style="width:50px">'+ ((arrA[0])+(arrB[0]))+'</td>';
      else
      celdas[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="res'+i+'"/></td>';
      }
      tipo[0] = 6;
      caso4a[0] = (arrA[0]+arrC[0]);
      caso4a[1] = (arrA[0]-(arrB[0]-arrC[0]));
      caso4a[2] = (arrA[0]+(arrB[0]-arrC[0]));
      caso4a[3] = (arrA[0]-arrC[0]);
      caso4a[4] = (arrA[0]-arrB[0]);
      
    }


     if(pos[1] == 1){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1]-(arrB[1]+arrC[1]))+'</td>';
      else if(i==4) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+arrA[1]+'</td>';
      else if(i==7) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1]+(arrB[1]+arrC[1]))+'</td>';
      else if(i==6) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+((arrA[1])-(arrC[1]))+'</td>';
      else
      celdas1[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="resB'+i+'"/></td>';
      }
      tipo[1] = 3;
      caso1b[0] = (arrA[1]+arrB[1]);
      caso1b[1] = (arrA[1]+arrC[1]);
      caso1b[2] = (arrA[1]-(arrB[1]-arrC[1]));
      caso1b[3] = (arrA[1]+(arrB[1]-arrC[1]));
      caso1b[4] = (arrA[1]-arrB[1]);
    } 
    if(pos[1] == 2){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="ab'+i+'" style="width:50px">'+(arrA[1]-(arrB[1]+arrC[1]))+'</td>';
      else if(i==4) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1])+'</td>';
      else if(i==7) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1]+(arrB[1]+arrC[1]))+'</td>';
      else if(i==8) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+((arrA[1])-(arrB[1]))+'</td>';
      else
      celdas1[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="resB'+i+'"/></td>';
      }
      tipo[1] = 4;
      caso2b[0] = (arrA[1]+arrB[1]);
      caso2b[1] = (arrA[1]+arrC[1]);
      caso2b[2] = (arrA[1]-(arrB[1]-arrC[1]));
      caso2b[3] = (arrA[1]+(arrB[1]-arrC[1]));
      caso2b[4] = (arrA[1]-arrC[1]);
    }
    if(pos[1] == 3){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1]-(arrB[1]+arrC[1]))+'</td>';
      else if(i==4) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+arrA[1]+'</td>';
      else if(i==7) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1]+(arrB[1]+arrC[1]))+'</td>';
      else if(i==2) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+ (arrA[1]+arrC[1])+'</td>';
      else
      celdas1[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="resB'+i+'"/></td>';
      }
      tipo[1] = 5;
      caso3b[0] = (arrA[1]+arrB[1]);
      caso3b[1] = (arrA[1]-(arrB[1]-arrC[1]));
      caso3b[2] = (arrA[1]+(arrB[1]-arrC[1]));
      caso3b[3] = (arrA[1]-arrC[1]);
      caso3b[4] = (arrA[1]-arrB[1]);
    }
    if(pos[1] == 4){
     for(var i=0; i<=8; i++){
      if(i== 1) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1])-((arrB[1])+(arrC[1]))+'</td>';
      else if(i==4) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+arrA[1]+'</td>';
      else if(i==7) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+(arrA[1])+((arrB[1])+(arrC[1]))+'</td>';
      else if(i==0) 
      celdas1[i] ='<td style="text-align:center; border :1px solid black; width:50px"><label id="b'+i+'" style="width:50px">'+ ((arrA[1])+(arrB[1]))+'</td>';
      else
      celdas1[i] ='<td style="text-align:center;border :1px solid black; width:50px"><input style="text-align:center;width:50px" type="number" id="resB'+i+'"/></td>';
      }
      tipo[1] = 6;
      caso4b[0] = (arrA[1]+arrC[1]);
      caso4b[1] = (arrA[1]-(arrB[1]-arrC[1]));
      caso4b[2] = (arrA[1]+(arrB[1]-arrC[1]));
      caso4b[3] = (arrA[1]-arrC[1]);
      caso4b[4] = (arrA[1]-arrB[1]);
      }
    
    // console.log("A:"+arrA[0]+","+arrA[1]);
    // console.log("B:"+arrB[0]+","+arrB[1]);
    // console.log("C:"+arrC[0]+","+arrC[1]);
    
    // console.log(caso1a);
    // console.log(caso2a);
    // console.log(caso3a);
    // console.log(caso4a);

    // console.log(caso1b);
    // console.log(caso2b);
    // console.log(caso3b);
    // console.log(caso4b);


    // console.log(arrB[0]+arrB[1]+arrB[2]);
    // console.log(tipo)
    $("#contenido").append('<tr>'+celdas[0]+celdas[1]+celdas[2]+'</tr>'+
                           '<tr>'+celdas[3]+celdas[4]+celdas[5]+'</tr>'+
                           '<tr>'+celdas[6]+celdas[7]+celdas[8]+'</tr>');

    $("#contenido1").append('<tr>'+celdas1[0]+celdas1[1]+celdas1[2]+'</tr>'+
                           '<tr>'+celdas1[3]+celdas1[4]+celdas1[5]+'</tr>'+
                           '<tr>'+celdas1[6]+celdas1[7]+celdas1[8]+'</tr>'); 
  };
  function Cargar(){
   $('#contenido').html('');
   $('#contenido1').html('');
   Inicio(); 
  }
$(document).ready(function(){
  Inicio();
  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Respuestas Txt
    var filaA = [];
    var filaB = [];
    var filaC = [];
    var filaD = [];
    var filaE = [];
    var resA = [];
    var resB = [];

    //mATRIZ A
    debugger;
    if(tipo[0] == 3){
       if(caso1a[0] == $("#res0").val()){
          nota = nota+1;
          $('#res0').css("background-color", "green");
        }
        else{
        $('#res0').css("background-color", "red");
        }

        if(caso1a[1] == $("#res2").val()){
          nota = nota+1;
          $('#res2').css("background-color", "green");
        }
        else{
        $('#res2').css("background-color", "red");
        }

        if(caso1a[2] == $("#res3").val()){
          nota = nota+1;
          $('#res3').css("background-color", "green");
        }
        else{
        $('#res3').css("background-color", "red");
        }

        if(caso1a[3] == $("#res5").val()){
          nota = nota+1;
          $('#res5').css("background-color", "green");
        }
        else{
        $('#res5').css("background-color", "red");
        }

        if(caso1a[4] == $("#res8").val()){
          nota = nota+1;
          $('#res8').css("background-color", "green");
        }
        else{
        $('#res8').css("background-color", "red");
        }
     }

     if(tipo[0] == 4){

      if(caso2a[0] == $("#res0").val()){
          nota = nota+1;
          $('#res0').css("background-color", "green");
        }
        else{
        $('#res0').css("background-color", "red");
        }

        if(caso2a[1] == $("#res2").val()){
          nota = nota+1;
          $('#res2').css("background-color", "green");
        }
        else{
        $('#res2').css("background-color", "red");
        }

        if(caso2a[2] == $("#res3").val()){
          nota = nota+1;
          $('#res3').css("background-color", "green");
        }
        else{
        $('#res3').css("background-color", "red");
        }

        if(caso2a[3] == $("#res5").val()){
          nota = nota+1;
          $('#res5').css("background-color", "green");
        }
        else{
        $('#res5').css("background-color", "red");
        }

        if(caso2a[4] == $("#res6").val()){
          nota = nota+1;
          $('#res6').css("background-color", "green");
        }
        else{
        $('#res6').css("background-color", "red");
        }
      }

     if(tipo[0] == 5){

     if(caso3a[0] == $("#res0").val()){
          nota = nota+1;
          $('#res0').css("background-color", "green");
        }
        else{
        $('#res0').css("background-color", "red");
        }

        if(caso3a[1] == $("#res3").val()){
          nota = nota+1;
          $('#res3').css("background-color", "green");
        }
        else{
        $('#res3').css("background-color", "red");
        }

        if(caso3a[2] == $("#res5").val()){
          nota = nota+1;
          $('#res5').css("background-color", "green");
        }
        else{
        $('#res5').css("background-color", "red");
        }

        if(caso3a[3] == $("#res6").val()){
          nota = nota+1;
          $('#res6').css("background-color", "green");
        }
        else{
        $('#res6').css("background-color", "red");
        }

        if(caso3a[4] == $("#res8").val()){
          nota = nota+1;
          $('#res8').css("background-color", "green");
        }
        else{
        $('#res8').css("background-color", "red");
        }
      }
     
     if(tipo[0] == 6){
       if(caso4a[0] == $("#res2").val()){
          nota = nota+1;
          $('#res2').css("background-color", "green");
        }
        else{
        $('#res2').css("background-color", "red");
        }

        if(caso4a[1] == $("#res3").val()){
          nota = nota+1;
          $('#res3').css("background-color", "green");
        }
        else{
        $('#res3').css("background-color", "red");
        }

        if(caso4a[2] == $("#res5").val()){
          nota = nota+1;
          $('#res5').css("background-color", "green");
        }
        else{
        $('#res5').css("background-color", "red");
        }

        if(caso4a[3] == $("#res6").val()){
          nota = nota+1;
          $('#res6').css("background-color", "green");
        }
        else{
        $('#res6').css("background-color", "red");
        }

        if(caso4a[4] == $("#res8").val()){
          nota = nota+1;
          $('#res8').css("background-color", "green");
        }
        else{
        $('#res8').css("background-color", "red");
        }   
     }

     //valores de Matriz B
     debugger; 
     if(tipo[1] == 3){
if(caso1b[0] == $("#resB0").val()){
          nota = nota+1;
          $('#resB0').css("background-color", "green");
        }
        else{
        $('#resB0').css("background-color", "red");
        }

        if(caso1b[1] == $("#resB2").val()){
          nota = nota+1;
          $('#resB2').css("background-color", "green");
        }
        else{
        $('#resB2').css("background-color", "red");
        }

        if(caso1b[2] == $("#resB3").val()){
          nota = nota+1;
          $('#resB3').css("background-color", "green");
        }
        else{
        $('#resB3').css("background-color", "red");
        }

        if(caso1b[3] == $("#resB5").val()){
          nota = nota+1;
          $('#resB5').css("background-color", "green");
        }
        else{
        $('#resB5').css("background-color", "red");
        }

        if(caso1b[4] == $("#resB8").val()){
          nota = nota+1;
          $('#resB8').css("background-color", "green");
        }
        else{
        $('#resB8').css("background-color", "red");
        }
    
     }

     if(tipo[1] == 4){
      if(caso2b[0] == $("#resB0").val()){
          nota = nota+1;
          $('#resB0').css("background-color", "green");
        }
        else{
        $('#resB0').css("background-color", "red");
        }

        if(caso2b[1] == $("#resB2").val()){
          nota = nota+1;
          $('#resB2').css("background-color", "green");
        }
        else{
        $('#resB2').css("background-color", "red");
        }

        if(caso2b[2] == $("#resB3").val()){
          nota = nota+1;
          $('#resB3').css("background-color", "green");
        }
        else{
        $('#resB3').css("background-color", "red");
        }

        if(caso2b[3] == $("#resB5").val()){
          nota = nota+1;
          $('#resB5').css("background-color", "green");
        }
        else{
        $('#resB5').css("background-color", "red");
        }

        if(caso2b[4] == $("#resB6").val()){
          nota = nota+1;
          $('#resB6').css("background-color", "green");
        }
        else{
        $('#resB6').css("background-color", "red");
        }    
     }

     if(tipo[1] == 5){
     if(caso3b[0] == $("#resB0").val()){
          nota = nota+1;
          $('#resB0').css("background-color", "green");
        }
        else{
        $('#resB0').css("background-color", "red");
        }

        if(caso3b[1] == $("#resB3").val()){
          nota = nota+1;
          $('#resB3').css("background-color", "green");
        }
        else{
        $('#resB3').css("background-color", "red");
        }

        if(caso3b[2] == $("#resB5").val()){
          nota = nota+1;
          $('#resB5').css("background-color", "green");
        }
        else{
        $('#resB5').css("background-color", "red");
        }

        if(caso3b[3] == $("#resB6").val()){
          nota = nota+1;
          $('#resB6').css("background-color", "green");
        }
        else{
        $('#resB6').css("background-color", "red");
        }

        if(caso3b[4] == $("#resB8").val()){
          nota = nota+1;
          $('#resB8').css("background-color", "green");
        }
        else{
        $('#resB8').css("background-color", "red");
        }
     }
     
     if(tipo[1] == 6){
     if(caso4b[0] == $("#resB2").val()){
          nota = nota+1;
          $('#resB2').css("background-color", "green");
        }
        else{
        $('#resB2').css("background-color", "red");
        }

        if(caso4b[1] == $("#resB3").val()){
          nota = nota+1;
          $('#resB3').css("background-color", "green");
        }
        else{
        $('#resB3').css("background-color", "red");
        }

        if(caso4b[2] == $("#resB5").val()){
          nota = nota+1;
          $('#resB5').css("background-color", "green");
        }
        else{
        $('#resB5').css("background-color", "red");
        }

        if(caso4b[3] == $("#resB6").val()){
          nota = nota+1;
          $('#resB6').css("background-color", "green");
        }
        else{
        $('#resB6').css("background-color", "red");
        }

        if(caso4b[4] == $("#resB8").val()){
          nota = nota+1;
          $('#resB8').css("background-color", "green");
        }
        else{
        $('#resB8').css("background-color", "red");
        }    
     }
    var notaFinal = (nota*10)/10;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });