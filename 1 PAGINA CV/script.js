var Contenedor_visible=0;
var contenedores = [
	"datos",
	"objetivo",
	"prepa",
	"experiencias",
	"info"
];

document.getElementById(contenedores[0]).style.display = 'block';

function mostrarContenedor(id) {
	for(var i = 0; i < contenedores.length; i++) {
		document.getElementById(contenedores[i]).style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';
}

