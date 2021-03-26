//learn my first lesson
var palabra = "hello world";
console.log(palabra);
//define two variables
var x , y ;
for (x=1;x<10;x++) {
    console.log(y=2+x+3);
}
//quadratic equation
const a=1;
const b=-3;
const c=2;
var x1;
var x2;
var disc= b**2-4*a*c;
if (disc<0){
    console.log("no tiene solucion")
}else {
    x1=(-b+Math.sqrt(disc))/2;
    x2=(-b-Math.sqrt(disc))/2;
    console.log("las raices son:", x1, "",x2)
}