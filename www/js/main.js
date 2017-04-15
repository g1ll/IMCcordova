$(document).ready(function () {
    $('#calc').click(function (e) {
        var peso = parseFloat($('#peso').val());
        var alt = parseFloat($('#alt').val());
        var imc = peso / (alt * alt);
        var res = $('#resultado').html('<br>Seu IMC é : ' + imc + "<br><i></i>");
        $('#resultado i').removeAttr('class');
        $(res).removeAttr('class');
        $('#resultado i').addClass('glyphicon glyphicon-user');
        if (imc >= 30) {
            $(res).addClass('fat');
            $('#resultado i').toggleClass('iconfat');
        } else if (imc >= 25 && imc < 30) {
            (res).addClass('over');
            $('#resultado i').toggleClass('iconover');
        } else {
            (res).addClass('normal');
            $('#resultado i').toggleClass('iconnormal');
        }
    });
});