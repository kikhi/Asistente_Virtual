var dia;
switch (new Date().getDay()) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miercoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case  6:
    dia = "Sabado";
}

var dia_mes;
switch (new Date().getDate()) {
  case 1:
    dia_mes = "1";
    break;
  case 2:
    dia_mes = "2";
    break;
  case 3:
    dia_mes = "3";
    break;
  case 4:
    dia_mes = "4";
    break;
  case 5:
    dia_mes = "5";
    break;
  case 6:
    dia_mes = "6";
    break;
  case  7:
    dia_mes = "7";
  case 8:
    dia_mes = "8";
    break;
  case 9:
    dia_mes = "9";
    break;
  case 10:
    dia_mes = "10";
    break;
  case 11:
    dia_mes = "11";
    break;
  case 12:
    dia_mes = "12";
    break;
  case 13:
    dia_mes = "13";
    break;
  case 14:
    dia_mes = "14";
    break;
  case 15:
    dia_mes = "15";
    break;
  case 16:
    dia_mes = "16";
    break;
  case 17:
    dia_mes = "17";
    break;
  case 18:
    dia_mes = "18";
    break;
  case 19:
    dia_mes = "19";
    break;
  case 20:
    dia_mes = "20";
    break;
  case 21:
    dia_mes = "21";
    break;
  case 22:
    dia_mes = "22";
    break;
  case 23:
    dia_mes = "23";
    break;
  case 24:
    dia_mes = "24";
    break;
  case 25:
    dia_mes = "25";
    break;
  case 26:
    dia_mes = "26";
    break;
  case 27:
    dia_mes = "27";
    break;
  case 28:
    dia_mes = "28";
    break;
  case 29:
    dia_mes = "29";
    break;
  case 30:
    dia_mes = "30";
    break;
  case 31:
    dia_mes = "31";
    break;
  case 32:
    dia_mes = "32";
}

var mes;
switch (new Date().getMonth()) {
  case 0:
    mes = "Enero";
    break;
  case 1:
    mes = "Febrero";
    break;
  case 2:
    mes = "Marzo";
    break;
  case 3:
    mes = "Abril";
    break;
  case 4:
    mes = "Mayo";
    break;
  case 5:
    mes = "Junio";
    break;
  case  6:
    mes = "Julio";
    break;
  case 7:
    mes = "Agosto";
    break;
  case 8:
    mes = "Seprimbre";
    break;
  case 9:
    mes = "Octubre";
    break;
  case 10:
    mes = "Noviembre";
    break;
  case 11:
    mes = "Diciembre";
    break;
}
document.getElementById("fecha").innerHTML = dia + " " + dia_mes + " de " + " " + mes;
