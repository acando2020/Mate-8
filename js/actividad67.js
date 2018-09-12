document.getElementById('nota1_1').addEventListener('keypress', () => {
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
});
var resp1 = 0,
    resp2 = 0,
    resp3 = 0,
    resp4 = 0;

$('.enc1').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
});

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCajai')) {
        $(this).removeClass('seleccionCajai')
    } else {
        $(this).addClass('seleccionCajai')
    }
    if ($("#R1").hasClass("seleccionCajai")) {
        $("#R2").removeClass("seleccionCajai")
        $("#R3").removeClass("seleccionCajai")
        $("#R4").removeClass("seleccionCajai")
        $("#R5").removeClass("seleccionCajai")


    } else if ($("#R2").hasClass("seleccionCajai")) {
        $("#R1").removeClass("seleccionCajai")
        $("#R3").removeClass("seleccionCajai")
        $("#R4").removeClass("seleccionCajai")
        $("#R5").removeClass("seleccionCajai")



    } else if ($("#R3").hasClass("seleccionCajai")) {
        $("#R1").removeClass("seleccionCajai")
        $("#R2").removeClass("seleccionCajai")
        $("#R4").removeClass("seleccionCajai")
        $("#R5").removeClass("seleccionCajai")

    } else if ($("#R4").hasClass("seleccionCajai")) {
        $("#R1").removeClass("seleccionCajai")
        $("#R2").removeClass("seleccionCajai")
        $("#R3").removeClass("seleccionCajai")
        $("#R5").removeClass("seleccionCajai")
    } else if ($("#R5").hasClass("seleccionCajai")) {
        $("#R1").removeClass("seleccionCajai")
        $("#R2").removeClass("seleccionCajai")
        $("#R3").removeClass("seleccionCajai")
        $("#R4").removeClass("seleccionCajai")
    }


    if ($("#I1").hasClass("seleccionCajai")) {
        $("#I2").removeClass("seleccionCajai")
        $("#I3").removeClass("seleccionCajai")
        $("#I4").removeClass("seleccionCajai")



    } else if ($("#I2").hasClass("seleccionCajai")) {
        $("#I1").removeClass("seleccionCajai")
        $("#I3").removeClass("seleccionCajai")
        $("#I4").removeClass("seleccionCajai")




    } else if ($("#I3").hasClass("seleccionCajai")) {
        $("#I1").removeClass("seleccionCajai")
        $("#I2").removeClass("seleccionCajai")
        $("#I4").removeClass("seleccionCajai")


    } else if ($("#I4").hasClass("seleccionCajai")) {
        $("#I1").removeClass("seleccionCajai")
        $("#I2").removeClass("seleccionCajai")
        $("#I3").removeClass("seleccionCajai")

    }


    if ($("#II1").hasClass("seleccionCajai")) {
        $("#II2").removeClass("seleccionCajai")
        $("#II3").removeClass("seleccionCajai")
        $("#II4").removeClass("seleccionCajai")



    } else if ($("#II2").hasClass("seleccionCajai")) {
        $("#II1").removeClass("seleccionCajai")
        $("#II3").removeClass("seleccionCajai")
        $("#II4").removeClass("seleccionCajai")




    } else if ($("#II3").hasClass("seleccionCajai")) {
        $("#II1").removeClass("seleccionCajai")
        $("#II2").removeClass("seleccionCajai")
        $("#II4").removeClass("seleccionCajai")


    } else if ($("#II4").hasClass("seleccionCajai")) {
        $("#II1").removeClass("seleccionCajai")
        $("#II2").removeClass("seleccionCajai")
        $("#II3").removeClass("seleccionCajai")

    }

    if ($("#III1").hasClass("seleccionCajai")) {
        $("#III2").removeClass("seleccionCajai")
        $("#III3").removeClass("seleccionCajai")
        $("#III4").removeClass("seleccionCajai")



    } else if ($("#III2").hasClass("seleccionCajai")) {
        $("#III1").removeClass("seleccionCajai")
        $("#III3").removeClass("seleccionCajai")
        $("#III4").removeClass("seleccionCajai")




    } else if ($("#III3").hasClass("seleccionCajai")) {
        $("#III1").removeClass("seleccionCajai")
        $("#III2").removeClass("seleccionCajai")
        $("#III4").removeClass("seleccionCajai")


    } else if ($("#III4").hasClass("seleccionCajai")) {
        $("#III1").removeClass("seleccionCajai")
        $("#III2").removeClass("seleccionCajai")
        $("#III3").removeClass("seleccionCajai")

    }
});


function pregunta3() {
    if ($("#R3").hasClass("seleccionCajai")) {
        resp1 = 2.5;
        $("#R3").css({ "background-color": "#00FF00" });
    } else if ($("#R1").hasClass("seleccionCajai")) {
        $("#R1").css({ "background-color": "#ff0000" });
    } else if ($("#R2").hasClass("seleccionCajai")) {
        $("#R2").css({ "background-color": "#ff0000" });
    } else if ($("#R3").hasClass("seleccionCajai")) {
        $("#R3").css({ "background-color": "#ff0000" });
    } else if ($("#R4").hasClass("seleccionCajai")) {
        $("#R4").css({ "background-color": "#ff0000" });
    } else if ($("#R5").hasClass("seleccionCajai")) {
        $("#R5").css({ "background-color": "#ff0000" });
    }
    $('#nota1_3').val(parseFloat(resp1).toFixed(2));
}

function pregunta4() {
    if ($("#I1").hasClass("seleccionCajai")) {
        resp2 = 1;
        $("#I1").css({ "background-color": "#00FF00" });
    } else if ($("#I3").hasClass("seleccionCajai")) {
        $("#I3").css({ "background-color": "#ff0000" });
    } else if ($("#I2").hasClass("seleccionCajai")) {
        $("#I2").css({ "background-color": "#ff0000" });
    } else if ($("#I4").hasClass("seleccionCajai")) {
        $("#I4").css({ "background-color": "#ff0000" });
    }

    ///////////////////
    if ($("#II4").hasClass("seleccionCajai")) {
        resp3 = 1;
        $("#II4").css({ "background-color": "#00FF00" });
    } else if ($("#II3").hasClass("seleccionCajai")) {
        $("#II3").css({ "background-color": "#ff0000" });
    } else if ($("#II2").hasClass("seleccionCajai")) {
        $("#II2").css({ "background-color": "#ff0000" });
    } else if ($("#II1").hasClass("seleccionCajai")) {
        $("#II1").css({ "background-color": "#ff0000" });
    }
    ///////////////////
    if ($("#III3").hasClass("seleccionCajai")) {
        resp4 = 1;
        $("#III3").css({ "background-color": "#00FF00" });
    } else if ($("#III4").hasClass("seleccionCajai")) {
        $("#III4").css({ "background-color": "#ff0000" });
    } else if ($("#III2").hasClass("seleccionCajai")) {
        $("#III2").css({ "background-color": "#ff0000" });
    } else if ($("#III1").hasClass("seleccionCajai")) {
        $("#III1").css({ "background-color": "#ff0000" });
    }
    var subtotal = parseInt(resp2) + parseInt(resp3) + parseInt(resp4);
    var total = (subtotal * 2.5) / 3;
    $('#nota1_4').val(parseFloat(total).toFixed(2));
}

function totalnota() {
    var nota1_1 = document.getElementById('nota1_1').value;
    var nota1_2 = document.getElementById('nota1_2').value;
    var nota1_3 = document.getElementById('nota1_3').value;
    var nota1_4 = document.getElementById('nota1_4').value;
    if ((nota1_1 == "") || (nota1_2 == "")) {
        alert("Ingrese la nota de la pregunta 1 ó 2");

    } else {
        pregunta3();
        pregunta4();
        var nota1_1 = document.getElementById('nota1_1').value;
        var nota1_2 = document.getElementById('nota1_2').value;
        var nota1_3 = document.getElementById('nota1_3').value;
        var nota1_4 = document.getElementById('nota1_4').value;
        var SuperTotal = parseFloat(nota1_1) + parseFloat(nota1_2) + parseFloat(nota1_3) + parseFloat(nota1_4);

        $('#txtNota').html(SuperTotal.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }
}


