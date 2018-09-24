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

function pregunta2() {
    var respact2 = ['5', '12', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

function pregunta3() {
    var respact2 = ['1', '20', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function pregunta4() {
    var respact2 = ['2', '15', ];
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
    var total = (cont * 2.5) / 2;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function Nota_Total() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();

    // body... var nota1 = document.getElementById('nota1').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;


    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    //var total = (subtotal * 10) / 11;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
