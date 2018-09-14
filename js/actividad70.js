document.getElementById('nota1_1').addEventListener('keypress', () => {
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
});

function pregunta1() {
    var act1num1 = document.getElementById('act1num1').value.toLowerCase();
    var nt1 = 0;
    if (act1num1 == "5xy+2xz+13") {
        nt1 = 1;
        $("#act1num1").css({ "background-color": "#00e600" });
    } else {
        $("#act1num1").css({ "background-color": "#ff6666" });
    }
    $('#nota1_1').val(parseFloat(nt1).toFixed(2));


}
////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////
var random2 = [
    ['&nbsp;&nbsp;<span>5ab − 8ab + ab − 6ab + 21ab =</span><input type="text" id="act2num0" name="" class="text-lowercase sinEspacios" style="width: 200px;">'],
    ['&nbsp;&nbsp;<span>10x − 15x + 2x − 17x + 6x =</span><input type="text" id="act2num1" name="" class="text-lowercase sinEspacios" style="width: 200px;">'],
    ['&nbsp;&nbsp;<span>19xy − 13xy + 5xy =</span><input type="text" id="act2num2" name="" class="text-lowercase sinEspacios" style="width: 200px;">'],
    ['&nbsp;&nbsp;<span>− 18y + 19y − y =</span><input type="text" id="act2num3" name="" class="text-lowercase sinEspacios" style="width: 200px;">'],
    ['&nbsp;&nbsp;<span>12ab<sup>2</sup>  − 23ab<sup>2</sup> − 5ab<sup>2</sup>  =</span><input type="text" id="act2num4" name="" class="text-lowercase sinEspacios" style="width: 40px;"><sup><input type="text" id="act2num5" name="" class="text-lowercase sinEspacios" style="width: 20px;"></sup>'],
];

var act2Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act2Txt.length; i++) {

    $('#' + act2Txt[i].id).html(random2[i]);


}


function pregunta2() {
    var respact2 = ['27ab-14ab=13ab', '-14x', '11xy', 0, '-16ab', '2'];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').addClass('correcto');
        } else {
            $('#act2num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 6;
    $('#nota1_2').val(total.toFixed(2));
}
////////////////////////////pregunta3////////////////////////////////////////////////////////////////////////////////
var random3 = [
    ['&nbsp;&nbsp;<span>4xy<sup>2</sup> , 5xy</span>' +
        '<select id="sel0" class="form-control hola">' +
        '<option>-----Seleccione-----</option>' +
        '<option value="No son semejantes.">No son semejantes.</option>' +
        '<option value="Sí son semejantes.">Sí son semejantes.</option>' +
        '</select>'
    ],
    ['&nbsp;&nbsp;<span>8x<sup>2</sup>y,  -7x<sup>2</sup>y</span>' +
        '<select id="sel1" class="form-control hola">' +
        '<option>-----Seleccione-----</option>' +
        '<option value="No son semejantes.">No son semejantes.</option>' +
        '<option value="Sí son semejantes.">Sí son semejantes.</option>' +
        '</select>'
    ],
    ['&nbsp;&nbsp;<span>9abc, 9bc</span>' +
        '<select id="sel2" class="form-control hola">' +
        '<option>-----Seleccione-----</option>' +
        '<option value="No son semejantes.">No son semejantes.</option>' +
        '<option value="Sí son semejantes.">Sí son semejantes.</option>' +
        '</select>'
    ],
    ['&nbsp;&nbsp;<span>4xz, 4xy</span>' +
        '<select id="sel3" class="form-control hola">' +
        '<option>-----Seleccione-----</option>' +
        '<option value="No son semejantes.">No son semejantes.</option>' +
        '<option value="Sí son semejantes.">Sí son semejantes.</option>' +
        '</select>'
    ],
];

var act3Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act3Txt.length; i++) {

    $('#' + act3Txt[i].id).html(random3[i]);


}

function pregunta3() {
    var respact3 = ['No son semejantes.', 'Sí son semejantes.', 'No son semejantes.', 'No son semejantes.', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact3[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').addClass('correcto');
        } else {
            $('#sel' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 4;
    $('#nota1_3').val(total.toFixed(2));
}
///////////////////////////////pregunta4/////////////////////////////////////
act4 = [];
for (var i = 0; i < 7; i++) {
    act4[i] = Math.floor((Math.random() * 19) + 2);
}
$('#act4num0').html('' + act4[0] + 'y');
$('#act4num1').html('' + act4[1] + 'y');
$('#act4num2').html('' + act4[2] + 'y');
$('#act4num3').html('' + act4[3] + 'y');


$('#act4num4').html('' + act4[4] + 'x');
$('#act4num5').html('' + act4[5] + 'x');

function pregunta4() {
    var sumay = parseInt(act4[0]) + parseInt(act4[1]) + parseInt(act4[2]) + parseInt(act4[3]);
    var sumax = parseInt(act4[4]) + parseInt(act4[5]) + 4;
    var respuesta = [parseInt(sumax), 'x', '+', parseInt(sumay), 'y', ];
    var resp1 = String(respuesta.join(''));
    var act4resp1 = document.getElementById('act4resp1').value;
    var act4resp2 = document.getElementById('act4resp2').value;
    var nt1 = 0,
        nt2 = 0;
    if (act4resp1 == "10x+4y") {
        nt1 = 0.5;
        $('#act4resp1').addClass('correcto');
    } else {
        $('#act4resp1').addClass('incorrecto');

    }

    if (act4resp2 == resp1) {
        nt2 = 0.5;
        $('#act4resp2').addClass('correcto');
    } else {
        $('#act4resp2').addClass('incorrecto');

    }
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota1_4').val(total.toFixed(2));
}
///////////////////////////////pregunta5/////////////////////////////////////
act5 = [];
for (var i = 0; i < 12; i++) {
    act5[i] = Math.floor((Math.random() * 19) + 2);
}
$('#act5num0').html('' + act5[0] + 'm<sup>2</sup>  − ' + act5[1] + 'mn + ' + act5[2] + 'm<sup>2</sup>  − ' + act5[3] + 'mn + ' + act5[4] + 'mn − ' + act5[5] + 'm<sup>2</sup>')
$('#act5num1').html('' + act5[6] + 'a<sup>m-1</sup> − ' + act5[7] + 'b<sup>m-2</sup>  + ' + act5[8] + 'a<sup>m-1</sup>  + ' + act5[9] + ' − ' + act5[10] + 'b<sup>m-2</sup>')

function pregunta5() {
    var respuestA1 = parseInt(act5[0]) + parseInt(act5[2]) - parseInt(act5[5]);
    var respuestA2 = parseInt(-act5[1]) - parseInt(act5[3]) + parseInt(act5[4]);
    var resp1 = [respuestA1, 'm2', respuestA2, 'mn'];
    var resp = String(resp1.join(''));
    ///////////////////////////////////////////////////////////
    var respuestaB1 = parseInt(act5[6]) + parseInt(act5[8]);
    var respuestaB2 = -parseInt(act5[7]) - parseInt(act5[10]);
    var respB1 = [respuestaB1, 'am-1', respuestaB2, 'bm-2', '+', parseInt(act5[9]), ];
    var respB = String(respB1.join(''));

    var act5resp1 = document.getElementById('act5resp1').value.toLowerCase();
    var act5resp2 = document.getElementById('act5resp2').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0;
    if (act5resp1 == resp) {
        nt1 = 0.5;
        $('#act5resp1').addClass('correcto');
    } else {
        $('#act5resp1').addClass('incorrecto');

    }
    if (act5resp2 == respB) {
        nt2 = 0.5;
        $('#act5resp2').addClass('correcto');
    } else {
        $('#act5resp2').addClass('incorrecto');

    }

    /*if (act4resp2 == resp1) {
        nt2 = 0.5;
        $('#act4resp2').addClass('correcto');
    } else {
        $('#act4resp2').addClass('incorrecto');

    }*/
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota1_5').val(total.toFixed(2));
}
///////////////////////pregunta6//////////////////////////////////////////////
var random6 = [
    ['<td>–3x<sup>2</sup></td>' +
        '<td><input id="act6num0" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num1" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num2" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"><sup><input id="act6num3" type="text" maxlength="1" name=""  class="sinEspacios text-lowercase inputsmall"></sup></td>' +
        '<td><input id="act6num4" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>'
    ],
    [' <td>–6y<sup>3</sup></td>' +
        '<td><input id="act6num5" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num6" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num7" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"><sup><input id="act6num8" type="text" maxlength="1" name=""  class="sinEspacios text-lowercase inputsmall"></sup></td>' +
        '<td><input id="act6num9" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>'
    ],
    ['<td>–z</td>' +
        '<td><input id="act6num10" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num11" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num12" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num13" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>'
    ],
    [' <td>4a</td>' +
        '<td><input id="act6num14" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num15" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num16" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>' +
        '<td><input id="act6num17" type="text" maxlength="1" name="" class="sinEspacios text-lowercase inputsmall"></td>'
    ],

];

var act6Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act6Txt.length; i++) {

    $('#' + act6Txt[i].id).html(random6[i]);


}


function pregunta6() {
    var act6 = ['-', '3', 'x', '2', '2', '-', '6', 'y', '3', '3', '-', '1', 'z', '1', '+', '4', 'a', '1', ]
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (act6[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').addClass('correcto');
        } else {
            $('#act6num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 18;
    $('#nota1_6').val(total.toFixed(2));
}

function totalnota() {


    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    var nota1_1 = document.getElementById('nota1_1').value;
    var nota1_2 = document.getElementById('nota1_2').value;
    var nota1_3 = document.getElementById('nota1_3').value;
    var nota1_4 = document.getElementById('nota1_4').value;
    var nota1_5 = document.getElementById('nota1_5').value;
    var nota1_6 = document.getElementById('nota1_6').value;
    var subTotal = parseFloat(nota1_1) + parseFloat(nota1_2) + parseFloat(nota1_3) + parseFloat(nota1_4) + parseFloat(nota1_5) + parseFloat(nota1_6);
    var SuperTotal = (subTotal*10)/6;

    $('#txtNota').html(SuperTotal.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
