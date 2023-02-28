

/*console.log("Hola mundo");

let numero1 = 3;
let numero2 = 4;

let resultado =numero1+numero2;
console.log("la suma de numero1 y numero2 es:"+ resultado
)
document.getElementById('boton').onclick =function(){

   console.log("capturamos el evento click");



    document.getElementById("demo").innerHTML="estamos probando nuestro primer eventodoc"

 }
 
 document.addEventListener("click",function(){
    console.log("hola mundo desde eventlistener");
    document.getElementById("demo").innerHTML="estamos probando nuestro primer eventodoc"
 });*/

 document.getElementById('boton').addEventListener("click",function(){
    console.log("hola mundo desde eventlistener");
    document.getElementById("demo").innerHTML="estamos probando nuestro primer eventodoc"
 });



 
 document.getElementById('boton_ocultar').addEventListener("click",function(){
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}

