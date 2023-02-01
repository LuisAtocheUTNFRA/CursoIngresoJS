/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//Luis Atoche divX
function sumar()
{	
	let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(num1);
	n2 = parseInt(num2);
	let suma = n1 + n2;
	alert("La suma es: " + suma);	
	
}

function restar()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(num1);
	n2 = parseInt(num2);
	let resta = n1 - n2;
	alert("La resta es: " + resta);	
}

function multiplicar()
{ 
	let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(num1);
	n2 = parseInt(num2);
	let multiplicacion = n1 * n2;
	alert("La multiplicacion es: " + multiplicacion);	
}

function dividir()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;
	n1 = parseInt(num1);
	n2 = parseInt(num2);
	let division = n1 / n2;
	alert("La division es: " + division);	
}

