"use strict" /* modo de 'estricto' activo, nos permite escribir condigo sin darle otro uso a palabras reservadas y ajustarnos a las convenciones del lenguaje. */

//alert("hola mundo desde un archivo externo javascript");
//console.log("hola consola");

var nombre = "sublime"; /* variable local */
console.log(nombre)

function cambio(){
	nombre="chan" /* sin 'var' se cambia el valor de una variable definida */ 
	console.log(nombre)
}
function saludo(){
	var nombre = "atom"; /* nueva variable dentro de otro ambito */ 
	console.log(nombre)
	let marca = "Microsoft"; /* 'let' al igual de 'var' establece una variable en un ambito o bloque */ 
	console.log(marca)
}
// cambio()
// saludo()

/* concatenaciones */
// console.log("2","a","b") /* las comas son remplazadas por espacios */
// console.log("2"+"a"+"b") /* une los strings */
// console.log("2"+3+4) /* realizala suma de los tres numeros */
// console.log("2"+"4") /* suma los dos numeros aunque sean strings */

function suma(a,b){
	return a+b;
}
//console.log(suma(5,5))

/* OBEJETOS en javascript*/
	var persona = { 
		nombre:"carlos",
		apellido:"mejia",
		edad:30,
		nombreCompleto:function(){ /* los objetos tambien pueden tener funciones dentro */
			return this.nombre+" "+this.apellido
				/* 'this' llama a la variable dentro del ambito */
		}};

/* imprimiendo propiedades del objeto */
	document.getElementById("objetoPersona").innerHTML = persona.nombre+" "+persona["apellido"];

/* imprimiendo funcion dentro del objeto */
	console.log(persona.nombreCompleto())

/* Botton con javascript y HTML */
	function mensajeSi(){
		var mensaje = "Hola Mundo";
		document.getElementById("demo").innerHTML = mensaje;
	}
	function mensajeNo(){
		document.getElementById("demo").innerHTML = "";	
	}

/* ARRAYS en javascript*/
	var lista = Array("a","a","a","a");
	var lista2 = ["a","b","a","a"]
	console.log(lista) , console.log(lista2)

/* CONSTANTES */
	const valor = 3.14;

/* Cadenas de texto o string */
	var comillas = "hola mundo";
	var comillasSimples = 'hola mundo';
	var comillasAnidadas = " 'hola mundo' ";
	var edad = 13
	var edadTxt = String(edad);

// Booleanos
	var estado = true
	var estado = Boolean(10>9) // imprime true ya que 10 es mayor a 9

// Fechas o Dates
	var fecha = new Date()
	console.log("la fecha es: "+fecha.getDay(),fecha.getMonth(),fecha.getFullYear())

// Simbolos
	// los simbolos son funciones que almacenan valores unicos como si fueran constantes.
	var simbolo1 = Symbol("produccion")
	console.log("simbolo actual: ",simbolo1)

// JSON -> JavaScript Object Notation
	var persona = {"nombre":"jack","edad":23,"estado":true}
	// convertir texto a JSON:
		var personaJSON = JSON.stringify(persona)
			console.log(personaJSON)
	// convertir JSON a texto:
		var personaTexto = JSON.parse(personaJSON)
			console.log(personaTexto)

// Operadores aritmeticos
	var numero = 120
		console.log("incremento ++ "+ numero++)
		console.log("decremento -- "+ numero--)

// Operadores logicos
	var datoA = 10
	var datoB = 20

	// AND &&
	var and = (datoA > datoB && datoB > datoA)
	console.log("operador and: "+and)
	// OR ||
	var or = (datoA > datoB || datoB > datoA)
	console.log("operador or: "+or)
	// NOT !
	var not = !(datoA == 10)
	console.log("operador not: "+not)

// concatenacion de texto y numero
	var c = 10+"9" // une los dos tipos de valores como texto
	console.log("la union de "+10+" y 9 es igual a: "+c)

// Operador Ternario o Condicional
	var resultado = datoA > datoB ? "a es mayor":"b es mayor"
	console.log("resultado de operador ternario: ",resultado)

// funcion Tipo de dato - typeof
	console.log("El tipo de dato de a es: ", typeof datoA)
	console.log("El tipo de dato de persoanaTexto es: ", typeof personaTexto)

// Switch case
	switch (datoA) {
		case 10:
			console.log("el numero es ", datoB)
			break;
		case 20:
			console.log("el numero es ", datoB)
			break;
		default:
			console.log("Ninguno de los casos coincide")
			break;
	}

/* bucles o siglos o iteradores 
	exiten dos tipos:
		Definicidos: los cuales se saben cuantas veces se ejecutaran.
			For
		Indefinidos: los cuales no se saben cuantas veces se ejecutaran.
			While y Do While
*/
	// for
	var producto = 5
	for (let x = 0; x<producto;x++){
		console.log("prducto No."+x+1)
	}
	// while
	// este siglo primero evalua la condicion y luego ejecuta
	while(producto>0){
		console.log("prducto No."+producto)
		producto--
	}
	// Do While
	// este siglo primero ejecuta el codigo y luego ejecuta la condicion, es decir al menos se ejecuta una vez
	var n = 1
	do {
		n++
	}while(n==1);
	console.log(n)

// Funciones
	// inicializacion de parametros
	function operacion(cantidad = 20){
		console.log("la cantidad es: ",cantidad)
	}
	operacion(); operacion(100);

	// parametros de tipo REST o resto
	// son paramtros cualquier cantidad de parametros o elementos
	function abecedario(...letras){
		console.log("Funcion Abecedario():");
		for(let x = 0; x < letras.length; x++){
			console.log("Letra No.",x,": ", letras[x]);
		}
	}
	abecedario("a","b","c","d","e","f")

	// parametros de tipo SPREAD o Expancion o Propagacion
	function abecedario2(a,b,g){
		
		console.log("Funcion Abecedario2():");
		console.log(a);
		console.log(b);
		console.log(g);
	}
	var lista_letras = ["a","b"];
	abecedario2(...lista_letras, "g");

// funciones anonimas
	var funcionAnonima = function(){
		var mensaje = "hola mundo";
		return mensaje;
	}

// CallBacks
	// son funciones que reciben como parametro tambien funciones
	var imprimir = function (x=0){
		console.log("la suma es: ", x);
	}
	function suma(numero1, numero2, func_imprimir){
		var resultado = numero1 + numero2;
		func_imprimir(resultado);
	}
	suma(12,23, imprimir)

// Funciones flecha: las funciones flecha tambien sirven como funciones anonimas.
	// con un solo parametro:
	var generar = variable => "Hola "+variable 

	// con varios parametros:
	var generar2 = (variable1,variable2) => {variable1+" "+variable2} // colocar {} es opcional
	// sin parametros
	var saludo = () => "Hola Mundo";

// operador this
	const boton = document.querySelector('.boton');

	boton.addEventListener('click', function(){
		console.log(this) // imprime todo la etiqueta HTML
	})
	/*
	boton.addEventListener('click', function(){
		console.log(this.innerHTML); // imprime el texto del boton
	})

	boton.addEventListener('click', ()=>{
		console.log(this) // imprime todas las propiedades de la ventana abierta en el navegador, las cuales se pueden modificar
		this.location = "https://www.google.com";
	})
	
	*/




