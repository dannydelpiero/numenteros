/*funciones*/
/*
function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
	alert(dado);
}
alert("Tiramos 3 dados: ");
tiraDados();
tiraDados();
tiraDados();
*/

/*funciones y retornos*/
/*function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
	return dado;
}

alert("Tiramos 3 dados: ");
alert("El dado dice: "+ tiraDados());
var multiplo=2+tiraDados();
alert("El multiplo de bonus es: "+multiplo);
*/

/*argumento en las funciones*/
/*
function numeroAlAzarHastaLimite(limite)
{
	var num= Math.floor(Math.random()*limite)+1;
	return num;
}
var numAzar=numeroAlAzarHastaLimite(100);

alert("Numero " + numAzar);
*/


/*ejercicio*/
/*function maximo()
{
	if (parseInt(num1)>parseInt(num2)) 
	{	alert("El mayor es el primer numero: " + num1 );

		} else
			{
					alert("El mayor es el segundo numero: " + num2 );
				}
}
var num1= Math.floor(Math.random()*100)+1;
alert("Primer numero es: " +num1);
var num2= Math.floor(Math.random()*100)+1;
alert("Segundo numero es: " +num2);
maximo();
*/

/*
function saludo()
{
	var mensaje = "hola a todos";
	alert(mensaje);
}
var mensaje= "Chao";
saludo();
alert(mensaje);
saludo();
*/

/*errores provocados*/
/*
var num="tre";
if(isNaN(num))
{
	throw new Error("no es un numero valido");
}else
{
	num=num*0.5;
}
*/

/*desafio*/
/*function maximo(ls, li)
{
	if(isNaN(ls) || isNaN(li))
 	{ throw new Error("Ud no ha ingresado numero");}
var num=Math.round(Math.random()*(ls-li))+li;
return num;
}

var ls = prompt("Ingresa limite superior: ");
var li = prompt("Ingresa limite inferior: ");

alert("Su numero al azar es: " + maximo(parseInt(ls),parseInt(li)));
*/

/*while loop*/
/*
function maximo(ls, li)
{
	if(isNaN(ls) || isNaN(li))
 	{ throw new Error("Ud no ha ingresado numero");}
var num=Math.round(Math.random()*(ls-li))+li;
return num;
}

var ls = prompt("Ingresa limite superior: ");
var li = prompt("Ingresa limite inferior: ");

alert("Su numero al azar es: " + maximo(parseInt(ls),parseInt(li)));

var contador =0;
while (contador<10)
	{
		var randomico=maximo(parseInt(li), parseInt(ls));
		document.write(randomico+ " ");
		contador++;
	}
*/

function maximo()
{
var contador=0;
while(true)
{   var num = Math.floor(Math.random()* 100)+1;
	contador++;
	if(num===aleatorio){
		break;
	} 

}
document.write(contador+ " veces se ha buscado el numero:" + aleatorio);
}


var aleatorio = Math.floor(Math.random()* 100)+1;
alert("Su numero al azar es: " + parseInt(aleatorio));
maximo();
