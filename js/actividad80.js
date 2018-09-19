/*document.getElementById('nota1_1').addEventListener('keypress', () => {
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
});*/


function parte1() {
    var respact1 = ['2', '3', '3', '4', '12', 'x4', '2', '3', '8', '12', 'x4', 'x3', '3', '4', '9', '12', 'x3', '8', '12', '9', '12', '6', '12', '<', '8', '12', '<', '9', '12', '1', '2', '<', '2', '3', '<', '3', '4', '3', '4'];
    var cont1 = 0;
    for (var i = 0; i < 39; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact1[i] == res) {
            cont1 = cont1 + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont1 * 5) / 39;

    $('#nota1').val(parseFloat(total).toFixed(2));


}

function parte2() {
    var respact2 = ['2', '3', '0', '6', '3', '4', '0,75', '0,5<0,6<0,75', '0,75', '75', '100', '3', '4'];
    var cont = 0;
    for (var i = 0; i < 13; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 13;

    $('#nota2').val(parseFloat(total).toFixed(2));


}

function total() {
    parte1();
    parte2();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
