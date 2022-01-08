$(document).ready(function () {
    $('.btn-siguiente').click(function (e) { 
        e.preventDefault();
        let pregunta_actual = $(this).parent().parent().attr('id');

        switch(pregunta_actual){
            case "pregunta_uno":
                $('#pregunta_uno').removeClass('pregunta_activa');
                $('#pregunta_dos').addClass('pregunta_activa');
                break;
            case "pregunta_dos":
                $('#pregunta_dos').removeClass('pregunta_activa');
                $('#pregunta_tres').addClass('pregunta_activa');
                break;
            case "pregunta_tres":
                $('#pregunta_tres').removeClass('pregunta_activa');
                $('#pregunta_cuatro').addClass('pregunta_activa');
                break;
            case "pregunta_cuatro":
                $('#pregunta_cuatro').removeClass('pregunta_activa');
                $('#pregunta_cinco').addClass('pregunta_activa');
                break;
            case "pregunta_cinco":
                $('#pregunta_cinco').removeClass('pregunta_activa');
                $('#pregunta_seis').addClass('pregunta_activa');
                break;
            case "pregunta_seis":
                $('#pregunta_seis').removeClass('pregunta_activa');
                $('#pregunta_siete').addClass('pregunta_activa');
                break;
            case "pregunta_siete":
                $('#pregunta_siete').removeClass('pregunta_activa');
                $('#pregunta_ocho').addClass('pregunta_activa');
                break;
            case "pregunta_ocho":
                $('#pregunta_ocho').removeClass('pregunta_activa');
                $('#pregunta_nueve').addClass('pregunta_activa');
                break;
            case "pregunta_nueve":
                $('#pregunta_nueve').removeClass('pregunta_activa');
                $('#pregunta_diez').addClass('pregunta_activa');
                break;
            case "pregunta_diez":
                window.location = 'declaracion.html';
                break;
        }
    });
});