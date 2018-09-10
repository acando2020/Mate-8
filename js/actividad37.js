  function Inicio() {
    $('#nota-informativa').slideUp('slow');
    var conta = 1;
    $("#Calificar").hide();
    $('#Refrescar').attr('disabled', true);
    $('#Terminar').hide();
    $('#pagina2').hide();
    $('#pregunta2').hide();
    $('#pre2').hide();
    $('#pregunta1').show();
    $('#pagina1').show();
    $('#combos').show();
    $('#Siguiente').show();
    var obj1 = "";  

    $( "#r1 option:selected").text();
    $( "#r2 option:selected").text();
    $( "#res0 option:selected").text();
    $( "#res1 option:selected").text();
    $( "#res2 option:selected").text();
    $( "#res3 option:selected").text();
    $( "#res4 option:selected").text();
    $( "#res5 option:selected").text();
    $( "#res6 option:selected").text();
    $( "#res20 option:selected").text();
    $( "#res21 option:selected").text();
    $( "#res22 option:selected").text();
    $( "#res23 option:selected").text();




    var combo1 = '<select id="r1">'+
                 '<option value="0" selected="selected">Seleccione una opción</option>'+
                 '<option value="9°">9°</option>'+
                 '<option value="-7°">-7°</option>'+
                 '</select>';
    var combo2 = '<select id="r2">'+
                 '<option value="0" selected="selected">Seleccione una opción</option>'+
                 '<option value="9°">9°</option>'+
                 '<option value="-7°">-7°</option>'+
                 '</select>';


    var combos = [];
   

    for(var i=0; i<=6;i++){
    combos[i] =  '<select id="res'+i+'">'+
                 '<option value="0" selected="selected">Seleccione una opción</option>'+
                 '<option value="a">(-7°)Knittefeld</option>'+
                 '<option value="e">(-2°)Eisenstadt,Kufstein</option>'+
                 '<option value="c">(-4°)Klagenfurt</option>'+
                 '<option value="d">(-3°)Sankt Pölten,Steyr, Innsbuck,Graz</option>'+
                 '<option value="b">(-6°)Leoben,Lienz,Villach</option>'+
                 '<option value="f">(-1°)Salzburgo,Bregenz</option>'+
                 '<option value="g">(0°)Linz,Wels</option>'+
                 '</select>'+
                 '</br></br>';
    }        
   

    var obj1 =  '<br><br><label>Cuál es la temperatura máxima que se registra?<label><br>'+ combo1 +  
                '<br><br><label>Cuál es la temperatura mínima que se registra?<label><br>'+ combo2 + 
                '<br><br><label>Cuáles son los lugares, ordenados del más frío al más'+
                'caliente,en Austria, cuando revisamos las temperaturas mínimas<label><br>'+ combos;



   $('#pregunta1').append(obj1);
   $('#combos').append(combos);
   $('#txtAct').text("1/2");

  };

  function Cargar(){
   $('#pregunta1').html('');
   $('#combos').html('');
   $('#pre2').hide();
   $('#pagina2').hide();
   $('#pregunta2').hide();
   $('#pregunta2').html('');

   Inicio(); 
  }
   var res = []; 
  function Siguiente(){
    $('#txtAct').text(" 2/2");
    res[0] = $("#r1 option:selected").text();
    res[1] = $("#r2 option:selected").text();
    res[2]= $("#res0 option:selected").text();
    res[3]= $("#res1 option:selected").text();
    res[4]= $("#res2 option:selected").text();
    res[5]= $("#res3 option:selected").text();
    res[6]= $("#res4 option:selected").text();
    res[7]= $("#res5 option:selected").text();
    res[8]= $("#res6 option:selected").text();
    $("#pagina1").hide();
    $("#pre1").hide();
    $("#pagina2").show();
    $("#pregunta2").show();
    $("#Terminar").show();
    $("#Siguiente").hide();
    $("#pre2").show();
    var combos2 = [];
     for(var i=0; i<=3;i++){
     combos2[i] =  '<select id="res2'+i+'">'+
                 '<option value="0" selected="selected">Seleccione una opción</option>'+
                 '<option value="a">-147</option>'+
                 '<option value="e">-76</option>'+
                 '<option value="c">-50</option>'+
                 '<option value="d">-141</option>'+
                 '</select>'+
                 '</br></br>';
    }

    var obj2 =  '<div id ="p2"class="row">'+
                '<div class="col-xs-6 col-md-6 col-lg-6">'+
                '<br><br><label>Estación de Investigación Científica Rusa de Vostok y Al-Aziziyah(Libia)<label>'+combos2[0]+  
                '<br><br><label>Aldea de Oymyakon Rusia y Desierto de Lute(Libia)<label>'+combos2[1]+  
                '<br><br><label>Ulan Bator,capital de Mongolia y Bangkok(Tailandia)<label>'+combos2[2]+  
                '<br><br><label>Estación Meteorológica de Eureka Canadá y Zona Geotérmica de Dallol(Etiopia)<label>'+combos2[3]+  
                '</div>'+
                '</div>';
   $('#pregunta2').append(obj2);
   $('#combos2').append(combos2);
  };

  function Calificar(){
    var nota = 0;
    //Variables Fila 1
    var r = [];
    //Variables Fila Respuesta
    res[9]= $("#res20 option:selected").text();
    res[10]= $("#res21 option:selected").text();
    res[11]= $("#res22 option:selected").text();
    res[12]= $("#res23 option:selected").text();

    conta = 0;
debugger;
    for(var i=0; i<=12; i++){
       if(i==0){
        if(res[i] == "9°"){
          nota = nota+1;
          $('#r1').css("background-color", "green");
          }
          else{
          $('#r1').css("background-color", "red");
          }
        }
        
        if(i==1){
          if(res[i] == "-7°"){
          nota = nota+1;
          $('#r2').css("background-color", "green");
          }
          else{
          $('#r2').css("background-color", "red");
          }
          }
        
        if(i==2){
          if(res[i] == "(-7°)Knittefeld"){
          nota = nota+1;
          $('#res0').css("background-color", "green");
          }
          else{
          $('#res0').css("background-color", "red");
          }
        }
        
        if(i==3){
          if(res[i] == "(-6°)Leoben,Lienz,Villach"){
          nota = nota+1;
          $('#res1').css("background-color", "green");
          }
          else{
          $('#res1').css("background-color", "red");
          }
          }

        if(i==4){
          if(res[i] == "(-4°)Klagenfurt"){
          nota = nota+1;
          $('#res2').css("background-color", "green");
          }
          else{
          $('#res2').css("background-color", "red");
          }
        }

        if(i==5){
          if(res[i] == "(-3°)Sankt Pölten,Steyr, Innsbuck,Graz"){
          nota = nota+1;
          $('#res3').css("background-color", "green");
          }
          else{
          $('#res3').css("background-color", "red");
          }
        }
        if(i==6){
          if(res[i] == "(-2°)Eisenstadt,Kufstein"){
          nota = nota+1;
          $('#res4').css("background-color", "green");
          }
          else{
          $('#res4').css("background-color", "red");
          }
        }
        if(i==7){ 
          if(res[7] == "(-1°)Salzburgo,Bregenz"){
          nota = nota+1;
          $('#res5').css("background-color", "green");
          }
          else{
          $('#res5').css("background-color", "red");
          } 
        }
        if(i==8){
          if(res[i] == "(0°)Linz,Wels"){
          nota = nota+1;
          $('#res6').css("background-color", "green");
          }
          else{
          $('#res6').css("background-color", "red");
          }
        }

        if(i==9){
          if(res[i] == "-147"){
          nota = nota+1;
          $('#res20').css("background-color", "green");
          }
          else{
          $('#res20').css("background-color", "red");
          }
        }

        if(i==10){
          if(res[i] == "-141"){
          nota = nota+1;
          $('#res21').css("background-color", "green");
          }
          else{
          $('#res21').css("background-color", "red");
          }
        }

        if(i==11){
          if(res[i] == "-50"){
          nota = nota+1;
          $('#res22').css("background-color", "green");
          }
          else{
          $('#res22').css("background-color", "red");
          }
        }

        if(i==12){
          if(res[i] == "-76"){
          nota = nota+1;
          $('#res23').css("background-color", "green");
          }
          else{
          $('#res23').css("background-color", "red");
          }
        }
      }

      debugger;


    console.log(res)
    var notaFinal = (nota*10)/13;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Refrescar').attr('disabled', false);
  };




$(document).ready(function(){
  Inicio();
  $('#txtAct').text(" 1/2");
 
  });