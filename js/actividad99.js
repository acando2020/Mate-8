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
/*document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});*/
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 2)
});
/*document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 2)
});*/

var random4 = [
    ['<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>B = {3, 4, 6, 7 , 8}</td>' +
        '<td>' +
        '<select class="form-control" id="sel0">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>A = {1, 2}</td>' +
        '<td>' +
        '<select class="form-control" id="sel1">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>C = { 4, 6, 8, 7}</td>' +
        '<td>' +
        '<select class="form-control" id="sel2">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>A ⊂ U</td>' +
        '<td>' +
        '<select class="form-control" id="sel3">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>∅ ⊂ A</td>' +
        '<td>' +
        '<select class="form-control" id="sel4">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>4 ∈ A</td>' +
        '<td>' +
        '<select class="form-control" id="sel5">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>6 ∈ A</td>' +
        '<td>' +
        '<select class="form-control" id="sel6">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>9 ∉ U</td>' +
        '<td>' +
        '<select class="form-control" id="sel7">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>D ⊂ A</td>' +
        '<td>' +
        '<select class="form-control" id="sel8">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{1,2} ⊂ C</td>' +
        '<td>' +
        '<select class="form-control" id="sel9">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['falso', 'falso', 'verdadero', 'verdadero', 'verdadero', 'verdadero', 'falso', 'falso', 'verdadero', 'falso', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 10;
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
        alert("Debe ingresar la calificación de la pregunta 1, 2, 3 y 5 ");
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
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
