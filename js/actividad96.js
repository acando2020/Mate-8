document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 1)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 1)
});
document.getElementById('nota7').addEventListener('keypress', () => {
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

////////////////////////////pregunta2////////////////////////////////////////////////////////////////////////////////
var random2 = [
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>9</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel0">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>10</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel1">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>A</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel2">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>B</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>0</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel3">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>9</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel4">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>C</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>1</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel5">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>B</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>C</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel6">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>5</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel7">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>7</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel8">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>C</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>8</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel9">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>B</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel10">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>A</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>11</td>' +
        '<td>' +
        '<select class="form-control" style="border-radius: 10px 0px 10px 0px;border: 1px solid #21b4d6;" id="sel11">' +
        '<option>Seleccione</option>' +
        '<option>∈</option>' +
        '<option>∉</option>' +
        '<option>⊂</option>' +
        '<option>⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>B</td>' +
        '</tr>' +
        '</table>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['∉', '∉', '⊂', '∉', '∈', '∈', '⊄', '∉', '∉', '∈', '⊄', '∉', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota2').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}
//////////////pregunta3////////////////////////////
var random3 = [
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>a ∈ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc0">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>a ∈ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc1">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>a ∈ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc2">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{a, b} ∈ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc3">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>2 ⊂ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc4">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{a} ⊂ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc5">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{{4}} ⊄ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc6">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{4} ⊄ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc7">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>{a, d} ⊂ M</td>' +
        '<td>' +
        '<select class="form-control" id="selc8">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}


function pregunta3() {
    var respact2 = ['verdadero', 'falso', 'verdadero', 'falso', 'falso', 'verdadero', 'verdadero', 'verdadero', 'verdadero', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#selc' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#selc' + [i] + '').css("background", "#00e600");
        } else {
            $('#selc' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota3').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}
////////////pregunta4////////////////////////
var resp_cor_len3_act13_p14 = [
    ["Transitiva", "img/i4_p90_act96.jpg"],
    ["El vacío es subconjunto de todo conjunto", "img/i5_p90_act96.jpg"],
    ["Antisimétrica", "img/i6_p90_act96.jpg"],
    ["Reflexiva", "img/i7_p90_act96.jpg"],

];
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i4_p90_act96.jpg', 'img/i5_p90_act96.jpg', 'img/i6_p90_act96.jpg', 'img/i7_p90_act96.jpg', ];
var loadTxt = ['Transitiva', 'El vacío es subconjunto de todo conjunto', 'Antisimétrica', 'Reflexiva', ];
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
        var calculo = 0;
        $('#nota4').val(calculo.toFixed(2) + ' ');
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta 8');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;
        $('#nota4').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}
/////////////pregunta6///////////////////////////////
var random6 = [
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>A ⊂ C</td>' +
        '<td>' +
        '<select class="form-control" id="selec0">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>D ⊂ B</td>' +
        '<td>' +
        '<select class="form-control" id="selec1">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>1 000 ⊂ B</td>' +
        '<td>' +
        '<select class="form-control" id="selec2">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>B ⊄ A</td>' +
        '<td>' +
        '<select class="form-control" id="selec3">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>D ⊂ C</td>' +
        '<td>' +
        '<select class="form-control" id="selec4">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>B ⊂ C</td>' +
        '<td>' +
        '<select class="form-control" id="selec5">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>100 ⊂ D</td>' +
        '<td>' +
        '<select class="form-control" id="selec6">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>A ≠ C</td>' +
        '<td>' +
        '<select class="form-control" id="selec7">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color:#005CA9"><li></li></b></td>' +
        '<td>B ≠ D</td>' +
        '<td>' +
        '<select class="form-control" id="selec8">' +
        '<option>---seleccione---</option>' +
        '<option>verdadero</option>' +
        '<option>falso</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}



function pregunta6() {
    var respact2 = ['falso', 'falso', 'falso', 'verdadero', 'verdadero', 'verdadero', 'falso', 'verdadero', 'verdadero', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#selec' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#selec' + [i] + '').css("background", "#00e600");
        } else {
            $('#selec' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota6').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}
/////////////////////pregunta8/////////////////////////////////////////////////////
var random8 = [
    [' <table class="1 enc1" id="act8num0"> <tr> <td><b style="color:#005CA9"><li></li></b></td> <td>Solo I</td> </tr> </table>'],
    ['<table class="1 enc2" id="act8num1"> <tr> <td><b style="color:#005CA9"><li></li></b></td> <td>I y II</td> </tr> </table>'],
    ['<table class="1 enc3" id="act8num2"> <tr> <td><b style="color:#005CA9"><li></li></b></td> <td>solo II</td> </tr> </table>'],
    ['<table class="1 enc4" id="act8num3"> <tr> <td><b style="color:#005CA9"><li></li></b></td> <td>I, II y III</td> </tr> </table>'],
];
var act08Txt = document.getElementsByClassName('act8class');

random8.sort(f_randomico);
for (i = 0; i < act08Txt.length; i++) {
    $('#' + act08Txt[i].id).html(random8[i]);
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
            nt1 = 1;
            break;


    }
});

function pregunta8() {
    var nt1 = 0;
    if ($('.enc2').hasClass('pintar1') == true) {
        nt1 = 1;

        $('.enc2').addClass('correcto');


    } else if ($('.enc1').hasClass('pintar1') == true) {
        $('.enc1').addClass('incorrecto');


    } else if ($('.enc4').hasClass('pintar1') == true) {
        $('.enc4').addClass('incorrecto');


    } else if ($('.enc3').hasClass('pintar1') == true) {
        $('.enc3').addClass('incorrecto');
    }
    $('.1').off('click');
    $('#nota8').val(parseFloat(nt1).toFixed(2));
}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    if ((nota1 == "") || (nota5 == "") || (nota7 == "") || (nota9 == "")) {
        alert("Ingresar nota de la pregunta 1, 5, 7 ó 9");
    } else {

        pregunta2();
        pregunta3();
        contarRespCorrectaDnD();
        pregunta6();
        pregunta8();


        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9);
        var total = (subtotal * 10) / 9;
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
