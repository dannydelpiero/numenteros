/*
console.log("inicio del programa");
var segundosPorMinuto=60;
var minutosPorHora=60;
var horasPorDia=24;

var segundosPorDia=segundosPorMinuto *minutosPorHora * horasPorDia;
document write("<h1>Calculadora del tiempo</h1><p> Hay"+segundosPorDia  +"en un dia</p>");
console.log("fin del programa");
*/

/*
console.log("inicio del programa");
var peliculasVistas = prompt("Cuantas peliculas as visto este mes?");
var seriesVistas = prompt("Cuantas series as visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas)+parseInt(seriesVistas);
alert ('Wow! Has visto ' + tiempoPantalla+" veces minimo la pantalla");
console.log("fin del programa");
*/

/*
console.log("inicio del programa");
var dado = Math.floor(Math.random() * 6) + 1;
alert ("Dado dice: " + dado);
console.log("fin del programa");
*/

/*
console.log("inicio del programa");
var numero = prompt("Ingresa un numero:");
var aleatorio = Math.floor(Math.random()* numero)+1;
alert('Numero entre 1 y' + numero+ " es: " +aleatorio);
console.log("fin del programa");
*/

/*
console.log("inicio del programa");
var numero = prompt("Ingresa un numero del 1 al 10: ");

var aleatorio = Math.floor(Math.random()* 10)+1;


if (parseInt(numero)===parseInt(aleatorio))
 { 
 	alert("Adivinastes el numero");
	}
  else
  	{
  		alert("Incorrecto!. El numero es: "+ parseInt(aleatorio) );
  		}

console.log("fin del programa");
*/
console.log("inicio del programa");
var numero = prompt("Ingresa un numero del 1 al 10: ");

var aleatorio = Math.floor(Math.random()* 10)+1;


if (parseInt(numero)>parseInt(aleatorio))
 { 
 	alert("El numero ingresado " +parseInt(numero) +" es mayor a "+ parseInt(aleatorio));
	}
  else if (parseInt(numero)<parseInt(aleatorio))
  	{
  		alert("El numero ingresado " +parseInt(numero) +" es menor a "+ parseInt(aleatorio) );
  		}

console.log("fin del programa");
