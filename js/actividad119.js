function pregunta1() {
    var respact2 = ['64', '32%=0,32', '80', '40%=0,4', '46', '23%=0,23', '10', '5%=0,05', '200', '200', '40', '80', 'excelente', 'muy bueno', 'bueno', 'malo', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 16;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////pregunta2/////////////////////////////
function pregunta2() {
    var respact2 = ['6', '0,15', '8', '0,2', '8', '0,2', '5', '0,125', '3', '0,075', '40', '40', '3', '45', '7,5', '10', '40', '25', '1', ];
    var cont = 0;
    for (var i = 0; i < 19; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 19;
    $('#nota2').val(parseFloat(total).toFixed(2));
}
/////////////////pregunta3/////////////////////////////
function pregunta3() {
    var respact2 = ['27', '4', '4', '31', '0,13', '28', '6', '6', '31', '0,19', '29', '8', '8', '31', '0,26', '30', '3', '3', '31', '0,10', '31', '5', '5', '31', '0,16', '32', '2', '2', '31', '0,06', '33', '3', '3', '31', '0,10', '31', '1', ];
    var cont = 0;
    for (var i = 0; i < 37; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 37;
    $('#nota3').val(parseFloat(total).toFixed(2));


}

/////////////////pregunta4/////////////////////////////
function pregunta4() {
    var respact2 = ['6', '6', '25', '0,24', '24', '12', '12', '25', '0,48', '48', '3', '3', '25', '0,12', '12', '2', '2', '25', '0,08', '8', '2', '2', '25', '0,08', '8', '25', '1', '100', ];
    var cont = 0;
    for (var i = 0; i < 28; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 28;
    $('#nota4').val(parseFloat(total).toFixed(2));


}

function NotaFinal() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;



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