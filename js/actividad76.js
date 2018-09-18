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
    ['<td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>La parte del día que ha transcurrido cuando son las 14:00 horas.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num0" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num1" class="inputfraccciones soloNumeros"></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input id="act1num2" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num3" class="inputfraccciones soloNumeros"></span>' +
        '</div></div>' +
        '</td>'
    ],
    ['<td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>Los dedos de una mano con relación a la cantidad total de dedos de un ser humano.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num4" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>'+
        '<span class="fdn"><input id="act1num5" class="inputfraccciones soloNumeros"></span>' +
        '</div> =<div class="fraction">' +
        '<span class="fup"><input id="act1num6" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num7" class="inputfraccciones soloNumeros"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>La parte del año que ha transcurrido cuando culmina el mes de abril.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num8" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num9" class="inputfraccciones soloNumeros"></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input id="act1num10" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num11" class="inputfraccciones soloNumeros"></span>' +
        '</div></div></td>'
    ],
    [' <td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>La cantidad de provincias del Oriente ecuatoriano con relación al total de provincias del Ecuador.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num12" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num13" class="inputfraccciones soloNumeros"></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input id="act1num14" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num15" class="inputfraccciones soloNumeros"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>La cantidad de números primos menores que 10 con relación a la cantidad total de números del 1 al 10.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num16" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num17" class="inputfraccciones soloNumeros"></span>'+
        '</div>=<div class="fraction">' +
        '<span class="fup"><input id="act1num18" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num19" class="inputfraccciones soloNumeros"></span>' +
        '</div></div></td>'
    ],
    ['<td><b style="color:#005ca4"><li></li></b></td>' +
        '<td>La parte amarilla de la bandera del Ecuador con relación al total.</td><td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num20" class="inputfraccciones soloNumeros"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num21" class="inputfraccciones soloNumeros"></span>' +
        '</div>=<div class="fraction">' +
        '<span class="fup"><input id="act1num22" class="inputfraccciones soloNumeros"></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num23" class="inputfraccciones soloNumeros"></span>' +
        '</div></div></td>'
    ],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['14', '24', '7', '12', '5', '20', '1', '4', '4', '12', '1', '3', '6', '24', '1', '4', '4', '10', '2', '5', '2', '4', '1', '2', ];
    var cont = 0;
    for (var i = 0; i < 24; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 24;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
