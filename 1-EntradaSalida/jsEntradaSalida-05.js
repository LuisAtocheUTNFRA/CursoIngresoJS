/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//Luis Atoche divX
function mostrar() {
	let nombreIngresado;
	let edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
	
	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";

}


