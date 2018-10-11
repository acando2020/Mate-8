function pregunta1() {
    var respact2 = ['1', '3', '3', '5', '3', '20', ];
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
    var total = (cont * 2) / 6;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
var random2 = [
    ['<td>' +
        '<b style="color: #005ca4"><li></li></b>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">12</span>&radic;</span><span class="radicand">m<sup>9</sup></span>' +
        '</div>' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<sup><input class="inputfraccciones sinEspacios" id="act2num0" style="width: 20px;"></input></sup><span class="radical">&radic;</span><span class="radicand"><input class="inputfraccciones sinEspacios" id="act2num1"></input><sup><input class="inputfraccciones sinEspacios" id="act2num2" style="width: 20px;"></input></sup></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span style="font-size: 40px;">(</span><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand">4m<sup>2</sup></span></span></span></span><span style="font-size: 40px;">)</span><sup>2</sup>' +
        '</div>' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act2num3"></input><span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><input class="inputfraccciones sinEspacios" id="act2num4"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['4', 'm', '3', '2m', '2m', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

/////////////////////////pregunta3///////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root">4</span>&radic;</span><span class="radicand"><sup>6561</sup>/<sub>1296</sub></span>' +
        '</div>' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<span class="radical"><span class="n-root"></span>&radic;</span><span class="radicand"><sup>169</sup>/<sub>225</sub></span>' +
        '</div>' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['9', '6', '13', '15', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 4;
    $('#nota3').val(parseFloat(total).toFixed(2));


}

//////////////////////pregunta4////////////////////////////
function pregunta4() {
    var nt1 = 0;
    var act4num0 = document.getElementById('act4num0').value;
    if (act4num0 == 17) {
        nt1 = 2;
        $('#act4num0').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
    }
    $('#nota4').val(parseFloat(nt1).toFixed(2));
}
function pregunta5() {
    var nt1 = 0;
    var act5num0 = document.getElementById('act5num0').value;
    if (act5num0 == 680) {
        nt1 = 2;
        $('#act5num0').css("background", "#00e600");
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}


function NotaFinal() {




    /*if (nota4 == "") {
        alert("Calificar la pregunta 4")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();




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
    //}


}
