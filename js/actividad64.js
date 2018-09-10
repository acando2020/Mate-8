var act1 = [
    ['<br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">La temperatura del congelador es de 5 °C bajo cero.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num0" class="saltos">°C</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">La ciudad se encuentra a 1 200 m sobre el nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num1" class="saltos">m</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">El buzo se encuentra a 20 m de profundidad.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num2" class="saltos">m</div>'
    ],
    ['  <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Iván tiene una deuda de $ 5 000 en el banco.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num3" class="saltos">' +
        '</div>'
    ],
    ['  <br>' +
        '<div class="col-lg-1">' +
        '   <b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Los termómetros marcaron una temperatura de 3 °C bajo cero.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num4" class="saltos">°C</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">El Chimborazo se encuentra a 6 263 m sobre el nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num5" class="saltos">m</div>'
    ],
    ['<br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Estamos justo a nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num6" class="saltos">m</div>'
    ],
];
var act1Txt = document.getElementsByClassName('act1class');

act1.sort(f_randomico);
for (i = 0; i < act1Txt.length; i++) {

    $('#' + act1Txt[i].id).html(act1[i]);


}

function pregunta1() {
    var cor = ['5', '1200', '-20', '-5000', '-3', '6263', '0', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').addClass('correcto');
        } else {
            $('#act1num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 7;
    $('#nota1_1').val(total.toFixed(2));

}
///////////////////////pregunta 2///////////
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
//////////////pregunta 3//////////////////////////////////////
var act3_1 = [];
for (var i = 0; i < 8; i++) {
    act3_1[i] = (Math.floor((Math.random() * 10) - 1)) - 10;

}

var act3_2 = [];
for (var i = 0; i < 8; i++) {
    act3_2[i] = Math.floor((Math.random() * 10) + 1);

}
document.getElementById('act3num6').value = parseInt(act3_1[0]);
document.getElementById('act3num7').value = parseInt(act3_2[0]);
document.getElementById('act3num8').value = parseInt(act3_1[1]);
document.getElementById('act3num9').value = parseInt(act3_2[1]);
////////////////////////////////////////////////////////////////////
document.getElementById('act3num3').value = parseInt(act3_1[0]) + parseInt(act3_2[0]);
document.getElementById('act3num4').value = parseInt(act3_2[0]) + parseInt(act3_1[1]);
document.getElementById('act3num5').value = parseInt(act3_1[1]) + parseInt(act3_2[1]);
/////////////////////////////////////////////////////////////////////////////////////
var act3num3 = document.getElementById('act3num3').value;
var act3num4 = document.getElementById('act3num4').value;
var act3num5 = document.getElementById('act3num5').value;
////////////////////////////////////////////////////////////////////////////////////
document.getElementById('act3num1').value = parseInt(act3num3) + parseInt(act3num4);
document.getElementById('act3num2').value = parseInt(act3num4) + parseInt(act3num5);
////////////////////////////////////////////////////////////////////////////////////
var act3num1 = document.getElementById('act3num1').value;
var act3num2 = document.getElementById('act3num2').value;
document.getElementById('act3num0').value = parseInt(act3num1) + parseInt(act3num2);



function pregunta3() {
    var cor = [act3num2, act3num3, act3num5, act3_1[0], act3_1[1], ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act3res' + [i] + '').val().toLowerCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act3res' + [i] + '').addClass('correcto');
        } else {
            $('#act3res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1_3').val(total.toFixed(2));

}
///////////////////////pregunta 4///////////
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
/////////////////////pregunta 5/////////////////////////////////
function pregunta5() {
    var
        cont1 = 0,
        cont2 = 0,
        cont3 = 0,
        cont4 = 0,
        cont5 = 0,
        cont6 = 0;
    for (var i = 0; i < 2; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 < num2) {
            cont1 = cont1 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }


    for (var i = 4; i < 6; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 > num2) {
            cont2 = cont2 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }
    for (var i = 8; i < 13; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 < num2) {
            cont3 = cont3 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }

    for (var i = 15; i < 19; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 > num2) {
            cont4 = cont4 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }

    for (var i = 21; i < 25; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 < num2) {
            cont5 = cont5 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }

    for (var i = 27; i < 30; i++) {
        var j = i + 1;

        var num1 = $('#act5num' + [i] + '').val();
        var num2 = $('#act5num' + [j] + '').val();
        if (num1 < num2) {
            cont6 = cont6 + 1;
            $('#act5num' + parseInt(j) + '').addClass('correcto');
        } else {
            $('#act5num' + parseInt(j) + '').addClass('incorrecto');
        }
    }
    var total = parseInt(cont1)+parseInt(cont2)+parseInt(cont3)+parseInt(cont4)+parseInt(cont5)+parseInt(cont6);
    alert(total);

}
