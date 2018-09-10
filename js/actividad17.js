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
      $("#r0 option:selected").text();
      $("#r1 option:selected").text();
      $("#r2 option:selected").text();
      $("#r3 option:selected").text();
      $("#r4 option:selected").text();
      $("#r5 option:selected").text();
      var valoresA = [];
      var valoresB = [];
      var valoresC = [];
      var valoresD = [];
      var orden = Math.round(Math.random() * (2 - 1) + 1);
      var signo = ["."];
      var a, b, c, d;

      a = 1 + Math.round(Math.random() * (3 - (-3)) + (-3));
      c = 1 + Math.round(Math.random() * (3 - (-3)) + (-3));

      b = 1 + Math.round(Math.random() * (5 - (-5)) + (-5));
      var conta = 0;
      if (d % b == 0) {
          d = 1 + (Math.round(Math.random() * (5 - (-5)) + (-5)));
      } else {
          d = b * 2;
      }

      var piso2 = '<svg  width=300 height=150><rect x= 90 y=10 width="70" height="70" style="fill:#dccfe4;stroke:black;stroke-width:1;"/><text id="a1" x=110 y=50>a ● b</text>';
      var piso1 = '<svg  width=300 height=150><rect x= 60 y=80 width="70" height="70" style="fill:#dccfe4;stroke:black;stroke-width:1;"/><text id="a1" x=85 y=120>a</text><rect x=130 y=80 width="70" height="70" style="fill:#dccfe4;stroke:black;stroke-width:1;"/><text id="a1" x=155 y=120>b</text>';
      $("#contenido1").append(piso2 + piso1);




      var texto1 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px;border-color:white" id="res1">';
      var texto2 = '<br><label>A = </label><input type="number"  style="text-align: center;width:100px;height:20px; font-size: 12px;border-color:white" id="res2">';
      var txtCuadro1 = '<foreignObject x= 112 y=16 width="50" height="50"><input id="res1" placeholder=0 style="text-align:center;height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
      var txtCuadro2 = '<foreignObject x= 80 y=80 width="50" height="50"><input id="res2" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
      var txtCuadro3 = '<foreignObject x= 150 y=80 width="50" height="50"><input id="res3" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
      var txtCuadro4 = '<foreignObject x= 47 y=148 width="50" height="50"><input id="res4" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
      var txtCuadro5 = '<foreignObject x= 185 y=148 width="50" height="50"><input id="res5" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';
      var txtCuadro6 = '<foreignObject x= 150 y=216 width="50" height="50"><input id="res6" placeholder=0 style="text-align:center; height:70px;width:70px; background-color :#cceeff;border-color:black;border-width:1px" contentEditable="true"></input></div></foreignObject>';


      var piso4 = '<svg  width=300 height=400>' + txtCuadro1;
      var piso3 = '<svg  width=300 height=400>' + txtCuadro2 + txtCuadro3;
      var piso2 = '<svg  width=300 height=400>' + txtCuadro4 + '<rect x=115 y=147 width="70" height="70" style="fill:#cceeff;stroke:black;stroke-width:1;"/><text id="a4" x=140 y=185>' + d + '</text>' + txtCuadro5;
      var piso1 = '<svg  width=300 height=400><rect x= 10 y=216 width="70" height="70" style="fill:#cceeff;stroke:black;stroke-width:1;"/><text id="A1" x=35 y=260>' + a + '</text><rect x=80 y=216 width="70" height="70" style="fill:#cceeff;stroke:black;stroke-width:1;"/><text id="a2" x=110 y=260>' + b + '</text>' + txtCuadro6 + '<rect x=218 y=216 width="70" height="70" style="fill:#cceeff;stroke:black;stroke-width:1;"/><text id="a3" x=245 y=260>' + c + '</text>';
      $("#contenido2").append(piso4 + piso3 + piso2 + piso1);
      $("#texto1").append(texto1);
  }

  function Cargar() {
      $('#contenido1').html('');
      $('#contenido2').html('');
      $('#texto1').html('');
      $('#texto2').html('');


      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          var resultado = [];
          var x = [];

          for (var i = 6; i > 0; i--) {
              resultado[i] = parseInt($("#res" + i).val());
              if (resultado[i] == "")
                  $('#res' + i).css("background-color", "red");
          }
          debugger;
          var band = 0;
          var band1 = 0;
          var ban2 = 0;
          var ban3 = 0;
          var a1 = parseInt($("#A1").text());
          var a2 = parseInt($("#a2").text());
          var a3 = parseInt($("#a3").text());
          var a4 = parseInt($("#a4").text());
          debugger;
          if ($("#res6").val() == (a4 / a2)) {
              nota = nota + 1;
              band = 1;
              $('#res6').css("background-color", "green");
          } else {
              $('#res6').css("background-color", "red");
          }

          if ($("#res4").val() == (a1 * a2)) {
              nota = nota + 1;
              $('#res4').css("background-color", "green");
              band1 = 1;
          } else {
              $('#res4').css("background-color", "red");
          }
          if (band == 1) {
              if ($("#res5").val() == ($("#res6").val() * a3)) {
                  nota = nota + 1;
                  $('#res5').css("background-color", "green");
              } else {
                  $('#res5').css("background-color", "red");
              }

              if ($("#res3").val() == ($("#res5").val() * a4)) {
                  nota = nota + 1;
                  ban2 = 1;
                  $('#res3').css("background-color", "green");
              } else {
                  $('#res3').css("background-color", "red");
              }
          }
          if (band1 == 1) {
              if ($("#res2").val() == ($("#res2").val() * a4)) {
                  nota = nota + 1;
                  ban3 = 1;
                  $('#res2').css("background-color", "green");
              } else {
                  $('#res2').css("background-color", "red");
              }
          }

          if (ban2 == 1 && ban3 == 1) {
              if ($("#res1").val() == ($("#res2").val() * $("#res2").val())) {
                  nota = nota + 1;

                  $('#res1').css("background-color", "green");
              } else {
                  $('#res1').css("background-color", "red");
              }
          }
          if (ban2 == 1 && ban3 == 0) {
              $('#res1').css("background-color", "red");
          }
          if (ban2 == 0 && ban3 == 1) {
              $('#res1').css("background-color", "red");
          }
          if (ban2 == 0 && ban3 == 0) {
              $('#res1').css("background-color", "red");
          }



          if (band == 0) {
              $('#res1').css("background-color", "red");
              $('#res3').css("background-color", "red");
              $('#res5').css("background-color", "red");
          }
          if (band1 == 0) {
              $('#res4').css("background-color", "red");
              $('#res2').css("background-color", "red");
              $('#res1').css("background-color", "red");
          }
          console.log(nota)
          var notaFinal = 0;
          notaFinal = (nota * 10) / 6;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });