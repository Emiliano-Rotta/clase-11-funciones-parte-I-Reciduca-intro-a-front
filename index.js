// Uno de los ejercicios de tarea
// años a segundos

// // Crear un programa que pida ingresar una cantidad de años y muestre un mensaje con el resultado de la conversión en segundos.


// var años = prompt("escriba la cantidad de años")
// var meses = Number(años)*12
// var dias = años * 365
// var horas = dias *24
// var minutos = horas * 60
// var segundos = minutos * 60

// //este alert es concatenacion
// alert("en " + años + " año/s hay: " + meses + " meses, hay: " + dias + " dias, hay: " + horas + " horas, hay: " + minutos + " minutos y hay: " + segundos +" segundos.")

// //alert con interpolacion.(alt 96)

// alert (`En ${años} año/s hay: ${meses} meses, hay: ${dias} dias, hay: ${horas} horas, hay: ${minutos} minutos y hay ${segundos} segundos.`)


//Opcion 1 pero no es bueno..
// alert("Hola Dylan Bienveinidos a este curso de funciones!!")
// alert("Hola Emiliano Bienveinidos a este curso de funciones!!")
// alert("Hola Alexander Bienveinidos a este curso de funciones!!")
// alert("Hola Damian Bienveinidos a este curso de funciones!!")
// alert("Hola Joaquin Bienveinidos a este curso de funciones!!")
// alert("Hola Joaquin Bienveinidos a este curso de funciones!!")
// alert("Hola Agustin Bienveinidos a este curso de funciones!!")


//opcion 2
//defino la funcion 
// function saludar(nombre) {
//     alert(`Hola ${nombre} Bienveinidos a este curso de funciones!!`)
//     console.log(nombre)
// }


// // llamen o invoquen a la funcion
// saludar("Dylan")
// saludar("Emiliano")
// saludar("Joaquin")
// saludar("Joaquin")
// saludar("Alexander")
// saludar("Damian")
// saludar("Agustin")


//funcion PINTAR EL BODY

// var fondoBordo = document.querySelector("body")
// var titulo = document.querySelector("h1")

// function pintarBody(){
//     fondoBordo.style.backgroundColor = "brown"
//     titulo.style.color = "white"
// }

// pintarBody()

//EJERCICIO:

// crear una funcion llamada titulo que tome un h1, le agregue texto (textContent) le cambie el color de la letra y el color de fondo del body 

// let tituloH1 = document.querySelector("h1")
// let body = document.querySelector("body")

// function titulo (){
//     tituloH1.textContent = "Le agregué texto al h1"
//     tituloH1.style.color = "orange"
//     body.style.backgroundColor = "red"
// }

// titulo()


///////////////////PARAMETROS////////////

// let tituloH1 = document.querySelector("h1")
// let body = document.querySelector("body")

// function titulo (textoH1, colorTitulo, colorBody){
//     tituloH1.textContent = textoH1
//     tituloH1.style.color = colorTitulo
//     body.style.backgroundColor = colorBody
// }

// titulo( "cambiar el texto h1", "red", "black")

// let tituloH1 = document.querySelector("h1")
// let tituloH2 = document.querySelector("h2")
// let tituloH3 = document.querySelector("h3")

// function parametros (nombre, apellido, edad){
//     tituloH1.textContent = nombre
//     tituloH2.textContent = apellido
//     tituloH3.textContent = edad
// }


//valor por defecto
// function parametros (nombre = "Se olvido el nombre", apellido = "se olvido el apellido", edad = "se olvido la edad"){
//     tituloH1.textContent = nombre
//     tituloH2.textContent = apellido
//     tituloH3.textContent = edad
// }


// parametros ("Emiliano", "30 años")




//lo mismo pero con prompt

// function parametros (nombre = "Se olvido el nombre", apellido = "se olvido el apellido", edad = "se olvido la edad"){
//     tituloH1.textContent = nombre
//     tituloH2.textContent = apellido
//     tituloH3.textContent = edad
// }

// var nombrePrompt = prompt("escriba su nombre")
// var apellidoPrompt = prompt("escriba su apellido")
// var edadPrompt = prompt("escriba su edad")

// var edadANumero = Number(edadPrompt)

// parametros (nombrePrompt, apellidoPrompt, edadANumero)




//operaciones matematicas suma

// let tituloH1 = document.querySelector("h1")


// function suma (num1 = 0, num2 = 0){

//     let resultado = num1 + num2
//     tituloH1.textContent = `El resultado de la suma es: ${resultado}`
// }

// var numeroUno = Number(prompt("escribir un numero"))
// var numeroDos = Number(prompt("escribir un numero"))

// suma(numeroUno, numeroDos)


//PARTE PRACTICA REALIZAR LOS EJERCICIOS DE ESTA PÁGINA https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/14-funciones.md#restara-b
//MENOS EL DE PAR O IMPAR

//resta

// let tituloH1 = document.querySelector("h1")


// function resta (num1 = 0, num2 = 0){

//     let resultado = num1 - num2
//     tituloH1.textContent = `El resultado de la suma es: ${resultado}`
// }

// var numeroUno = Number(prompt("escribir un numero"))
// var numeroDos = Number(prompt("escribir un numero"))

// resta(numeroUno, numeroDos)


//calcular el area del triangulo


// let tituloH1 = document.querySelector("h1")


// function triangulo (base = 1, altura = 1){

//     let resultado = base * altura
//     tituloH1.textContent = `El resultado de la suma es: ${resultado}`
// }

// var numeroUno = Number(prompt("escribir un numero"))
// var numeroDos = Number(prompt("escribir un numero"))

// triangulo(numeroUno, numeroDos)

// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// function gritar (string) {
//     alert (`¡${string}!`)
// }

// gritar("te estoy gritando")