var random1 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> . 4 =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num1"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num3"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num5"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num7"></input></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> .' +
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> =' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act1num8"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act1num9"></input></span>' +
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
    var respact2 = ['4', '7', '9', '50', '1', '15', '4', '27', '4', '9', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota1').val(parseFloat(total).toFixed(2));


}
/////////////////pregunta2/////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num1"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> = </td> <td> <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num3"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num5"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div> ÷ 8 = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num6"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num7"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> ÷ 2 = </td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act2num8"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num9"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num10"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> = </td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act2num11"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num12"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num13"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num14"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num15"></input></span> </div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div> = </td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act2num16"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">27</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">36</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num17"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num18"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div> ÷ <div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> = </td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act2num19"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act2num20"></input></span> </div>' +
        '</td>'
    ],

];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['6', '25', '2', '35', '2', '9', '7', '64', '1', '3', '2', '6', '15', '7', '1', '2', '24', '8', '9', '4', '3', ];
    var cont = 0;
    for (var i = 0; i < 21; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 21;
    $('#nota2').val(parseFloat(total).toFixed(2));
}

/////////////////////////////pregunta3/////////////////////////////////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i1_p144_act126.jpg"></img></td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num0"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num1"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i2_p144_act126.jpg"></img></td> <td>-' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num2"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num3"></input></span> </div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i3_p144_act126.jpg"></img></td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num4"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num5"></input></span> </div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td align="center"><img class="img-responsive" src="img/i4_p144_act126.jpg"></img></td> <td><input class="inputfraccciones sinEspacios" id="act3num6"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i5_p144_act126.jpg"></img></td>' +
        '<td> - <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num7"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num8"></input></span> </div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i6_p144_act126.jpg"></img></td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num9"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num10"></input></span> </div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td align="center"><img class="img-responsive" src="img/i7_p144_act126.jpg"></img></td> <td>' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act3num11"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act3num12"></input></span> </div>' +
        '</td>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['409', '30', '7', '24', '13', '2', '6', '265', '72', '203', '180', '3', '5', ];
    var cont = 0;
    for (var i = 0; i < 13; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 13;
    $('#nota3').val(parseFloat(total).toFixed(2));
}


/*
/*$('.1').click(function() {
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

function pregunta3() {
    var nt1 = 0,
        nt2 = 0;
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
    var total = parseFloat(nt1);
    $('#nota3').val(parseFloat(total).toFixed(2));
}*/

/////////////////pregunta4/////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><img src="img/i8_p144_act126.jpg" alt=""></td> <td><span style="font-size: 40px;">(<sup><input class="inputfraccciones sinEspacios" id="act4num0" style="width: 20px;height: 20px;font-size: 20px;"></input></sup>/<sub><input class="inputfraccciones sinEspacios" id="act4num1" style="width: 20px;height: 20px;font-size: 20px;"></input></sub>)<sup><input class="inputfraccciones sinEspacios" id="act4num2" style="width: 20px;height: 20px;font-size: 20px;"></input></sup></span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><img src="img/i9_p144_act126.jpg" alt=""></td> <td><span style="font-size: 40px;">(<input class="inputfraccciones sinEspacios" id="act4num3" style="width: 40px;height: 40px;font-size: 20px;"></input>)<sup><input class="inputfraccciones sinEspacios" id="act4num4" style="width: 20px;height: 20px;font-size: 20px;"></input></sup></span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><img src="img/i10_p144_act126.jpg" alt=""></td> <td><input class="inputfraccciones sinEspacios" id="act4num5"></input></td>'],

]
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['3', '2', '12', '-2', '22', '-1', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));
}
////////////////////////////////pregunta5////////////////////////////////////////////////////
var random5 = [
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>[(2/5) . (2/5)<sup>3</sup> . (2/5)<sup>2</sup>]<sup>2</sup> . (2/5)<sup>2</sup></td>' +
        '<td> = (<sup><input class="inputfraccciones sinEspacios" id="act5num0" style="width: 20px;"></input></sup>/<sub>' +
        '<input class="inputfraccciones sinEspacios" id="act5num1" style="width: 20px;"></input></sub>)<sup>' +
        '<input class="inputfraccciones sinEspacios" id="act5num2" style="width: 20px;"></input></sup></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>[(3/6)<sup>2</sup> . (3/6)<sup>3</sup>]<sup>4</sup> ÷ (3/6)<sup>3</sup></td>' +
        '<td> = (<sup><input class="inputfraccciones sinEspacios" id="act5num3" style="width: 20px;"></input></sup>/<sub>' +
        '<input class="inputfraccciones sinEspacios" id="act5num4" style="width: 20px;"></input></sub>)<sup>' +
        '<input class="inputfraccciones sinEspacios" id="act5num5" style="width: 20px;"></input></sup></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">2<sup>3</sup> . 2<sup>5</sup> . 2<sup>4</sup> . 2<sup>4</sup></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2<sup>3</sup> . 2<sup>2</sup></span> </div> </td>' +
        '<td>= <input class="inputfraccciones sinEspacios" id="act5num6">' +
        '</input><sup><input class="inputfraccciones sinEspacios" id="act5num7" style="width: 20px;"></input></sup></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td> <div class="fraction">' +
        '<span class="fup">(2<sup>3</sup> . 2<sup>5</sup>)<sup>2</sup></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5<sup>3</sup> . 5<sup>2</sup></span> </div>' +
        '</td> <td> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num8"></input><sup><input class="inputfraccciones sinEspacios" id="act5num9" style="width: 20px;"></input></sup></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num10"></input><sup><input class="inputfraccciones sinEspacios" id="act5num11" style="width: 20px;"></input></sup></span>' +
        '</div>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(5/10)<sup>-2</sup></td> <td> = <input class="inputfraccciones sinEspacios" id="act5num12"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(2/5)<sup>-1</sup></td>' +
        '<td> = <div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num13"></input></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num14"></input></span>' +
        '</div>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(1/2)<sup>-3</sup></td>' +
        '<td>= <input class="inputfraccciones sinEspacios" id="act5num15"></input><sup>' +
        '<input class="inputfraccciones sinEspacios" id="act5num16" style="width: 20px;"></input></sup></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(1/7)<sup>-3</sup></td>' +
        '<td>= <input class="inputfraccciones sinEspacios" id="act5num17"></input><sup>' +
        '<input class="inputfraccciones sinEspacios" id="act5num18" style="width: 20px;">' +
        '</input></sup></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>(2/7)<sup>-4</sup></td> <td> =' +
        '<div class="fraction">' +
        '<span class="fup"><input class="inputfraccciones sinEspacios" id="act5num19"></input><sup><input class="inputfraccciones sinEspacios" id="act5num20" style="width: 20px;"></input></sup></span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn"><input class="inputfraccciones sinEspacios" id="act5num21"></input><sup><input class="inputfraccciones sinEspacios" id="act5num22" style="width: 20px;"></input></sup></span>' +
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
    var respact2 = ['2', '5', '14', '3', '6', '17', '2', '11', '2', '16', '5', '5', '4', '5', '2', '2', '3', '7', '3', '7', '4', '2', '4', ];
    var cont = 0;
    for (var i = 0; i < 23; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 23;
    $('#nota5').val(parseFloat(total).toFixed(2));
}
/////////////////////pregunta 6//////////////////////////////////////////////////////////////////////

function pregunta6() {
    var nt1 = 0;
    var act6num0 = document.getElementById('act6num0').value;
    if (act6num0 == '1') {
        nt1 = 1;
        $('#act6num0').css("background", "#00e600");
    } else {
        $('#act6num0').css("background", "#ff6666");
    }
    $('#nota6').val(parseFloat(nt1).toFixed(2));
}


function NotaFinal() {





    /* if (nota1 == "") {
         alert("Calificar la pregunta 1")
     } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
    $('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}


}
