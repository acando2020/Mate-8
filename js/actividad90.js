function pregunta1() {
    var respact2 = ['x', '2x', '4x-6', '10+x', 'x', '1', '3', 'x', 'x', '2', 'y', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
//////////////////////////////pregunta2/////////////////////////////////////
var random2 = [
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>0,8x<sup>2</sup> + 9x – 1,3x<sup>2</sup> – 4x</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '-<input id="act2num0" type="" name="" class="inputfraccciones text-lowercase sinEspacios"><sup><input id="act2num1" type="" name="" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></sup> +' +
        '<input id="act2num2" type="" name="" class="inputfraccciones text-lowercase sinEspacios">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>5x<sup>2</sup> – 6xy - 3x<sup>2</sup> + 9xy + 4</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input id="act2num3" type="" name="" class="inputfraccciones text-lowercase sinEspacios"><sup><input id="act2num4" type="" name="" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></sup> +' +
        '<input id="act2num5" type="" name="" class="inputfraccciones text-lowercase sinEspacios"> +' +
        '<input id="act2num6" type="" name="" class="inputfraccciones text-lowercase sinEspacios">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>25x<sup>3</sup> – 2x<sup>2</sup> – 4x<sup>3</sup> + 8x<sup>2</sup> – 9x + 7x</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input id="act2num7" type="" name="" class="inputfraccciones text-lowercase sinEspacios"><sup><input id="act2num8" type="" name="" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></sup> +' +
        '<input id="act2num9" type="" name="" class="inputfraccciones text-lowercase sinEspacios"><sup><input id="act2num10" type="" name="" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></sup> -' +
        '<input id="act2num11" type="" name="" class="inputfraccciones text-lowercase sinEspacios">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>–x + 7,2x + 2x – 3,5x + 4</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input id="act2num12" class="inputfraccciones text-lowercase sinEspacios" style="width: 70px;"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>x' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>x - 2x + x</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num13" type="" name="" class="inputfraccciones text-lowercase sinEspacios"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num14" type="" name="" class="inputfraccciones text-lowercase sinEspacios"></span>' +
        '</div>' +
        '<input id="act2num15" type="" name="" class="inputfraccciones text-lowercase sinEspacios">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>9x<sup>2</sup> – 3x + 5x – 5x<sup>2</sup></td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input id="act2num16" type="" name="" class="inputfraccciones text-lowercase sinEspacios"><sup><input id="act2num17" type="" name="" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></sup> +' +
        '<input id="act2num18" type="" name="" class="inputfraccciones text-lowercase sinEspacios">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>x' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>y - x - y +' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>x -' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>y</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num19" class="inputfraccciones text-lowercase sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num20" class="inputfraccciones text-lowercase sinEspacios"></input></span>' +
        '</div>' +
        '<input id="act2num21" class="inputfraccciones text-lowercase sinEspacios"></input>' +
        '-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act2num22" class="inputfraccciones text-lowercase sinEspacios"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act2num23" class="inputfraccciones text-lowercase sinEspacios"></input></span>' +
        '</div>' +
        '<input id="act2num24" class="inputfraccciones text-lowercase sinEspacios"></input>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>x<sup>3</sup> – x<sup>2</sup> + 4x<sup>3</sup> – x<sup>2</sup> +x<sup>2</sup>y − xy<sup>2</sup> + 2 – 3x<sup>2</sup>y</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<span><input id="act2num25" class="inputfraccciones text-lowercase sinEspacios"></input><sup><input id="act2num26" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></input></sup> - <input id="act2num27" class="inputfraccciones text-lowercase sinEspacios"></input><sup><input id="act2num28" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></input></sup> - <input id="act2num29" class="inputfraccciones text-lowercase sinEspacios"></input><sup><input id="act2num30" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></input></sup><input id="act2num31" class="inputfraccciones text-lowercase sinEspacios"></input> - <input id="act2num32" class="inputfraccciones text-lowercase sinEspacios"></input><sup><input id="act2num33" class="inputfraccciones text-lowercase sinEspacios" style="width: 20px;"></input></sup> + <input id="act2num34" class="inputfraccciones text-lowercase sinEspacios"></input></span>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],

];

var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['0,5x', '2', '5x', '2x', '2', '3xy', '4', '21x', '3', '6x', '2', '2x', '4,7x+4', '5', '6', 'x', '4x', '2', '2x', '1', '6', 'x', '17', '36', 'y', '5x', '3', '2x', '2', '2x', '2', 'y', 'xy', '2', '2', ];
    var cont = 0;
    for (var i = 0; i < 35; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 35;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

//////////pregunta3///////

$('.enc').click(function() {

    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')

    } else {
        $(this).addClass('pintar')
    }
});

$('.enc1').click(function() {

    if ($(this).hasClass('colorear')) {
        $(this).removeClass('colorear')

    } else {
        $(this).addClass('colorear')
    }
});



function pregunta3() {
    var nt1 = 0,
        nt2 = 0;
    var respact2 = ['cinco sextos', '5', '6', '9', '4', 'dos cuartos', '2', '4', '1', '2', 'cinco octavos', '5', '8', ];
    var cont = 0;
    for (var i = 0; i < 13; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var pintar = $('.pintar').length;
    var colorear = $('.colorear').length;
    if (pintar == 5) {
        nt1 = 1;
        $('#pintar1').css("background", "#00e600");
    } else {
        $('#pintar1').css("background", "#ff6666");
    }
    if (colorear == 9) {
        nt2 = 1;
        $('#colorear1').css("background", "#00e600");
    } else {
        $('#colorear1').css("background", "#ff6666");
    }
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(cont);


    var total = (subtotal * 1) / 15;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
////////////////////////////////////////////////
function pregunta4() {
    var respact2 = ['4', '10', '2', '5', '1', '4', '30', '50', '3', '5', '2', '3', '70', '100', '7', '10', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 16;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function pregunta5() {
    var respact2 = ['7', '3', '1', '3', '1', '3', '5', '3', '3', '2', '1', '2', '5', '4', '7', '4', ];
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
    var respact2 = ['<', '>', '>', '=', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota6').val(parseFloat(total).toFixed(2));

}

function pregunta7() {
    var respact2 = ['-31', '30', '19', '15', '-47', '60', '19', '70', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota7').val(parseFloat(total).toFixed(2));

}

function pregunta8() {
    var respact2 = ['1', '20', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act8num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act8num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act8num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota8').val(parseFloat(total).toFixed(2));

}

function Nota_Total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();

    // body... var nota1 = document.getElementById('nota1').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;


    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8);
    var total = (subtotal * 10) / 8;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
