document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 0.5)
});

var random1 = [
    [' <div class="1 enc1">' +
        '<div class="eq-c">' +
        '<b style="color: #0047B3"><li></li></b>' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    [' <div class="1 enc3">' +
        '<div class="eq-c">' +
        '<b style="color: #0047B3"><li></li></b>' +
        '<div class="fraction">' +
        '<span class="fup">64</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">72</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="1 enc2">' +
        '<div class="eq-c">' +
        '<b style="color: #0047B3"><li></li></b>' +
        '<div class="fraction">' +
        '<span class="fup">49</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">63</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">22</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">45</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="1 enc4">' +
        '<div class="eq-c">' +
        '<b style="color: #0047B3"><li></li></b>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">16</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc2':
            $('.enc2').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');

            break;
        case '1 enc3':
            $('.enc3').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc4':
            $('.enc4').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            break;

    }
});


function pregunta1() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

        if ($('.enc2').hasClass('pintar1') == true) {
            nt1 = 1;
            $('.enc2').addClass('correcto');
        } else if ($('.enc3').hasClass('pintar1') == true) {
            $('.enc3').addClass('incorrecto');
        } else if ($('.enc1').hasClass('pintar1') == true) {
            $('.enc1').addClass('incorrecto');
        } else if ($('.enc4').hasClass('pintar1') == true) {
            $('.enc4').addClass('incorrecto');
        }
        $('.1').off('click');

        $('#nota1').val(parseFloat(nt1).toFixed(2));



    ////////////////////////////////////////////


}
/////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>0,0046 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num0" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num1" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>3,4 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num2" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num3" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>0,777 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num4" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num5" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>0,5454 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num6" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num7" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>0,26 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num8" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num9" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>0,14 =</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num10" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num11" class="inputfraccciones soloNumeros sinEspacios"></input></span>' +
        '</div>' +
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
    var respact2 = ['23', '5000', '17', '5', '7', '9', '6', '11', '13', '50', '7', '50', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////////////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>una fracción irreducible</td>' +
        '<td>-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>un par de fracciones equivalentes.</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num3"></input></span>' +
        '</div> = <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>un número mixto.</td>' +
        '<td><input class="inputfraccciones soloNumeros sinEspacios" id="act3num6"></input>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num7"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num8"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>una fracción igual a la unidad</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num9"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num10"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>las fracciones irreducibles</td>' +
        '<td>- <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num11"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num12"></input></span>' +
        '</div>, <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num13"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num14"></input></span>' +
        '</div>,<input class="inputfraccciones soloNumeros sinEspacios" id="act3num15">, <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num16"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act3num17"></input></span>' +
        '</div></input></td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['1', '4', '1', '4', '3', '12', '2', '1', '3', '5', '5', '1', '3', '1', '3', '1', '1', '7', '2', '1', '3', '5', '5', '3', '12', '2', '14', '1', '3', ];
    var cont = 0;
    for (var i = 0; i < 29; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 29;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
///////////////////////pregunta4/////////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num1"></input></span>' +
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
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num3"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num5"></input></span>' +
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
        '<span class="fdn">16</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num7"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['1', '9', '1', '40', '2', '5', '1', '4', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota4').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
////////////////////pregunta5//////////////////////////////////////////////////////////
var random5 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num1"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '+ ' +
        '0' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num3"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">-2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '+ ' +
        '1' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num5"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">-1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '=' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num7"></input></span>' +
        '</div>' +
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
    var respact2 = ['3', '2', '17', '24', '43', '30', '3', '4', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota5').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}

//////////////////////////pregunta6//////////////////////////
function pregunta6() {
    var nt1 = 0;
    var act6num0 = document.getElementById('act6num0').value;
    if (act6num0 == 1200) {
        nt1 = 0.5;
        $('#act6num0').css("background", "#00e600");
    } else {
        $('#act6num0').css("background", "#ff6666");
    }
    $('#nota6').val(parseFloat(nt1).toFixed(2));
}
////////////////////////pregunta7///////////////////////////////
var random7 = [
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num0" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num1" type="text" class="form-control text-lowercase"></td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num2" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num3" type="text" class="form-control text-lowercase"></td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num4" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num5" type="text" class="form-control text-lowercase"></td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num6" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num7" type="text" class="form-control text-lowercase"></td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">19</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num8" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num9" type="text" class="form-control text-lowercase"></td>'
    ],
    [' <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">22</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">16</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input id="act7num10" type="text" class="form-control sinEspacios" maxlength="5"></td>' +
        '<td><input id="act7num11" type="text" class="form-control text-lowercase"></td>'
    ],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

function pregunta7() {
    var respact2 = ['1,166', 'decimal periódico', '0,75', 'decimal exacto', '0,272', 'decimal periódico', '0,777', 'decimal periódico', '1,727', 'decimal periódico', '1,375', 'decimal exacto', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota7').val(parseFloat(total).toFixed(2));
}
////////////////pregunta8/////////////
var random8 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>El opuesto de un número racional negativo es negativo.</td> <td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num0"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>El valor absoluto de un número decimal negativo es positivo.</td> <td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num1"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>Entre dos racionales negativos, mayor es el que tiene mayor valor absoluto.</td> <td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num2"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>El antecesor de –1 101,1 es –1 100,2</td> <td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num3"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 30px;">|</span> -' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<span style="font-size: 30px;">|</span> = -' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num4"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>El opuesto de cero es menos cero.</td> <td><input class="inputfraccciones text-uppercase" maxlength="1" id="act8num5"></input></td>'],
];
var act08Txt = document.getElementsByClassName('act8class');

random8.sort(f_randomico);
for (i = 0; i < act08Txt.length; i++) {
    $('#' + act08Txt[i].id).html(random8[i]);
}

function pregunta8() {
    var respact2 = ['F', 'V', 'F', 'F', 'F', 'F', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act8num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act8num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act8num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota8').val(parseFloat(total).toFixed(2));
}
//////////////////pregunta10/////////////////////
var random10 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Si clasificamos los estudiantes de un colegio por el grado que ocupan, hacemos una medición con variables.</td>' +
        '<td>' +
        '<select class="form-control" id="sel0">' +
        '<option>----seleccione----</option>' +
        '<option>Variable cualitativa ordinal.</option>' +
        '<option>Variable cuantitativa continua.</option>' +
        '<option>muestra.</option>' +
        '<option>La variable.</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Si clasificamos a los estudiantes por el promedio de calificaciones, hacemos una medición con variables.</td>' +
        '<td><select class="form-control" id="sel1">' +
        '<option>----seleccione----</option>' +
        '<option>Variable cualitativa ordinal.</option>' +
        '<option>Variable cuantitativa continua.</option>' +
        '<option>muestra.</option>' +
        '<option>La variable.</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Si de una población de 1200 personas se estudia a 120 personas, esto se define como una:</td>' +
        '<td><select class="form-control" id="sel2">' +
        '<option>----seleccione----</option>' +
        '<option>Variable cualitativa ordinal.</option>' +
        '<option>Variable cuantitativa continua.</option>' +
        '<option>muestra.</option>' +
        '<option>La variable.</option>' +
        '</select></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>En una investigación es necesario establecer, y al comunicar los resultados debe especificarse claramente, el tipo de medición empleado.</td>' +
        '<td><select class="form-control" id="sel3">' +
        '<option>----seleccione----</option>' +
        '<option>Variable cualitativa ordinal.</option>' +
        '<option>Variable cuantitativa continua.</option>' +
        '<option>muestra.</option>' +
        '<option>La variable.</option>' +
        '</select></td>'
    ],
];
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

function pregunta10() {
    var respact2 = ['Variable cualitativa ordinal.', 'Variable cuantitativa continua.', 'muestra.', 'La variable.', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota10').val(parseFloat(total).toFixed(2));
}
///////////////////////////////////////////////////////
var resp_cor_len3_act13_p14 = [
    ["Gráfico circular", "img/i1_p105_act102.jpg"],
    ["Gráfico de barras", "img/i2_p105_act102.jpg"],
    ["Gráfico poligonal", "img/i3_p105_act102.jpg"],

]
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p105_act102.jpg', 'img/i2_p105_act102.jpg', 'img/i3_p105_act102.jpg', ];
var loadTxt = ['Gráfico circular', 'Gráfico de barras', 'Gráfico poligonal', ];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos("imagen", loadImg);
initElementos("texto", loadTxt);
insertDraggable();
enviarEventosListener("caja_img1", "caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2", "caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3", "caja_txt3"); //caja1 img y texto

function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });
}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({}, cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagen") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "texto") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.texto').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.background = '#65CE6D';


    }
    calcularNotaGeneral(
        3,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        var nt1 = 0;
        $('#nota11').val(nt1.toFixed(2) + ' ');
    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota11').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;
    var nota11 = document.getElementById('nota11').value;

    if (nota9 == "") {
        alert("Calificar la pregunta 9")
    } else {

        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();
        //pregunta9();
        pregunta10();
        contarRespCorrectaDnD();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var nota10 = document.getElementById('nota10').value;
        var nota11 = document.getElementById('nota11').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11);

        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
