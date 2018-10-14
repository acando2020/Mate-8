document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 2.5)
});

var random2 = [
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Las elecciones presidenciales en el Ecuador.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><select class="form-control" id="sel0">' +
        '<option>---selecciona---</option>' +
        '<option>Población</option>' +
        '<option>Muestra</option>' +
        '</select>' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El salario de 20 empleados de una empresa, que tiene 120 empleados.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><select class="form-control" id="sel1">' +
        '<option>---selecciona---</option>' +
        '<option>Población</option>' +
        '<option>Muestra</option>' +
        '</select></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Hacer un estudio con todos los integrantes de una escuela.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><select class="form-control" id="sel2">' +
        '<option>---selecciona---</option>' +
        '<option>Población</option>' +
        '<option>Muestra</option>' +
        '</select></td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Encuesta a 50 compradores de una tienda en donde compran 60 personas.</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><select class="form-control" id="sel3">' +
        '<option>---selecciona---</option>' +
        '<option>Población</option>' +
        '<option>Muestra</option>' +
        '</select></td>' +
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
    var respact2 = ['Población', 'Muestra', 'Población', 'Muestra', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 4;
    $('#nota2').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}
///////////////////pregunta3///////////////////////////////
var random3_1 = [
    ['<td>Población:</td>' +
        '<td><select class="form-control" id="sele0">' +
        '<option>---selecciona---</option>' +
        '<option>300 alumnos</option>' +
        '<option>promedio de edades</option>' +
        '<option>100 alumnos</option>' +
        '<option>cuantitativa</option> ' +
        '</select></td>'
    ],
    [' <td>Muestra:</td>' +
        '<td><select class="form-control" id="sele1">' +
        '<option>---selecciona---</option>' +
        '<option>300 alumnos</option>' +
        '<option>promedio de edades</option>' +
        '<option>100 alumnos</option>' +
        '<option>cuantitativa</option>' +
        '</select></td>'
    ],
    ['<td>Variable:</td>' +
        '<td><select class="form-control" id="sele2">' +
        '<option>---selecciona---</option>' +
        '<option>300 alumnos</option>' +
        '<option>promedio de edades</option>' +
        '<option>100 alumnos</option>' +
        '<option>cuantitativa</option>' +
        '</select></td>'
    ],
    [' <td>Tipo de variable:</td>' +
        '<td><select class="form-control" id="sele3">' +
        '<option>---selecciona---</option>' +
        '<option>300 alumnos</option>' +
        '<option>promedio de edades</option>' +
        '<option>100 alumnos</option>' +
        '<option>cuantitativa</option>' +
        '</select></td>'
    ],
];
var act0301Txt = document.getElementsByClassName('act3_1class');

random3_1.sort(f_randomico);
for (i = 0; i < act0301Txt.length; i++) {
    $('#' + act0301Txt[i].id).html(random3_1[i]);
}
////////////////////////////////////////////
var random3_2 = [
    ['<td>Población:</td>' +
        '<td><select class="form-control" id="sele4">' +
        '<option>---selecciona---</option>' +
        '<option>nivel de satisfacción</option>' +
        '<option>80% alumnos</option>' +
        '<option>cualitativa</option>' +
        '</select></td>'
    ],
    ['<td>Muestra:</td>' +
        '<td><select class="form-control" id="sele5">' +
        '<option>---selecciona---</option>' +
        '<option>nivel de satisfacción</option>' +
        '<option>80% alumnos</option>' +
        '<option>cualitativa</option>' +
        '</select></td>'
    ],
    [' <td>Variable:</td>' +
        '<td><select class="form-control" id="sele6">' +
        '<option>---selecciona---</option>' +
        '<option>nivel de satisfacción</option>' +
        '<option>80% alumnos</option>' +
        '<option>cualitativa</option>' +
        '</select></td>'
    ],
    ['<td>Tipo de variable:</td>' +
        '<td><select class="form-control" id="sele7">' +
        '<option>---selecciona---</option>' +
        '<option>nivel de satisfacción</option>' +
        '<option>80% alumnos</option>' +
        '<option>cualitativa</option>' +
        '</select></td>'
    ],
];
var act0302Txt = document.getElementsByClassName('act3_2class');

random3_2.sort(f_randomico);
for (i = 0; i < act0302Txt.length; i++) {
    $('#' + act0302Txt[i].id).html(random3_2[i]);
}

function pregunta3() {
    var respact2 = ['300 alumnos', 'promedio de edades', '100 alumnos', 'cuantitativa', '80% alumnos', 'nivel de satisfacción', '80% alumnos', 'cualitativa', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#sele' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sele' + [i] + '').css("background", "#00e600");
        } else {
            $('#sele' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 8;
    $('#nota3').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}
/////////////////////////////pregunta4////////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>La estatura de una persona</td>' +
        '<td><select class="form-control" id="seleccion0">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El grado de escolaridad</td>' +
        '<td><select class="form-control" id="seleccion1">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El número de cédula</td>' +
        '<td><select class="form-control" id="seleccion2">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El nombre de las personas</td>' +
        '<td><select class="form-control" id="seleccion3">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El estado civil de una persona</td>' +
        '<td><select class="form-control" id="seleccion4">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El ingreso mensual de un trabajador</td>' +
        '<td><select class="form-control" id="seleccion5">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Los números de las camisetas en un partido de fútbol</td>' +
        '<td><select class="form-control" id="seleccion6">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>La posición de llegada en una carrera</td>' +
        '<td><select class="form-control" id="seleccion7">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>El color favorito</td>' +
        '<td><select class="form-control" id="seleccion8">' +
        '<option>---seleccion---</option>' +
        '<option>Variable cuantitativa</option>' +
        '<option>Variable cualitativa</option>' +
        '</select></td>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['Variable cuantitativa', 'Variable cuantitativa', 'Variable cuantitativa', 'Variable cualitativa', 'Variable cualitativa', 'Variable cuantitativa', 'Variable cuantitativa', 'Variable cuantitativa', 'Variable cualitativa', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#seleccion' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#seleccion' + [i] + '').css("background", "#00e600");
        } else {
            $('#seleccion' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 9;
    $('#nota4').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);

}

function NotaFinal() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;



    if (nota1 == "") {
        alert("Calificar la pregunta 1")
    } else {
        pregunta2();
        pregunta3();
        pregunta4();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
