var random1 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> . 4 =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num7"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num9"></input></span>' +
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
    var respact2 = ['4', '7', '9', '50', '1', '15', '4', '27', '4', '9', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////pregunta2/////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">3</span>&radic;</span><span class="radicand"> <span class="radical">&radic;</span><span class="radicand">a<sup>6</sup> . b<sup>12</sup></span></span>' +
        '</div>' +
        '</td>' +
        '<td>=<input id="act2num2" class="inputfraccciones sinEspacios"></input><sup><input id="act2num3" class="inputfraccciones sinEspacios" style="width:20px;"></input></sup></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">12</span>' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">3</span>' +
        '</div>' +
        '</td>' +
        '<td>= <input id="act2num4" class="inputfraccciones sinEspacios"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">72</span>' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">4</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '= <input id="act2num5" class="inputfraccciones sinEspacios"></input><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><input id="act2num6" class="inputfraccciones sinEspacios"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td><img class="img-responsive" src="img/i1_p142_act125.jpg"></img></td> <td><input id="act2num7" class="inputfraccciones sinEspacios"></input></td>'],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['4', '25', 'ab', '2', '6', '12', '2', '4', ];
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
    var total = (cont * 2) / 8;
    $('#nota2').val(parseFloat(total).toFixed(2));
}

/////////////////////////////pregunta3/////////////////////////////////////////////////
var random3 = [
    [' <div class="1 enc1">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Sólo I</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    [' <div class="1 enc2">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Sólo I y III</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="1 enc3">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Sólo I y II</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="1 enc4">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Sólo II y III</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
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

function pregunta3() {
    var nt1 = 0,
        nt2 = 0;
    if ($('.enc2').hasClass('pintar1') == true) {
        nt1 = 1;

        $('.enc2').addClass('correcto');


    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc4').hasClass('pintar1') == true) {
        $('.enc4').addClass('incorrecto');


    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');
    }

    $('.1').off('click');
    var total = parseFloat(nt1);
    $('#nota3').val(parseFloat(total).toFixed(2));
}

/////////////////pregunta4/////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><img class="img-responsive" src="img/i2_p142_act125.jpg"></img></td> <td><input id="act4num0" class="inputfraccciones sinEspacios"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img class="img-responsive" src="img/i3_p142_act125.jpg"></img></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num1" class="inputfraccciones sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num2" class="inputfraccciones sinEspacios"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img class="img-responsive" src="img/i4_p142_act125.jpg"></img></td>' +
        '<td> -' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num3" class="inputfraccciones sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num4" class="inputfraccciones sinEspacios"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img class="img-responsive" src="img/i5_p142_act125.jpg"></img></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num5" class="inputfraccciones sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num6" class="inputfraccciones sinEspacios"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img class="img-responsive" src="img/i6_p142_act125.jpg"></img></td>' +
        '<td>=' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num7" class="inputfraccciones sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num8" class="inputfraccciones sinEspacios"></input></span>' +
        '</div>' +
        '</td>'
    ],

]
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['11', '17', '12', '373', '36', '3009', '25', '1', 'a', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 9;
    $('#nota4').val(parseFloat(total).toFixed(2));
}

function pregunta5() {
    var respact2 = ['65', '25', '6', '6', '25', '0,24', '24', '4', '4', '25', '0,16', '16', '3', '3', '25', '0,12', '12', '12', '12', '25', '0,48', '48'];
    var cont = 0;
    for (var i = 0; i < 22; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 22;
    $('#nota5').val(parseFloat(total).toFixed(2));
}

function pregunta6() {
    var respact2 = ['Programas de televisión', 'Series', 'Noticieros', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 3;
    $('#nota6').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}

function NotaFinal() {





    /* if (nota1 == "") {
         alert("Calificar la pregunta 1")
     } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
