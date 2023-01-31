/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
	let nombreIngresado;
	let edadIngresada;
	//	nombreIngresado=txtIdNombre.value;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = txtIdEdad.value;

	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
	
	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";

}


