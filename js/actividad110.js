function pregunta1() {
    var respact2 = ['1', '2', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota1').val(parseFloat(total).toFixed(2));


}

function pregunta2() {
    var respact2 = ['1', '110', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

/////////////////////////pregunta3///////////////////////
var random3 = [
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(-&frac12;)<sup>2</sup>(-&frac12;)<sup>5</sup> ÷ (-&frac12;)<sup>3</sup> =</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(0,<span style="text-decoration: overline;">2</span>)<sup>2</sup> ÷ ​​[ (0,<span style="text-decoration: overline;">2</span>)<sup>3</sup>]<sup>4</sup> =</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>((0,5)<sup>3</sup>)<sup>-1</sup> ÷ [(4)<sup>5</sup>(2)<sup>-3</sup>] =</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(0,2a<sup>3</sup>b<sup>5</sup>)<sup>2</sup> ⋅ (3a<sup>5</sup>b<sup>3</sup>)<sup>3</sup> =</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num7"></input></span>' +
        '</div><input class="inputfraccciones  sinEspacios" id="act3num8"></input><sup><input class="inputfraccciones soloNumeros sinEspacios" id="act3num9" style="width: 20px;"></input></sup><input class="inputfraccciones  sinEspacios" id="act3num10"></input><sup><input class="inputfraccciones soloNumeros sinEspacios" id="act3num11" style="width: 20px;"></input></sup>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['1', '64', '6561', '16', '1', '64', '27', '5', 'a', '21', 'b', '19', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 12;
    $('#nota3').val(parseFloat(total).toFixed(2));


}

//////////////////////pregunta4////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(3)<sup>-3</sup> = - 3<sup>3</sup></td> <td><input class="inputfraccciones text-uppercase" id="act4num0" maxlength="1"></input></td> <td><input class="form-control"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(<sup>5</sup>/<sub>7</sub>)<sup>2</sup> =' +
        '<div class="fraction">' +
        '<span class="fup">25</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act4num1" maxlength="1"></input></td>' +
        '<td><input class="form-control"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(0,345)<sup>0</sup> = 0</td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act4num2" maxlength="1"></input></td>' +
        '<td><input class="form-control"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(-0,2)<sup>8</sup> = -0,2<sup>8</sup></td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act4num3" maxlength="1"></input></td>' +
        '<td><input class="form-control"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(-<sup>2</sup>/<sub>3</sub>)<sup>-6</sup> = (<sup>3</sup>/<sub>2</sub>)<sup>6</sup></td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act4num4" maxlength="1"></input></td>' +
        '<td><input class="form-control"></input></td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['F', 'V', 'F', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 5;
    $('#nota4').val(parseFloat(total).toFixed(2));


}

function NotaFinal() {




    /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();



    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;



    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);


    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
