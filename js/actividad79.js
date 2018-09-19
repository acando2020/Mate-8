/*document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2.5)
});

document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2.5)
});*/


function pregunta1() {
    var respact2 = ['-8', '3', '4', '6', '(-8).6y3.4', '-48', '12', '11', '4', '22', '8', '11.8y4.22', '88', '88', '11', '4', '22', '8', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 18;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
///////////////////pregunta2////////////////////////////////////////////////////
var random1 = [
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="eq-c">' +
        'Una fracción equivalente a' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">15</span>' +
        '</div> que tenga como numerador 36.' +
        '</div><div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num1"></input></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num3"></input></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="eq-c">' +
        'Una fracción que sea equivalente a' +
        '<div class="fraction">' +
        '<span class="fup">28</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">48</span>' +
        '</div> que tenga como numerador 7.' +
        '</div><div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num5"></input></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num7"></input></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="eq-c">' +
        'Una fracción equivalente a' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> que tenga como denominador 12.' +
        '</div><div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num9"></input></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act2num10"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act2num11"></input></span>' +
        '</div></div></td>'
    ],
];

var act02Txt = document.getElementsByClassName('act2class');

random1.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random1[i]);
}

function pregunta2() {
    var respact2 = ['6.6', '15.6', '36', '90', '28÷4', '48÷4', '7', '12', '1.4', '3.4', '4', '12', ];
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


}
////////////////////pregunta3/////////////////////////////////////////////////////
var random3 = [
    ['<div class="oval 1" id="ovl1" style="text-align:center;"><div class="fraction"><span class="fup">-10</span><span class="bar">/</span><span class="fdn">15</span></div></div>'],
    ['<div class="oval 2" id="ovl2" style="text-align:center;"><div class="fraction"><span class="fup">15</span><span class="bar">/</span><span class="fdn">20</span></div></div>'],
    ['<div class="oval 3" id="ovl3" style="text-align:center;"><div class="fraction"><span class="fup">-2</span><span class="bar">/</span><span class="fdn">3</span></div></div>'],
    ['<div class="oval 4" id="ovl4" style="text-align:center;"><div class="fraction"><span class="fup">5</span><span class="bar">/</span><span class="fdn">2</span></div></div>'],
    ['<div class="oval 5" id="ovl5" style="text-align:center;"><div class="fraction"><span class="fup">7</span><span class="bar">/</span><span class="fdn">4</span></div></div>'],
    ['<div class="oval 6" id="ovl6" style="text-align:center;"><div class="fraction"><span class="fup">3</span><span class="bar">/</span><span class="fdn">4</span></div></div>'],
    ['<div class="oval 7" id="ovl7" style="text-align:center;"><div class="fraction"><span class="fup">-15</span><span class="bar">/</span><span class="fdn">-6</span></div></div>'],
    ['<div class="oval 8" id="ovl8" style="text-align:center;">-<div class="fraction"><span class="fup">63</span><span class="bar">/</span><span class="fdn">36</span></div></div>'],
];
var act03Txt = document.getElementsByClassName('act3class');
random3.sort(f_randomico);
for (var i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id + '').html(random3[i])

}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 1':
            $('.1').addClass('seleccionado pintar1');
            break;
        case 'oval 1 seleccionado pintar1':
            $('.1').removeClass('seleccionado pintar1');
            $('.1').addClass('seleccionado pintar2');
            break;
        case 'oval 1 seleccionado pintar2':
            $('.1').removeClass('seleccionado pintar2');
            $('.1').addClass('seleccionado pintar3');
            break;
        case 'oval 1 seleccionado pintar3':
            $('.1').removeClass('seleccionado pintar3');
            $('.1').addClass('seleccionado pintar4');
            break;
        case 'oval 1 seleccionado pintar4':
            $('.1').removeClass('seleccionado pintar1');
            $('.1').removeClass('seleccionado pintar2');
            $('.1').removeClass('seleccionado pintar3');
            $('.1').removeClass('seleccionado pintar4');
            break;
    }
});

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 2':
            $('.2').addClass('seleccionado pintar1');
            break;
        case 'oval 2 seleccionado pintar1':
            $('.2').removeClass('seleccionado pintar1');
            $('.2').addClass('seleccionado pintar2');
            break;
        case 'oval 2 seleccionado pintar2':
            $('.2').removeClass('seleccionado pintar2');
            $('.2').addClass('seleccionado pintar3');
            break;
        case 'oval 2 seleccionado pintar3':
            $('.2').removeClass('seleccionado pintar3');
            $('.2').addClass('seleccionado pintar4');
            break;
        case 'oval 2 seleccionado pintar4':
            $('.2').removeClass('seleccionado pintar1');
            $('.2').removeClass('seleccionado pintar2');
            $('.2').removeClass('seleccionado pintar3');
            $('.2').removeClass('seleccionado pintar4');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 3':
            $('.3').addClass('seleccionado pintar1');
            break;
        case 'oval 3 seleccionado pintar1':
            $('.3').removeClass('seleccionado pintar1');
            $('.3').addClass('seleccionado pintar2');
            break;
        case 'oval 3 seleccionado pintar2':
            $('.3').removeClass('seleccionado pintar2');
            $('.3').addClass('seleccionado pintar3');
            break;
        case 'oval 3 seleccionado pintar3':
            $('.3').removeClass('seleccionado pintar3');
            $('.3').addClass('seleccionado pintar4');
            break;
        case 'oval 3 seleccionado pintar4':
            $('.3').removeClass('seleccionado pintar1');
            $('.3').removeClass('seleccionado pintar2');
            $('.3').removeClass('seleccionado pintar3');
            $('.3').removeClass('seleccionado pintar4');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 4':
            $('.4').addClass('seleccionado pintar1');
            break;
        case 'oval 4 seleccionado pintar1':
            $('.4').removeClass('seleccionado pintar1');
            $('.4').addClass('seleccionado pintar2');
            break;
        case 'oval 4 seleccionado pintar2':
            $('.4').removeClass('seleccionado pintar2');
            $('.4').addClass('seleccionado pintar3');
            break;
        case 'oval 4 seleccionado pintar3':
            $('.4').removeClass('seleccionado pintar3');
            $('.4').addClass('seleccionado pintar4');
            break;
        case 'oval 4 seleccionado pintar4':
            $('.4').removeClass('seleccionado pintar1');
            $('.4').removeClass('seleccionado pintar2');
            $('.4').removeClass('seleccionado pintar3');
            $('.4').removeClass('seleccionado pintar4');
            break;
    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 5':
            $('.5').addClass('seleccionado pintar1');
            break;
        case 'oval 5 seleccionado pintar1':
            $('.5').removeClass('seleccionado pintar1');
            $('.5').addClass('seleccionado pintar2');
            break;
        case 'oval 5 seleccionado pintar2':
            $('.5').removeClass('seleccionado pintar2');
            $('.5').addClass('seleccionado pintar3');
            break;
        case 'oval 5 seleccionado pintar3':
            $('.5').removeClass('seleccionado pintar3');
            $('.5').addClass('seleccionado pintar4');
            break;
        case 'oval 5 seleccionado pintar4':
            $('.5').removeClass('seleccionado pintar1');
            $('.5').removeClass('seleccionado pintar2');
            $('.5').removeClass('seleccionado pintar3');
            $('.5').removeClass('seleccionado pintar4');
            break;
    }
});
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 6':
            $('.6').addClass('seleccionado pintar1');
            break;
        case 'oval 6 seleccionado pintar1':
            $('.6').removeClass('seleccionado pintar1');
            $('.6').addClass('seleccionado pintar2');
            break;
        case 'oval 6 seleccionado pintar2':
            $('.6').removeClass('seleccionado pintar2');
            $('.6').addClass('seleccionado pintar3');
            break;
        case 'oval 6 seleccionado pintar3':
            $('.6').removeClass('seleccionado pintar3');
            $('.6').addClass('seleccionado pintar4');
            break;
        case 'oval 6 seleccionado pintar4':
            $('.6').removeClass('seleccionado pintar1');
            $('.6').removeClass('seleccionado pintar2');
            $('.6').removeClass('seleccionado pintar3');
            $('.6').removeClass('seleccionado pintar4');
            break;
    }
});
$('.7').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 7':
            $('.7').addClass('seleccionado pintar1');
            break;
        case 'oval 7 seleccionado pintar1':
            $('.7').removeClass('seleccionado pintar1');
            $('.7').addClass('seleccionado pintar2');
            break;
        case 'oval 7 seleccionado pintar2':
            $('.7').removeClass('seleccionado pintar2');
            $('.7').addClass('seleccionado pintar3');
            break;
        case 'oval 7 seleccionado pintar3':
            $('.7').removeClass('seleccionado pintar3');
            $('.7').addClass('seleccionado pintar4');
            break;
        case 'oval 7 seleccionado pintar4':
            $('.7').removeClass('seleccionado pintar1');
            $('.7').removeClass('seleccionado pintar2');
            $('.7').removeClass('seleccionado pintar3');
            $('.7').removeClass('seleccionado pintar4');
            break;
    }
});
$('.8').click(function() {
    switch ($(this).attr('class')) {
        case 'oval 8':
            $('.8').addClass('seleccionado pintar1');
            break;
        case 'oval 8 seleccionado pintar1':
            $('.8').removeClass('seleccionado pintar1');
            $('.8').addClass('seleccionado pintar2');
            break;
        case 'oval 8 seleccionado pintar2':
            $('.8').removeClass('seleccionado pintar2');
            $('.8').addClass('seleccionado pintar3');
            break;
        case 'oval 8 seleccionado pintar3':
            $('.8').removeClass('seleccionado pintar3');
            $('.8').addClass('seleccionado pintar4');
            break;
        case 'oval 8 seleccionado pintar4':
            $('.8').removeClass('seleccionado pintar1');
            $('.8').removeClass('seleccionado pintar2');
            $('.8').removeClass('seleccionado pintar3');
            $('.8').removeClass('seleccionado pintar4');
            break;
    }
});

function pregunta3() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    var sele = $('.seleccionado').length;
    if (sele < 8) {
        alert("Debe colorear las parejas de fracciones equivalentes.")
    } else {
        var n1 = document.getElementById("ovl1").classList.item(3);
        var n3 = document.getElementById("ovl3").classList.item(3);

        if ((n1 != n2) || (n3 != n6) || (n1 != n4) || (n3 != n7) || (n1 != n5) || (n3 != n8)) {
            if (n1 == n3) {
                $('.1').addClass('ovalcorrecto');
                $('.3').addClass('ovalcorrecto');
                nt1 = 0.25;

            } else {
                $('.1').addClass('ovalincorrecto');
                $('.3').addClass('ovalincorrecto');
            }

        } else {
            $('.1').addClass('ovalincorrecto');
            $('.3').addClass('ovalincorrecto');
        }

        var n2 = document.getElementById("ovl2").classList.item(3);
        var n6 = document.getElementById("ovl6").classList.item(3);
        if ((n2 != n1) || (n6 != n3)) {
            if (n2 == n6) {
                $('.2').addClass('ovalcorrecto');
                $('.6').addClass('ovalcorrecto');
                nt2 = 0.25;

            } else {
                $('.2').addClass('ovalincorrecto');
                $('.6').addClass('ovalincorrecto');
            }


        } else {
            $('.2').addClass('ovalincorrecto');
            $('.6').addClass('ovalincorrecto');
        }

        var n4 = document.getElementById("ovl4").classList.item(3);
        var n7 = document.getElementById("ovl7").classList.item(3);
        if ((n4 != n2) || (n7 != n6)) {
            if (n4 == n7) {
                $('.4').addClass('ovalcorrecto');
                $('.7').addClass('ovalcorrecto');
                nt3 = 0.25;

            } else {
                $('.4').addClass('ovalincorrecto');
                $('.7').addClass('ovalincorrecto');
            }
        } else {
            $('.4').addClass('ovalincorrecto');
            $('.7').addClass('ovalincorrecto');
        }
        var n5 = document.getElementById("ovl5").classList.item(3);
        var n8 = document.getElementById("ovl8").classList.item(3);

        if ((n5 != n4) || (n8 != n7)) {
            if (n5 == n8) {
                $('.5').addClass('ovalcorrecto');
                $('.8').addClass('ovalcorrecto');
                nt4 = 0.25;

            } else {
                $('.5').addClass('ovalincorrecto');
                $('.8').addClass('ovalincorrecto');
            }

        } else {
            $('.5').addClass('ovalincorrecto');
            $('.8').addClass('ovalincorrecto');
        }
        var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
        $('#nota3').val(parseFloat(total).toFixed(2));



    }

}

/////////////////////////pregunta4///////////////////////////////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-7</span>' +
        '</div>=</td><td>' +
        '<input id="act4num0" type="text" class="inputfraccciones sinEspacios" style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">-8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-1</span>' +
        '</div>=</td><td>' +
        '<input id="act4num1" type="text" class="inputfraccciones sinEspacios" style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">0</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-3</span>' +
        '</div>=</td><td>' +
        '<input id="act4num2" type="text" class="inputfraccciones sinEspacios" style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;"></input>' +
        '</td>'
    ],
    ['  <td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">-4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">36</span>' +
        '</div>=</td><td>' +
        '<div style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num3" type="text" name="" class="inputfraccciones sinEspacios"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num4" type="text" name="" class="inputfraccciones sinEspacios"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-63</span>' +
        '</div>=</td><td>' +
        '<div style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act4num5" type="text" name="" class="inputfraccciones sinEspacios"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act4num6" type="text" name="" class="inputfraccciones sinEspacios"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-3</span>' +
        '</div>=</td><td>' +
        '<input id="act4num7" type="text" class="inputfraccciones sinEspacios" style="border: 2px solid #8DE0FF; border-radius: 10px 0px 10px 0px;">' +
        '</td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');
random4.sort(f_randomico);
for (var i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id + '').html(random4[i])

}

function pregunta4() {
    var respact2 = ['-1', '8', '0', '1', '9', '1', '9', '-5', ];
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
}

/////////////////////////pregunta5///////////////////////////////////////////////////////
var random5 = [
    ['<td><div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num0" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num1" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">-5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num2" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num3" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-6</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num4" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num5" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">21</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num6" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num7" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">-310</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">240</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num8" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num9" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num10" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num11" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">-16</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">-48</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num12" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num13" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
    ['<td>- <div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div></td><td>' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act5num14" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act5num15" type="text" class="sinEspacios inputfraccciones" name=""></span>' +
        '</div></td>'
    ],
];
var act05Txt = document.getElementsByClassName('act5class');
random5.sort(f_randomico);
for (var i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id + '').html(random5[i])

}

function pregunta5() {
    var respact2 = ['16', '24', '-30', '24', '28', '-24', '42', '24', '-31', '24', '12', '24', '-8', '-24', '18', '24', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 16;
    $('#nota5').val(parseFloat(total).toFixed(2));
}

function pregunta6() {
    var respact2 = ['21', '34', ];
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

function NotaFinal() {
    var sele = $('.seleccionado').length;
    if (sele < 8) {
        alert("Debe colorear las parejas de fracciones equivalentes.")
    } else {
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

        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
        var total = (subtotal * 10) / 6;
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
