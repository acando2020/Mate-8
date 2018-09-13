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

    var act5resp1 = document.getElementById('act5resp1').value;
    var act5resp2 = document.getElementById('act5resp2').value;
    var nt1 = 0,
        nt2 = 0;
    if (act5resp1 == resp) {
        nt1 = 0.5;
        $('#act5resp1').addClass('correcto');
    } else {
        $('#act5resp1').addClass('incorrecto');

    }

    /*if (act4resp2 == resp1) {
        nt2 = 0.5;
        $('#act4resp2').addClass('correcto');
    } else {
        $('#act4resp2').addClass('incorrecto');

    }*/
    var total = parseFloat(nt1) /* + parseFloat(nt2)*/ ;
    $('#nota1_4').val(total.toFixed(2));
}

function totalnota() {
    var nota1_1 = document.getElementById('nota1_1').value;
    var nota1_2 = document.getElementById('nota1_2').value;
    var nota1_3 = document.getElementById('nota1_3').value;
    var nota1_4 = document.getElementById('nota1_4').value;
    if ((nota1_1 == "") || (nota1_2 == "")) {
        alert("Ingrese la nota de la pregunta 1 ó 2");

    } else {
        pregunta3();
        pregunta4();
        var nota1_1 = document.getElementById('nota1_1').value;
        var nota1_2 = document.getElementById('nota1_2').value;
        var nota1_3 = document.getElementById('nota1_3').value;
        var nota1_4 = document.getElementById('nota1_4').value;
        var SuperTotal = parseFloat(nota1_1) + parseFloat(nota1_2) + parseFloat(nota1_3) + parseFloat(nota1_4);

        $('#txtNota').html(SuperTotal.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }
}
