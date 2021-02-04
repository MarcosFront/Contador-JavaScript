var count = new Date("feb 28,2021 00:00:00").getTime();
var x = setInterval(function() {
    var now= new Date().getTime();
    var d = count - now;

    var dias = Math.floor(d/(1000*60*60*24));
    var horas = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    var minutos = Math.floor((d%(1000*60*60))/(1000*60));
    var sec = Math.floor((d%(1000*60))/1000);

    document.getElementById("dias").innerHTML= dias;
    document.getElementById("hrs").innerHTML= horas;
    document.getElementById("min").innerHTML= minutos;
    document.getElementById("sec").innerHTML= sec;

},1000);