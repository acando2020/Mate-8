var random1 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i1_p120_act115.jpg" alt=""></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i2_p120_act115.jpg" alt=""></td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i3_p120_act115.jpg" alt=""></td>' +
        '<td>' +
        '<input class="inputfraccciones sinEspacios" id="act1num4"></input>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i4_p120_act115.jpg" alt=""></td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num5"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num6"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i5_p120_act115.jpg" alt=""></td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num7"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num8"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i6_p120_act115.jpg" alt=""></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num9"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num10"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}


function pregunta1() {
    var respact2 = ['31', '84', '11', '3', '14', '1', '10', '3', '2', '21', '86', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////////////////pregunta2///////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '÷' +
        '<div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">-4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '÷' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-16</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '÷ <span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '÷' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-9</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num7"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['32', '9', '64', '75', '4', '3', '1', '2', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

/////////////////////////pregunta3///////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><img src="img/i7_p120_act115.jpg" alt=""></td> <td> <input class="inputfraccciones sinEspacios" id="act3num0"></input> </td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i8_p120_act115.jpg" alt=""></td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num1"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num2"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['1', '1', '11', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota3').val(parseFloat(total).toFixed(2));


}

//////////////////////pregunta4////////////////////////////
var random4 = [
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><b>Expresa</b> como una potencia la cantidad de entrevistados el día jueves.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act4num0"></input><sup><input class="inputfraccciones sinEspacios" id="act4num1" style="width: 20px;"></input></sup></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><b>Expresa</b> como una potencia la cantidad de entrevistados el día lunes.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act4num2"></input><sup><input class="inputfraccciones sinEspacios" id="act4num3" style="width: 20px;"></input></sup></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><b>Expresa</b> matemáticamente mediante potencias la cantidad de personas entrevistadas hasta el día sábado.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act4num4"></input><sup><input class="inputfraccciones sinEspacios" id="act4num5" style="width: 20px;"></input></sup>+<input class="inputfraccciones sinEspacios" id="act4num6"></input><sup><input class="inputfraccciones sinEspacios" id="act4num7" style="width: 20px;"></input></sup>+<input class="inputfraccciones sinEspacios" id="act4num8"></input><sup><input class="inputfraccciones sinEspacios" id="act4num9" style="width: 20px;"></input></sup>+<input class="inputfraccciones sinEspacios" id="act4num10"></input><sup><input class="inputfraccciones sinEspacios" id="act4num11" style="width: 20px;"></input></sup>+<input class="inputfraccciones sinEspacios" id="act4num12"></input><sup><input class="inputfraccciones sinEspacios" id="act4num13" style="width: 20px;"></input></sup>+<input class="inputfraccciones sinEspacios" id="act4num14"></input><sup><input class="inputfraccciones sinEspacios" id="act4num15" style="width: 20px;"></input></sup></td>' +
        '</tr>' +
        '</table>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['2', '3', '2', '0', '2', '0', '2', '1', '2', '2', '2', '3', '2', '4', '2', '5', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 16;
    $('#nota4').val(parseFloat(total).toFixed(2));


}

function pregunta5() {
    var nt1 = 0;
    var act5num0 = document.getElementById('act5num0').value;
    if (act5num0 == 'a') {
        nt1 = 2;
        $('#act5num0').css("background", "#00e600");
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}

function pregunta6() {
    var respact2 = ['1', '9', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota6').val(parseFloat(total).toFixed(2));


}
//////////////////////pregunta7////////////////////////////////////////////////

var random7 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">3</span>&radic;</span><span class="radicand">-<sup><input type="text" style="width: 20px;" id="act7num0" class="inputfraccciones sinEspacios"></sup>/<sub><input type="text" style="width: 20px;" id="act7num1" class="inputfraccciones sinEspacios"></sub></span> = - 0,44' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">6</span>&radic;</span><span class="radicand">-<sup>64</sup>/<sub><input type="text" style="width: 30px;" id="act7num2" class="inputfraccciones sinEspacios"></sub></span> = <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<sup><input type="text" style="width: 20px;" id="act7num3" class="inputfraccciones sinEspacios"></sup><span class="radical">&radic;</span><span class="radicand">-<sup>9</sup>/<sub>16</sub></span> = <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">3</span>&radic;</span><span class="radicand">- 0,729</span></span> = -<div class="fraction">' +
        '<span class="fup"><input id="act7num4" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><sup>9</sup>/<sub><input type="text" style="width: 30px;" id="act7num5" class="inputfraccciones sinEspacios"></sub></span> = <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><span class="radical"><span class="n-root"><input type="text" style="width: 15px; height: 15px;" id="act7num6" class="inputfraccciones sinEspacios"></span>&radic;</span><span class="radicand"><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">x<sup>24</sup></span></span></span> = x<sup>2</sup>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<sup><input type="text" style="width: 15px; height: 15px;" id="act7num7" class="inputfraccciones sinEspacios"></sup><span class="radical">&radic;</span><span class="radicand">(<sup>3</sup>/<sub>8</sub>)<sup>3</sup></span> = (<sup>3</sup>/<sub>8</sub>)<sup><sup><input type="text" style="width: 15px; height: 15px;" id="act7num8" class="inputfraccciones sinEspacios"></sup>/<sub>5</sub></sup>' +
        '</div>' +
        '</td>'
    ],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

function pregunta7() {
    var respact2 = ['9', '100', '729', '2', '9', '49', '3', '5', '3', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota7').val(parseFloat(total).toFixed(2));


}
/*
function pregunta5() {
    var nt1 = 0;
    var act5num0 = document.getElementById('act5num0').value;
    if (act5num0 == 680) {
        nt1 = 2;
        $('#act5num0').css("background", "#00e600");
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}
*/

function NotaFinal() {

   /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
   pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
    var total = (subtotal * 10) / 7;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
