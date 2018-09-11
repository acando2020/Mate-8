var act1 = [
    ['<br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">La temperatura del congelador es de 5 °C bajo cero.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num0" class="saltos">°C</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">La ciudad se encuentra a 1 200 m sobre el nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num1" class="saltos">m</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">El buzo se encuentra a 20 m de profundidad.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num2" class="saltos">m</div>'
    ],
    ['  <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Iván tiene una deuda de $ 5 000 en el banco.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num3" class="saltos">' +
        '</div>'
    ],
    ['  <br>' +
        '<div class="col-lg-1">' +
        '   <b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Los termómetros marcaron una temperatura de 3 °C bajo cero.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num4" class="saltos">°C</div>'
    ],
    [' <br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">El Chimborazo se encuentra a 6 263 m sobre el nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num5" class="saltos">m</div>'
    ],
    ['<br><div class="col-lg-1">' +
        '<b style="color: #428bca"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-6">Estamos justo a nivel del mar.</div>' +
        '<div class="col-lg-5">' +
        '<input type="number" name="" id="act1num6" class="saltos">m</div>'
    ],
];
var act1Txt = document.getElementsByClassName('act1class');

act1.sort(f_randomico);
for (i = 0; i < act1Txt.length; i++) {

    $('#' + act1Txt[i].id).html(act1[i]);


}

function pregunta1() {
    var cor = ['5', '1200', '-20', '-5000', '-3', '6263', '0', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').addClass('correcto');
        } else {
            $('#act1num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 7;
    $('#nota1_1').val(total.toFixed(2));

}
///////////////////////pregunta 2///////////
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
//////////////pregunta 3//////////////////////////////////////
var act3_1 = [];
for (var i = 0; i < 8; i++) {
    act3_1[i] = (Math.floor((Math.random() * 10) - 1)) - 10;

}

var act3_2 = [];
for (var i = 0; i < 8; i++) {
    act3_2[i] = Math.floor((Math.random() * 10) + 1);

}
document.getElementById('act3num6').value = parseInt(act3_1[0]);
document.getElementById('act3num7').value = parseInt(act3_2[0]);
document.getElementById('act3num8').value = parseInt(act3_1[1]);
document.getElementById('act3num9').value = parseInt(act3_2[1]);
////////////////////////////////////////////////////////////////////
document.getElementById('act3num3').value = parseInt(act3_1[0]) + parseInt(act3_2[0]);
document.getElementById('act3num4').value = parseInt(act3_2[0]) + parseInt(act3_1[1]);
document.getElementById('act3num5').value = parseInt(act3_1[1]) + parseInt(act3_2[1]);
/////////////////////////////////////////////////////////////////////////////////////
var act3num3 = document.getElementById('act3num3').value;
var act3num4 = document.getElementById('act3num4').value;
var act3num5 = document.getElementById('act3num5').value;
////////////////////////////////////////////////////////////////////////////////////
document.getElementById('act3num1').value = parseInt(act3num3) + parseInt(act3num4);
document.getElementById('act3num2').value = parseInt(act3num4) + parseInt(act3num5);
////////////////////////////////////////////////////////////////////////////////////
var act3num1 = document.getElementById('act3num1').value;
var act3num2 = document.getElementById('act3num2').value;
document.getElementById('act3num0').value = parseInt(act3num1) + parseInt(act3num2);



function pregunta3() {
    var cor = [act3num2, act3num3, act3num5, act3_1[0], act3_1[1], ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act3res' + [i] + '').val().toLowerCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act3res' + [i] + '').addClass('correcto');
        } else {
            $('#act3res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1_3').val(total.toFixed(2));

}
///////////////////////pregunta 4///////////
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
/////////////////////pregunta 5/////////////////////////////////
function pregunta5() {
    var cont1 = 0,
        cont2 = 0,
        cont3 = 0,
        cont4 = 0,
        cont5 = 0,
        cont6 = 0;
    var numLiteralA = [],
        numLiteralB = [],
        numLiteralC = [],
        numLiteralD = [],
        numLiteralE = [],
        numLiteralF = [];

    for (var i = 0; i < 4; i++) {
        var num1 = $('#act5num' + [i] + '').val();
        numLiteralA[i] = num1;
    }


    if (parseInt(numLiteralA[0]) < parseInt(numLiteralA[1])) {
        $('#act5num1').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num1').addClass('incorrecto');
    }

    if ((parseInt(numLiteralA[1]) < parseInt(numLiteralA[2])) && (parseInt(numLiteralA[2]) < parseInt(numLiteralA[3]))) {
        $('#act5num2').addClass('correcto');
        cont1 = cont1 + 1;

    } else {
        $('#act5num2').addClass('incorrecto');
    }

    //////////////////////////////////////
    for (var i = 4; i < 8; i++) {
        var num2 = $('#act5num' + [i] + '').val();
        numLiteralB[i] = num2;
    }


    if (parseInt(numLiteralB[4]) > parseInt(numLiteralB[5])) {
        $('#act5num5').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num5').addClass('incorrecto');
    }

    if ((parseInt(numLiteralB[5]) > parseInt(numLiteralB[6])) && (parseInt(numLiteralB[6]) > parseInt(numLiteralB[7]))) {
        $('#act5num6').addClass('correcto');
        cont1 = cont1 + 1;

    } else {
        $('#act5num6').addClass('incorrecto');
    }

    //////////////////////////////////////
    for (var i = 8; i < 15; i++) {
        var num2 = $('#act5num' + [i] + '').val();
        numLiteralC[i] = num2;
    }


    if (parseInt(numLiteralC[8]) < parseInt(numLiteralC[9])) {
        $('#act5num9').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num9').addClass('incorrecto');
    }

    if (parseInt(numLiteralC[9]) < parseInt(numLiteralC[10])) {
        $('#act5num10').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num10').addClass('incorrecto');
    }
    if ((parseInt(numLiteralC[10]) < parseInt(numLiteralC[11])) && (parseInt(numLiteralC[11]) < parseInt(numLiteralC[12]))) {
        $('#act5num11').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num11').addClass('incorrecto');
    }

    if ((parseInt(numLiteralC[12]) < parseInt(numLiteralC[13])) && (parseInt(numLiteralC[13]) < parseInt(numLiteralC[14]))) {
        $('#act5num13').addClass('correcto');
        cont1 = cont1 + 1;

    } else {
        $('#act5num13').addClass('incorrecto');
    }


    //////////////////////////////////////
    for (var i = 15; i < 21; i++) {
        var num2 = $('#act5num' + [i] + '').val();
        numLiteralD[i] = num2;
    }


    if (parseInt(numLiteralD[15]) > parseInt(numLiteralD[16])) {
        $('#act5num16').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num16').addClass('incorrecto');
    }

    if ((parseInt(numLiteralD[16]) > parseInt(numLiteralD[17])) && (parseInt(numLiteralD[17]) > parseInt(numLiteralD[18]))) {
        $('#act5num17').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num17').addClass('incorrecto');
    }
    if (parseInt(numLiteralD[18]) > parseInt(numLiteralD[19]) && (parseInt(numLiteralD[19]) > parseInt(numLiteralD[20]))) {
        $('#act5num19').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num19').addClass('incorrecto');
    }

    //////////////////////////////////////
    for (var i = 21; i < 27; i++) {
        var num2 = $('#act5num' + [i] + '').val();
        numLiteralE[i] = num2;
    }


    if ((parseInt(numLiteralE[22]) < parseInt(numLiteralE[23])) && (parseInt(numLiteralE[23]) < parseInt(numLiteralE[24]))) {
        $('#act5num23').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num23').addClass('incorrecto');
    }

    if ((parseInt(numLiteralE[24]) < parseInt(numLiteralE[25])) && (parseInt(numLiteralE[25]) < parseInt(numLiteralE[26]))) {
        $('#act5num25').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num25').addClass('incorrecto');
    }

    //////////////////////////////////////
    for (var i = 27; i < 32; i++) {
        var num2 = $('#act5num' + [i] + '').val();
        numLiteralF[i] = num2;
    }


    if (parseInt(numLiteralF[27]) < parseInt(numLiteralF[28])) {
        $('#act5num28').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num28').addClass('incorrecto');
    }
    if (parseInt(numLiteralF[28]) < parseInt(numLiteralF[29])) {
        $('#act5num29').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num29').addClass('incorrecto');
    }
    if ((parseInt(numLiteralF[29]) < parseInt(numLiteralF[30])) && (parseInt(numLiteralF[30]) < parseInt(numLiteralF[31]))) {
        $('#act5num30').addClass('correcto');
        cont1 = cont1 + 1;
    } else {
        $('#act5num30').addClass('incorrecto');
    }
    var total = (cont1 * 1) / 16;
    $('#nota1_5').val(parseFloat(total).toFixed(2));
}
///////////////////////pregunta 6///////////
document.getElementById('nota1_6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_6'), 1)
});
///////////////////////pregunta 7///////////
var act7 = [
    [' <span> <b style="color: #428bca"><li></li></b> {– 6 (– 8) – 5 [6 (2)2 – 3 (4 – 16)]}</span>' +
        '<textarea class="form-control" style="resize: none;" placeholder="procedimiento"></textarea>' +
        '<br>' +
        '<input class="form-control" placeholder="resultado" id="act7num0"></input>'
    ],
    [' <span><b style="color: #428bca"><li></li></b>(12 – 23) ÷ (4 – 26) – <sup>1</sup>&frasl;<sub>2</sub> + (– 8 – 12) (13 – 10)</span>' +
        '<textarea class="form-control" style="resize: none;" placeholder="procedimiento"></textarea>' +
        '<br>' +
        '<input class="form-control" placeholder="resultado" id="act7num1"></input>'
    ],
    ['<span><b style="color: #428bca"><li></li></b> − 7 (− 12 + 31)  − <sup>3</sup>√<span class="sobrelinea">236 − 20</span>   ÷  (− 3)  −  (− 2) (5 − 13 + 12)</span>' +
        '<textarea class="form-control" style="resize: none;" placeholder="procedimiento"></textarea>' +
        '<br>' +
        '<input class="form-control" placeholder="resultado" id="act7num2"></input>'
    ],
];

var act7Txt = document.getElementsByClassName('act7class');

act7.sort(f_randomico);
for (i = 0; i < act7Txt.length; i++) {

    $('#' + act7Txt[i].id).html(act7[i]);


}

function pregunta7() {
    var act7num0 = document.getElementById('act7num0').value;
    var act7num1 = document.getElementById('act7num1').value;
    var act7num2 = document.getElementById('act7num2').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if (act7num0 == "-252") {
        $('#act7num0').addClass('correcto');
        nt1 = 1;
    } else {
        $('#act7num0').addClass('incorrecto');
    }
    if (act7num1 == "-60") {
        $('#act7num1').addClass('correcto');
        nt2 = 1;
    } else {
        $('#act7num1').addClass('incorrecto');
    }
    if (act7num2 == "-135") {
        $('#act7num2').addClass('correcto');
        nt3 = 1;
    } else {
        $('#act7num2').addClass('incorrecto');
    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_7').val(parseFloat(total).toFixed(2));

}
/////////////pregunta 8 ///////////////////
function pregunta8() {
    var act8 = ['3', '5', '1', '5', '2', '2', '5', ]
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act8num' + [i] + '').val().toLowerCase();
        if (act8[i] == res) {
            cont = cont + 1;
            $('#act8num' + [i] + '').addClass('correcto');
        } else {
            $('#act8num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 7;
    $('#nota1_8').val(total.toFixed(2));

}
///////////////////pregunta 9////////////////////////////////////
document.getElementById('nota1_10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_10'), 1)
});
///////////////////////////// pregunta 10 //////////////////////////


var resp_cor_len3_act13_p14 = [
    ["⅙", "img/i1_p61_act64.jpg"],
    ["¼", "img/i2_p61_act64.jpg"],
    ["3/10", "img/i3_p61_act64.jpg"],
    ["¾", "img/i4_p61_act64.jpg"],
];

var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p61_act64.jpg', 'img/i2_p61_act64.jpg', 'img/i3_p61_act64.jpg', 'img/i4_p61_act64.jpg', ];
var loadTxt = ['⅙', '¼', '3/10', '¾', ];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos("imagen", loadImg);
initElementos("texto", loadTxt);
insertDraggable();
enviarEventosListener("caja_img1", "caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2", "caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3", "caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img4", "caja_txt4"); //caja1 img y texto

function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });
    ///document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({}, cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagen") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "texto") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });

        } */





}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.texto').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.background = '#65CE6D';


    }
    calcularNotaGeneral(
        4,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota1_9').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}
//////////////////////////////////////pregunta 11////////////////

var act11 = [
    ['A es subconjunto de B'],
    ['conjunto A = conjunto B'],
    ['A y B conjuntos disjuntos'],
]


var act11Txt = document.getElementsByClassName('act11txt');

act11.sort(f_randomico);
for (i = 0; i < act11Txt.length; i++) {

    $('#' + act11Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11[i] + '</div></h4> ');


}


var act11_1 = [
    ['<img class="img-responsive" src="img/i5_p61_act64.jpg"></img><div id="act11_1" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i6_p61_act64.jpg"></img><div id="act11_2" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i7_p61_act64.jpg"></img><div id="act11_3" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
]


var act11_1Txt = document.getElementsByClassName('act11_1txt');

act11_1.sort(f_randomico);
for (i = 0; i < act11_1Txt.length; i++) {

    $('#' + act11_1Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11_1[i] + '</div></h4> ');


}

function pregunta11() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if ($('#act11_1').children("div").html() == "A es subconjunto de B") {
        nt1 = 1;
        $('#act11_1').css("background", "#00e600");

    } else {
        $('#act11_1').css("background", "#ff6666");

    }

    if ($('#act11_2').children("div").html() == "conjunto A = conjunto B") {
        nt2 = 1;
        $('#act11_2').css("background", "#00e600");

    } else {
        $('#act11_2').css("background", "#ff6666");

    }
    if ($('#act11_3').children("div").html() == "A y B conjuntos disjuntos") {
        nt3 = 1;
        $('#act11_3').css("background", "#00e600");

    } else {
        $('#act11_3').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_11').val(parseFloat(total).toFixed(2));
}


function calcularTotal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    contarRespCorrectaDnD();
    pregunta10();
    pregunta11();
    pregunta12();
    var nota11_1 = document.getElementById('nota1_1').value;
    var nota11_2 = document.getElementById('nota1_2').value;
    var nota11_3 = document.getElementById('nota1_3').value;
    var nota11_4 = document.getElementById('nota1_4').value;
    var nota11_5 = document.getElementById('nota1_5').value;
    var nota11_6 = document.getElementById('nota1_6').value;
    var nota11_7 = document.getElementById('nota1_7').value;
    var nota11_8 = document.getElementById('nota1_8').value;
    var nota11_9 = document.getElementById('nota1_9').value;
    var nota11_10 = document.getElementById('nota1_10').value;
    var nota11_11 = document.getElementById('nota1_11').value;
    var nota11_12 = document.getElementById('nota1_12').value;


    var SuperTotal = parseFloat(nota11_1) + parseFloat(nota11_2) + parseFloat(nota11_3) + parseFloat(nota11_4) + parseFloat(nota11_5) + parseFloat(nota11_6) + parseFloat(nota11_7) + parseFloat(nota11_8) + parseFloat(nota11_9) + parseFloat(nota11_10) + parseFloat(nota11_11) + parseFloat(nota11_12);
    var total = (SuperTotal * 10) / 12;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
