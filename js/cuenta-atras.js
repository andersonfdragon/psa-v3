//CUENTA ATRAS WEB FIXED
$( document ).ready(function() {
    var end = new Date('06/30/2020 6:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementsByClassName("cuenta-atras").innerHTML = 'OFERTA EXPIRADA!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById("cuenta-atras-dias").innerHTML = days;
        document.getElementById("cuenta-atras-horas").innerHTML = hours;
        document.getElementById("cuenta-atras-minutos").innerHTML = minutes;
        document.getElementById("cuenta-atras-segundos").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
});
