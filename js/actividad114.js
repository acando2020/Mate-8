var random1 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i1_p119_act114.jpg" alt=""></td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i2_p119_act114.jpg" alt=""></td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i3_p119_act114.jpg" alt=""></td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><img src="img/i4_p119_act114.jpg" alt=""></td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num7"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['17', '4', '-73', '12', '2', '99', '-11', '3', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 8;

    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
