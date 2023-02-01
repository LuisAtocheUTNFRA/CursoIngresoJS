/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
//Luis Atoche divX
function sumar() 
{
	let numeroIngresado1;
	let numeroIngresado2;

	numeroIngresado1 = document.getElementById("txtIdNumeroUno").value;
	numeroIngresado2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(numeroIngresado1);
	num2 = parseInt(numeroIngresado2);

	let suma = num1 + num2;

	alert("la suma es: " + suma);
	
	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}

