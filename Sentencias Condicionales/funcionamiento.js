document.write("Este es un ejercicio de sentencia condicionales <br/>");

var edad = prompt("Cuantos años tienes");


if (edad>=18){
   document.write("Aceptado <br/>");
}
else {
	document.write("Rechazado <br/>");
}

var opcion = prompt("Elije el nivel");

switch(parseInt(opcion)) {
	case 1:
	document.write("Nivel 1");
	break;

	case 2:
	document.write("Nivel 2");
	break;

	case 3:
	document.write("Nivel 3");
	break;

	case 4:
	document.write("Nivel 4");
	break;	

	default:
	document.write("Elije un nivel valido");
}
