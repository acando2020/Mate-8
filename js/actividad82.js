document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1)
});

document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
document.getElementById('nota12').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota12').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota12'), 1)
});
document.getElementById('nota13').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota13').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota13'), 1)
});

////////////////////////////pregunta1////////////////////////////////////////////////////////////////////////////////


function pregunta1() {
    var respact2 = ['-8', '45', '-0,17', '7', '4', '1,75', '-3', '4', '-0,75', '-1', '3', '4', '-0,7', '8', '45', '0,8', '1,07', '7', '4', ];
    var cont = 0;
    for (var i = 0; i < 19; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 19;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div></div></td><td>' +
        '<input id="act2num0" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td><td>– 1,5</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '– 5,015' +
        '</td>' +
        '<td>' +
        '<input id="act2num1" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td>' +
        '<td>– 5,15 <br></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '(– 4)<sup>3</sup>' +
        '</td>' +
        '<td>' +
        '<input id="act2num2" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td>' +
        '<td>-8<sup>2</sup></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2013</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2014</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<input id="act2num3" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2014</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2015</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<input id="act2num4" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td>' +
        '<td>–0,5</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: right;">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">107</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">100</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<input id="act2num5" class="inputfraccciones sinEspacios"  maxlength="1"></input>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">17</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
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
    var respact2 = ['>', '>', '=', '<', '=', '<'];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
////////////////////////////pregunta3////////////////////////////////////////////////////////////////////////////////

function pregunta3() {
    var respact2 = ['f<d<b<c<a<e', '6', 'e-f=6,5-4=2,5', '6,03', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

///////////////////////////////pregunta4////////////////////////////////////////
var random4 = [
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc1">A < B < C</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc2">C < B < A</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc3">B < C < A</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc4">C < A < B</span>'],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}
var nt1 = 0;
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');

            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');

            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            nt1 = 1;
            break;


    }
});

function pregunta4() {
    if ($('.enc4').hasClass('encierra') == true) {

        $('.enc4').addClass('correcto');


    } else if ($('.enc1').hasClass('encierra') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc2').hasClass('encierra') == true) {
        $('.enc2').addClass('incorrecto');


    } else if ($('.enc3').hasClass('encierra') == true) {
        $('.enc3').addClass('incorrecto');
    }
    $('.1').off('click');
    $('#nota4').val(parseFloat(nt1).toFixed(2));
}

///////////////////////////////pregunta5////////////////////////////////////////
var random5 = [
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci1">1,05</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci2"><div class="fraction"><span class="fup">90</span> <span class="bar">/</span> <span class="fdn">100</span></div>'],
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci3"><div class="fraction"> <span class="fup">1001</span> <span class="bar">/</span> <span class="fdn">1000</span> </div></span>'],

];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}
var nt5 = 0;
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('encierra');
            $('.enci2').removeClass('encierra');
            $('.enci3').removeClass('encierra');


            break;
        case '2 enci2':
            $('.enci2').addClass('encierra');
            $('.enci1').removeClass('encierra');
            $('.enci3').removeClass('encierra');

            break;
        case '2 enci3':
            $('.enci3').addClass('encierra');
            $('.enci1').removeClass('encierra');
            $('.enci2').removeClass('encierra');
            nt5 = 1;



            break;


    }
});

function pregunta5() {
    if ($('.enci3').hasClass('encierra') == true) {

        $('.enci3').addClass('correcto');


    } else if ($('.enci1').hasClass('encierra') == true) {
        $('.enci1').addClass('incorrecto');


    } else if ($('.enci2').hasClass('encierra') == true) {
        $('.enci2').addClass('incorrecto');


    }
    $('.2').off('click');
    $('#nota5').val(parseFloat(nt5).toFixed(2));
}
////////////////////////////pregunta6////////////////////////////////////////////////////////////////////////////////

function pregunta6() {
    var respact2 = ['-2,4', '-1,8', '-1', '-0,4', '0,4', '0,8', '-2,1', '-1,5', '-0,3', '0,3', '1,5'];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota6').val(parseFloat(total).toFixed(2));

}
////////////////////////////pregunta8////////////////////////////////////////////////////////////////////////////////
var nt8_1 = 0,
    nt8_2 = 0,
    nt8_3 = 0,
    nt8_4 = 0;
$('.sub').click(function() {
    switch ($(this).attr('class')) {
        case 'sub sub1':
            $('.sub1').addClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');

            break;
        case 'sub sub2':
            $('.sub2').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');
            break;
        case 'sub sub3':
            $('.sub3').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');

            break;
        case 'sub sub4':
            $('.sub4').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            nt8_1 = 0.25;
            break;


    }
});

$('.subr').click(function() {
    switch ($(this).attr('class')) {
        case 'subr subr1':
            $('.subr1').addClass('subrayar');
            $('.subr2').removeClass('subrayar');
            $('.subr3').removeClass('subrayar');
            $('.subr4').removeClass('subrayar');
            nt8_2 = 0.25;

            break;
        case 'subr subr2':
            $('.subr2').addClass('subrayar');
            $('.subr1').removeClass('subrayar');
            $('.subr3').removeClass('subrayar');
            $('.subr4').removeClass('subrayar');
            break;
        case 'subr subr3':
            $('.subr3').addClass('subrayar');
            $('.subr1').removeClass('subrayar');
            $('.subr2').removeClass('subrayar');
            $('.subr4').removeClass('subrayar');

            break;
        case 'subr subr4':
            $('.subr4').addClass('subrayar');
            $('.subr1').removeClass('subrayar');
            $('.subr2').removeClass('subrayar');
            $('.subr3').removeClass('subrayar');

            break;


    }
});

$('.subra').click(function() {
    switch ($(this).attr('class')) {
        case 'subra subra1':
            $('.subra1').addClass('subrayar');
            $('.subra2').removeClass('subrayar');
            $('.subra3').removeClass('subrayar');
            $('.subra4').removeClass('subrayar');

            break;
        case 'subra subra2':
            $('.subra2').addClass('subrayar');
            $('.subra1').removeClass('subrayar');
            $('.subra3').removeClass('subrayar');
            $('.subra4').removeClass('subrayar');
            break;
        case 'subra subra3':
            $('.subra3').addClass('subrayar');
            $('.subra1').removeClass('subrayar');
            $('.subra2').removeClass('subrayar');
            $('.subra4').removeClass('subrayar');
            nt8_3 = 0.25;

            break;
        case 'subra subra4':
            $('.subra4').addClass('subrayar');
            $('.subra1').removeClass('subrayar');
            $('.subra2').removeClass('subrayar');
            $('.subra3').removeClass('subrayar');

            break;


    }
});
$('.subray').click(function() {
    switch ($(this).attr('class')) {
        case 'subray subray1':
            $('.subray1').addClass('subrayar');
            $('.subray2').removeClass('subrayar');
            $('.subray3').removeClass('subrayar');
            $('.subray4').removeClass('subrayar');

            break;
        case 'subray subray2':
            $('.subray2').addClass('subrayar');
            $('.subray1').removeClass('subrayar');
            $('.subray3').removeClass('subrayar');
            $('.subray4').removeClass('subrayar');
            break;
        case 'subray subray3':
            $('.subray3').addClass('subrayar');
            $('.subray1').removeClass('subrayar');
            $('.subray2').removeClass('subrayar');
            $('.subray4').removeClass('subrayar');

            break;
        case 'subray subray4':
            $('.subray4').addClass('subrayar');
            $('.subray1').removeClass('subrayar');
            $('.subray2').removeClass('subrayar');
            $('.subray3').removeClass('subrayar');
            nt8_4 = 0.25;
            break;


    }
});

function pregunta8() {
    if ($('.sub4').hasClass('subrayar') == true) {

        $('.sub4').addClass('correcto');


    } else if ($('.sub1').hasClass('subrayar') == true) {
        $('.sub1').addClass('incorrecto');


    } else if ($('.sub2').hasClass('subrayar') == true) {
        $('.sub2').addClass('incorrecto');


    } else if ($('.sub3').hasClass('subrayar') == true) {
        $('.sub3').addClass('incorrecto');


    }
    //////////////////////////////////////////////////////
    if ($('.subr1').hasClass('subrayar') == true) {

        $('.subr1').addClass('correcto');


    } else if ($('.subr3').hasClass('subrayar') == true) {
        $('.subr3').addClass('incorrecto');


    } else if ($('.subr2').hasClass('subrayar') == true) {
        $('.subr2').addClass('incorrecto');


    } else if ($('.subr4').hasClass('subrayar') == true) {
        $('.subr4').addClass('incorrecto');


    }
    //////////////////////////////////////////////////////
    if ($('.subra3').hasClass('subrayar') == true) {

        $('.subra3').addClass('correcto');


    } else if ($('.subra1').hasClass('subrayar') == true) {
        $('.subra1').addClass('incorrecto');


    } else if ($('.subra2').hasClass('subrayar') == true) {
        $('.subra2').addClass('incorrecto');


    } else if ($('.subra4').hasClass('subrayar') == true) {
        $('.subra4').addClass('incorrecto');


    }
    //////////////////////////////////////////////////////
    if ($('.subray4').hasClass('subrayar') == true) {

        $('.subray4').addClass('correcto');


    } else if ($('.subray1').hasClass('subrayar') == true) {
        $('.subray1').addClass('incorrecto');


    } else if ($('.subray2').hasClass('subrayar') == true) {
        $('.subray2').addClass('incorrecto');


    } else if ($('.subray1').hasClass('subrayar') == true) {
        $('.subray1').addClass('incorrecto');


    }
    var total = parseFloat(nt8_1) + parseFloat(nt8_2) + parseFloat(nt8_3) + parseFloat(nt8_4);
    $('.sub').off('click');
    $('.subr').off('click');
    $('.subra').off('click');
    $('.subray').off('click');
    $('#nota8').val(parseFloat(total).toFixed(2));
}

////////////////////////////pregunta10////////////////////////////////////////////////////////////////////////////////
var random10 = [
    ['<td> <input type="text" maxlength="1" class="sinEspacios inputfraccciones text-uppercase" id="act10num0" style="border: 1px solid #009DCC" name=""> </td> <td><b>•</b> El conjunto de los números racionales, incluye al conjunto de enteros.</td>'],
    ['<td>' +
        '<input type="text" maxlength="1" class="sinEspacios inputfraccciones text-uppercase" id="act10num1" style="border: 1px solid #009DCC" name="">' +
        '</td>' +
        '<td><b>•</b> La fracción -' +
        '<div class="fraction">' +
        '<span class="fup">19</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">24</span>' +
        '</div> está comprendida entre las fracciones -' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> y -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> .</td>'
    ],
    ['<td>' +
        '<input type="text" maxlength="1" class="sinEspacios inputfraccciones text-uppercase" id="act10num2" style="border: 1px solid #009DCC" name="">' +
        '</td>' +
        '<td><b>•</b> La fracción' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> es menor que 1.</td>'
    ],

];
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

function pregunta10() {
    var respact2 = ['V', 'V', 'F', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act10num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota10').val(parseFloat(total).toFixed(2));

}


///////////////////////////////pregunta10////////////////////////////////////////
var random11 = [
    ['<span class="11 encierra1">- <div class="fraction"> <span class="fup">9</span> <span class="bar">/</span> <span class="fdn">7</span> </div> </span>'],
    ['<span class="11 encierra2">- <div class="fraction"> <span class="fup">9</span> <span class="bar">/</span> <span class="fdn">11</span> </div> </span>'],
    ['<span class="11 encierra3">- <div class="fraction"> <span class="fup">11</span> <span class="bar">/</span> <span class="fdn">9</span> </div> </span>'],
    ['<span class="11 encierra4">- <div class="fraction"> <span class="fup">7</span> <span class="bar">/</span> <span class="fdn">9</span> </div> </span>'],
];
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}
$('.11').click(function() {
    switch ($(this).attr('class')) {
        case '11 encierra1':
            $('.encierra1').addClass('encierra');
            $('.encierra2').removeClass('encierra');
            $('.encierra3').removeClass('encierra');
            $('.encierra4').removeClass('encierra');

            break;
        case '11 encierra2':
            $('.encierra2').addClass('encierra');
            $('.encierra1').removeClass('encierra');
            $('.encierra3').removeClass('encierra');
            $('.encierra4').removeClass('encierra');

            break;
        case '11 encierra3':
            $('.encierra3').addClass('encierra');
            $('.encierra1').removeClass('encierra');
            $('.encierra2').removeClass('encierra');
            $('.encierra4').removeClass('encierra');

            break;
        case '11 encierra4':
            $('.encierra4').addClass('encierra');
            $('.encierra1').removeClass('encierra');
            $('.encierra2').removeClass('encierra');
            $('.encierra3').removeClass('encierra');

            break;


    }
});

function pregunta11() {
    var nt11 = 0;

    if ($('.encierra2').hasClass('encierra') == true) {
        nt11 = 1;
        $('.encierra2').addClass('correcto');


    } else if ($('.encierra1').hasClass('encierra') == true) {
        $('.encierra1').addClass('incorrecto');


    } else if ($('.encierra4').hasClass('encierra') == true) {
        $('.encierra4').addClass('incorrecto');


    } else if ($('.encierra3').hasClass('encierra') == true) {
        $('.encierra3').addClass('incorrecto');
    }
    $('.11').off('click');
    $('#nota11').val(parseFloat(nt11).toFixed(2));
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
    var nota12 = document.getElementById('nota12').value;
    var nota13 = document.getElementById('nota13').value;
    if ((nota7 == "") || (nota9 == "") || (nota12 == "") || (nota13 == "")) {
        alert("Calificar la pregunta 7, 9, 12 ó 13")
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        ///pregunta7();
        pregunta8();
        ///pregunta9();12y13
        pregunta10();
        pregunta11();
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
        var nota12 = document.getElementById('nota12').value;
        var nota13 = document.getElementById('nota13').value;

        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11) + parseFloat(nota12) + parseFloat(nota13);
        var total = (subtotal * 10) / 13;
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
