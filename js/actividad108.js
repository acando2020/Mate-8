function pregunta1() {
    var respact2 = ['83', '18', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 2;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
///////////////////pregunta2///////////////////////////////
var random2 = [
    [' <td><b style="color: #005ca4"><li></li></b></td> <td><img src="img/i3_p113_act108.jpg" alt=""></td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act2num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: center;"><img src="img/i4_p113_act108.jpg" alt=""></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act2num1"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act2num2"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="text-align: center;"><img src="img/i5_p113_act108.jpg" alt=""></td>' +
        '<td>' +
        '<div class="eq-c"><b>-</b>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act2num3"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act2num4"></input></span>' +
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
    var respact2 = ['-190', '3', '8', '463', '126', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));


}
//////////////////pregunta3/////////////////////
var random3_1 = [
    [' <div class="1 enc1">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="1 enc2">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    [' <div class="1 enc3"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>-10</td> </tr> </table> </div>'],
    ['<div class="1 enc4"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>4</td> </tr> </table> </div>'],
];
var act0301Txt = document.getElementsByClassName('act3_1class');

random3_1.sort(f_randomico);
for (i = 0; i < act0301Txt.length; i++) {
    $('#' + act0301Txt[i].id).html(random3_1[i]);
}
//////////////*/ ///
var random3_2 = [
    ['<div class="2 enci1"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td> 0 </td> </tr> </table> </div>'],
    ['<div class="2 enci2"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td> -1 </td> </tr> </table> </div>'],
    ['<div class="2 enci3"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>10</td> </tr> </table> </div>'],
    ['<div class="2 enci4"> <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>1</td> </tr> </table> </div>'],
];
var act0302Txt = document.getElementsByClassName('act3_2class');

random3_2.sort(f_randomico);
for (i = 0; i < act0302Txt.length; i++) {
    $('#' + act0302Txt[i].id).html(random3_2[i]);
}
//////////////*/ ///
var random3_3 = [
    ['<div class="3 encie1">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="3 encie2">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="3 encie3">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    [' <div class="3 encie4">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
];
var act0303Txt = document.getElementsByClassName('act3_3class');

random3_3.sort(f_randomico);
for (i = 0; i < act0303Txt.length; i++) {
    $('#' + act0303Txt[i].id).html(random3_3[i]);
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
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');

            break;
        case '2 enci2':
            $('.enci2').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');
            break;
        case '2 enci3':
            $('.enci3').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');

            break;
        case '2 enci4':
            $('.enci4').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');

            break;


    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 encie1':
            $('.encie1').addClass('pintar1');
            $('.encie2').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');
            $('.encie4').removeClass('pintar1');

            break;
        case '3 encie2':
            $('.encie2').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');
            $('.encie4').removeClass('pintar1');
            break;
        case '3 encie3':
            $('.encie3').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie2').removeClass('pintar1');
            $('.encie4').removeClass('pintar1');

            break;
        case '3 encie4':
            $('.encie4').addClass('pintar1');
            $('.encie1').removeClass('pintar1');
            $('.encie2').removeClass('pintar1');
            $('.encie3').removeClass('pintar1');

            break;


    }
});

function pregunta3() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if ($('.enc3').hasClass('pintar1') == true) {
        nt1 = 1;

        $('.enc3').addClass('correcto');


    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc4').hasClass('pintar1') == true) {
        $('.enc4').addClass('incorrecto');


    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.enci1').hasClass('pintar1') == true) {
        nt2 = 1;

        $('.enci1').addClass('correcto');


    } else if ($('.enci2').hasClass('pintar1') == true) {
        $('.enci2').addClass('incorrecto');


    } else if ($('.enci4').hasClass('pintar1') == true) {
        $('.enci4').addClass('incorrecto');


    } else if ($('.enci3').hasClass('pintar1') == true) {
        $('.enci3').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.encie3').hasClass('pintar1') == true) {
        nt3 = 1;

        $('.encie3').addClass('correcto');


    } else if ($('.encie2').hasClass('pintar1') == true) {
        $('.encie2').addClass('incorrecto');


    } else if ($('.encie4').hasClass('pintar1') == true) {
        $('.encie4').addClass('incorrecto');


    } else if ($('.encie1').hasClass('pintar1') == true) {
        $('.encie1').addClass('incorrecto');
    }
    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3);
    var total = (subtotal * 2) / 3;
    $('#nota3').val(parseFloat(total).toFixed(2));
}
///////////pregunta4///////////////////////
function pregunta4() {
    var respact2 = ['1', '2', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 2;
    $('#nota4').val(parseFloat(total).toFixed(2));


}

function pregunta5() {
    var respact2 = ['11', '40', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 2;
    $('#nota5').val(parseFloat(total).toFixed(2));


}
/*function pregunta2() {
    var nt1 = 0;
    var act2num0 = document.getElementById('act2num0').value;
    if (act2num0 == 2800) {
        nt1 = 5;
        $('#act2num0').css("background", "#00e600");
    } else {
        $('#act2num0').css("background", "#ff6666");
    }
    $('#nota2').val(parseFloat(nt1).toFixed(2));
}*/

function NotaFinal() {




    /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    //pregunta6();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;


    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5);


    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
