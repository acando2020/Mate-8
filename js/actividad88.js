function pregunta1() {
    var respact2 = ['0,6', '6', '10', '3', '5', '1', '3', '8', '15', '3', '5', '5-8-9', '15', '-12', '15', '-4', '5'];
    var cont = 0;
    for (var i = 0; i < 17; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 17;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

//////////////////////////////pregunbta2////////////////////////////////////////

var random2 = ['<div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">3</span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num0" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num1" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">22</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">15</span>' +
    '</div>' +
    '</div>', ' <div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num2" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">2</span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num3" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">3</span>' +
    '</div>-' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num4" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">5</span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">17</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">30</span>' +
    '</div>' +
    '</div>', '<div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup">5</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">6</span>' +
    '</div>-' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num5" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num6" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num7" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">2</span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">14</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">50</span>' +
    '</div>' +
    '</div>', '<div class="eq-c"><span style="font-size: 60px">(</span>' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num8" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num9" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">3</span>' +
    '</div><span style="font-size: 60px">)</span> -' +
    '<div class="fraction">' +
    '<span class="fup">1</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">2</span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">23</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">30</span>' +
    '</div>' +
    '</div>', ' <div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup">5</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">3</span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup"><input id="act2num10" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num11" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">31</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">15</span>' +
    '</div>' +
    '</div>', '<div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup">1</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num12" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>+' +
    '<div class="fraction">' +
    '<span class="fup">1</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num13" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>-' +
    '<div class="fraction">' +
    '<span class="fup">1</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num14" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">13</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">12</span>' +
    '</div>' +
    '</div>', '<div class="eq-c">' +
    '<span style="font-size: 60px">(</span>' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num15" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>-' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num16" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div><span style="font-size: 60px">)</span> +' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num17" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">10</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">15</span>' +
    '</div>=' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">3</span>' +
    '</div>' +
    '</div>', '<div class="eq-c">' +
    '<div class="fraction">' +
    '<span class="fup">5</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num18" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>-' +
    '<div class="fraction">' +
    '<span class="fup">2</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn"><input id="act2num19" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></input></span>' +
    '</div>' +
    '=' +
    '<div class="fraction">' +
    '<span class="fup">1</span>' +
    '<span class="bar">/</span>' +
    '<span class="fdn">6</span>' +
    '</div>' +
    '</div>',
];

var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['4', '5', '1', '2', '3', '2', '5', '1', '3', '5', '2', '5', '2', '3', '4', '3', '5', '5', '6', '3', ];
    var cont = 0;
    for (var i = 0; i < 20; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 20;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
///////////////////ptrgunta3/////////////////////////////////////////////////////////


var random3 = [
    [' <td style="background: #f7eff7;">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num0" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num1" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num2" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num3" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num4" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num5" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num6" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num7" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td style="background: #f7eff7;">1' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num8" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num9" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<input id="act3num10" class="inputfraccciones sinEspacios soloNumeros"></input>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num11" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num12" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num13" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num14" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background: #f7eff7;">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num15" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num16" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num17" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num18" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num19" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num20" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num21" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num22" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background: #f7eff7;">' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num23" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num24" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num25" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num26" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act3num27" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act3num28" class="inputfraccciones sinEspacios soloNumeros"></input></span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<input id="act3num29" class="inputfraccciones sinEspacios"></input>' +
        '</td>'
    ],

];

var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['4', '3', '5', '3', '11', '6', '5', '6', '5', '3', '2', '13', '6', '1', '2', '11', '6', '13', '6', '7', '3', '1', '3', '5', '6', '1', '2', '1', '3', '-3', ];
    var cont = 0;
    for (var i = 0; i < 30; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 30;
    $('#nota3').val(parseFloat(total).toFixed(2));


}
/////////////////////////////pregunta4//////////////////////////////


var random4 = [
    ['<div class="eq-c enc" id="act4_1"> -' +
        '<div class="fraction">' +
        '<span class="fup">10</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">20<sup><b>,</b></sup></span>' +
        '</div>' +
        '</div>'
    ],
    ['<span class="1 enc" id="act4_2">1,<span class="periodicos">3</span>,</span>'],
    ['<span class="1 enc" id="act4_3">0,5,</span>'],
    ['<div class="eq-c enc" id="act4_4"> -' +
        '<div class="fraction">' +
        '<span class="fup">16</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">28<sup><b>,</b></sup></span>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="eq-c enc" id="act4_5"> -' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6<sup><b>,</b></sup></span>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="eq-c enc" id="act4_6">' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">14</span>' +
        '</div>' +
        '</div>'
    ],
];

var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

$('.enc').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('pintar1')
    } else if ($(this).hasClass('pintar1')) {
        $(this).removeClass('pintar1')
        $(this).addClass('pintar2')
    } else if ($(this).hasClass('pintar2')) {
        $(this).removeClass('pintar2')
        $(this).addClass('pintar3')

    } else {
        $(this).removeClass('pintar3')
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
        nt2 = 0;
    var act4_1 = document.getElementById("act4_1").classList.item(2);
    var act4_3 = document.getElementById("act4_3").classList.item(2);
    if ((act4_1 == null) || ($('#act4_1').hasClass('vacio')) || (act4_3 == null) || ($('#act4_3').hasClass('vacio'))) {

    } else {
        if (act4_1 == act4_3) {
            $('#act4_1').css("background", "#00e600");
            $('#act4_3').css("background", "#00e600");
            nt1 = 0.5;

        } else {
            $('#act4_1').css("background", "#ff6666");
            $('#act4_3').css("background", "#ff6666");

        }
    }
    var act4_2 = document.getElementById("act4_2").classList.item(2);
    var act4_5 = document.getElementById("act4_5").classList.item(2);
    if ((act4_2 == null) || ($('#act4_2').hasClass('vacio')) || (act4_5 == null) || ($('#act4_5').hasClass('vacio'))) {

    } else {
        if ((act4_2 != act4_1) && (act4_5 != act4_3)) {
            if (act4_2 == act4_5) {
                $('#act4_2').css("background", "#00e600");
                $('#act4_5').css("background", "#00e600");
                nt2 = 0.5;

            } else {
                $('#act4_2').css("background", "#ff6666");
                $('#act4_5').css("background", "#ff6666");

            }
        } else {
            $('#act4_2').css("background", "#ff6666");
            $('#act4_5').css("background", "#ff6666");

        }
    }
    var act4_4 = document.getElementById("act4_4").classList.item(2);
    var act4_6 = document.getElementById("act4_6").classList.item(2);
    if (((act4_4 == null) && (act4_6 == null)) || ((act4_4 == "vacio") && (act4_6 == "vacio"))) {


    } else {
        $('#act4_4').css("background", "#ff6666");
        $('#act4_6').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota4').val(parseFloat(total).toFixed(2));
    $('.enc').off('click');
}
////////////////pregunta5//////////////////////////


var random5 = [
    ['<div class="circulo enc1" id="act5_1" align="center">' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">63</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">36</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="circulo enc1" id="act5_2" align="center">-2,5</div>'],
    [' <div class="circulo enc1" id="act5_3" align="center">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="circulo enc1" id="act5_4" align="center">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="circulo enc1" id="act5_5" align="center">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="circulo enc1" id="act5_6" align="center">' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</div>'
    ],
    ['<div class="circulo enc1" id="act5_7" align="center"> -0,75 </div>'],
];

var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}
$('.enc1').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('color1')
    } else if ($(this).hasClass('color1')) {
        $(this).removeClass('color1')
        $(this).addClass('color2')
    } else if ($(this).hasClass('color2')) {
        $(this).removeClass('color2')
        $(this).addClass('color3')

    } else {
        $(this).removeClass('color3')
        $(this).addClass('vacio')
    }

    /*if ($(this).hasClass('encierra')) {
        $(this).addClass('subrayar')
    }else {
        $(this).addClass('encierra')
    }*/

});

function pregunta5() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    var act5_1 = document.getElementById("act5_1").classList.item(2);
    var act5_4 = document.getElementById("act5_4").classList.item(2);
    if ((act5_1 == null) || ($('#act5_1').hasClass('vacio')) || (act5_4 == null) || ($('#act5_4').hasClass('vacio'))) {

    } else {
        if (act5_1 == act5_4) {
            $('#act5_1').css("background", "#00e600");
            $('#act5_4').css("background", "#00e600");
            nt1 = 0.25;

        } else {
            $('#act5_1').css("background", "#ff6666");
            $('#act5_4').css("background", "#ff6666");

        }
    }

    var act5_2 = document.getElementById("act5_2").classList.item(2);
    var act5_3 = document.getElementById("act5_3").classList.item(2);
    if ((act5_2 == null) || ($('#act5_2').hasClass('vacio')) || (act5_3 == null) || ($('#act5_3').hasClass('vacio'))) {

    } else {
        if ((act5_2 != act5_1) && (act5_3 != act5_1)) {
            if (act5_2 == act5_3) {
                $('#act5_2').css("background", "#00e600");
                $('#act5_3').css("background", "#00e600");
                nt2 = 0.25;

            } else {
                $('#act5_2').css("background", "#ff6666");
                $('#act5_3').css("background", "#ff6666");

            }
        } else {
            $('#act5_2').css("background", "#ff6666");
            $('#act5_3').css("background", "#ff6666");

        }
    }

    var act5_5 = document.getElementById("act5_5").classList.item(2);
    var act5_7 = document.getElementById("act5_7").classList.item(2);
    if ((act5_5 == null) || ($('#act5_5').hasClass('vacio')) || (act5_7 == null) || ($('#act5_7').hasClass('vacio'))) {

    } else {
        if ((act5_5 != act5_1) && (act5_7 != act5_1)) {
            if ((act5_5 != act5_2) && (act5_7 != act5_3)) {
                if (act5_5 == act5_7) {
                    $('#act5_5').css("background", "#00e600");
                    $('#act5_7').css("background", "#00e600");
                    nt3 = 0.25;

                } else {
                    $('#act5_5').css("background", "#ff6666");
                    $('#act5_7').css("background", "#ff6666");

                }
            } else {
                $('#act5_5').css("background", "#ff6666");
                $('#act5_7').css("background", "#ff6666");

            }
        } else {
            $('#act5_5').css("background", "#ff6666");
            $('#act5_7').css("background", "#ff6666");

        }
    }

    var act5_6 = document.getElementById("act5_6").classList.item(2);
    if ((act5_6 == null) || (act5_6 == "vacio")) {
        nt4 = 0.25;
        $('#act5_6').css("background", "#00e600");


    } else {

        $('#act5_6').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota5').val(parseFloat(total).toFixed(2));
    $('.enc1').off('click');
}
////////////////////////pregunta6/////////////////////////////////////////

var resp_cor_len3_act13_p14 = [
    ["-6/5", "img/i1_p78_act88.jpg"],
    ["3/4", "img/i2_p78_act88.jpg"],
    ["5/6", "img/i3_p78_act88.jpg"],
    ["2/3", "img/i4_p78_act88.jpg"],
    ["-1/2", "img/i5_p78_act88.jpg"],


];
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p78_act88.jpg', 'img/i2_p78_act88.jpg', 'img/i3_p78_act88.jpg', 'img/i4_p78_act88.jpg', 'img/i5_p78_act88.jpg', ];
var loadTxt = ['-6/5', '3/4', '5/6', '2/3', '-1/2', ];
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
enviarEventosListener("caja_img4", "caja_txt4"); //caja1 img y texto
enviarEventosListener("caja_img5", "caja_txt5"); //caja1 img y texto
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
            $('#' + cajas[i].id).html('<img class="center img-responsive"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
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
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });

        } */





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
        5,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        var calculo = 0;
        $('#nota6').val(calculo.toFixed(2) + ' ');
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta 6');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;
        $('#nota6').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}
/////////////////////////PREGUNTA7////////////////////////////////

var random7 = [
    ['<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num0" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num1" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>-0,5</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num2" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num3" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num4" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num5" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num6" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num7" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>-4,5</td>'
    ],
    ['<td>' +
        '                                                ' + '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num8" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num9" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num10" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num11" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num12" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num13" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td>7,5</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">13</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act7num14" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act7num15" class="inputfraccciones"></input></span>' +
        '</div>' +
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
    var respact2 = ['15', '2', '13', '2', '3', '2', '5', '2', '5', '2', '11', '2', '9', '2', '3', '2', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 16;
    $('#nota7').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta8/////////////////////////////////
function pregunta8() {
    var respact2 = ['2', '17/60', '17/15', '47/15', '-13/15', '23/20', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act8num' + [i] + '').val().toLowerCase();
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
/////////////////pregunta9/////////////////////////////////
function pregunta9() {
    var respact2 = ['47', '15', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act9num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota9').val(parseFloat(total).toFixed(2));

}

/////////////////pregunta10/////////////////////////////////
var random10 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div>' +
        '= -' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">22</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num0" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '=' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num1" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '1 +' +
        '<span style="font-size: 50px;">(</span>' +
        '<div class="fraction">' +
        '<span class="fup">-2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span> = -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num2" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">-13</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        'y' +
        '<div class="fraction">' +
        '<span class="fup">13</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-7</span>' +
        '</div>' +
        'son opuestos' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num3" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        'Sustraer' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        'de' +
        '<div class="fraction">' +
        '<span class="fup">-2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        'es 0' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num4" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '-' +
        '<span style="font-size: 50px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span> = 1' +
        '</div>' +
        '</td>' +
        '<td><input class="inputfraccciones text-uppercase sinEspacios" maxlength="1" id="act10num5" style="border-radius: 10px 0px 10px 0px;border: 2px solid #6AB5E5;"></input></td>'
    ],
];

var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

function pregunta10() {
    var respact2 = ['F', 'V', 'F', 'F', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act10num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota10').val(parseFloat(total).toFixed(2));

}
/////////////////////////pregunta11//////////////////////
var random11 = [

    ['<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>+ 0 = -' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '<select class="form-control" style="text-align:center; border: 2px dotted #831F82;" id="sel0">' +
        '<option>-------------------seleccione--------------------------------</option>' +
        '<option>Existencia del elemento neutro</option>' +
        '<option>Conmutativa</option>' +
        '<option>Clausurativa</option>' +
        '<option>Existencia del opuesto aditivo</option>' +
        '</select>'
    ],
    ['<div class="eq-c">1,2 +' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '+ 1,2' +
        '</div>' +
        '<select class="form-control" style="text-align:center; border: 2px dotted #831F82;" id="sel1">' +
        '<option>-------------------seleccione--------------------------------</option>' +
        '<option>Existencia del elemento neutro</option>' +
        '<option>Conmutativa</option>' +
        '<option>Clausurativa</option>' +
        '<option>Existencia del opuesto aditivo</option>' +
        '</select>'
    ],
    ['<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '= -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</div>' +
        '<select class="form-control" style="text-align:center; border: 2px dotted #831F82;" id="sel2">' +
        '<option>-------------------seleccione--------------------------------</option>' +
        '<option>Existencia del elemento neutro</option>' +
        '<option>Conmutativa</option>' +
        '<option>Clausurativa</option>' +
        '<option>Existencia del opuesto aditivo</option>' +
        '</select>'
    ],
    ['<span>-0,7<span class="periodicos">2</span>+ 0,7<span class="periodicos">2</span> = 0</span>' +
        '<select class="form-control" style="text-align:center; border: 2px dotted #831F82;" id="sel3">' +
        '<option>-------------------seleccione--------------------------------</option>' +
        '<option>Existencia del elemento neutro</option>' +
        '<option>Conmutativa</option>' +
        '<option>Clausurativa</option>' +
        '<option>Existencia del opuesto aditivo</option>' +
        '</select>'
    ],
];

var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

function pregunta11() {
    var respact11 = ['Existencia del elemento neutro', 'Conmutativa', 'Clausurativa', 'Existencia del opuesto aditivo', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact11[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota11').val(total.toFixed(2));
}

function Nota_Total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    contarRespCorrectaDnD();//
    pregunta7();
    pregunta8();
    pregunta9();
    pregunta10();
    pregunta11();
    // body... var nota1 = document.getElementById('nota1').value;
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


    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11);
    var total = (subtotal * 10) / 11;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
