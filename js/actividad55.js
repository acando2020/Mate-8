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
    $('#contenido').html('');
    var combo=[];
    for(var i = 0; i<=20;i++){
    combo[i] =  '<td style="text-align:center"><select required="required" class="form-control" name="servicio" id="a'+i+'">'+
                                '<option value="0" selected="selected">Seleccione una opción</option>'+
                                '<option value="F">F</option>'+
                                '<option value="V">V</option>'+
                                '</select></td>';
    }  
    $("#contenido").append('<tr>'+combo[0]+combo[1]+combo[2]+combo[3]+combo[4]+'</tr>'+
                           '<tr>'+combo[5]+combo[6]+combo[7]+combo[8]+combo[9]+'</tr>'+
                           '<tr>'+combo[10]+combo[11]+combo[12]+combo[13]+combo[14]+'</tr>'+
                           '<tr>'+combo[15]+combo[16]+combo[17]+combo[18]+combo[19]+'</tr>');
        
        
  };
  function Cargar(){
   $('#contenido').html('');
   Inicio(); 
  };
$(document).ready(function(){

  $("#Calificar").click(function(){
    var nota = 0;
    //Variables Fila 1
    //Variables Fila Respuesta
    var res = [];
    var res2 = [];
    var res3 = [];
    
    for(var i = 0; i<=20;i++){
    res[i] =$("#a"+i).val();    
    }
debugger;

        if(res[0] =="V" && res[1]=="V"){
        nota = nota + 2;  
        $('#a0').css("background-color", "green"); 
        $('#a1').css("background-color", "green"); 
        
        if(res[2]=="V"){  
        nota = nota+1;
        $('#a2').css("background-color", "green"); 
        }
        else{
        $('#a2').css("background-color", "red");
        }
        if(res[3]=="F"){  
        nota = nota+1;
        $('#a3').css("background-color", "green"); 
        }
        else{
        $('#a3').css("background-color", "red");
        }
        if(res[4]=="F"){  
        nota = nota+1;
        $('#a4').css("background-color", "green"); 
        }
        else{
        $('#a4').css("background-color", "red");
        }
      }
      else{
       $('#a0').css("background-color", "red");
       $('#a1').css("background-color", "red");
       $('#a2').css("background-color", "red");
       $('#a3').css("background-color", "red");
       $('#a4').css("background-color", "red");      
       }

       if(res[5] =="V" && res[6]=="F"){
        $('#a5').css("background-color", "green"); 
        $('#a6').css("background-color", "green"); 
        nota = nota+2;  
        if(res[7]=="V"){
        nota = nota+1;
        $('#a7').css("background-color", "green"); 
        }
        else{
        $('#a7').css("background-color", "red");
        }
        if(res[8]=="F"){  
        nota = nota+1;
        $('#a8').css("background-color", "green"); 
        }
        else{
        $('#a8').css("background-color", "red");
        }
        if(res[9]=="F"){  
        nota = nota+1;
        $('#a9').css("background-color", "green"); 
        }
        else{
        $('#a9').css("background-color", "red");
        }
      }
      else{
       $('#a5').css("background-color", "red");
       $('#a6').css("background-color", "red");
       $('#a7').css("background-color", "red");
       $('#a8').css("background-color", "red");
       $('#a9').css("background-color", "red");    
       }

        if(res[10] =="F" && res[11]=="V" ){
        $('#a10').css("background-color", "green"); 
        $('#a11').css("background-color", "green"); 
        nota = nota +2;
        
        if(res[12]=="V"){  
        nota = nota+1;
        $('#a12').css("background-color", "green"); 
        }
        else{
        $('#a12').css("background-color", "red");
        }
        if(res[13]=="F"){  
        nota = nota+1;
        $('#a13').css("background-color", "green"); 
        }
        else{
        $('#a13').css("background-color", "red");
        }
        if(res[14]=="F"){  
        nota = nota+1;
        $('#a14').css("background-color", "green"); 
        }
        else{
        $('#a14').css("background-color", "red");
        }
      }
      else{
       $('#a10').css("background-color", "red");
       $('#a11').css("background-color", "red");
       $('#a12').css("background-color", "red");
       $('#a13').css("background-color", "red");
       $('#a14').css("background-color", "red");      
       }

        if(res[15] =="F" && res[16]=="F"){
        $('#a15').css("background-color", "green");
        $('#a16').css("background-color", "green");
        nota = nota +2;
        if(res[17]=="F"){  
        nota = nota+1;
        $('#a17').css("background-color", "green"); 
        }
        else{
        $('#a17').css("background-color", "red");
        }
        if(res[18]=="V"){  
        nota = nota+1;
        $('#a18').css("background-color", "green"); 
        }
        else{
        $('#a18').css("background-color", "red");
        }
        if(res[19]=="F"){  
        nota = nota+1;
        $('#a19').css("background-color", "green"); 
        }
        else{
        $('#a19').css("background-color", "red");
        }
      }
      else{
       $('#a15').css("background-color", "red");
       $('#a16').css("background-color", "red");
       $('#a17').css("background-color", "red");
       $('#a18').css("background-color", "red");
       $('#a19').css("background-color", "red");      
       }
      
    
    var notaFinal = (nota*10)/20;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
    Inicio();
  });