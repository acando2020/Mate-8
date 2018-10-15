function pregunta1() {
    var respact2 = ['105', '50', '55', 'rg', '6', '55', '6', '9,2', '10', '15', '15', '15', '15', '65', '10', '25', '10', '25', '75', '30', '55', '30', '55', '85', '18', '73', '18', '73', '95', '22', '95', '22', '95', '105', '5', '100', '5', '100', '100', '100', '100', '18', '5', '100', '5', '73', ];
    var cont = 0;
    for (var i = 0; i < 46; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 46;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////pregunta2/////////////////////////////
function pregunta2() {
    var respact2 = ['4', '4', '4', '6', '20', '24', '20', '10', '36', '36', '60', '14', '35', '95', '35', '95', '18', '5', '100', '100', '100', '100', ];
    var cont = 0;
    for (var i = 0; i < 22; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 22;
    $('#nota2').val(parseFloat(total).toFixed(2));
}

/////////////////pregunta3/////////////////////////////
function pregunta3() {
    var respact2 = ['9', '5', '20', '20', '7', '28', '48', '25', '20', '32', '80', '33', '3', '23', '12', '92', '41', '2', '25', '8', '100', '25', '100', '25', '3', '32', ];
    var cont = 0;
    for (var i = 0; i < 26; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 26;
    $('#nota3').val(parseFloat(total).toFixed(2));
}

/////////////////pregunta4/////////////////////////////
function pregunta4() {
    var respact2 = ['2', '23', '11,5', '11,5', '94', '58,5', '8', '161', '22', '80,5', '11', '21', '182', '91', '14', '18', '200', '9', '100', '200', '100', ];
    var cont = 0;
    for (var i = 0; i < 21; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 21;
    $('#nota4').val(parseFloat(total).toFixed(2));
}

function NotaFinal() {





    /* if (nota1 == "") {
         alert("Calificar la pregunta 1")
     } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
