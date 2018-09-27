var random1_1 = [
    ['<div class="1 enc1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>(6 + x) ÷ 3</td> </tr> </table> </div>'],
    ['<div class="1 enc2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>(6 ÷ 3) x</td> </tr> </table> </div>'],
    ['<div class="1 enc3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>(6 + 3) ÷ x</td> </tr> </table> </div>'],
];
var act0101Txt = document.getElementsByClassName('act1_1class');

random1_1.sort(f_randomico);
for (i = 0; i < act0101Txt.length; i++) {
    $('#' + act0101Txt[i].id).html(random1_1[i]);
}
//////////////*/ ///
var random1_2 = [
    ['<div class="2 enci1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>4(x + 5)</td> </tr> </table> </div>'],
    ['<div class="2 enci2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c"> <div class="fraction"> <span class="fup">x + 5</span> <span class="bar">/</span> <span class="fdn">4</span> </div> </div> </td> </tr> </table> </div>'],
    ['<div class="2 enci3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>4x + 5</td> </tr> </table> </div>'],
];
var act0102Txt = document.getElementsByClassName('act1_2class');

random1_2.sort(f_randomico);
for (i = 0; i < act0102Txt.length; i++) {
    $('#' + act0102Txt[i].id).html(random1_2[i]);
}
//////////////*/ ///
var random1_3 = [
    ['<div class="3 encie1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c"> <div class="fraction"> <span class="fup">1</span> <span class="bar">/</span> <span class="fdn">5</span> </div>x - 3x </div> </td> </tr> </table> </div>'],
    ['<div class="3 encie2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c"> <div class="fraction"> <span class="fup">x - 3x</span> <span class="bar">/</span> <span class="fdn">5</span> </div> </div> </td> </tr> </table> </div>'],
    ['<div class="3 encie3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>5x – 3x</td> </tr> </table> </div>'],
];
var act0103Txt = document.getElementsByClassName('act1_3class');

random1_3.sort(f_randomico);
for (i = 0; i < act0103Txt.length; i++) {
    $('#' + act0103Txt[i].id).html(random1_3[i]);
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');


            break;
        case '1 enc2':
            $('.enc2').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');

            break;
        case '1 enc3':
            $('.enc3').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');


            break;

    }
});

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');


            break;
        case '2 enci2':
            $('.enci2').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');

            break;
        case '2 enci3':
            $('.enci3').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');


            break;

    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 encie1':
            $('.encie1').addClass('pintar1');
            $('.encie2').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');


            break;
        case '3 encie2':
            $('.encie2').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');

            break;
        case '3 encie3':
            $('.encie3').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie2').removeClass('pintar1');


            break;

    }
});

function pregunta1() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if ($('.enc1').hasClass('pintar1') == true) {
        nt1 = 1;

        $('.enc1').addClass('correcto');


    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');


    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.enci2').hasClass('pintar1') == true) {
        nt2 = 1;

        $('.enci2').addClass('correcto');


    } else if ($('.enci1').hasClass('pintar1') == true) {
        $('.enci1').addClass('incorrecto');


    } else if ($('.enci3').hasClass('pintar1') == true) {
        $('.enci3').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.encie1').hasClass('pintar1') == true) {
        nt3 = 1;

        $('.encie1').addClass('correcto');


    } else if ($('.encie2').hasClass('pintar1') == true) {
        $('.encie2').addClass('incorrecto');


    } else if ($('.encie3').hasClass('pintar1') == true) {
        $('.encie3').addClass('incorrecto');
    }
    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));
}
/////////////////////////////////////
function pregunta2() {
    var respact2 = ['10ab', '2', 'c', '19ab', '2', '5ab', '47rx', '-3', '6y', '2', '26xy', '2', 'x', 'n-1', '7x', 'n', '7y', 'm-1', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 18;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////////////////////////////
var random3 = [
    [' <td>6 de cada 10 niños hacen correctamente sus tareas.</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num1"></input></span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num3"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><img class="img-responsive" src="img/i8_p98_act100.jpg"></img>' +
        '</td>'
    ],
    ['<td>12 de cada 16 trabajadores están afiliados al seguro social.</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num5"></input></span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num7"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><img class="img-responsive" src="img/i8_p98_act100.jpg"></img>' +
        '</td>'
    ],
    ['<td>Resolvió el 40 % de las preguntas del examen.</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num9"></input></span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num10"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num11"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><img class="img-responsive" src="img/i8_p98_act100.jpg"></img>' +
        '</td>'
    ],
    ['<td>8 de las 24 horas del día se debería dormir.</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num12"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num13"></input></span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num14"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num15"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><img class="img-responsive" src="img/i8_p98_act100.jpg"></img>' +
        '</td>'
    ],
    ['<td>El 30 % de los estudiantes de una escuela son buenos deportistas.</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num16"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num17"></input></span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num18"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num19"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><img class="img-responsive" src="img/i8_p98_act100.jpg"></img>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['6', '10', '3', '5', '12', '16', '3', '4', '40', '100', '2', '5', '8', '24', '1', '3', '30', '100', '3', '10', ];
    var cont = 0;
    for (var i = 0; i < 20; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 20;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
////////////////////////////////////////////////////////

$('.enc').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('grafico1')
    } else if ($(this).hasClass('grafico1')) {
        $(this).removeClass('grafico1')
        $(this).addClass('grafico2')
    } else if ($(this).hasClass('grafico2')) {
        $(this).removeClass('grafico2')
        $(this).addClass('vacio')

    }

    /*if ($(this).hasClass('encierra')) {
        $(this).addClass('subrayar')
    }else {
        $(this).addClass('encierra')
    }*/

});


$('.enc1').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('grafico3')
    } else if ($(this).hasClass('grafico3')) {
        $(this).removeClass('grafico3')
        $(this).addClass('grafico4')
    } else if ($(this).hasClass('grafico4')) {
        $(this).removeClass('grafico4')
        $(this).addClass('vacio')

    }

    /*if ($(this).hasClass('encierra')) {
        $(this).addClass('subrayar')
    }else {
        $(this).addClass('encierra')
    }*/

});
$('.enc2').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('grafico5')
    } else if ($(this).hasClass('grafico5')) {
        $(this).removeClass('grafico5')
        $(this).addClass('grafico6')
    } else if ($(this).hasClass('grafico6')) {
        $(this).removeClass('grafico6')
        $(this).addClass('vacio')

    }

    /*if ($(this).hasClass('encierra')) {
        $(this).addClass('subrayar')
    }else {
        $(this).addClass('encierra')
    }*/

});

function pregunta4() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    var respact2 = ['3', '7', '2', '3', '4', '10', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }

    var gra1 = $('.grafico1').length;
    var gra2 = $('.grafico2').length;

    if ((gra1 == 4) && (gra2 == 3)) {
        $('#tr1').css("background", "#00e600");
        nt1 = 1;
    } else {
        $('#tr1').css("background", "#ff6666");
    }

    var gra3 = $('.grafico3').length;
    var gra4 = $('.grafico4').length;
    if ((gra3 == 1) && (gra4 == 2)) {
        $('#tr2').css("background", "#00e600");
        nt2 = 1;
    } else {
        $('#tr2').css("background", "#ff6666");
    }

    var gra5 = $('.grafico5').length;
    var gra6 = $('.grafico6').length;
    if ((gra5 == 6) && (gra6 == 4)) {
        $('#tr3').css("background", "#00e600");
        nt3 = 1;
    } else {
        $('#tr3').css("background", "#ff6666");
    }
    var suubtotal = parseFloat(cont) + parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3);
    var total = (suubtotal * 1) / 9;

    $('#nota4').val(parseFloat(total).toFixed(2));
    $('.enc').off('click');
    $('.enc1').off('click');
    $('.enc2').off('click');
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
///////////////////////pregunta5///////////////////////////////////
var random5 = [
    ['<table style="text-align: center;">' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<input class="inputfraccciones sinEspacios" style="border:1px solid #0098c4" id="act5num0"></input> -' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input class="form-control"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">-4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '<input class="inputfraccciones sinEspacios" style="border:1px solid #0098c4" id="act5num1"></input>' +
        '<div class="fraction">' +
        '<span class="fup">10</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-20</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input class="form-control"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<input class="inputfraccciones sinEspacios" style="border:1px solid #0098c4" id="act5num2"></input>' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input class="form-control"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '<input class="inputfraccciones sinEspacios" style="border:1px solid #0098c4" id="act5num3"></input> -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input class="form-control"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    var respact2 = ['>', '=', '<', '>', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;

    $('#nota5').val(parseFloat(total).toFixed(2));

    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////////pregunt6//////////
random6 = [
    [' <div class="6 repres1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>-1,33</td> </tr> </table> </div>'],
    ['<div class="6 repres2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>-1,<span class="periodicos">3</span></td> </tr> </table> </div>'],
    ['<div class="6 repres3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>-0,33</td> </tr> </table> </div>'],
    ['<div class="6 repres4"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>1,<span class="periodicos">33</span></td> </tr> </table> </div>'],
]

var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 repres1':
            $('.repres1').addClass('pintar1');
            $('.repres2').removeClass('pintar1');
            $('.repres3').removeClass('pintar1');
            $('.repres4').removeClass('pintar1');
            break;
        case '6 repres2':
            $('.repres2').addClass('pintar1');
            $('.repres1').removeClass('pintar1');
            $('.repres3').removeClass('pintar1');
            $('.repres4').removeClass('pintar1');
            break;
        case '6 repres3':
            $('.repres3').addClass('pintar1');
            $('.repres1').removeClass('pintar1');
            $('.repres2').removeClass('pintar1');
            $('.repres4').removeClass('pintar1');
            break;
        case '6 repres4':
            $('.repres4').addClass('pintar1');
            $('.repres1').removeClass('pintar1');
            $('.repres2').removeClass('pintar1');
            $('.repres3').removeClass('pintar1');
            break;

    }
});

function pregunta6() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if ($('.repres2').hasClass('pintar1') == true) {
        nt1 = 0.5;
        $('.repres2').addClass('correcto');
    } else if ($('.repres3').hasClass('pintar1') == true) {
        $('.repres3').addClass('incorrecto');
    } else if ($('.repres1').hasClass('pintar1') == true) {
        $('.repres1').addClass('incorrecto');
    } else if ($('.repres4').hasClass('pintar1') == true) {
        $('.repres4').addClass('incorrecto');
    }
    $('#nota6').val(parseFloat(nt1).toFixed(2));
}
/////////////////////////////////////////////////////
random7 = [
    ['<div class="7 frac1">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">90</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="7 frac2">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    [' <div class="7 frac3">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="7 frac4">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">99</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
]

var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}



$('.7').click(function() {
    switch ($(this).attr('class')) {
        case '7 frac1':
            $('.frac1').addClass('pintar1');
            $('.frac2').removeClass('pintar1');
            $('.frac3').removeClass('pintar1');
            $('.frac4').removeClass('pintar1');
            break;
        case '7 frac2':
            $('.frac2').addClass('pintar1');
            $('.frac1').removeClass('pintar1');
            $('.frac3').removeClass('pintar1');
            $('.frac4').removeClass('pintar1');
            break;
        case '7 frac3':
            $('.frac3').addClass('pintar1');
            $('.frac1').removeClass('pintar1');
            $('.frac2').removeClass('pintar1');
            $('.frac4').removeClass('pintar1');
            break;
        case '7 frac4':
            $('.frac4').addClass('pintar1');
            $('.frac1').removeClass('pintar1');
            $('.frac2').removeClass('pintar1');
            $('.frac3').removeClass('pintar1');
            break;

    }
});
///////////////////////////////////////////////////////////////
function pregunta7() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if ($('.frac3').hasClass('pintar1') == true) {
        nt1 = 0.5;
        $('.frac3').addClass('correcto');
    } else if ($('.frac1').hasClass('pintar1') == true) {
        $('.frac1').addClass('incorrecto');
    } else if ($('.frac2').hasClass('pintar1') == true) {
        $('.frac2').addClass('incorrecto');
    } else if ($('.frac4').hasClass('pintar1') == true) {
        $('.frac4').addClass('incorrecto');
    }
    $('#nota7').val(parseFloat(nt1).toFixed(2));
}
//////////////////////////////////////////////////////////////////
random9 = [
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">22</span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div> + 4 =' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num1"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> =' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num3"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">3 -' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> =' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num5"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> =' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act9num7"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
]

var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

function pregunta9() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    var respact2 = ['79', '22', '11', '18', '1', '6', '4', '15', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act9num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;

    $('#nota9').val(parseFloat(total).toFixed(2));

    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
//////////////////////////////pregunta10//////////////////////
random10 = [
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>2 ∈ N</td>' +
        '<td>' +
        '<select class="form-control" id="vf0">' +
        '<option>--seleccione</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>8 ∈ N</td>' +
        '<td>' +
        '<select class="form-control" id="vf1">' +
        '<option>--seleccione</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>{8} ∈ N</td>' +
        '<td>' +
        '<select class="form-control" id="vf2">' +
        '<option>--seleccione</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>2 ⊂ N</td>' +
        '<td>' +
        '<select class="form-control" id="vf3">' +
        '<option>--seleccione</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>{{4}} ⊂ N</td>' +
        '<td>' +
        '<select class="form-control" id="vf4">' +
        '<option>--seleccione</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
];

var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

function pregunta10() {
    var respact2 = ['verdadero', 'falso', 'verdadero', 'falso', 'falso', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#vf' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#vf' + [i] + '').css("background", "#00e600");
        } else {
            $('#vf' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 5;
    $('#nota10').val(parseFloat(total).toFixed(2));

}
//////////////////////////////////////////////////////////////////////////////
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

    if ((nota8 == "") || (nota11 == "")) {
        alert("Calificar la pregunta 8 y 11")
    } else {

        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        //pregunta8();
        pregunta9();
        pregunta10();

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
