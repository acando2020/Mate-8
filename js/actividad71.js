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
    var respact2 = ['3', '5', '3÷5=0,6', '0,6.100=60', '7', '10', '7÷10=0,7', '0,7.100=70', '13', '20', '13÷20=0,65', '0,65.100=65', '1', '2', '1÷2=0,5', '0,5.100=50', '60', '70', '65', '50'];
    var cont = 0;
    for (var i = 0; i < 20; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 20;
    $('#nota1').val(total.toFixed(2));
}
////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////

var act11 = [
    ['3/5 = 0,6'],
    ['3/4 = 0,75'],
    ['1/4 = 0,25'],
    ['1/2 = 0,5'],
    ['3/4 = 0,75'],
]


var act11Txt = document.getElementsByClassName('act11txt');

act11.sort(f_randomico);
for (i = 0; i < act11Txt.length; i++) {

    $('#' + act11Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11[i] + '</div></h4> ');


}


var act11_1 = [
    ['<img class="img-responsive" src="img/i7_p66_act71.png"></img><div id="act11_1" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i8_p66_act71.png"></img><div id="act11_2" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i9_p66_act71.png"></img><div id="act11_3" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i10_p66_act71.png"></img><div id="act11_4" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i11_p66_act71.png"></img><div id="act11_5" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
]


var act11_1Txt = document.getElementsByClassName('act11_1txt');

act11_1.sort(f_randomico);
for (i = 0; i < act11_1Txt.length; i++) {

    $('#' + act11_1Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11_1[i] + '</div></h4> ');


}

function pregunta2() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0;

    if ($('#act11_1').children("div").html() == "3/4 = 0,75") {
        nt1 = 1;
        $('#act11_1').css("background", "#00e600");

    } else {
        $('#act11_1').css("background", "#ff6666");

    }

    if ($('#act11_2').children("div").html() == "1/2 = 0,5") {
        nt2 = 1;
        $('#act11_2').css("background", "#00e600");

    } else {
        $('#act11_2').css("background", "#ff6666");

    }
    if ($('#act11_3').children("div").html() == "1/4 = 0,25") {
        nt3 = 1;
        $('#act11_3').css("background", "#00e600");

    } else {
        $('#act11_3').css("background", "#ff6666");

    }

    if ($('#act11_4').children("div").html() == "3/4 = 0,75") {
        nt4 = 1;
        $('#act11_4').css("background", "#00e600");

    } else {
        $('#act11_4').css("background", "#ff6666");

    }

    if ($('#act11_5').children("div").html() == "3/5 = 0,6") {
        nt4 = 1;
        $('#act11_5').css("background", "#00e600");

    } else {
        $('#act11_5').css("background", "#ff6666");

    }
    var total = parseInt(nt1) + parseInt(nt2) + parseInt(nt3)+ parseInt(nt4) + parseInt(nt5);

    $('#nota2').val(parseFloat(total).toFixed(2));
}

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
