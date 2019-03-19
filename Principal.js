let {cursos} = require ('./datos.js')
const express = require('express')
const app = express()



let mostrarnode = ( callback) =>{
	setTimeout(function(){
		let idCurso1 = cursos[0].id;
		let curso1 = cursos[0].nombre;
		let duracionCurso1 = cursos[0].duracion;
		let valorCurso1 = cursos[0].valor;
	callback (idCurso1, curso1, duracionCurso1, valorCurso1);
}, 2000);
}

let mostrarjavascript = (callback) =>{
	setTimeout(function(){
		let idCurso2 = cursos[1].id;
		let curso2 = cursos[1].nombre;
		let duracionCurso2 =  cursos[1].duracion;
		let valorCurso2 = cursos[1].valor;
	callback(idCurso2, curso2, duracionCurso2, valorCurso2);
}, 4000);
}

let mostrarcss = (callback) =>{
	setTimeout(function(){
		let idCurso3 = cursos[2].id;
		let curso3 = cursos[2].nombre;
		let duracionCurso3 =  cursos[2].duracion;
		let valorCurso3 = cursos[2].valor;
	callback(idCurso3,	 curso3, duracionCurso3, valorCurso3);
}, 6000);
}




function imprimir (){

console.log('Los cursos disponibles son: ')
console.log('ID' + '  Nombre' + '       Duracion' + '    Valor')

mostrarnode (function(idCurso1, curso1, duracionCurso1, valorCurso1){
	imprimir1= (idCurso1 + '  '+ curso1 + '      ' + duracionCurso1 + '          ' + valorCurso1);
})
mostrarjavascript (function(idCurso2, curso2, duracionCurso2, valorCurso2){
	imprimir1 = (idCurso2 + '  ' +  curso2 + '   ' + duracionCurso2 + '          ' + valorCurso2);
})
mostrarcss (function(idCurso3,	 curso3, duracionCurso3, valorCurso3){
	imprimir1 = (idCurso3 + '  ' + curso3 + '          ' + duracionCurso3 + '          ' + valorCurso3);
})

}


const matricula = {
	idCurso:{
		demand : true,
		alias: 'i'
	},
	cedulaEst:{
		demand : true,
		alias: 'c'
	},
	nombre :{
		demand : true,
		alias:'n'
	}


}

const argv = require('yargs').command('inscribir', 'Resultado' , matricula).argv


let inputId = argv.i;

let inscribir = cursos.find(function(curso){
	return curso.id == argv.i;
});
	if (typeof argv.i == 'undefined'){
		
		imprimir();
	}else{
		if (typeof inscribir == 'undefined'){

			console.log('El curso ingresado no existe');
			imprimir();

		}else{

			datos = ( 'El curso a matricular es: ' + inscribir.nombre + '<br>El estudiante a matricular se llama: ' + argv.n + ' y su cedula es: ' + argv.c);
			
			app.get('/', function (req, res) {
  			res.send(datos)
			})
 
			app.listen(3000)
	   
		}
	}

