//tipos de operadores:Aritmeticos son:suma, resta, divicion,multiplicacion
var suma=4+4;
var resta=5-4;
var multiplicacion=5*4;
var divicion=4/2;
alert(suma);


//Logicos: &&,||,
var n1=2;
var n2=3;
if (n1<n2 && n1>n2) {
alert(n1);

} else {
	if (n1<n2 || n1>n2) {
alert(n2);
}


//asignacion:x = y,x += y,x -= y,x *= y,x /= y,x %= y,x **= y
var n3=5;
n3*=5;
alert(n3);

//Comparacion:
/*igual a ==
no igual !=
> mayor que
< menor que
>= mayor o igual que
<= menor igual que*/
var num=2;
var num1=3;
if (num<=num1) {

}

//string:
 var nombre:"Paula";

//ternario
var a = 11;
var numberLiteral = a == 5 ? 'Five' :
                    a == 7 ? 'Seven' :
                    a == 11 ? 'Eleven' :
                    a == 15 ? 'Fifteen' :
                    'Other Number';
 
console.log( numberLiteral ); // Eleven

//delete
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];

//typeof
var miFuncion = new Function("5+2")
var forma="redonda"
var tamano=1

//El operador typeof devuelve los siguientes resultados para estas variables
typeof miFuncion == 'function'   
typeof forma == 'string'
typeof tamano == 'number'



//this
function f1(){
  return this;
}





//void
<a href ='javascript:void(0)'> Haga click aquí para no hacer nada </a>





