function pregunta1() {
    var respact2 = ['2', '30', '1800', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));


}

function pregunta2() {
    var nt1 = 0;
    var act2num0 = document.getElementById('act2num0').value;
    if (act2num0 == 2800) {
        nt1 = 5;
        $('#act2num0').css("background", "#00e600");
    } else {
        $('#act2num0').css("background", "#ff6666");
    }
    $('#nota2').val(parseFloat(nt1).toFixed(2));
}

function NotaFinal() {




    /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
    pregunta2();

    //pregunta6();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;


    var total = parseFloat(nota1) + parseFloat(nota2);


    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
