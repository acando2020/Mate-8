document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 2)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 2)
});
document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 2)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 2)
});

////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////


function pregunta4() {
    var respact2 = ['Conjunto vacío', 'Conjunto vacío', 'Conjunto no vacío', 'Conjunto no vacío', 'Conjunto no vacío', 'Conjunto no vacío', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota5 == "")) {
        alert("Ingresar nota de la pregunta 1, 2, 3 ó 5");
    } else {
        pregunta4();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
