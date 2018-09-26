
/*
document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
document.getElementById('nota12').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota12').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota12'), 1)
});
document.getElementById('nota13').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota13').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota13'), 1)
});*/

////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////


function pregunta1() {
    var respact2 = ['2', '3', '4', '5', '2345', '8', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 6;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
