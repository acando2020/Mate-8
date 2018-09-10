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
    var obj1 = {"V":"V","F":"F"};
    var obj2 = {"F":"F","V":"V"};
    $('#contenido').append('');
    $('#Respuestas').append('');
    var i=1;
    var valoresA = 0;
    var valoresB = 0;
    var valoresC = 0;
    var valoresE = 0;
    var resA = "";
    var conte1 = 0;
    var conte2 = 0;
    var b = 0;
    var respuestas = [];
    var i = 0;
    var nuevo = [];
    valoresE = Math.round(Math.random() * (2 - 1) + 1);
    do{
    valoresA = Math.round(Math.random() * (20 - 1) + 1);
    valoresB = Math.round(Math.random() * (20 - 1) + 1);
    valoresC = Math.round(Math.random() * (20 - 1) + 1);
    }while((valoresA*valoresB)%valoresC != 0);
    conte1 = ' <div style="position: relative; background-color: white; height:25px">'
          +'<img src="img/i2_p36_act30.jpg" width="45px" left:50px; height="25px">'
          +'<div style="position: absolute; top:3px; left:25px;">'
          +'<label style="font-size:14px">16 ÷ 2 </label>'
          +'</div>'
        +'</div>';
    conte2 = '<p>|'+valoresA+' • '+valoresB+' ➗ '+valoresC+'|</p><p>|'+(valoresA * valoresB)/valoresC +'|</p><p>'+Math.abs((valoresA * valoresB)/valoresC)+'</p>';
    nuevo[0] = ' <div draggable="true" ondragstart="drag(event)" id="drag1" style="position: relative; background-color: white">'
          +'<img src="img/i0_p36_act30.jpg" width="45px" height="30px">'
          +'<div style="position: absolute; top:6px; left:30px;">'
          +'<label style="font-size:12px">(-25) ÷ (-25) </label>'
          +'</div>'
        +'</div>';

    nuevo[1] = ' <div draggable="true" ondragstart="drag(event)" id="drag2" style="position: relative; background-color: white">'
          +'<img src="img/i3_p36_act30.jpg" width="50px" height="30px">'
          +'<div style="position: absolute; top:6px; left:30px;">'
          +'<label style="font-size:12px"> 1944 ÷ (-8) </label>'
          +'</div>'
        +'</div>';

    nuevo[2] = ' <div draggable="true" ondragstart="drag(event)" id="drag3" style="position: relative; background-color: white">'
          +'<img src="img/i4_p36_act30.jpg" width="50px" height="30px">'
          +'<div style="position: absolute; top:6px; left:30px;">'
          +'<label style="font-size:12px"> 46875 ÷ 3 &nbsp;</label>'
          +'</div>'
        +'</div>';




    if(valoresE == 1){
    respuestas[0] = '<td width=150px>'+nuevo[0]+'</td>';
    respuestas[1] = '<td width=150px>'+nuevo[1]+'</td>';
    respuestas[2] = '<td width=150px>'+nuevo[2]+'</td>';
    }
    else{
    respuestas[0] = '<td width=150px>'+nuevo[1]+'</td>';
    respuestas[1] = '<td width=150px>'+nuevo[0]+'</td>';
    respuestas[2] = '<td width=150px>'+nuevo[2]+'</td>';
    }

    respuestas[3] = '<td><div draggable="true" ondragstart="drag(event)" id="drag4" style="text-align:center; background-color: white"> 1</label></div>';
    respuestas[4] = '<td><div draggable="true" ondragstart="drag(event)" id="drag5" style="text-align:center; background-color: white"> -3</label></div>';
    respuestas[5] = '<td><div draggable="true" ondragstart="drag(event)" id="drag6" style="text-align:center; background-color: white"> 5</label></div>';
    $("#Respuestas").append('<tr>'+respuestas[0]+ respuestas[1] + respuestas[2]+'</tr><tr>'+respuestas[3]+ respuestas[4] + respuestas[5]+'</tr>');


    for(var i=0; i<=3;i++){
      if(i==0) 
      $("#contenido").append('<tr><td width=50px style="text-align:center"><label id="a'+i+'"> 3 </td><td width=50px style="text-align:center"><label id="b'+i+'"> 16 </td><td width=50px style="text-align:center"><label id="c'+i+'"> 2 </td><td width=150px>'+conte1+'</td><td width=150px style="text-align:center; background-color: white"> 2 </td></tr>');
      else if(i==1)
      $("#contenido").append('<tr><td width=50px style="text-align:center"><label id="a'+i+'"> 4 </td><td width=50px style="text-align:center"><label id="b'+i+'"> -25 </td><td width=50px style="text-align:center"><label id="c'+i+'"> -25 </td><td width=150px style="width:100px;height:20px; font-size: 12px" id="div1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td width=150px style="width:100px;height:20px; font-size: 12px" id="div2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');
      else if(i==2)
      $("#contenido").append('<tr><td width=50px style="text-align:center"><label id="a'+i+'"> 5 </td><td width=50px style="text-align:center"><label id="b'+i+'"> 1944 </td><td width=50px style="text-align:center"><label id="c'+i+'"> -8 </td><td width:150px;height:20px; font-size: 12px" id="div1b" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td width=150px style="width:100px;height:20px; font-size: 12px" id="div2b" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');      else
      $("#contenido").append('<tr><td width=50px style="text-align:center"><label id="a'+i+'"> 6 </td><td width=50px style="text-align:center"><label id="b'+i+'"> 46875 </td><td width=50px style="text-align:center"><label id="c'+i+'"> 3 </td><td width:150px;height:20px; font-size: 12px" id="div1c" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td width=150px style="width:100px;height:20px; font-size: 12px" id="div2c" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>');  
      }
         
  };
  var divs = [];
  var contenidos = [];
  var k=0;
  var z=0;
  function Cargar(){
   $('#contenido').html('');
   $('#Respuestas').html('');
   contenidos = [];
   divs = [];
   k=0;
   z=0; 
   Inicio(); 
  }

  function allowDrop(ev) {
    ev.preventDefault();
    
  }
  function drag(ev) {
 
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    divs[k] = ev.target.id;
    z= z+1;
    console.log(divs);
  }
  function drop(ev) {
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var n = '#'+ev.target.id;
    contenidos[k] = ev.target.id;
    console.log(contenidos);
    k= k+1;
    
  }


$(document).ready(function(){
  Inicio();
   $("#Calificar").click(function(){
    var nota = 0;
    //Variables Respuestas Txt
   debugger; 
for(var i=0; i<=6; i++){
      //console.log(res3[i]);
      if(contenidos.length == 0){
        $('#div1a').css("border", "4px solid red");
        $('#div1b').css("border", "4px solid red");
        $('#div1c').css("border", "4px solid red");
        $('#div2a').css("border", "4px solid red");
        $('#div2b').css("border", "4px solid red");
        $('#div2c').css("border", "4px solid red");
      }
      switch (contenidos[i]) {
        case "div1a":
        if((divs[i])=="drag1"){
          nota = nota+1;
          $('#div1a').css("border", "4px solid green");
         
         }
        else{
          $('#div1a').css("border", "4px solid red");
        }
        break;
        case "div1b":
        if((divs[i])=="drag2"){
          nota = nota+1;
         $('#div1b').css("border", "4px solid green");
         }
        else{
         $('#div1b').css("border", "4px solid red");
        }
        break;
        case "div1c":
        if((divs[i])=="drag3"){
          nota = nota+1;
         $('#div1c').css("border", "4px solid green");
         }
        else{
         $('#div1c').css("border", "4px solid red");
        }
        break;
        case "div2a":
        if((divs[i])=="drag4"){
          nota = nota+1;
         $('#div2a').css("border", "4px solid green");
          
         }
        else{
         $('#div2a').css("border", "4px solid red");
        }
        break;
        case "div2b":
        if((divs[i])=="drag5"){
          nota = nota+1;
         $('#div2b').css("border", "4px solid green");
         }
        else{
         $('#div2b').css("border", "4px solid red");         
        }
        break;
        case "div2c":
        if((divs[i])=="drag6"){
          nota = nota+1;
         $('#div2c').css("border", "4px solid green");
          }
        else{
         $('#div2c').css("border", "4px solid red");
          
        }
        break;      
    }
  }
       
    var notaFinal = (nota*10)/6;
    notaFinal = notaFinal.toFixed(2)
    $("#txtNota").text(notaFinal +"/10");
    $('#Calificar').attr('disabled', true);
    $('#Refrescar').attr('disabled', false);
  });
  });