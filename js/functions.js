// alert("functions activo")
// ############### tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para varibles globales 
var days = 10;
var name = "fraider ";
// let para variables de bloque o locales 
let count = 1; 
// ############### formas de impresion
//alert
// alert(name);
//cosole.log

console.log(name);
//body pantalla
document.write(name + " tarazona");
document.getElementById("box_one").innerHTML = "<h1>fraider tarazona</h1>"
document.getElementById("box_two").innerText = "<h1>fraider tarazona</h1>"
//librerias

// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )

// Swal.fire({
//     icon:'error',
//     showConfirmButton:false,
//     title:name,
//     text:name,
//     footer:"footer: " + name,
//     background: "green",
//     position:'top-start'
// });
// ###############tipos de datos
var number_one =20;
var number_two =5.5;
//text
var class_type ="electiva Tecnica 1";
//booleanos
var boolean =true; // false
// array - vectores
var array_num = [1,2,3,4,5,6];
var array_tex = ["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"];
var array_mix =  [1,"a",2,"c"];
var array_mil= [
    {name:"", last_name:"fraider" ,age:"32"},
    {name:"", last_name:"antonio" ,age:"2"},
    {name:"", last_name:"morales" ,age:"12"},
    {name:"", last_name:"tarazona" ,age:"22"},
]
// ############### operadores basicos

//suma
var suma = number_one + number_two;
console.log("suma "+suma);
//resta
var resta = number_one - number_two;
console.log("resta "+resta);
//multipicacion
var multiplicacio = number_one * number_two;
console.log("multiplicacion "+multiplicacio);
//division
var division = number_one / number_two;
console.log("division "+division.toFixed(2));
//modulo
var modulo= number_one % number_two;
console.log("modulo "+modulo);