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

////////////////////////////pregunta1////////////////////////////////////////////////////////////////////////////////
/*var random1 = [
    ['<td>Pop</td>' +
        '<td><img src="img/i3_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr> <td><input type="text" id="act1num0" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr> <tr><td>' +
        '<input type="text" id="act1num1" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td> </tr> </table></td>' +
        '<td><input type="text" id="act1num2" class=" sinEspacios form-control text-lowercase"></input></td><td>' +
        '<input type="text" id="act1num3" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Electrónica</td>' +
        '<td><img src="img/i4_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num4" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr><tr><td>' +
        '<input type="text" id="act1num5" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td></tr></table></td><td>' +
        '<input type="text" id="act1num6" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td> <td>' +
        '<input type="text" id="act1num7" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Indie</td>' +
        '<td><img src="img/i5_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num8" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td> </tr> <tr> <td>' +
        '<input type="text" id="act1num9" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td></tr></table></td><td>' +
        '<input type="text" id="act1num10" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td> <td> <input type="text" id="act1num11" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Reggaetón</td>' +
        '<td><img src="img/i6_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num12" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr><tr>' +
        '<td><input type="text" id="act1num13" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td> </tr></table></td><td>' +
        '<input type="text" id="act1num14" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td><td> <input type="text" id="act1num15" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],

];

var act1Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act1Txt.length; i++) {
    $('#' + act1Txt[i].id).html(random1[i]);
}
*/

function pregunta1() {
    var respact2 = ['7,176...', 'decimal exacto', '2,435435...', 'decimal periódico puro', '6,32555...', 'decimal periódico mixto', '7,176', '7176', '1000', '897', '125', '2', '435', '2', '435', '999', '811', '333', '6,32', '6', '325-32', '900', '5693', '900', '7,176', '897', '125', '2', '435', '811', '333', '6,32', '5693', '900'];
    var cont = 0;
    for (var i = 0; i < 34; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 34;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////
var random2 = [
    ['<td><span><b style="color: #005ca4"><li></li></b></span></td>' +
        '<td><img class="img-responsive" src="img/i1_p68_act74.jpg"></img>' +
        '</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num0" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num1" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num2" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num3" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><span><b style="color: #005ca4"><li></li></b></span></td>' +
        '<td><img class="img-responsive" src="img/i2_p68_act74.jpg"></img>' +
        '</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num4" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num5" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num6" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num7" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '</div></div></td>'
    ],
    [' <td><span><b style="color: #005ca4"><li></li></b></span></td>' +
        '<td><img class="img-responsive" src="img/i3_p68_act74.jpg"></img>' +
        '</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num8" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num9" class="inputfraccciones sinEspacios soloNumeros" maxlength="2"></span>' +
        '</div></div></td>'
    ],
    [' <td><span><b style="color: #005ca4"><li></li></b></span></td>' +
        '<td><img class="img-responsive" src="img/i4_p68_act74.jpg"></img>' +
        '</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" id="act2num10" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" id="act2num11" class="inputfraccciones sinEspacios soloNumeros" maxlength="1"></span>' +
        '</div></div></td>'
    ],
];

var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['3', '9', '1', '3', '2', '6', '1', '3', '5', '12', '1', '3', ];
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
////////////////////////////pregunta3////////////////////////////////////////////////////////////////////////////////
var random3 = [
    [' <td style="background: #e3f4f8;">-4</td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num0" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num1" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num2" maxlength="1" name=""></td>'
    ],
    [' <td style="background: #e3f4f8;">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num3" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num4" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num5" maxlength="1" name=""></td>'
    ],
    ['<td style="background: #e3f4f8;"> <div class="fraction">' +
        '<span class="fup">14</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num6" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num7" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num8" maxlength="1" name=""></td>'
    ],
    ['<td style="background: #e3f4f8;">6</td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num9" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num10" maxlength="1" name=""></td>' +
        '<td><input type="text" class="text-uppercase inputfraccciones" id="act3num11" maxlength="1" name=""></td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['', 'X', 'X', '', '', 'X', 'X', 'X', 'X', 'X', 'X', 'X', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

////////////////////////////pregunta4////////////////////////////////////////////////////////////////////////////////

var random4 = [
    ['<td>' +
        '<div class="fraction">' +
        '<span class="fup">-45</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">74</span>' +
        '</div></td>' +
        '<td><input class="form-control sinEspacios text-lowercase" id="act4num0"></input></td>' +
        '<td><input class="form-control  text-lowercase" id="act4num1"></input></td>'
    ],
    [' <td><div class="fraction">' +
        '<span class="fup">19</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">90</span>' +
        '</div></td>' +
        '<td><input class="form-control sinEspacios text-lowercase" id="act4num2"></input></td>' +
        '<td><input class="form-control  text-lowercase" id="act4num3"></input></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">-31</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">20</span>' +
        '</div></td>' +
        '<td><input class="form-control sinEspacios text-lowercase" id="act4num4"></input></td>' +
        '<td><input class="form-control  text-lowercase" id="act4num5"></input></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">28</span>' +
        '</div></td>' +
        '<td><input class="form-control sinEspacios text-lowercase" id="act4num6"></input></td>' +
        '<td><input class="form-control  text-lowercase" id="act4num7"></input></td>'
    ],
    ['<td><div class="fraction">' +
        '<span class="fup">16</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div></td>' +
        '<td><input class="form-control sinEspacios text-lowercase" id="act4num8"></input></td>' +
        '<td><input class="form-control  text-lowercase" id="act4num9"></input></td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['-0,6081', 'decimal periódico mixto', '0,21', 'decimal periódico mixto', '-1,55', 'decimal exacto', '0,25', 'decimal exacto', '5,3', 'decimal periódico puro', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota4').val(parseFloat(total).toFixed(2));

}
////////////////////////////pregunta5////////////////////////////////////////////////////////////////////////////////
var random5 = [
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc1">1,05</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc2"><div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div></span>'
    ],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc3"><div class="fraction">' +
        '<span class="fup">101</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">100</span>' +
        '</div></span>'
    ],
    ['<b style="color: #005ca4"><li></li></b><span class="1 enc4">0,8</span>'],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
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
            nt1 = 1;
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;


    }
});

function pregunta5() {
    if ($('.enc3').hasClass('encierra') == true) {

        $('.enc3').addClass('correcto');


    } else if ($('.enc1').hasClass('encierra') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc2').hasClass('encierra') == true) {
        $('.enc2').addClass('incorrecto');


    } else if ($('.enc4').hasClass('encierra') == true) {
        $('.enc4').addClass('incorrecto');
    }
    $('.1').off('click');
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}


////////////////////////////pregunta6////////////////////////////////////////////////////////////////////////////////
var random6 = [
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci1">-0,6</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci2">0,<span class="periodicos">60</span></span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci3">-0,66</span>'],
    ['<b style="color: #005ca4"><li></li></b><span class="2 enci4">− 0,<span class="periodicos">6</span></span>'],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}
var nt1 = 0;

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('encierra');
            $('.enci2').removeClass('encierra');
            $('.enci3').removeClass('encierra');
            $('.enci4').removeClass('encierra');

            break;
        case '2 enci2':
            $('.enci2').addClass('encierra');
            $('.enci1').removeClass('encierra');
            $('.enci3').removeClass('encierra');
            $('.enci4').removeClass('encierra');
            break;
        case '2 enci3':
            $('.enci3').addClass('encierra');
            $('.enci1').removeClass('encierra');
            $('.enci2').removeClass('encierra');
            $('.enci4').removeClass('encierra');

            break;
        case '2 enci4':
            $('.enci4').addClass('encierra');
            $('.enci1').removeClass('encierra');
            $('.enci2').removeClass('encierra');
            $('.enci3').removeClass('encierra');
            nt1 = 1;
            break;


    }
});

function pregunta6() {
    if ($('.enci4').hasClass('encierra') == true) {

        $('.enci4').addClass('correcto');


    } else if ($('.enci1').hasClass('encierra') == true) {
        $('.enci1').addClass('incorrecto');


    } else if ($('.enci2').hasClass('encierra') == true) {
        $('.enci2').addClass('incorrecto');


    } else if ($('.enci3').hasClass('encierra') == true) {
        $('.enci3').addClass('incorrecto');
    }
    $('.2').off('click');
    $('#nota6').val(parseFloat(nt1).toFixed(2));
}

////////////////////////////pregunta7////////////////////////////////////////////////////////////////////////////////
var random7 = [
    ['<b style="color: #005ca4;"><li></li></b><span class="3 encie1"> <div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">90</span>' +
        '</div></span>'
    ],
    ['<b style="color: #005ca4;"><li></li></b><span class="3 encie2"> <div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div></span>'
    ],
    ['<b style="color: #005ca4;"><li></li></b><span class="3 encie3"> <div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div></span>'
    ],
    ['<b style="color: #005ca4;"><li></li></b><span class="3 encie4"> <div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div></span>'
    ],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}
var nt1 = 0;

$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 encie1':
            $('.encie1').addClass('encierra');
            $('.encie2').removeClass('encierra');
            $('.encie3').removeClass('encierra');
            $('.encie4').removeClass('encierra');

            break;
        case '3 encie2':
            $('.encie2').addClass('encierra');
            $('.encie1').removeClass('encierra');
            $('.encie3').removeClass('encierra');
            $('.encie4').removeClass('encierra');
            break;
        case '3 encie3':
            $('.encie3').addClass('encierra');
            $('.encie1').removeClass('encierra');
            $('.encie2').removeClass('encierra');
            $('.encie4').removeClass('encierra');

            break;
        case '3 encie4':
            $('.encie4').addClass('encierra');
            $('.encie1').removeClass('encierra');
            $('.encie2').removeClass('encierra');
            $('.encie3').removeClass('encierra');
            nt1 = 1;
            break;


    }
});

function pregunta7() {
    if ($('.encie4').hasClass('encierra') == true) {

        $('.encie4').addClass('correcto');


    } else if ($('.encie1').hasClass('encierra') == true) {
        $('.encie1').addClass('incorrecto');


    } else if ($('.encie2').hasClass('encierra') == true) {
        $('.encie2').addClass('incorrecto');


    } else if ($('.encie3').hasClass('encierra') == true) {
        $('.encie3').addClass('incorrecto');
    }
    $('.3').off('click');
    $('#nota7').val(parseFloat(nt1).toFixed(2));
}
///////////////////////pregunta8///////////////////////////////////////////
var resp_cor_len3_act13_p14 = [
    ["1/3", "img/i5_p68_act74.jpg"],
    ["7/12", "img/i6_p68_act74.jpg"],
    ["3/8", "img/i7_p68_act74.jpg"],
    ["7/15", "img/i8_p68_act74.jpg"],
    ["5/9", "img/i9_p68_act74.jpg"],
    ["2/3", "img/i10_p68_act74.jpg"],

];
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i5_p68_act74.jpg', 'img/i6_p68_act74.jpg', 'img/i7_p68_act74.jpg', 'img/i8_p68_act74.jpg', 'img/i9_p68_act74.jpg', 'img/i10_p68_act74.jpg'];
var loadTxt = ['1/3', '7/12', '3/8', '7/15', '5/9', '2/3'];
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
enviarEventosListener("caja_img6", "caja_txt6"); //caja1 img y texto
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
        6,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        var calculo = 0;
        $('#nota8').val(calculo.toFixed(2) + ' ');
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta 8');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;
        $('#nota8').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}
////////////////////////////pregunta9////////////////////////////////////////////////////////////////////////////////
var random9 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Cuarenta enteros y doce milésimas</td>' +
        '<td><div class="eq-c">' +
        '<input type="text" name="" id="act9num0" class="sinEspacios" style="width: 100px;"> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" name="" id="act9num1" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" name="" id="act9num2" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Treinta y seis diezmilésimas</td>' +
        '<td><div class="eq-c">' +
        '<input type="text" name="" id="act9num3" class="sinEspacios" style="width: 100px;"> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" name="" id="act9num4" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" name="" id="act9num5" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Un entero y cinco milésimas</td><td>' +
        '<div class="eq-c">' +
        '<input type="text" name="" id="act9num6" class="sinEspacios" style="width: 100px;"> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" name="" id="act9num7" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" name="" id="act9num8" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>Dos enteros y doce cienmilésimas</td><td>' +
        '<div class="eq-c">' +
        '<input type="text" name="" id="act9num9" class="sinEspacios" style="width: 100px;"> =' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" name="" id="act9num10" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" name="" id="act9num11" class="sinEspacios soloNumeros inputfraccciones" style="width: 100px;"></span>' +
        '</div></div> </td>'
    ],
];
var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

function pregunta9() {
    var respact2 = ['40,012', '40012', '1000', '0,0036', '36', '10000', '1,005', '1005', '1000', '2,00012', '200012', '100000', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act9num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act9num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act9num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota9').val(parseFloat(total).toFixed(2));

}

////////////////////////////pregunta10////////////////////////////////////////////////////////////////////////////////
var random9 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">145</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">100</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num0" name="" style="width: 70px;" class="sinEspacios">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">9475</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">1000</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num1" name="" class="sinEspacios" style="width: 70px;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>-' +
        '<div class="fraction">' +
        '<span class="fup">94</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">99</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num2" class="sinEspacios" style="text-align: right;">' +
        '<input type="text" id="act10num3" name="" class="sinEspacios periodicos" style="border-bottom: 0;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">29</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">990</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num4" class="sinEspacios" style="text-align: right;">' +
        '<input type="text" id="act10num5" name="" class="sinEspacios periodicos" style="border-bottom: 0;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">95</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">99</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num6" class="sinEspacios" style="text-align: right;">' +
        '<input type="text" id="act10num7" name="" class="sinEspacios periodicos" style="border-bottom: 0;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>-' +
        '<div class="fraction">' +
        '<span class="fup">161</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num8" name="" class="sinEspacios" style="width: 70px;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>-' +
        '<div class="fraction">' +
        '<span class="fup">607</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">999</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num9" class="sinEspacios" style="text-align: right;">' +
        '<input type="text" id="act10num10" name="" class="sinEspacios periodicos" style="border-bottom: 0;">' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td><td>' +
        '<div class="fraction">' +
        '<span class="fup">17</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">90</span>' +
        '</div>=</td><td>' +
        '<input type="text" id="act10num11" class="sinEspacios" style="text-align: right;">' +
        '<input type="text" id="act10num12" name="" class="sinEspacios periodicos" style="border-bottom: 0;">' +
        '</td>'
    ],
];
var act010Txt = document.getElementsByClassName('act10class');

random9.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random9[i]);
}

function pregunta10() {
    var respact2 = ['1,45', '9,475', '-0,', '94', '0,0', '29', '0,', '95', '-16,1', '-0,', '607', '0,', '18', ];
    var cont = 0;
    for (var i = 0; i < 13; i++) {
        var res = $('#act10num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 13;
    $('#nota10').val(parseFloat(total).toFixed(2));

}


function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    contarRespCorrectaDnD();
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

    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
