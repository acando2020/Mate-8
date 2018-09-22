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