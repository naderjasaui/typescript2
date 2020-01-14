// declarar variables
let num1 : number = 1
let num2 : number = 2
 
let suma = num1 + num2
// imprimir
 
// console.log(`la suma pimpinelistica es ${suma}`)
 
// tipo de variables
 
let terminado : boolean = false
terminado = true
 
let nombre : string = "Peeps"
let edadej : null
edadej = null
let pupi : undefined
 
// una variable puede tener doble tipo ( | significa or)
let edad : number | null
 
edad = 19
edad = null
 
//funciones
 
function sumar (sum1 : number , sum2: number ) : number
{
 
    return sum1 + sum2
}
 
// funcion mas optimizada
 
let sumar2 :  Function = (s1: number, s2: number) => {
    return s1 + s2
}
 
console.log(`La suma es ${sumar2(num1,num2)}`)
 
 
 
//crear interfaces
 
interface Persona
{
    nombre : string
    edad : number | undefined | null
}
 
let pepito : Persona = {
    nombre : "Pepito" ,
    edad : 31
}
 
let juanita : Persona = {
    nombre : "Juanita" ,
    edad : undefined
}
 
console.log(`La edad de ${pepito.nombre} es ${pepito.edad}`)