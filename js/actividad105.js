function pregunta1() {
    var respact2 = ['360', '240', ];
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
    var total = (cont * 2.5) / 2;
    $('#nota1').val(parseFloat(total).toFixed(2));


}

function pregunta2() {
    var respact2 = ['320', '240', '400', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 3;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

function pregunta3() {
    var nt1 = 0;
    var act3num0 = document.getElementById('act3num0').value;
    if (act3num0 == 36) {
        nt1 = 2.5;
        $('#act3num0').css("background", "#00e600");
    } else {
        $('#act3num0').css("background", "#ff6666");
    }
    $('#nota3').val(parseFloat(nt1).toFixed(2));
}

function pregunta4() {
    var respact2 = ['3', '2', '3', '9', '4', '3', '4', '9', '2', '7', '2', '7', '5', '49', '22', '7', '5', '49', '10', '4', '3', '3', '4', '4', '9', '3', '2', '1', '0', '2', '3', '0', '2', '9', '0', '-1', '5', '2', '-1', '5', '9', '5', '2', ];
    var cont = 0;
    for (var i = 0; i < 43; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 43;
    $('#nota4').val(parseFloat(total).toFixed(2));


}

function NotaFinal() {




    /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    //pregunta5();
    //pregunta6();


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
