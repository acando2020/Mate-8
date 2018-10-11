function pregunta1() {
    var respact2 = ['22', '1', '2', '1', '1', '4', '45', '2', '5', '4', '45', '2', '4', '5', '18', ];
    var cont = 0;
    for (var i = 0; i < 15; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 15;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
var random2 = [
    [' <tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        'M =' +
        '<div class="fraction">' +
        '<span class="fup">A</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">B</span>' +
        '</div> . C' +
        '</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>Respuesta</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num0"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num1"></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        'N = (A . B) ÷ C' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>Respuesta</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num2"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num3"></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        'P =' +
        '<div class="fraction">' +
        '<span class="fup">C . A</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">(A + B)</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>Respuesta</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num4"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input type="text" class="inputfraccciones soloNumeros sinEspacios" id="act2num5"></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '</tr>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['16', '45', '5', '4', '16', '57', ];
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
    var total = (cont * 2) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

/*function pregunta3() {
    var nt1 = 0;
    var act3num0 = document.getElementById('act3num0').value;
    if (act3num0 == 36) {
        nt1 = 2.5;
        $('#act3num0').css("background", "#00e600");
    } else {
        $('#act3num0').css("background", "#ff6666");
    }
    $('#nota3').val(parseFloat(nt1).toFixed(2));
}*/
//////////////////////////////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td> <div class="eq-c"> 2 ÷ <div class="fraction"> <span class="fup">1</span> <span class="bar">/</span> <span class="fdn">3</span> </div> = </div> </td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act3num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> ÷ (- 9) =' +
        '</div>' +
        '</td>' +
        '<td>-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num1"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num2"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span>' +
        '÷' +
        '<span style="font-size: 40px;">(</span> -' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '<span style="font-size: 40px;">)</span> =' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num3"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act3num4"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['6', '1', '12', '9', '40', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 5;
    $('#nota3').val(parseFloat(total).toFixed(2));


}
/////////////////////////////////////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '4' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '÷ <input class="inputfraccciones soloNumeros sinEspacios" id="act4num0"></input> = 2,25' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num1"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num2"></input></span>' +
        '</div> ÷ 0,3 =' +
        '-<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span>' +
        '-<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div><span style="font-size: 40px;">)</span> ÷ (-2,75) =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num3"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num4"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span>' +
        '-<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div><span style="font-size: 40px;">)</span> ÷ <input class="inputfraccciones soloNumeros sinEspacios" id="act4num5"></input> =' +
        '-<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act4num6"></input> ÷ 2,<span class="periodicos">3</span> = − 1</td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span>' +
        '-<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div><span style="font-size: 40px;">)</span> ÷' +
        '-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num7"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num8"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">36</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">49</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span>' +
        '-<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div><span style="font-size: 40px;">)</span> ÷' +
        '-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num9"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num10"></input></span>' +
        '</div> = 1' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '-<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num11"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act4num12"></input></span>' +
        '</div> ÷ 0,2 =' +
        '-<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
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
    var respact2 = ['-2', '9', '40', '5', '11', '1', '-2,3', '7', '6', '1', '2', '3', '20', ];
    var cont = 0;
    for (var i = 0; i < 13; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 13;
    $('#nota4').val(parseFloat(total).toFixed(2));


}
//////////////////////////////pregunta5/////////////////////////////////////
var random5 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size:  40px;">(</span>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num1"></input></span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '<span style="font-size:  40px;">)</span>' +
        '+ <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> = <div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size:  40px;">(</span>' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num2"></input></span>' +
        '</div> . <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num3"></input></span>' +
        '</div>' +
        '<span style="font-size:  40px;">)</span>' +
        '+ <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act5num4"></input></span>' +
        '</div> = <div class="fraction">' +
        '<span class="fup">10</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">15</span>' +
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
    var respact2 = ['3', '5', '3', '5', '5', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 5;
    $('#nota5').val(parseFloat(total).toFixed(2));


}

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
