   
  function Pregunta1() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var valoresA = [];
      var valoresB = [];
      var valoresC = [];
      var valoresD = [];
      var signo = ["+", "-"];
      var i = 0,
          j = 0,
          k = 0,
          l = 0;
      do {
          valoresA[i] = Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          if (valoresA[i] == 0)
              valoresA[i] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          i = i + 1;
      } while (valoresA[i] != 0 && i <= 12);
      do {
          valoresB[j] = Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          if (valoresB[j] == 0)
              valoresB[j] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          j = j + 1;
      } while (valoresB[j] != 0 && j <= 12);
      do {
          valoresC[k] = Math.round(Math.random() * (10 - (-10)) + (-10)) + 1;
          if (valoresC[k] == 0)
              valoresC[k] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          k = k + 1;
      } while (valoresC[k] != 0 && k <= 12);
      do {
          valoresD[l] = Math.round(Math.random() * (10 - (-10)) + (-10)) + 1;
          if (valoresD[l] == 0)
              valoresD[l] = 1 + Math.round(Math.random() * (10 - (-10)) + (-10) + 1);
          l = l + 1;
      } while (valoresD[l] != 0 && l <= 12);
      $('#contenido').append('');
      for (var i = 0; i <= 3; i++) {
          if (i == 0)
              $("#contenido1").append('<br>|<label id="valorA' + i + '">' + valoresA[i] + '</label>|' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[0] + '</label>&nbsp;|' +
                  '<label id="valorB' + i + '">' + valoresB[i] + '</label>|&nbsp;' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;|' +
                  '<label id="valorC' + i + '">' + valoresC[i] + '</label>|&nbsp;' +
                  '= &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res' + i + '"><br>');

          if (i == 1)
              $("#contenido1").append('<br>-|<label id="valorA' + i + '">' + valoresA[i] + '</label>|' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;' +
                  '|<label id="valorB' + i + '">' + valoresB[i] + '</label>|&nbsp;' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[0] + '</label>&nbsp;|' +
                  '<label id="valorC' + i + '">' + valoresC[i] + '</label>|&nbsp;' +
                  '= &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res' + i + '"><br>');

          if (i == 2)
              $("#contenido1").append('<br>|(<label id="valorA' + i + '">' + valoresA[i] + '</label>)' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[0] + '</label>&nbsp;' +
                  '(<label id="valorB' + i + '">' + valoresB[i] + '</label>)|&nbsp;' +
                  '&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;' +
                  '|(<label id="valorC' + i + '">' + valoresC[i] + '</label>)&nbsp;' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;' +
                  '(<label id="valorD' + i + '">' + valoresD[i] + '</label>)|&nbsp;' +
                  '= &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res' + i + '"><br>');

          if (i == 3)
              $("#contenido1").append('<br>|(<label id="valorA' + i + '">' + valoresA[i] + '</label>)' +
                  '&nbsp&nbspX&nbsp;' +
                  '(<label id="valorB' + i + '">' + valoresB[i] + '</label>)|&nbsp;' +
                  '&nbsp&nbsp<label id="signo' + i + '">' + signo[0] + '</label>&nbsp;' +
                  '|(<label id="valorC' + i + '">' + valoresC[i] + '</label>)&nbsp;' +
                  '&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;' +
                  '(<label id="valorD' + i + '">' + valoresD[i] + '</label>)|&nbsp;' +
                  '&nbsp<label id="signo' + i + '">' + signo[1] + '</label>&nbsp;' +
                  '|(<label id="valorE' + i + '">' + (valoresC[i + 1] * valoresD[i + 1]) + '</label>)&nbsp;' +
                  '&nbsp ÷ &nbsp;' +
                  '(<label id="valorF' + i + '">' + valoresC[i + 1] + '</label>)|&nbsp;' +
                  '= &nbsp;<input type="number"  style="text-align: center;width:50px;height:20px; font-size: 12px" id="res' + i + '"><br>');
      }
  }
  function Pregunta2() {
      var comboA = ["<", ">"];
      var lit = [];
      var pos = [];
      var i = 0;
      var valoresA = [];
      var valoresB = [];
      var valoresC = [];
      for (var j = 0; j <= 10; j++) {
          valoresA[j] = Math.round(Math.random() * (10 - 1) + 1);
          valoresB[j] = Math.round(Math.random() * (10 - 1) + 1);
          valoresC[j] = Math.round(Math.random() * (10 - 1) + 1);
          pos[j] = Math.round(Math.random() * (1 - 0) + 0);
      }
      console.log(pos)

      lit[0] = '<input id="resP21" type=number style="width:50px">&nbsp<label id="simbolo1"><</label>' +
          '&nbsp<label id="valor1">' + valoresA[0] + '</label>&nbsp<label id="simbolo2"><</label>' +
          '&nbsp<input id="resP22" type=number style="width:50px"><br>';


      lit[1] = '&nbsp<label id="valor2">' + valoresA[1] + '</label>&nbsp<label id="simbolo3"><</label>' +
          '&nbsp<input id="resP23" type=number style="width:50px">&nbsp<label id="simbolo4"><</label>' +
          '&nbsp<input id="resP24" type=number style="width:50px">&nbsp<label id="simbolo5"><</label>' +
          '&nbsp<input id="resP25" type=number style="width:50px">&nbsp<label id="simbolo6"><</label>' +
          '&nbsp<label id="valor3">' + (valoresA[1] + valoresB[0] + 3) + '</label><br>';

      lit[2] = '&nbsp<label id="valor4">' + (valoresA[2] + valoresB[1]) + '</label>&nbsp<label id="simbolo7">></label>' +
          '&nbsp<input id="resP26" type=number style="width:50px">&nbsp<label id="simbolo8">></label>' +
          '&nbsp<label id="valor5">' + (valoresB[1] - valoresA[2]) + '</label>&nbsp<label id="simbolo9">></label>' +
          '&nbsp<input id="resP27" type=number style="width:50px"><br>';


      lit[3] = '&nbsp<label id="valor6">' + (valoresA[3] + 1) + '</label>&nbsp<label id="simbolo10"><</label>' +
          '&nbsp<input id="resP28" type=number style="width:50px">&nbsp<label id="simbolo11"><</label>' +
          '&nbsp<input id="resP29" type=number style="width:50px">&nbsp<label id="simbolo12"><</label>' +
          '&nbsp<label id="valor7">' + (valoresA[3] + 4) + '</label>&nbsp<label id="simbolo13"><</label>' +
          '&nbsp<input id="resP210" type=number style="width:50px">&nbsp<label id="simbolo14"><</label>' +
          '&nbsp<label id="valor8">' + (valoresA[3] + 7) + '</label><br>';

      $("#contenido2").append(lit);
  }
  function Pregunta3() {
      var a = [];
      var b = [];
      var c = [];
      var filas = [];

      for (var i = 0; i <= 6; i++) {
          a[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
          b[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
          c[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
      }
      filas[0] = '<tr>' +
          '<td>a</td>' +
          '<td style="text-align:center"><label id="A1">' + a[1] + '</label></td>' +
          '<td style="text-align:center"><label id="A2">' + a[2] + '</label></td>' +
          '<td style="text-align:center"><label id="A3">' + a[3] + '</label></td>' +
          '<td style="text-align:center"><label id="A4">' + a[4] + '</label></td>' +
          '<td style="text-align:center"><label id="A5">' + a[5] + '</label></td>' +
          '</tr>';
      filas[1] = '<tr>' +
          '<td>b</td>' +
          '<td style="text-align:center"><label id="B1">' + b[1] + '</label></td>' +
          '<td style="text-align:center"><label id="B2">' + b[2] + '</label></td>' +
          '<td style="text-align:center"><label id="B3">' + b[3] + '</label></td>' +
          '<td style="text-align:center"><label id="B4">' + b[4] + '</label></td>' +
          '<td style="text-align:center"><label id="B5">' + b[5] + '</label></td>' +
          '</tr>';
      filas[2] = '<tr>' +
          '<td>c</td>' +
          '<td style="text-align:center"><label id="C1">' + c[1] + '</label></td>' +
          '<td style="text-align:center"><label id="C2">' + c[2] + '</label></td>' +
          '<td style="text-align:center"><label id="C3">' + c[3] + '</label></td>' +
          '<td style="text-align:center"><label id="C4">' + c[4] + '</label></td>' +
          '<td style="text-align:center"><label id="C5">' + c[5] + '</label></td>' +
          '</tr>';

      filas[3] = '<tr>' +
          '<td>a+b</td>' +
          '<td><input type="number" id="resA1" style="width:50px"></td>' +
          '<td><input type="number" id="resA2" style="width:50px"></td>' +
          '<td><input type="number" id="resA3" style="width:50px"></td>' +
          '<td><input type="number" id="resA4" style="width:50px"></td>' +
          '<td><input type="number" id="resA5" style="width:50px"></td>' +
          '</tr>';
      filas[4] = '<tr>' +
          '<td>a-c</td>' +
          '<td><input type="number" id="resB1" style="width:50px"></td>' +
          '<td><input type="number" id="resB2" style="width:50px"></td>' +
          '<td><input type="number" id="resB3" style="width:50px"></td>' +
          '<td><input type="number" id="resB4" style="width:50px"></td>' +
          '<td><input type="number" id="resB5" style="width:50px"></td>' +
          '</tr>';
      filas[5] = '<tr>' +
          '<td>(a+c)-b</td>' +
          '<td><input type="number" id="resC1" style="width:50px"></td>' +
          '<td><input type="number" id="resC2" style="width:50px"></td>' +
          '<td><input type="number" id="resC3" style="width:50px"></td>' +
          '<td><input type="number" id="resC4" style="width:50px"></td>' +
          '<td><input type="number" id="resC5" style="width:50px"></td>' +
          '</tr>';
      filas[6] = '<tr>' +
          '<td>a-(c+b)</td>' +
          '<td><input type="number" id="resD1" style="width:50px"></td>' +
          '<td><input type="number" id="resD2" style="width:50px"></td>' +
          '<td><input type="number" id="resD3" style="width:50px"></td>' +
          '<td><input type="number" id="resD4" style="width:50px"></td>' +
          '<td><input type="number" id="resD5" style="width:50px"></td>' +
          '</tr>';
      $("#contenido3").append(filas);
  }
  function Pregunta4() {
      var respuestas4 = [];
      var preguntas4 = [];
      var orden = Math.round(Math.random() * (2 - 1) + 1);
      for (var j = 0; j <= 4; j++) {
          respuestas4[j] = '<td style="text-align:center"><select required="required" class="form-control" name="servicio" id="res4' + j + '"style="width: 190px;text-align:center">' +
              '<option value="0" selected="selected">Seleccione una opción</option>' +
              '<option value="F">Falso</option>' +
              '<option value="V">Verdadero</option>' +
              '</select></td>';
      }
      preguntas4[0] = '<tr><td>El cociente de dos enteros positivos es positivo</td><td>' + respuestas4[0] + '</td></tr>';
      preguntas4[1] = '<tr><td></td><td></td></tr><tr><td>El cociente de dos enteros de diferente signo es negativo</td><td>' + respuestas4[1] + '</td></tr>';
      preguntas4[2] = '<tr><td></td><td></td></tr><tr><td>Para que el cociente entre dos números sea 1, tanto el dividendo como el divisor deben ser iguales</td><td>' + respuestas4[2] + '</td></tr>';
      preguntas4[3] = '<tr><td></td><td></td></tr><tr><td>El cociente de dos enteros negativos es negativo</td><td>' + respuestas4[3] + '</td></tr>';
      if (orden == 1)
          $("#contenido4").append(preguntas4[0] + preguntas4[2] + preguntas4[1] + preguntas4[3]);
      if (orden == 2)
          $("#contenido4").append(preguntas4[1] + preguntas4[0] + preguntas4[2] + preguntas4[3]);
  }
  function Pregunta5() {
      var Fila5A = [];
      var fila5B = [];
      var a5 = [];
      var b5 = [];
      var c5 = [];
      var col5 = ["A", "B", "C"];
      var col5b = ["a x b","b x a","a x (b x c)","(a x b) x c","(a x b) + (a x c)"];
      for (var i = 0; i <= 8; i++) {
          a5[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
          b5[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
          c5[i] = Math.round(Math.random() * (20 - (-20)) + (-20));
      }
      for (var k = 0; k <= 2; k++) {
          Fila5A[k] = '<tr>' +
                      '<td style="width:30px;text-align:center;border: solid 1px cadetblue"><label>'+col5[k]+'</label></td>'+
                      '<td style="width:40px;text-align:center;border: solid 1px cadetblue"><label id="valor5A'+ k +'">'+ a5[k] +'</label></td>' +
                      '<td style="width:40px;text-align:center;border: solid 1px cadetblue"><label id="valor5B'+ k +'">'+ b5[k] + '</label></td>' +
                      '<td style="width:40px;text-align:center;border: solid 1px cadetblue"><label id="valor5C'+ k +'">'+ c5[k] + '</label></td>' +
                      '</tr>';
      }
      for(var z=0; z<= 4; z++){
        fila5B[z] = '<tr>'+
                    '<td class="bg-info" style="width:170px;text-align:center;border: solid 1px cadetblue"><label>'+col5b[z]+'</label></td>'+
                    '<td><input type="number" id="res5A'+z+'" style="width:50px"></td>'+
                    '<td><input type="number" id="res5B'+z+'" style="width:50px"></td>'+
                    '<td><input type="number" id="res5C'+z+'" style="width:50px"></td>'+
                    '</tr>';
      }
      $("#contenido5a").append(Fila5A);
      $("#contenido5b").append(fila5B);
  }
  function Pregunta6(){
   var valores6a = [];
   var valores6b = [];
   var valores6c = [];
   var valores6d = [];
   var valores6e = [];
   var preguntas6 = [];
   for (var i = 0; i <= 9; i++) {
    valores6a[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores6b[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores6c[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores6d[i] = Math.round(Math.random() * (40 - 1) + 1)
    valores6d[i] = Math.round(Math.random() * (40 - 1) + 1)
    }
    preguntas6[0] = '<br>a)&nbsp;<label>'+valores6a[0]+'</label>&nbsp;-'+
                 '&nbsp;3(<label>'+valores6a[1]+'</label>&nbsp; - &nbsp'+
                 '<label>'+valores6a[2]+'</label>)&nbsp;+&nbsp;'+
                 '(<label>'+valores6a[3]+'</label>&nbsp-&nbsp;'+
                 '<label>'+valores6a[4]+'</label>)'+
                 '(<label>'+valores6a[5]+'</label>&nbsp-&nbsp;'+
                 '<label>'+valores6a[6]+'</label>)&nbsp;+&nbsp;'+
                 '4(<label>'+valores6a[7]+'</label>&nbsp;+&nbsp<label>'+valores6a[8]+'</label>)<br>'+
                 '<textarea class="form-control" rows="5"></textarea><br>';

    preguntas6[1] = 'b)&nbsp;(<label>'+valores6b[0]+'</label>&nbsp;+'+
                 '&nbsp;<label>'+valores6a[1]+'</label>&nbsp; - &nbsp'+
                 '<label>'+valores6b[2]+'</label>&nbsp;+&nbsp;'+
                 '<label>'+valores6a[3]+'</label>)&nbsp+&nbsp;'+
                 '(<label>'+valores6a[4]+'</label>)<br>'+
                 '<textarea class="form-control" rows="5"></textarea><br>';

    preguntas6[2] = 'c)&nbsp;<label>'+valores6c[0]+'</label>&nbsp;+'+
                 '&nbsp;{<label>'+valores6c[1]+'</label>&nbsp; - &nbsp'+
                 '<label>'+valores6a[2]+'</label>&nbsp;x&nbsp;'+
                 '<label>'+valores6a[3]+'</label>&nbsp+&nbsp;'+
                 '<label>'+valores6a[4]+'</label>'+
                 '[<label>'+valores6a[5]+'</label>&nbsp-&nbsp;'+
                 '5(<label>'+valores6a[6]+'</label>)&nbsp;+&nbsp;'+
                 '(<label>'+valores6a[7]+'</label>&nbsp;-&nbsp<label>'+valores6a[8]+'</label>)4]}<br>'+
                 '<textarea class="form-control" rows="5"></textarea><br>';

    preguntas6[3] = 'd)&nbsp;(<label>'+valores6a[0]+'</label>&nbsp;-'+
                 '&nbsp;<label>'+valores6a[1]+'</label>)&nbsp;-&nbsp'+
                 '{<label>'+valores6a[2]+'</label>&nbsp;+&nbsp;'+
                 '(<label>'+valores6a[3]+'</label>&nbsp-&nbsp;'+
                 '<label>'+valores6a[4]+'</label>&nbsp;+'+
                 '<label>'+valores6a[5]+'</label>)}<br>'+
                 '<textarea class="form-control" rows="5"></textarea>';
                 $("#contenido6").append(preguntas6);  
  }
  function Pregunta7(){
    var preguntas7 = [];
    var numAle = Math.round(Math.random() * (2 - 1) + 1);
    preguntas7[0] = '<br><label>Un entero multiplicado por -6 es igual a -72. ¿Cuál es el entero?'+
                    '&nbsp<input style="width:30px"id="valor7A"></label>';
    preguntas7[1] = '<br><label>Un entero multiplicado por 13 es igual a -195. ¿Cuál es el entero?'+
                    '&nbsp;<input style="width:30px"id="valor7B"></label>';
    preguntas7[2] = '<label>Si al producto de -8 y un entero le adicionamos 12, el resultado es -20'+
                    '¿Cuál es el entero?'+
                    '&nbsp<input style="width:30px"id="valor7C"></label>';
    preguntas7[3] = '<label>Si al producto de un entero y 9 se le adiciona 35, el resultado es 71.¿Cuál es el entero?'+
                    '&nbsp<input style="width:30px"id="valor7D">';
    if(numAle ==1)
    $("#contenido7").append(preguntas7[1],preguntas7[3],preguntas7[0],preguntas7[2]);
    if(numAle ==2)
    $("#contenido7").append(preguntas7[0],preguntas7[3],preguntas7[2],preguntas7[1]); 
  }
  function Pregunta8(){

    var valores8A = [];
    var valores8B = [];
    var preguntas8 = [];
    for(var i=0; i<=12; i++){
      valores8A[i] = Math.round(Math.random() * (100 - (-100)) + (-100)); 
    }
    for(var i=0; i<=12; i++){
      valores8B[i] = Math.round(Math.random() * (5 - 1) + 1); 
    }
    // Caso A
    preguntas8[0]= '((<label id="valor8A'+0+'">'+valores8A[0]+'</label>)'+
                   '<SUP id="exp8A'+0+'">'+valores8B[0]+'</SUP>)'+
                   '<SUP id="exp8B'+0+'">'+valores8B[1]+'</SUP>'+
                   '<label>&nbsp;x&nbsp </label>'+
                   '((<label id="valor8A'+1+'">'+valores8A[0]+'</label>)'+
                   '<SUP id="exp8A'+1+'">'+valores8B[3]+'</SUP>)'+
                   '<SUP id="exp8B'+1+'">'+valores8B[4]+'</SUP>';
    //Caso B
    preguntas8[1]= '<label id="valor8A'+2+'">'+valores8A[2]+'</label>'+
                   '<SUP id="exp8A'+2+'">'+valores8B[5]+'</SUP>'+
                   '<label>&nbsp;x&nbsp</label>'+
                   '<label id="valor8A'+3+'">'+valores8A[2]+'</label>'+
                   '<SUP id="exp8A'+3+'">'+valores8B[6]+'</SUP>'+
                   '<label>&nbsp;·&nbsp </label>'+
                   '<label id="valor8A'+4+'">'+valores8A[2]+'</label>'+
                   '<SUP id="exp8A'+4+'">'+valores8B[7]+'</SUP>'; 
    //casoC
    preguntas8[2] = '(<label id="valor8A'+5+'">'+valores8A[3]+'</label>)'+
                    '<SUP id="exp8A'+5+'">'+valores8B[5]+'</SUP>'; 
    
    // Caso D
    preguntas8[3] = '(<label id="valor8A'+6+'">'+valores8A[6]+'</label>)'+
                    '<SUP id="exp8A'+6+'">'+valores8B[6]+'</SUP>'+
                    '&nbsp; x &nbsp'+
                    '(<label id="valor8A'+7+'">'+valores8A[6]+'</label>)'+
                    '<SUP id="exp8A'+7+'">'+valores8B[7]+'</SUP>'+
                    '&nbsp;·&nbsp'+ 
                    '(<label id="valor8A'+8+'">'+valores8A[6]+'</label>)'+
                    '<SUP id="exp8A'+8+'">'+valores8B[8]+'</SUP>';
    //Caso E
    
    preguntas8[4] = '(<label id="valor8A'+9+'">'+valores8A[7]+'</label>)'+
                    '<SUP id="exp8A'+9+'">'+valores8B[9]+'</SUP>'+
                    '&nbsp;·&nbsp'+
                    '(<label id="valor8A'+10+'">'+valores8A[7]+'</label>)'+
                    '<SUP id="exp8A'+10+'">'+valores8B[10]+'</SUP>';   
    $('#contenido8').append('');
    for(var i=0; i<=12; i++){
      if(i==0)
      $("#contenido8").append('<br>'+preguntas8[0]+'&nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res8'+i+'"><SUP><input type="number" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE8'+i+'"></SUP><br>');
      else if(i==1)
      $("#contenido8").append('<br>'+preguntas8[1]+'&nbsp; =&nbsp; <input type="number"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res8'+i+'"><SUP><input type="number" placeholder=0  style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE8'+i+'"></SUP><br>');
      else if(i==2)
      $("#contenido8").append('<br>'+preguntas8[2]+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res8'+i+'"><br>');
      else if(i==3)
      $("#contenido8").append('<br>'+preguntas8[3]+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res8'+i+'"><SUP><input type="number" min="0" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE8'+i+'"></SUP><br>');
      else if(i==4)
      $("#contenido8").append('<br>'+preguntas8[4]+'&nbsp; =&nbsp; <input type="text"  style="text-align: center;width:40px;height:20px; font-size: 12px" id="res8'+i+'"><SUP><input type="number" min="0" placeholder=0 style="text-align: center;width:30px;height:20px; font-size: 12px" id="rE8'+i+'"></SUP><br>');  
    } 
  }
  //Pregunta 9
  function Pregunta9(){
    var i=1;
    var aleatorioA = Math.round(Math.random() * (2 - 0) + 1);
    var respuesta91 = [];
    var respuesta92 = [];
    var respuesta93 = [];
    
    var valoresC = [];
    var valoresD = [];
    var resA = "";
    var a = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    var j=0;

    var fila1 = '<tr><td><label>163 000 000 000</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuestaP91"></td></tr>';
    respuesta91[0] = '<button type="button" class="btn btn-success" id="res1a" onclick="Incorrectas9A()">1,63 x 10<sup>8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2a" onclick="Incorrectas9A()">1,63 x 10<sup>10</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="Respuestas9A()">1,63  x 10<sup>11</sup></button>';
    respuesta91[1] = '<button type="button" class="btn btn-success" id="res2a" onclick="Incorrectas9A()">1,63 x 10<sup>8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1a" onclick="Incorrectas9A()">1,63 x 10<sup>10</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="Respuestas9A()">1,63 x 10<sup>11</sup></button>'; 
    respuesta91[2] = '<button type="button" class="btn btn-success" id="res1a" onclick="Incorrectas9A()">1,63 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaA" class="btn btn-success" onclick="Respuestas9A()">1,63 x 10<sup>1</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2a" onclick="Incorrectas9A()">1,63 x 10<sup>10</sup></button>';
    
    var fila2 = '<tr><td><label>0,000 000 009</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuestaP92"></td></tr>';
    respuesta92[0] = '<button type="button" class="btn btn-success" id="res1b" onclick="Incorrectas9B()">9 x 10<sup>-8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2b" onclick="Incorrectas9B()">9 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="Respuestas9B()">9 x 10<sup>-9</sup></button>';
    respuesta92[1] = '<button type="button" class="btn btn-success" id="res2b" onclick="Incorrectas9B()">9 x 10<sup>-8</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1b" onclick="Incorrectas9B()">9 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="Respuestas9B()">9 x 10<sup>-9</sup></button>'; 
    respuesta92[2] = '<button type="button" class="btn btn-success" id="res1b" onclick="Incorrectas9B()">9 x 10<sup>8</sup></button>'+
                    '<button type="button" id="respuestaB" class="btn btn-success" onclick="Respuestas9B()">9 x 10<sup>-9</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2b" onclick="Incorrectas9B()">9 x 10<sup>-8</sup></button>';
    
    var fila3 = '<tr><td><label>132 120 000 000 000,0</label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuestaP93"></td></tr>';
    respuesta93[0] = '<button type="button" class="btn btn-success" id="res1c" onclick="Incorrectas9C()">1,32 x 10<sup>-14</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2c" onclick="Incorrectas9C()">1,32 x 10<sup>12</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="Respuestas9C()">1,32 x 10<sup>14</sup></button>';
    respuesta93[1] = '<button type="button" class="btn btn-success" id="res2c" onclick="Incorrectas9C()">1,32 x 10<sup>-14</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res1c" onclick="Incorrectas9C()">1,32 x 10<sup>12</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="Respuestas9C()">1,32 x 10<sup>14</sup></button>'; 
    respuesta93[2] = '<button type="button" class="btn btn-success" id="res1c" onclick="Incorrectas9C()">1,32 x 10<sup>12</sup></button>'+
                    '<button type="button" id="respuestaC" class="btn btn-success" onclick="Respuestas9C()">1,32 x 10<sup>14</sup></button>'+
                    '<button type="button" class="btn btn-success" id="res2c" onclick="Incorrectas9C()">1,32 x 10<sup>-14</sup></button>';
    var ramdomico = Math.round(Math.random() * (2 - 0) + 0); 
    console.log(ramdomico);
    $("#contenido9").append(fila1+fila2+fila3);
    $("#respuestaP91").append(respuesta91[ramdomico]);
    $("#respuestaP92").append(respuesta92[ramdomico]);
    $("#respuestaP93").append(respuesta93[ramdomico]);
  }
  var nota9 = 0;
  var cad9 = "";
  //Respuestas 9
  function Respuestas9A(){
        $("#nota9").html('');
        nota9 = nota9 + 0.166;
        cad9 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + (nota9).toFixed(2) + '</td></tr><tr><td style="text-align:center">0.5</td></tr>';
        $("#nota9").append(cad9);
        $('#nota9').css("border-color", "red");
        $("#res1a").removeClass("btn btn-success");
        $("#res1a").addClass("btn btn-danger");
        $("#res2a").removeClass("btn btn-success");
        $("#res2a").addClass("btn btn-danger");
        $("#res3a").removeClass("btn btn-success");
        $("#res3a").addClass("btn btn-danger");
        $('#res1a').prop('disabled', true);
        $('#res2a').prop('disabled', true);
        $('#res3a').prop('disabled', true);
        $('#respuestaA').prop('disabled', true);
  }
  function Respuestas9B(){
        $("#nota9").html('');
        nota9 = nota9 + 0.166;
        cad9 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + (nota9).toFixed(1) + '</td></tr><tr><td style="text-align:center">0.5</td></tr>';
        $("#nota9").append(cad9);
        $('#nota9').css("border-color", "red");
        $("#res1b").removeClass("btn btn-success");
        $("#res1b").addClass("btn btn-danger");
        $("#res2b").removeClass("btn btn-success");
        $("#res2b").addClass("btn btn-danger");
        $("#res3b").removeClass("btn btn-success");
        $("#res3b").addClass("btn btn-danger");
        $('#res1b').prop('disabled', true);
        $('#res2b').prop('disabled', true);
        $('#res3b').prop('disabled', true);
        $('#respuestaB').prop('disabled', true);
  } 
  function Respuestas9C(){
        //Variables Respuestas Txt
        $("#nota9").html('');
        nota9 = nota9 + 0.166;
        cad9 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + (nota9).toFixed(2) + '</td></tr><tr><td style="text-align:center">0.5</td></tr>';
        $("#nota9").append(cad9);
        $('#nota9').css("border-color", "red");                 
        $("#res1c").removeClass("btn btn-success");
        $("#res1c").addClass("btn btn-danger");
        $("#res2c").removeClass("btn btn-success");
        $("#res2c").addClass("btn btn-danger");
        $("#res3c").removeClass("btn btn-success");
        $("#res3c").addClass("btn btn-danger");
        $('#res1c').prop('disabled', true);
        $('#res2c').prop('disabled', true);
        $('#res3c').prop('disabled', true);
        $('#respuestaC').prop('disabled', true);
  }
  function Incorrectas9A(){
          $("#res1a").removeClass("btn btn-success");
          $("#res2a").removeClass("btn btn-success");
          $("#res3a").removeClass("btn btn-success");
          $("#res1a").addClass("btn btn-danger");
          $("#res2a").addClass("btn btn-danger");
          $("#res3a").addClass("btn btn-danger");
          $('#res1a').prop('disabled', true);
          $('#res2a').prop('disabled', true);
          $('#res3a').prop('disabled', true);
          $('#respuestaA').prop('disabled', true);
  }
  function Incorrectas9B(){
         $("#res1b").removeClass("btn btn-success");
         $("#res2b").removeClass("btn btn-success");
         $("#res3b").removeClass("btn btn-success");
         $("#res1b").addClass("btn btn-danger");
         $("#res2b").addClass("btn btn-danger");
         $("#res3b").addClass("btn btn-danger");
         $('#res1b').prop('disabled', true);
         $('#res2b').prop('disabled', true);
         $('#res3b').prop('disabled', true);
         $('#respuestaB').prop('disabled', true);
  }
  function Incorrectas9C(){
         $("#res1c").removeClass("btn btn-success");
         $("#res2c").removeClass("btn btn-success");
         $("#res3c").removeClass("btn btn-success");
         $("#res1c").addClass("btn btn-danger");
         $("#res2c").addClass("btn btn-danger");
         $("#res3c").addClass("btn btn-danger");
         $('#res1c').prop('disabled', true);
         $('#res2c').prop('disabled', true);
         $('#res3c').prop('disabled', true);
         $('#respuestaC').prop('disabled', true);
  }
  function Pregunta10(){
    var valores9B = [];
    
    for(var i=0; i<=7; i++){
      valores9B[i] = Math.round(Math.random() * (10 - 1) + 1);  
    }
    $("#contenido101").append('<label style="font-size:25px" id="valor101">'+ Math.pow(valores9B[0],2)+'&nbsp;&nbsp;</label>');
    $("#contenido102").append('<label style="font-size:25px" id="valor102">'+ Math.pow(valores9B[1],3)+'&nbsp;&nbsp;</label>');
    $("#contenido103").append('<label style="font-size:25px" id="valor103">'+ Math.pow(valores9B[2],4)+'&nbsp;&nbsp;</label>');
    $("#contenido104").append('<label style="font-size:25px" id="valor104">'+ Math.pow(valores9B[3],3)+'&nbsp;&nbsp;</label>');    
  }
  function Pregunta11(){
    var valoresB11 = [];
    var valoresA11 = [];
    var valoresC11 = [];
    var j =0;
    do{
      valoresA11[j] = Math.round(Math.random() * (40- 1) + 1);
      valoresB11[j] = 2 + Math.round(Math.random() * (40 - 1) + 1);  
      if(valoresA11[j]>valoresB11[j] && valoresA11[j]%valoresB11[j] == 0)
      j++; 
     }while(j<=10);

    $("#contenido111").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:20px" id="A110">'+ Math.pow(valoresA11[0],2) +'</label></td></tr><tr><td style="text-align:center"><label style="font-size:20px" id="B110">'+ Math.pow(valoresB11[0],2) +'</label><td></tr>');
    $("#contenido112").append('<div style="font-size:20px;width: 100px"><label id="A112">'+ Math.pow(valoresA11[2],2) +'</label>&nbsp;·&nbsp;<label id="B112">'+ Math.pow(valoresB11[2],2) +'</label></div>');
    $("#contenido113").append('<tr><td style="border-bottom:1px solid black"><label style="font-size:20px" id="A111">'+ Math.pow(valoresA11[1],2) +'</label></td></tr><tr><td style="text-align:center"><label style="font-size:20px" id="B111">'+ Math.pow(valoresB11[1],2) +'</label><td></tr>');
    $("#contenido114").append('<div style="font-size:20px;width: 100px"><label style="font-size:20px" id="A113">1</label><sup>16</sup></div>');
  }
  function Pregunta12(){
   var valores12a = [];
   var valores12b = [];
   var valores12c = [];
   var valores12d = [];
   var valores12e = [];
   var preguntas12 = [];
   for (var i = 0; i <= 9; i++) {
    valores12a[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores12b[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores12c[i] = Math.round(Math.random() * (40 - 1) + 1);
    valores12d[i] = Math.round(Math.random() * (40 - 1) + 1)
    valores12d[i] = Math.round(Math.random() * (40 - 1) + 1)
    }
    preguntas12[0] ='a)&nbsp;(<label>'+valores12a[0]+'</label>)<sup>3</sup>&nbsp;÷'+
                 '&nbsp;(-<label>'+valores12a[1]+'</label>)&nbsp; + &nbsp'+
                 '√<label style="border-top: 1px solid;">'+valores12a[2]+'</label>&nbsp;÷ &nbsp;'+
                 '<label>'+valores12a[3]+'</label>'+
                 '<textarea class="form-control" rows="5"></textarea><br>';

    preguntas12[1] ='b)&nbsp;(<label>'+valores12a[0]+'</label>)<sup>3</sup>&nbsp;÷'+
                 '&nbsp;√<label style="border-top: 1px solid;">'+valores12a[1]+'</label>&nbsp; + &nbsp'+
                 '&nbsp;(-<label>'+valores12a[1]+'</label>)<sup>1</sup>&nbsp;·&nbsp'+
                 '<sup style="left: 6px; top:-12px ">3</sup>√<label style="border-top: 1px solid;">'+valores12a[2]+'</label>&nbsp;&nbsp;'+
                 '<textarea class="form-control" rows="5"></textarea><br>';              

    preguntas12[2] ='<br>c)&nbsp;[(-<label>'+valores12a[0]+'</label>)<sup>0</sup>&nbsp;'+
                 '(-<label>'+valores12a[1]+'</label>)&nbsp; ÷ &nbsp'+
                 '<label>'+valores12a[1]+'</label>&nbsp; + &nbsp'+
                 '<sup style="left: 6px; top:-12px ">3</sup>√<label style="border-top: 1px solid;">'+valores12a[2]+'</label>&nbsp;]&nbsp;+ &nbsp;'+
                 '(-<label>'+valores12a[3]+'</label>)'+
                 '<textarea class="form-control" rows="5"></textarea><br>';
    preguntas12[3] ='<br>d)&nbsp;[(-<label>'+valores12a[0]+'</label>&nbsp;+'+
                 '&nbsp;<label>'+valores12a[1]+'</label>)3&nbsp; + &nbsp'+
                 '&nbsp;(<label>'+valores12a[2]+'</label>&nbsp; - &nbsp'+
                 '&nbsp;<label>'+valores12a[3]+'</label>)5]&nbsp;'+
                 '&nbsp;[(<label>'+valores12a[4]+'</label>&nbsp;&nbsp'+
                 '-&nbsp;<label>'+valores12a[5]+'</label>)3&nbsp;&nbsp'+
                 '&nbsp;(<label>'+valores12a[6]+'</label>&nbsp'+
                 '-&nbsp;<label>'+valores12a[7]+'</label>)2]&nbsp;&nbsp'+                 
                 '<textarea class="form-control" rows="5"></textarea><br>';
                 $("#contenido12").append(preguntas12);
               }
  
  function Pregunta13(){
    var i=1;
    var aleatorioA = Math.round(Math.random() * (2 - 0) + 1);
    var respuesta121 = [];
    var valoresC = [];
    var valoresD = [];
    var resA = "";
    var a = 0;
    var b = 0;
    var resB = "";
    var i = 0;
    var j=0;
    var fila121 = '<tr><td><label></label>'+
                '</td></tr><tr><td><div class="btn-group" id="respuestaP121"></td></tr>';
    respuesta121[0] = '<button type="button" class="btn btn-success" id="res131a" onclick="Incorrectas13A()">(p ∧ q) = r</button>'+
                    '<button type="button" class="btn btn-success" id="res132a" onclick="Incorrectas13A()">(p ∧ q) <= r</button>'+
                    '<button type="button" id="respuesta13A" class="btn btn-success" onclick="Respuestas13A()">(p ∧ q) ⇒ r</button>';
    respuesta121[1] = '<button type="button" class="btn btn-success" id="res132a" onclick="Incorrectas13A()">(p ∧ q) = r</button>'+
                    '<button type="button" class="btn btn-success" id="res131a" onclick="Incorrectas13A()">(p ∧ q) <= r</button>'+
                    '<button type="button" id="respuesta13A" class="btn btn-success" onclick="Respuestas13A()">(p ∧ q) ⇒ r</button>'; 
    respuesta121[2] = '<button type="button" class="btn btn-success" id="res131a" onclick="Incorrectas13A()">(p ∧ q) <= r</button>'+
                    '<button type="button" id="respuesta13A" class="btn btn-success" onclick="Respuestas13A()">(p ∧ q) ⇒ r</button>'+
                    '<button type="button" class="btn btn-success" id="res132a" onclick="Incorrectas13A()">(p ∧ q) = r</button>';
    var ramdomico = Math.round(Math.random() * (2 - 0) + 0); 
    console.log(ramdomico);
    $("#contenido13").append(fila121);
    $("#respuestaP121").append(respuesta121[ramdomico]);
  }
  var nota13 = 0;
  var cad13 = ""; 
  function Respuestas13A(){
        $("#nota13").html('');
        nota13 = nota13 + 0.5;
        cad13 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + (nota13).toFixed(2) + '</td></tr><tr><td style="text-align:center">0.5</td></tr>';
        $("#nota13").append(cad13);
        $('#nota13').css("border-color", "red");
        $("#res131a").removeClass("btn btn-success");
        $("#res131a").addClass("btn btn-danger");
        $("#res132a").removeClass("btn btn-success");
        $("#res132a").addClass("btn btn-danger");
        $("#res133a").removeClass("btn btn-success");
        $("#res133a").addClass("btn btn-danger");
         $('#res131a').prop('disabled', true);
         $('#res132a').prop('disabled', true);
         $('#respuesta13A').prop('disabled', true);
  }
  function Incorrectas13A(){
          $("#res131a").removeClass("btn btn-success");
          $("#res132a").removeClass("btn btn-success");
          $("#res133a").removeClass("btn btn-success");
          $("#res131a").addClass("btn btn-danger");
          $("#res132a").addClass("btn btn-danger");
          $("#res133a").addClass("btn btn-danger");
          $('#res131a').prop('disabled', true);
          $('#res132a').prop('disabled', true);
          $('#respuesta13A').prop('disabled', true);
  }
  function Pregunta14(){
    var pre14 = [];
    pre14[0] = '<label>Mi calificación es 4 o 5</label><br><input style="width:250px" type=text id="res141">';
    pre14[1] = '<br><label>No es cierto que 8 es menor que 13</label><br><input style="width:250px" type=text id="res142">';
    pre14[2] = '<br><label>Google no es una red social</label><br><input style="width:250px" type=text id="res143">';
    pre14[3] = '<br><label>Quito es la capital de Ecuador</label><br><input style="width:250px" type=text id="res144">';
    pre14[4] = '<br><label>2 es número par y no es divisor de 9</label><br><input style="width:250px" type=text id="res145">';

    $("#contenido14").append(pre14);
  }
  function Pregunta15(){
    var pre15 = [];
    pre15[0] = "<label>¿Cuál es el operador lógico de conjunción?</label><br><textarea></textarea>"
    pre15[1] = "<br><label>¿Cuál es el operador lógico de disyunción?</label><br><textarea></textarea>"
    $("#contenido15").append(pre15);
  }

  function Cargar(){
    location.reload();
  }

  $(document).ready(function() {
      var notaFinal = 0;
      Pregunta1();
      Pregunta2();
      Pregunta3();
      Pregunta4();
      Pregunta5();
      Pregunta6();
      Pregunta7();
      Pregunta8();
      Pregunta9();
      Pregunta10();
      Pregunta11();
      Pregunta12();
      Pregunta13();
      Pregunta14();
      Pregunta15();
      var cad1 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">0</td></tr><tr><td style="text-align:center">0.4</td></tr>';
      var cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">0</td></tr><tr><td style="text-align:center">0.5</td></tr>';
      var cad3 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;"><input min=0 max=1.4 style="border:none;text-align:center; width:20px" placeholder="0" id="notaF6"></td></tr><tr><td style="text-align:center">1.4</td></tr>';
      var cad4 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;"><input min=0 max=1.4 style="border:none;text-align:center; width:20px" placeholder="0" id="notaF12"></td></tr><tr><td style="text-align:center">2.5</td></tr>';
      var cad15 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;"><input min=0 max=1.4 style="border:none;text-align:center; width:20px" placeholder="0" id="notaF15"></td></tr><tr><td style="text-align:center">0.5</td></tr>';
      
      $("#nota1").append(cad1);
      $("#nota2").append(cad1);
      $("#nota3").append(cad1);
      $("#nota4").append(cad1);
      $("#nota5").append(cad1);
      $("#nota6").append(cad3);
      $("#nota7").append(cad2);
      $("#nota8").append(cad2);
      $("#nota9").append(cad2);
      $("#nota10").append(cad2);
      $("#nota11").append(cad2);
      $("#nota12").append(cad4);
      $("#nota13").append(cad2);
      $("#nota14").append(cad2);
      $("#nota15").append(cad15);
     
      function CalificarP1() {
          var respuestas = [];
          for (var i = 0; i <= 3; i++) {
              respuestas[i] = $("#res" + i).val();
          }
          var corregidas = [];
          var nota1 = 0;
          corregidas[0] = Math.abs(parseInt($("#valorA0").text())) + Math.abs(parseInt($("#valorB0").text())) - Math.abs(parseInt($("#valorC0").text()));
          corregidas[1] = -Math.abs(parseInt($("#valorA1").text())) - Math.abs(parseInt($("#valorB1").text())) + Math.abs(parseInt($("#valorC1").text()));
          corregidas[2] = Math.abs(parseInt($("#valorA2").text()) + parseInt($("#valorB2").text())) - Math.abs(parseInt($("#valorC2").text()) - parseInt($("#valorD2").text()));
          corregidas[3] = (Math.abs(parseInt($("#valorA3").text()) * parseInt($("#valorB3").text()))) + (Math.abs(parseInt($("#valorC3").text()) - parseInt($("#valorD3").text()))) - (Math.abs(parseInt($("#valorE3").text()) / parseInt($("#valorF3").text())));
          console.log(respuestas);
          console.log(corregidas);
          for (var i = 0; i <= 3; i++) {
              if (respuestas[i] == corregidas[i]) {
                  nota1 = nota1 + 0.1;
                  $('#res' + i).css("background-color", "green");
                  $('#res' + i).attr("readonly");
              } else {
                  $('#res' + i).css("background-color", "red");
                  $('#res' + i).attr("readonly");
              }
          }
          cad1 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + nota1 + '</td></tr><tr><td style="text-align:center">0.4</td></tr>'
          $("#nota1").html('');
          $("#nota1").append(cad1);

          $('#nota1').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota1;
      }
      function CalificarP2() {
          var res = [];
          var valor = [];
          var simbolo = [];
          var nota2 = 0;
          bandera = 0;
          for (var i = 1; i <= 15; i++) {
              res[i] = $('#resP2' + i).val();
              valor[i] = $('#valor' + i).text();
              simbolo[i] = $('#simbolo' + i).text();
          }
          if (res[1] !== "" && res[1] < valor[1]) {
              nota2 = nota2 + 0.04;
              $('#resP21').css("background-color", "green");
          } else {
              $('#resP21').css("background-color", "red");
          }
          if (valor[1] < res[2] && res[2] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP22').css("background-color", "green");
          } else {
              $('#resP22').css("background-color", "red");
          }

          if (valor[2] < res[3] && res[3] < res[4] && res[3] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP23').css("background-color", "green");
          } else {
              $('#resP23').css("background-color", "red");
          }

          if (res[3] < res[4] && res[4] < res[5] && res[4] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP24').css("background-color", "green");
          } else {
              $('#resP24').css("background-color", "red");
          }

          if (res[4] < res[5] && res[5] < valor[3] && res[5] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP25').css("background-color", "green");
          } else {
              $('#resP25').css("background-color", "red");
          }

          if (valor[4] > res[6] && res[6] < valor[5] && res[6] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP26').css("background-color", "green");
          } else {
              $('#resP26').css("background-color", "red");
          }


          if (valor[5] > res[7] && res[7] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP27').css("background-color", "green");
          } else {
              $('#resP27').css("background-color", "red");
          }

          if (valor[6] < res[8] && res[8] < res[9] && res[8] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP28').css("background-color", "green");
          } else {
              $('#resP28').css("background-color", "red");
          }

          if (res[8] < res[9] && res[9] < valor[7] && res[9] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP29').css("background-color", "green");
          } else {
              $('#resP29').css("background-color", "red");
          }

          if (valor[7] < res[10] && res[10] < valor[8] && res[10] !== "") {
              nota2 = nota2 + 0.04;
              $('#resP210').css("background-color", "green");
          } else {
              $('#resP210').css("background-color", "red");
          }
          var cad2 = "";

          cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + nota2.toFixed(2) + '</td></tr><tr><td style="text-align:center">0.4</td></tr>'
          $("#nota2").html('');
          $("#nota2").append(cad2);

          $('#nota2').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota2;
      }
      function CalificarP3() {
          var rFil1 = [];
          var rFil2 = [];
          var rFil3 = [];
          var rFil4 = [];
          var resA = [];
          var resB = [];
          var resC = [];
          var resD = [];
          var nota3 = 0;
          //Respuestas Correctas
          for (var i = 1; i <= 6; i++) {
              rFil1[i] = parseInt($("#A" + i).text()) + parseInt($("#B" + i).text());
              rFil2[i] = parseInt($("#A" + i).text()) - parseInt($("#C" + i).text());
              rFil3[i] = (parseInt($("#A" + i).text()) + parseInt($("#C" + i).text())) - parseInt($("#B" + i).text());
              rFil4[i] = parseInt($("#A" + i).text()) - (parseInt($("#C" + i).text()) + parseInt($("#B" + i).text()));
          }
          //Respuestas ingresadas
          for (var i = 1; i <= 6; i++) {
              resA[i] = $("#resA" + i).val();
              resB[i] = $("#resB" + i).val();
              resC[i] = ($("#resC" + i).val());
              resD[i] = $("#resD" + i).val();
          }
          console.log("Respuestas Preguntas 3");
          console.log(rFil1);
          console.log(rFil2);
          console.log(rFil3);
          console.log(rFil4);
          console.log("Fin Preguntas 3");
          
          debugger;
          for (var i = 1; i <= 6; i++) {
              if (resA[i] == rFil1[i] && resA[i] !="") {
                  nota3 = nota3 + 1;
                  $('#resA' + i).css("background-color", "green");
              } else {
                  $('#resA' + i).css("background-color", "red");
              }
              if (resB[i] == rFil2[i] && resB[i] !="") {
                  nota3 = nota3 + 1;
                  $('#resB' + i).css("background-color", "green");
              } else {
                  $('#resB' + i).css("background-color", "red");
              }
              if (resC[i] == rFil3[i] && resC[i] !="") {
                  nota3 = nota3 + 1;
                  $('#resC' + i).css("background-color", "green");
              } else {
                  $('#resC' + i).css("background-color", "red");
              }
              if (resD[i] == rFil4[i] && resD[i] !="") {
                  nota3 = nota3 + 1;
                  $('#resD' + i).css("background-color", "green");
              } else {
                  $('#resD' + i).css("background-color", "red");
              }
          }
          debugger;
          nota3 = (nota3 * 0.4) / 10;
          nota3 = parseFloat(nota3).toFixed(2);
          cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + nota3 + '</td></tr><tr><td style="text-align:center">0.4</td></tr>'
          $("#nota3").html('');
          $("#nota3").append(cad2);
          $('#nota3').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota3;
      }
      function CalificarP4() {
          var resp4 = [];
          var nota4 = 0;
          for (var i = 0; i <= 3; i++) {
              resp4[i] = $("#res4" + i).val();
          }
          for (var i = 0; i <= 3; i++) {
              if (i == 0 || i == 1 || i == 2) {
                  if (resp4[i] == "V") {
                      nota4 = nota4 + 1;
                      $('#res4' + i).css("background-color", "green");
                  } else {
                      $('#res4' + i).css("background-color", "red");
                  }
              } else {
                  if (resp4 == "F") {
                      nota4 = nota4 + 1;
                      $('#res4' + i).css("background-color", "green");
                  } else {
                      $('#res4' + i).css("background-color", "red");
                  }
              }
          }
          cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + ((nota4 * 0.4) / 10) + '</td></tr><tr><td style="text-align:center">0.4</td></tr>'
          $("#nota4").html('');
          $("#nota4").append(cad2);
          $('#nota4').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota4;
      }
      function CalificarP5(){
        var resp5a = []
        var resp5b = []
        var resp5c = []
        var valores5a = [];
        var valores5b = [];
        var valores5c = [];
        var correctas5a = []
        var correctas5b = []
        var correctas5c = []
        var nota5 =0;

        for(var z=0; z<=4;z++){
          resp5a[z] = $("#res5A"+z).val();
          resp5b[z] = $("#res5B"+z).val();
          resp5c[z] = $("#res5C"+z).val();
        }
        for(l=0;l<=2;l++){
          valores5a[l] = parseInt($("#valor5A"+l).text());
          valores5b[l] = parseInt($("#valor5B"+l).text());
          valores5c[l] = parseInt($("#valor5C"+l).text());
        }
        for(var z=0; z<=4;z++){
          if(z==0){
           correctas5a[z] = valores5a[0]*valores5b[0];
           correctas5b[z] = valores5a[1]*valores5b[1];
           correctas5c[z] = valores5a[2]*valores5b[2];
           }
          if(z==1){
           correctas5a[z] = valores5b[0]*valores5a[0];
           correctas5b[z] = valores5b[1]*valores5a[1];
           correctas5c[z] = valores5b[2]*valores5a[2];            
          }
          if(z==2){
           correctas5a[z] = valores5a[0]*(valores5b[0]*valores5c[0]);
           correctas5b[z] = valores5a[1]*(valores5b[1]*valores5c[1]);
           correctas5c[z] = valores5a[2]*(valores5b[2]*valores5c[2]);             
          }
          if(z==3){
           correctas5a[z] = (valores5a[0]*valores5b[0])*valores5c[0];
           correctas5b[z] = (valores5a[1]*valores5b[1])*valores5c[1];
           correctas5c[z] = (valores5a[2]*valores5b[2])*valores5c[2];             
          }
          if(z==4){
           correctas5a[z] = (valores5a[0]*valores5b[0])+(valores5a[0]*valores5c[0]);
           correctas5b[z] = (valores5a[1]*valores5b[1])+(valores5b[0]*valores5c[1]);
           correctas5c[z] = (valores5a[2]*valores5b[2])+(valores5c[0]*valores5c[2]);             
          }
        }
        
        for(var i=0; i<=4; i++){
          switch (i) {
            case 0:
            if(correctas5a[i] == resp5a[i]){
              nota5 = nota5+1;
              $('#res5A'+i).css("background-color", "green");
            }
            else{
              $('#res5A'+i).css("background-color", "red");
            }

            if(correctas5b[i] == resp5b[i]){
              nota5 = nota5+1;
              $('#res5B'+i).css("background-color", "green");
            }
            else{
              $('#res5B'+i).css("background-color", "red");
            }
            if(correctas5c[i] == resp5c[i]){
              nota5 = nota5+1;
              $('#res5C'+i).css("background-color", "green");
            }
            else{
              $('#res5C'+i).css("background-color", "red");
            }
            break;

            case 1:
            if(correctas5a[i] == resp5a[i]){
              nota5 = nota5+1;
              $('#res5A'+i).css("background-color", "green");
            }
            else{
              $('#res5A'+i).css("background-color", "red");
            }

            if(correctas5b[i] == resp5b[i]){
              nota5 = nota5+1;
              $('#res5B'+i).css("background-color", "green");
            }
            else{
              $('#res5B'+i).css("background-color", "red");
            }
            if(correctas5c[i] == resp5c[i]){
              nota5 = nota5+1;
              $('#res5C'+i).css("background-color", "green");
            }
            else{
              $('#res5C'+i).css("background-color", "red");
            }
            break;

            case 2:
            if(correctas5a[i] == resp5a[i]){
              nota5 = nota5+1;
              $('#res5A'+i).css("background-color", "green");
            }
            else{
              $('#res5A'+i).css("background-color", "red");
            }

            if(correctas5b[i] == resp5b[i]){
              nota5 = nota5+1;
              $('#res5B'+i).css("background-color", "green");
            }
            else{
              $('#res5B'+i).css("background-color", "red");
            }
            if(correctas5c[i] == resp5c[i]){
              nota5 = nota5+1;
              $('#res5C'+i).css("background-color", "green");
            }
            else{
              $('#res5C'+i).css("background-color", "red");
            }
            break;

            case 3:
            if(correctas5a[i] == resp5a[i]){
              nota5 = nota5+1;
              $('#res5A'+i).css("background-color", "green");
            }
            else{
              $('#res5A'+i).css("background-color", "red");
            }

            if(correctas5b[i] == resp5b[i]){
              nota5 = nota5+1;
              $('#res5B'+i).css("background-color", "green");
            }
            else{
              $('#res5B'+i).css("background-color", "red");
            }
            if(correctas5c[i] == resp5c[i]){
              nota5 = nota5+1;
              $('#res5C'+i).css("background-color", "green");
            }
            else{
              $('#res5C'+i).css("background-color", "red");
            }
            break; 

            case 4:
            if(correctas5a[i] == resp5a[i]){
              nota5 = nota5+1;
              $('#res5A'+i).css("background-color", "green");
            }
            else{
              $('#res5A'+i).css("background-color", "red");
            }

            if(correctas5b[i] == resp5b[i]){
              nota5 = nota5+1;
              $('#res5B'+i).css("background-color", "green");
            }
            else{
              $('#res5B'+i).css("background-color", "red");
            }
            if(correctas5c[i] == resp5c[i]){
              nota5 = nota5+1;
              $('#res5C'+i).css("background-color", "green");
            }
            else{
              $('#res5C'+i).css("background-color", "red");
            }
            break;
          }
        }

          cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + ((nota5 * 0.4) / 10) + '</td></tr><tr><td style="text-align:center">0.4</td></tr>'
          $("#nota5").html('');
          $("#nota5").append(cad2);
          $('#nota5').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota5;
      }
      function CalificarP7(){
        var Respuestas7 = [];
        var nota7 = 0;
        Respuestas7[0] = $("#valor7A").val();
        Respuestas7[1] = $("#valor7B").val();
        Respuestas7[2] = $("#valor7C").val();
        Respuestas7[3] = $("#valor7D").val();
        if(Respuestas7[0]=="12"){
           nota7 = nota7 + 0.125;
           $('#valor7A').css("background-color", "green");
        }
        else{
          $('#valor7A').css("background-color", "red");
        }

        if(Respuestas7[1]=="-15"){
           nota7 = nota7 + 0.125;
           $('#valor7B').css("background-color", "green");
        }
        else{
          $('#valor7B').css("background-color", "red");
        }

        if(Respuestas7[2]=="4"){
           nota7 = nota7 + 0.125;
           $('#valor7C').css("background-color", "green");
        }
        else{
          $('#valor7C').css("background-color", "red");
        }
        if(Respuestas7[3]=="4"){
           nota7 = nota7 + 0.125;
           $('#valor7D').css("background-color", "green");
        }
        else{
          $('#valor7D').css("background-color", "red");
        }
        cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + nota7 + '</td></tr><tr><td style="text-align:center">0.5</td></tr>'
          $("#nota7").html('');
          $("#nota7").append(cad2);
          $('#nota7').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota7;
      }
      function CalificarP8(){
        var nota8 = 0;
        var nota8 = 0;
        var varA = [];
        var var8B = [];
        var exp8A = [];
        var e8B = [];
        var res3 = [];
        var operador = [];
        var a=[];
        e8B[0] = parseInt($('#exp8B0').text())
        e8B[1] = parseInt($('#exp8B1').text())

        for(var i=0; i<=10; i++){
          exp8A[i]= parseInt($('#exp8A'+i).text());
          var8B[i]= parseInt($('#valor8A'+i).text());
        }

        if(parseInt($("#res80").val()) == var8B[0] && parseInt($('#rE80').val()) == ((exp8A[0]*e8B[0])+(exp8A[1]*e8B[1]))){
          nota8 = nota8+1;
          $('#res80').css("background-color", "green");
          $('#rE80').css("background-color", "green");
        }
        else{
          $('#res80').css("background-color", "red");
          $('#rE80').css("background-color", "red");
        }

        if(parseInt($("#res81").val()) == var8B[2] && parseInt($('#rE81').val()) == ((exp8A[2])+(exp8A[3])+(exp8A[4]))){
          nota8 = nota8+1;
          $('#res81').css("background-color", "green");
          $('#rE81').css("background-color", "green");
        }
        else{
          $('#res81').css("background-color", "red");
          $('#rE81').css("background-color", "red");
        }

        if(parseInt($("#res82").val()) == Math.pow(var8B[5],exp8A[5])){
          nota8 = nota8+1;
          $('#res82').css("background-color", "green");
          $('#rE82').css("background-color", "green");
        }
        else{
          $('#res82').css("background-color", "red");
          $('#rE82').css("background-color", "red");
        }

        if(parseInt($("#res83").val()) == var8B[6] && parseInt($('#rE83').val()) == ((exp8A[6])+(exp8A[7])+(exp8A[8]))){
          nota8 = nota8+1;
          $('#res83').css("background-color", "green");
          $('#rE83').css("background-color", "green");
        }
        else{
          $('#res83').css("background-color", "red");
          $('#rE83').css("background-color", "red");
        }
        
        if(parseInt($("#res84").val()) == var8B[9] && parseInt($('#rE84').val()) == ((exp8A[9])+(exp8A[10]))){
          nota8 = nota8+1;
          $('#res84').css("background-color", "green");
          $('#rE84').css("background-color", "green");
        }
        else{
          $('#res84').css("background-color", "red");
          $('#rE84').css("background-color", "red");
        } 
        cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + ((nota8 * 0.5) / 5) + '</td></tr><tr><td style="text-align:center">0.5</td></tr>'
          $("#nota8").html('');
          $("#nota8").append(cad2);
          $('#nota8').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + ((nota8 * 0.5) / 5);
      }
      var nota10 = 0;
      function CalificarP10(){
        var resp10 = [];
        var pre10 = [];
        
        for(var i=1;i<=4;i++)
        resp10[i] = $("#res10"+i).val()
        pre10[0] = $("#valor101").text();
        pre10[1] = $("#valor102").text();
        pre10[2] = $("#valor103").text();
        pre10[3] = $("#valor104").text();
        console.log(resp10);
        console.log(pre10);

        if(Math.pow(resp10[1],2)== $("#valor101").text()){
          nota10 = nota10 +1;
          $('#res101').css("background-color", "green");
        }
        else{
         $('#res101').css("background-color", "red"); 
        }
        if(Math.pow(resp10[2],3)== $("#valor102").text()){
          nota10 = nota10 +1;
          $('#res102').css("background-color", "green");
        }
        else{
         $('#res102').css("background-color", "red"); 
        }
        if(Math.pow(resp10[3],4)== $("#valor103").text()){
          nota10 = nota10 +1;
          $('#res103').css("background-color", "green");
        }
        else{
         $('#res103').css("background-color", "red"); 
        }        
        if(Math.pow(resp10[4],3)== $("#valor104").text()){
          nota10 = nota10 +1;
          $('#res104').css("background-color", "green");
        }
        else{
         $('#res104').css("background-color", "red"); 
        }
        nota10 = (nota10*0.5)/4;
        cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + nota10 + '</td></tr><tr><td style="text-align:center">0.5</td></tr>'
          $("#nota10").html('');
          $("#nota10").append(cad2);
          $('#nota10').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + nota10;
      }
      function CalificarP11(){
        
        var preg11 = [];
        var resp11 = [];
        var nota11 = 0;
        preg11[1] = Math.pow(($("#A110").text() / $("#B110").text()),1/2);
        preg11[2] = Math.pow($("#A112").text(),1/2) * Math.pow(($("#B112").text()),1/2);
        preg11[3] = $("#A113").text();
        preg11[4] = Math.pow(($("#A111").text() / $("#B111").text()),1/2);
        
        for(var i=1; i<=4;i++)
        resp11[i] = $("#res11"+i).val();
        for(var i=1; i<=4;i++){
        if(resp11[i]==preg11[i]){
          nota11 = nota11 +1;
          $('#res11'+i).css("background-color", "green");
        }
        else{
         $('#res11'+i).css("background-color", "red"); 
        }
        }
        console.log(preg11);
        console.log(resp11);
        cad2 = '<tr><td style="text-align:center;width: 80px;top: 2px;border-bottom: 1px solid black;">' + (nota11*0.5)/4 + '</td></tr><tr><td style="text-align:center">0.5</td></tr>'
          $("#nota11").html('');
          $("#nota11").append(cad2);
          $('#nota11').css("border-color", "red");
          notaFinal = parseFloat(notaFinal) + ((nota11*0.5)/4);
      }
      function CalificarP14(){
        var nota14 = 0;
        if($("#res141").val() == "Mi calificación no es 4 o 5"){
          nota14 = nota14 +1;
          $('#res141').css("background-color", "green");
        }
        else{
         $('#res141').css("background-color", "red"); 
        }
        if($("#res142").val() == "8 es menor que 13"){
          nota14 = nota14 +1;
          $('#res142').css("background-color", "green");
        }
        else{
         $('#res142').css("background-color", "red"); 
        }
        if($("#res143").val() == "Google no es una red social."){
          nota14 = nota14 +1;
          $('#res143').css("background-color", "green");
        }
        else{
         $('#res143').css("background-color", "red"); 
        }
        if($("#res144").val() == "Quito es la capital de Ecuador"){
          nota14 = nota14 +1;
          $('#res144').css("background-color", "green");
        }
        else{
         $('#res144').css("background-color", "red"); 
        }
        if($("#res145").val() == "2 es un número par y no es divisor de 9."){
          nota14 = nota14 +1;
          $('#res145').css("background-color", "green");
        }
        else{
         $('#res145').css("background-color", "red"); 
        }
        notaFinal = parseFloat(notaFinal) + ((nota14 * 0.5) / 5);
      }
      var conta =0;
      
      function datos(i){
         var nota6 =  $("#notaF6").val();
         var nota12 =  $("#notaF12").val();
         var nota15 =  $("#notaF15").val();
         var pre = ["6","12","15"];
         if($("#notaF6").val()==""){
         alertify.prompt("Introducir notas para la pregunta 6 sobre 0.5:", function (e, str) {
          if (e){
              alertify.success("Has pulsado has introducido nota: " + str);
              $("#notaF6").val(str);
              console.log("nota6"+str);
              datos(4);             
            }else{
              alertify.error("No has ingresado la nota");
              datos(4);
            }
          });
         return false;
       }
        if($("#notaF12").val()==""){
        alertify.prompt("Introducir notas para la pregunta 12 sobre 2.5:", function (e, str1) {
          if (e){
              alertify.success("Has pulsado has introducido nota: " + str1);
              $("#notaF12").val(str1);
              console.log("nota12"+str1);
              datos(4)
            }else{
              alertify.error("No has ingresado la nota");
              datos(4);
            }
          });
        return false;
      }
      if($("#notaF15").val()==""){
        alertify.prompt("Introducir notas para la pregunta 15 sobre 0.5:", function (e, str2) {
          if (e){
              alertify.success("Has pulsado has introducido nota: " + str2);
              $("#notaF15").val(str2);
              console.log("nota15"+str2);
              datos(4)
            }else{
              alertify.error("No has ingresado la nota");
              datos(4);
            }
          });
        return false;
      }
      if(i==4){
        confirmar();
      }
    }

  function confirmar(){
    if($("#notaF6").val()=="" || $("#notaF12").val()=="" || $("#notaF15").val()==""){
      datos(1);
    }
    else{
    alertify.confirm("<h3>Desea calificar la evaluación?</h3>", function (e) {
            if (e) {
                  CalificarP1();
                  CalificarP2();
                  CalificarP3();
                  CalificarP4();
                  CalificarP5();
                  CalificarP7();
                  CalificarP8();
                  CalificarP10();
                  CalificarP11();
                  CalificarP14();
                  debugger;
                  notaFinal = parseFloat(notaFinal) + parseFloat($("#notaF6").val()) + nota9 + parseFloat($("#notaF12").val()) + nota13 +  parseFloat($("#notaF15").val()); 
                  
                  $("#txtNota").text(notaFinal +"/10");
                  alertify.success("La evaluacion ha sido calificada!!!");
            } else{ 
            alertify.error("Has pulsado '" + + "'");
            }
      });
      return false
    }
    }

$("#Calificar").click(function() {
    if($("#notaF6").val()=="" || $("#notaF12").val()=="" || $("#notaF15").val()==""){
    datos(1);
    }
    else{
      datos(4);
    }
    conta++;
    $('#res131a').prop('disabled', true);
    $('#res132a').prop('disabled', true);
    $('#respuesta13A').prop('disabled', true);
    $('#res1a').prop('disabled', true);
    $('#res2a').prop('disabled', true);
    $('#respuestaA').prop('disabled', true);
    $('#res1b').prop('disabled', true);
    $('#res2b').prop('disabled', true);
    $('#respuestaB').prop('disabled', true); 
    $('#res1c').prop('disabled', true);
    $('#res2c').prop('disabled', true);
    $('#respuestaC').prop('disabled', true); 
    $('#Calificar').prop('disabled', true);
    $('#notaF6').prop('disabled', true);
    $('#notaF12').prop('disabled', true);
    $('#notaF15').prop('disabled', true);


      });
    });