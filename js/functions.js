// alert("FUCTION ACTIVO CHAMO");
// ####################### Tipo de variable
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days= 10;
var name = "Wilder Duarte";
// let para variables de bloque o locales 
let count = 1;

// ################ formas de impresion
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "######Wilder duarte");
document.getElementById("box_one").innerHTML = "<h1>Wilder Duarte</h1>"
document.getElementById("box_two").innerText = "<h1>Wilder Duarte</h1>"
// librerias
Swal.fire({
     icon: 'error',
     showConfirmButton: false,
     title:name,
     text:name,
     footer: "footer " + name,
     background: 'green',
     position: 'top-start'
});


// ############### tipos de datos

// numericos

var number_one = 20;
var number_two = 5.5;

// texto 
var clase_type = "electiva Tecnica 1";

// boleanos
var boolean = true; //false

// arrays - vectores

var array_num = [1,2,3,4,5,6];
var array_text = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var array_mix = [1,"a",2,"c"];
var array_mu = [
    {name: "Wilder",last_name:"Duarte",age:"31"},
    {name: "Anyi",last_name:"Martinez",age:"32"},
    {name: "Celeste",last_name:"Duarte",age:"3"},
    {name: "Antonella",last_name:"Duarte",age:"1"}
]

// ############# operadores basicos 
//Suma
var suma = number_one + number_two;
console.log("Suma = "+suma);
// resta
var resta = number_one - number_two;
console.log("Resta = "+resta);
// multiplicacion
var multi = number_one * number_two;
console.log("Multiplicacion = "+multi);
// division
var divi = number_one / number_two;
console.log("Division = "+divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("Modulo = "+modulo);
// operadores logicos y estructuras condicionales (inverse, incremento y decremento)
// And && con if - Ampersand
var bool = false;
var numeric = "10";
if(!bool && numeric === "10"){ //bool == true
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}

if(!bool || numeric == 7){
    console.log("ENTRA IF");
    numeric++;
}else{
    console.log("ENTRA ELSE");
    numeric--;
}
console.log(numeric)
//FOR 
// for(let j = 0; j<array_text.length; j++){
//     console.log(array_text[j]+" "+(j+1))
// }
// while
// let f = 0;
// while(f<array_text.length){
//     console.log(array_text[f]+" "+(f+1));   
//     f++
// }
// do while
let x = 0;
do{
    console.log(array_text[x]+" "+(x+1));
    x++;
}while(x<array_text.length);

// FUNCIONES Y EVENTOS

function load_page(){
    alert("LA PAGINA SE HA CARGADO CORRECTAMENTE");
}
function change_Color(){
    document.body.style.backgroundColor="red";
    document.body.style.color="white";
}

const clear_color = document.querySelector("#clear_color");
clear_color.addEventListener("dblclick",() => {
    document.body.style.backgroundColor="#fff";
    document.body.style.color="#000";
})

// REGISTRO FORMULARIO
const form_register = document.getElementById("form_register");
