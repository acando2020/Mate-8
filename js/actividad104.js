document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});


function pregunta1() {
    var respact2 = ['1', '5', '1', '3', '8', '12', '1', '12', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota1').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Si ℕ ⊂ ℤ y ℤ ⊂ ℚ, entonces ℕ ⊂ ℚ.</td> <td><input class="inputfraccciones text-uppercase" id="act2num0" maxlength="1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Todo número racional es un número entero.</td> <td><input class="inputfraccciones text-uppercase" id="act2num1" maxlength="1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Para todo <div class="fraction">' +
        '<span class="fup">a</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">b</span>' +
        '</div> ∈ ℚ, b ≠ 0 se cumple que: <div class="fraction">' +
        '<span class="fup">a</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">b</span>' +
        '</div> . 1 = 1.</td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act2num2" maxlength="1"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Para todo <div class="fraction">' +
        '<span class="fup">a</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">b</span>' +
        '</div> ∈ ℚ con a ≠ 0 y b ≠ 0 ; se cumple que: <div class="fraction">' +
        '<span class="fup">a</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">b</span>' +
        '</div> . <div class="fraction">' +
        '<span class="fup">b</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">a</span>' +
        '</div> = 0.</td>' +
        '<td><input class="inputfraccciones text-uppercase" id="act2num3" maxlength="1"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td><td>El resultado del producto de dos números racionales, está siempre definido en el conjunto de los números racionales.</td> <td><input class="inputfraccciones text-uppercase" id="act2num4" maxlength="1"></input></td>'],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['V', 'F', 'F', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////////pregunta3///////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> . <span style="font-size: 40px;">(</span> <b>-</b>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num1"></input></span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> = -6' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num3"></input></span>' +
        '</div> . <span style="font-size: 40px;">(</span> <b>-</b>' +
        '<div class="fraction">' +
        '<span class="fup">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> = 1' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios soloNumeros" id="act3num4"></input> . <span style="font-size: 40px;">(</span> <b>-</b>' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> = 4' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div><span style="font-size: 40px;">)</span> . <span style="font-size: 40px;">(</span> <b>-</b>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num5"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num6"></input></span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> =' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">54</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> .' +
        '<input class="inputfraccciones sinEspacios soloNumeros" id="act3num7"></input> = 0' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num9"></input></span>' +
        '</div>' +
        '= -1' +
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
    var respact2 = ['10', '3', '5', '11', '-6', '1', '14', '0', '1', '2', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
////////////pregunta5/////////////////////////
var random5 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(− 0,<span class="periodicos">21</span>) . 0,0<span class="periodicos">3</span>' +
        '. <span style="font-size: 40px;">(</span>- <div class="fraction">' +
        '<span class="fup">990</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div><span style="font-size: 40px;">)</span> = </td>' +
        '<td><input class="inputfraccciones soloNumeros sinEspacios" id="act5num0"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(-0,2) . (-2,3<span class="periodicos">6</span>) . <div class="fraction">' +
        '<span class="fup">99</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">71</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num1"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num2"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><span style="font-size: 40px;">(</span>' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">22</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '.' +
        '<span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> . (-1) =' +
        '</td>' +
        '<td>-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num3"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num4"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '.' +
        '0,<span class="periodicos">6</span> . (-0,5) =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num5"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num6"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var respact2 = ['1', '33', '50', '5', '4', '1', '5', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 7;
    $('#nota5').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
////////////////pregunta6////////////////
var random6 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> . <span style="font-size: 40px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> - 1' +
        '<span style="font-size: 40px;">)</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num1"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> . <span style="font-size: 40px;">(</span> -0,<span class="periodicos">5</span> -' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">= -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num3"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> . <span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">38</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">16</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act6num5"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['3', '4', '11', '18', '16', '3', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota6').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}

function NotaFinal() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;

    if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        //pregunta4();
        pregunta5();
        pregunta6();


        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;


        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
        var total = (subtotal * 10) / 6;

        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
