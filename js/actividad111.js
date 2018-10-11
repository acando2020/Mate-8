function pregunta1() {
    var respact2 = ['16', '25', '2', ];
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
    var respact2 = ['42,875', '3',];
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
    var total = (cont * 5) / 2;
    $('#nota2').val(parseFloat(total).toFixed(2));


}
function NotaFinal() {
    /*if (nota4 == "") {
           alert("Calificar la pregunta 4")
       } else {*/
    pregunta1();
    pregunta2();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
