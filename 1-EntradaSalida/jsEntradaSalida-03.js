/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
//Luis Atoche divX
function mostrar()
{
	let nombreIngresado;

	nombreIngresado=document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);
	document.getElementById("txtIdNombre").value="";

}


