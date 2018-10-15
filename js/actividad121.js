function pregunta1() {
    var respact2 = ['2', '2', '2', '25', '0,08', '0,08', '4', '6', '4', '25', '0,16', '0,24', '5', '11', '5', '25', '0,2', '0,44', '8', '19', '8', '25', '0,32', '0,76', '6', '25', '6', '25', '0,24', '1', '25', '1', '5', '44', ];
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
    var total = (cont * 5) / 34;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////pregunta2/////////////////////////////
function pregunta2() {
    var respact2 = ['2', '2', '0,1', '10', '2', '4', '0,1', '20', '5', '9', '0,25', '45', '4', '13', '0,20', '60', '5', '18', '0,25', '90', '2', '20', '0,10', '100',];
    var cont = 0;
    for (var i = 0; i < 24; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 24;
    $('#nota2').val(parseFloat(total).toFixed(2));
}


function NotaFinal() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;



    /* if (nota1 == "") {
         alert("Calificar la pregunta 1")
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
