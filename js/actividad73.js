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

////////////////////////////pregunta1////////////////////////////////////////////////////////////////////////////////
var random1 = [
    ['<td>Pop</td>' +
        '<td><img src="img/i3_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr> <td><input type="text" id="act1num0" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr> <tr><td>' +
        '<input type="text" id="act1num1" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td> </tr> </table></td>' +
        '<td><input type="text" id="act1num2" class=" sinEspacios form-control text-lowercase"></input></td><td>' +
        '<input type="text" id="act1num3" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Electrónica</td>' +
        '<td><img src="img/i4_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num4" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr><tr><td>' +
        '<input type="text" id="act1num5" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td></tr></table></td><td>' +
        '<input type="text" id="act1num6" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td> <td>' +
        '<input type="text" id="act1num7" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Indie</td>' +
        '<td><img src="img/i5_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num8" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td> </tr> <tr> <td>' +
        '<input type="text" id="act1num9" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td></tr></table></td><td>' +
        '<input type="text" id="act1num10" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td> <td> <input type="text" id="act1num11" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],
    ['<td>Reggaetón</td>' +
        '<td><img src="img/i6_p66_act71.jpg" class="img-responsive"></td>' +
        '<td align="center">' +
        '<table style="text-align: center;">' +
        '<tr><td><input type="text" id="act1num12" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-bottom: 1px solid #000000;text-align: center;">' +
        '</td></tr><tr>' +
        '<td><input type="text" id="act1num13" class="soloNumeros" placeholder="0" name="" style="border: 1px solid #CBC6C6;border-top: 1px solid #000000;text-align: center;">' +
        '</td> </tr></table></td><td>' +
        '<input type="text" id="act1num14" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td><td> <input type="text" id="act1num15" class=" sinEspacios form-control text-lowercase"></input>' +
        '</td>'
    ],

];

var act1Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act1Txt.length; i++) {
    $('#' + act1Txt[i].id).html(random1[i]);
}


function pregunta1() {
    var respact2 = ['8,3535...', 'periódico puro', '3,2444...', 'periódico mixto', '827', '99', '292', '90', '146', '45', '827', '99', '146', '45',];
    var cont = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 14;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////

function NotaFinal() {
    pregunta1();
    pregunta2();
    var nota1= document.getElementById('nota1').value;
    var nota2= document.getElementById('nota2').value;

    var total = parseFloat(nota1)+parseFloat(nota2);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
