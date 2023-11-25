// alert("FUCTION ACTIVO CHAMO");
// ####################### Tipo de variable
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days= 10;
var name = "Fraider Tarazona";
// let para variables de bloque o locales 
let count = 1;

// ################ formas de impresion
// alert
// alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "######Fraider Tarazona");
document.getElementById("box_one").innerHTML = "<h1>Fraider Tarazona</h1>"
document.getElementById("box_two").innerText = "<h1>Fraider Tarazona</h1>"
// librerias
// Swal.fire({
//      icon: 'error',
//      showConfirmButton: false,
//      title:name,
//      text:name,
//      footer: "footer " + name,
//      background: 'green',
//      position: 'top-start'
// });


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
var array_mul = [
    {name: "Fraider",last_name:"Tarazona",age:"20"},
    {name: "Maria",last_name:"Jose",age:"23"},
    {name: "Valery",last_name:"sofia",age:"5"},
    {name: "angie",last_name:"Tarazona",age:"15"}
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
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disable= true;
   let date = new Date();
   console.log(date.getMinutes());
   for(let j=0; j<array_mul.length; j++){
    console.log(array_mul[j].name);
   }
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
function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style = document.getElementById("nombres");
    if(nombres.length > 2 ){
        nombres_style.style.border = "2px solid green";
        document.getElementById("apellidos").disable= false;
        document.getElementById("apellidos").focus();
        ducument.getElementById("nombres").value = "";
       alert(nombres.split(" "));
    }
   
}