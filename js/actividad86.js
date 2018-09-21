/*document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1)
});

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
var random2 = [
    ['<td style="background:#eef8fc;"><b>Clausurativa</b>. La adición de dos números racionales es otro número racional.</td>' +
        '<td>x + y ∈ ℚ</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>+' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num0" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num1" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background:#eef8fc;"><b>Conmutativa</b>. El orden de los sumandos no altera la suma total.</td>' +
        '<td>x + y = y + x</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>+' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>+' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num2" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num3" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background:#eef8fc;"><b>Asociativa</b>. Se puede agrupar los sumandos de diferente manera sin que altere la suma.</td>' +
        '<td>x + y + z = (x + y )  + z = x + (y + z )</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>+' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>= <span style="font-size: 50px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num4" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num5" class="inputfraccciones"></input></span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span> +' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num6" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num7" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '<div class="eq-c">= -' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '+' +
        '<span style="font-size: 50px;">(</span>' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '+' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num8" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num9" class="inputfraccciones"></input></span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background:#eef8fc;"><b>Existencia del elemento neutro</b>. La adición de todo número racional con el cero da como resultado el mismo número racional. El cero es elemento neutro de la adición y es único.</td>' +
        '<td> Existe 0 ∈ ℚ tal que para todo, x ∈ ℚ' +
        '<br>x + 0 = 0 + x = x</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div> + 0 = 0 + <span style="font-size: 50px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span> = -' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num10" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num11" class="inputfraccciones"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td style="background:#eef8fc;"><b>Existencia de opuestos aditivos</b>. La adición de todo número entero con su opuesto da como resultado el neutro aditivo (cero). Todo número entero tiene su opuesto aditivo y es único.</td>' +
        '<td>Para cada x ∈ ℚ, existe –x tal que' +
        '<br>x + (–x) = (–x) + x =0</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> +' +
        '<span style="font-size: 50px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span> =' +
        '<span style="font-size: 50px;">(</span>-' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<span style="font-size: 50px;">)</span>+' +
        '<div class="fraction">' +
        '<span class="fup"><input id="act1num12" class="inputfraccciones"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input id="act1num13" class="inputfraccciones"></input></span>' +
        '</div>' +
        '=' +
        '<input id="act1num14" class="inputfraccciones"></input>' +
        '</div>' +
        '</td>'
    ],

];

var act01Txt = document.getElementsByClassName('act1class');

random2.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random2[i]);
}

function pregunta1() {
    var respact2 = ['-7', '20', '7', '3', '6', '5', '4', '5', '4', '5', '5', '8', '3', '2', '0', ];
    var cont = 0;
    for (var i = 0; i < 15; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 15;
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
