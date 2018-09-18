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



var random1 = [
    ['<td>Del grupo son mujeres</td><td><input class="inputPequeño sinEspacios soloNumeros" style="border: 1px solid #33b8e8;" id="act1num0"></input></td>'],
    ['<td>Del grupo son hombres</td><td><input class="inputPequeño sinEspacios soloNumeros" style="border: 1px solid #33b8e8;" id="act1num1"></input></td>'],
    ['<td>Mujeres que les gusta el básquet</td><td><input class="inputPequeño sinEspacios soloNumeros" style="border: 1px solid #33b8e8;" id="act1num2"></input></td>'],
    ['<td>Mujeres que les gusta el vóley</td><td><input class="inputPequeño sinEspacios soloNumeros" style="border: 1px solid #33b8e8;" id="act1num3"></input></td>'],
    ['<td>Mujeres que les gusta el fútbol</td><td><input class="inputPequeño sinEspacios soloNumeros" style="border: 1px solid #33b8e8;" id="act1num4"></input></td>'],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['24', '12', '6', '8', '10', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 5;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
