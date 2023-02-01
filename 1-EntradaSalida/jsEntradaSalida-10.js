/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//Luis Atoche divX

function mostrarAumento()
{
	
	let importe;
	let resultado;
	
    importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

    resultado = importe * 0.75;
	
	document.getElementById("txtIdResultado").value = resultado;

}
