  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      for (var i = 1; i <= 8; i++) {
          $('#res' + i).css("background-color", "white");
          $('#contenido' + i).html('');

      }
      $('#contenido').append('');
      var i = 1;
      var valoresA = [];
      var signo = ["+", "-"];
      var nuevo = ["Verdadero", "Falso"];

      for (var i = 0; i <= 7; i++) {
          if (i == 2 || i == 3 || i == 6) {
              valoresA[i] = Math.round(Math.random() * (3 - 1) + 1);
          } else {
              valoresA[i] = Math.round(Math.random() * (5 - 2) + 1);
          }
      }
      $("#contenido1").append('<label style="font-size:25px" id="baseI1">' + valoresA[0] + '</label><sup id="expI1">2</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI1">' + Math.pow(valoresA[0], 2) + '</label><input type="number" id="baseR1" style="width:60px; position: relative; top:8px; left:155px;"><input type="number" id="expR1" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF1" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido2").append('<label style="font-size:25px" id="baseI2">' + valoresA[1] + '</label><sup id="expI2">3</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI2">' + Math.pow(valoresA[1], 3) + '</label><input type="number" id="baseR2" style="width:60px; position: relative; top:8px; left:152px;"><input type="number" id="expR2" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF2" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido3").append('<label style="font-size:25px" id="baseI3">' + valoresA[2] + '</label><sup id="expI3">5</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI3">' + Math.pow(valoresA[2], 5) + '</label><input type="number" id="baseR3" style="width:60px; position: relative; top:8px; left:150px;"><input type="number" id="expR3" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF3" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido4").append('<label style="font-size:25px" id="baseI4">' + valoresA[3] + '</label><sup id="expI4">6</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI4">' + Math.pow(valoresA[3], 6) + '</label><input type="number" id="baseR4" style="width:60px; position: relative; top:8px; left:145px;"><input type="number" id="expR4" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF4" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido5").append('<label style="font-size:25px" id="baseI5">' + valoresA[4] + '</label><sup id="expI5">2</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI5">' + Math.pow(valoresA[4], 2) + '</label><input type="number" id="baseR5" style="width:60px; position: relative; top:8px; left:150px;"><input type="number" id="expR5" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF5" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido6").append('<label style="font-size:25px" id="baseI6">' + valoresA[5] + '</label><sup id="expI6">3</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI6">' + Math.pow(valoresA[5], 3) + '</label><input type="number" id="baseR6" style="width:60px; position: relative; top:8px; left:150px;"><input type="number" id="expR6" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF6" style="width:100px; position: absolute; top:12px; left:325px;"/>');
      $("#contenido7").append('<label style="font-size:25px" id="baseI7">' + valoresA[6] + '</label><sup id="expI7">5</sup>&nbsp;&nbsp;=&nbsp;&nbsp;<label style="font-size:25px" id="resI7">' + Math.pow(valoresA[6], 5) + '</label><input type="number" id="baseR7" style="width:60px; position: relative; top:8px; left:150px;"><input type="number" id="expR7" style="width:60px; position: absolute; top:2px; left:140px;"/><label style="font-size: 40px; position: absolute; top:4px;left:295px;">=</label><input type="text" id="resF7" style="width:100px; position: absolute; top:12px; left:325px;"/>');
  };

  function Cargar() {
      for (var i = 1; i <= 6; i++) {
          $('#contenido' + i).html('');
          $('#texto' + i).html('');
      }
      Inicio();
  }
  $(document).ready(function() {
      Inicio();

      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Respuestas Txt
          var baseI = [];
          var expI = [];
          var baseR = [];
          var expR = [];
          var resI = [];
          var resF = [];

          for (var i = 1; i <= 8; i++) {
              baseI[i] = $('#baseI' + i).text();
              expI[i] = $('#expI' + i).text();
              baseR[i] = $('#baseR' + i).val();
              expR[i] = $('#expR' + i).val();
              resI[i] = $('#resI' + i).text();
              resF[i] = $('#resF' + i).val();
          }


          for (var i = 1; i <= 8; i++) {
              if (baseI[i] == resF[i]) {
                  nota = nota + 1;
                  $('#resF' + i).css("background-color", "green");
              } else {
                  $('#resF' + i).css("background-color", "red");
              }
              if (expR[i] == expI[i]) {
                  nota = nota + 1;
                  $('#expR' + i).css("background-color", "green");
              } else {
                  $('#expR' + i).css("background-color", "red");
              }
              if (baseR[i] == resI[i]) {
                  nota = nota + 1;
                  $('#baseR' + i).css("background-color", "green");
              } else {
                  $('#baseR' + i).css("background-color", "red");
              }

          }


          var notaFinal = (nota * 10) / 21;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });