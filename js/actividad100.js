document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 0.75, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 0.75)
});
var resp_cor_len3_act13_p14 = [
    ["Perímetro de un triángulo equilátero", "img/i1_p98_act100.jpg"],
    ["El tripe de un número más dos unidades", "img/i2_p98_act100.jpg"],
    ["El producto de un número y su consecutivo", "img/i3_p98_act100.jpg"],
    ["El doble de la suma de dos números", "img/i4_p98_act100.jpg"],

];
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p98_act100.jpg', 'img/i2_p98_act100.jpg', 'img/i3_p98_act100.jpg', 'img/i4_p98_act100.jpg', ];
var loadTxt = ['Perímetro de un triángulo equilátero', 'El tripe de un número más dos unidades', 'El producto de un número y su consecutivo', 'El doble de la suma de dos números', ];
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
            $('#' + cajas[i].id).html('<img class="center img-responsive"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
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

        }
*/




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
    var result_sobre = 1.5;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        var calculo = 0;
        $('#nota1').val(calculo.toFixed(2) + ' ');
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta 1');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;
        $('#nota1').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

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


/////////pregunta2///////////////////////////////////////////////




///////////////////////////////pregunta2/////////////////////////////////////
var random2_1 = [
    ['<div class="1 enc1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>15a<sup>2</sup>b − 15ab<sup>2</sup></td> </tr> </table> </div>'],
    ['<div class="1 enc2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>3a<sup>2</sup>b − 16ab<sup>2</sup>  + 10abc</td> </tr> </table> </div>'],
    ['<div class="1 enc3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>15a<sup>2</sup>b − 16ab<sup>2</sup>  + 10abc</td> </tr> </table> </div>'],
    [' <div class="1 enc4"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>15a<sup>2</sup>b + 16ab<sup>2</sup>  + 10abc</td> </tr> </table> </div>'],
];
var act0401Txt = document.getElementsByClassName('act2_1class');

random2_1.sort(f_randomico);
for (i = 0; i < act0401Txt.length; i++) {
    $('#' + act0401Txt[i].id).html(random2_1[i]);
}
//////////////*/ ///
var random2_2 = [
    ['<div class="2 enci1"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>14x<sup>p−2</sup> − 16y</td> </tr> </table> </div>'],
    ['<div class="2 enci2"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>15x<sup>p−1</sup> − 16y<sup>p</sup></td> </tr> </table> </div>'],
    ['<div class="2 enci3"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>x<sup>p−1</sup> − 4y<sup>p</sup></td> </tr> </table> </div>'],
    ['<div class="2 enci4"> <table> <tr> <td><b style="color: #005CA9"><li></li></b></td> <td>15x<sup>p−1</sup> − 8y<sup>p</sup></td> </tr> </table> </div>'],
];
var act0402Txt = document.getElementsByClassName('act2_2class');

random2_2.sort(f_randomico);
for (i = 0; i < act0402Txt.length; i++) {
    $('#' + act0402Txt[i].id).html(random2_2[i]);
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');

            break;
        case '1 enc2':
            $('.enc2').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');
            break;
        case '1 enc3':
            $('.enc3').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc4').removeClass('pintar1');

            break;
        case '1 enc4':
            $('.enc4').addClass('pintar1');
            $('.enc1').removeClass('pintar1');
            $('.enc2').removeClass('pintar1');
            $('.enc3').removeClass('pintar1');

            break;


    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enci1':
            $('.enci1').addClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');

            break;
        case '2 enci2':
            $('.enci2').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');
            break;
        case '2 enci3':
            $('.enci3').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci4').removeClass('pintar1');

            break;
        case '2 enci4':
            $('.enci4').addClass('pintar1');
            $('.enci1').removeClass('pintar1');
            $('.enci2').removeClass('pintar1');
            $('.enci3').removeClass('pintar1');

            break;


    }
});

function pregunta2() {
    var nt1 = 0,
        nt2 = 0;
    if ($('.enc3').hasClass('pintar1') == true) {
        nt1 = 0.25;

        $('.enc3').addClass('correcto');


    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc4').hasClass('pintar1') == true) {
        $('.enc4').addClass('incorrecto');


    } else if ($('.enc2').hasClass('pintar1') == true) {
        $('.enc2').addClass('incorrecto');
    }
    ////////////////////////////////////////////
    if ($('.enci2').hasClass('pintar1') == true) {
        nt2 = 0.25;

        $('.enci2').addClass('correcto');


    } else if ($('.enci1').hasClass('pintar1') == true) {
        $('.enci1').addClass('incorrecto');


    } else if ($('.enci4').hasClass('pintar1') == true) {
        $('.enci4').addClass('incorrecto');


    } else if ($('.enci3').hasClass('pintar1') == true) {
        $('.enci3').addClass('incorrecto');
    }
    $('.1').off('click');
    $('.2').off('click');
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota2').val(parseFloat(total).toFixed(2));
}
////////pregunta4////////////////////////////////////////////
var random4 = [
    ['<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>,' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>,' +
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num1"></input></span>' +
        '</div>,' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num3"></input></span>' +
        '</div>,' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num5"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num7"></input></span>' +
        '</div>, <b><</b>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num9"></input></span>' +
        '</div>, <b><</b>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num10"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num11"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    [' <td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num12"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num13"></input></span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num14"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num15"></input></span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num16"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num17"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num18"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num19"></input></span>' +
        '</div>, <b><</b> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num20"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num21"></input></span>' +
        '</div>, <b><</b> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num22"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num23"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num24"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num25"></input></span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num26"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num27"></input></span>' +
        '</div>, -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num28"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num29"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num30"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num31"></input></span>' +
        '</div>, <b><</b> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num32"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num33"></input></span>' +
        '</div>, <b><</b> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num34"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios soloNumeros" id="act4num35"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['90', '60', '50', '60', '36', '60', '6', '4', '3', '5', '5', '6', '10', '18', '24', '18', '15', '18', '4', '3', '5', '6', '5', '9', '56', '24', '18', '24', '16', '24', '8', '12', '6', '8', '7', '3', ];
    var cont = 0;
    for (var i = 0; i < 36; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 36;
    $('#nota4').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////////pregunta5////////////////////////////
var random5 = [
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Tres enteros y cuatro décimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num0" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num1" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num2" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Seis enteros y cuarenta y seis centésimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num3" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num4" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num5" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Cuarenta enteros y doce milésimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num6" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num7" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num8" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Treinta y seis diezmilésimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num9" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num10" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num11" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Un entero y cinco milésimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num12" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num13" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num14" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>Dos enteros y doce cien milésimas</td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<input class="inputfraccciones sinEspacios" id="act5num15" style="width: 70px;"></input> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num16" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num17" style="width: 70px;"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var respact2 = ['3,4', '34', '10', '6,46', '646', '100', '40,012', '40012', '1000', '0,0036', '36', '10000', '1,005', '1005', '1000', '2,00012', '200012', '100000', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1.5) / 18;
    $('#nota5').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
/////////////pregunta6////////////////////////////////////
var random6 = [
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> </div> </td> </tr> <tr> <td></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num1"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">210</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">42</span>' +
        '</div> </div> </td> </tr> <tr> <td></td> <td> <input class="inputfraccciones" id="act6num2"></input>' +
        '</td> </tr> </table>'
    ],
    [' <table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">25</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">100</span>' +
        '</div> </div> </td> </tr> <tr> <td></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num3"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num4"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">2014</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div> </div> </td> </tr> <tr> <td></td> <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num5"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num6"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">531135</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">99</span>' +
        '</div> </div> </td> </tr> <tr> <td></td> <td>' +
        '<input class="inputfraccciones" id="act6num7"></input>' +
        '</td> </tr> </table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr><td><b style="color: #005CA9"><li></li></b></td>' +
        '<td> 0,62 </td> </tr> <tr> <td></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num9"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num10"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num11"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> 0,004 </td> </tr> <tr> <td></td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num12"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num13"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num14"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num15"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
    [' <table style="text-align: center;">' +
        '<tr> <td><b style="color: #005CA9"><li></li></b></td> <td> 0,012 </td> </tr> <tr> <td></td> <td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num16"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num17"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones" id="act6num18"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones" id="act6num19"></input></span>' +
        '</div> </div> </td> </tr> </table>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['4', '5', '5', '1', '4', '1007', '4', '5365', '62', '100', '31', '50', '4', '1000', '1', '250', '12', '1000', '3', '250'];
    var cont = 0;
    for (var i = 0; i < 20; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 20;
    $('#nota6').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
////////////////////pregunt7//////////////////////
var random7 = [
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td> <div class="eq-c">7 <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> + 4 - 12 = </div> </td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num1"></input></span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num3"></input></span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num5"></input></span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num7"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num9"></input></span>' +
        '</div> =' +
        '<input class="inputfraccciones soloNumeros sinEspacios" id="act7num10"></input>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">-' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup">8</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">11</span>' +
        '</div> = </div> </td> <td> <div class="eq-c"> <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num11" style="width: 70px;"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num12"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num13"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num14"></input></span>' +
        '</div> =' +
        '<input class="inputfraccciones soloNumeros sinEspacios" id="act7num15"></input>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">3,25 + 3' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> - 2' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> = </div> </td> <td> <div class="eq-c"> <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num16"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num17"></input></span>' +
        '</div> +' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num18"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num19"></input></span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num20"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num21"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num22"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num23"></input></span>' +
        '</div> =' +
        '<input class="inputfraccciones soloNumeros sinEspacios" id="act7num24"></input>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">5' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> - 4' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> = </div> </td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num25"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num26"></input></span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num27"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num28"></input></span>' +
        '</div> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num29"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num30"></input></span>' +
        '</div>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005CA9"><li></li></b></td>' +
        '<td>' +
        '<div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup">17</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> - 4,25 = </div> </td> <td> <div class="eq-c">' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num31"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num32"></input></span>' +
        '</div> -' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num33"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones soloNumeros sinEspacios" id="act7num34"></input></span>' +
        '</div> =' +
        '<input class="inputfraccciones soloNumeros sinEspacios" id="act7num35"></input>' +
        '</div>' +
        '</td>'
    ],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}


function pregunta7() {
    var respact2 = ['22', '3', '2', '3', '12', '3', '48', '3', '0', '3', '0', '-8+8', '11', '0', '11', '0', '13', '4', '13', '4', '10', '4', '16', '4', '4', '26', '5', '22', '5', '4', '5', '17', '4', '17', '4', '0', ];
    var cont = 0;
    for (var i = 0; i < 36; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1.5) / 36;
    $('#nota7').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
