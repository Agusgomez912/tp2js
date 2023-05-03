var lado1=parseInt(prompt("ingrese lado 1"));
var lado2=parseInt(prompt("ingrese lado 2"));
var lado3=parseInt(prompt("ingrese lado 3"));

if(lado1==lado2 && lado3==lado2){
 alert("Triángulo equilátero")

}else if(lado1 != lado2 && lado1 !=lado3 && lado2 !=lado3){
alert("Triángulo escaleno");
}else
if(lado1=lado2 || lado1==lado3 || lado==lado3)
alert("Triángulo isósceles")