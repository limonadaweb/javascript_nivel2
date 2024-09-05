//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.
alert("Hola")
console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'
//Escribe tu código aquí
const age = 18;
if (age >= 18){
console.log ("Eres mayor de edad");
} 
else{
    console.log ("No eres aún mayor de edad");
};

    

//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
//Escribe tu código aquí

const age2 = 18;
if (age2 <=12){
console.log ("Eres mayor de edad");
} 
else{
    console.log ("No eres aún mayor de edad");
};



//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"
//Escribe tu código aquí
const pet = "perro"; // Puedes cambiar el valor de pet para probar otros casos
if (pet === "perro") {
    console.log("Tengo un perro");
} else{
  console.log("No tengo un perro")
}

const pet2 = "gato"; // Puedes cambiar el valor de pet para probar otros casos
if (pet2 === "gato") {
    console.log("Tengo un gato");
} else {
    console.log("No tengo un gato");
}

const pet3 = "pájaro"; // Puedes cambiar el valor de pet para probar otros casos
if (pet3 === "pájaro") {
    console.log("Tengo un pájaro");
} else {
    console.log("No tengo un pájaro");
}

const pet4 = "pez"; // Puedes cambiar el valor de pet para probar otros casos

if (pet4 !== "perro" && pet !== "gato" && pet !== "pájaro") {
    console.log("No tengo una mascota convencional");
} else {
    console.log("Tengo una mascota convencional");
}

//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
//Escribe tu código aquí
const pet5 = "serpiente";
if ( pet5 === "serpiente"){
    console.log ("Es una serpiente");

}else{
    console.log ("No es una serpiente");
}

//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.
//Escribe tu código aquí
switch (pet) {
    case 'perro':
        console.log("Es un perro");
        break;
    default:
        console.log(pet);
}




//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"
//Escribe tu código aquí

const weather = "soleado"; // Puedes cambiar el valor de weather para probar otros casos

const outfit = weather === "soleado" ? "Me vestiré con un vestido" : "Me vestiré con pantalón";

console.log(outfit);

const weather2 = "nublado";
console.log("El clima no es soleado");

// Operador ternario: (condición ? verdadero : falso)
let dress = weather2 === "nublado" ? "No usaré un vestido" : "Me vestiré con un pantalón";

console.log("Me vestiré con un pantalón");




//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.
//Escribe tu código aquí
const weatherx = "frío";

let coat = weatherx === "frío" ? "No usaré un vestido" : "Me vestiré con un pantalón";

console.log (" El clima está frío") 
       
//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.
//Escribe tu código aquí
const value = 42; // Puedes cambiar este valor a un número, string o cualquier otro tipo para probar

if (typeof value === "number") {
    console.log("Es un número");
} else if (typeof value === "Hola") {
    console.log("Es un string");
} else {
    console.log("No es ni número ni string");
}

const value1= "Hola, soy un string"; // Ahora el valor es un string

if (typeof value1=== "string") {
    console.log("Es un string");
} else {
    console.log("No es ni número ni string");
}

const value2 =  "undefined"; //Ahora  valor no es ni número ni string

if (typeof value2=== "undefined"){
    console.log("No es ni número ni string");
}else {
  console.log ("No es ni un número ni un string");
}
//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 
//Escribe tu código aquí

const programmers = [
    { firstName: "Ada", lastName: "Lovelace", contribution: "la máquina analítica" },
    { firstName: "Grace", lastName: "Hopper", contribution: "el compilador y el lenguaje COBOL" },
    { firstName: "Margaret", lastName: "Hamilton", contribution: "el software de navegación para el programa Apollo" },
    { firstName: "Katherine", lastName: "Johnson", contribution: "los cálculos de trayectoria para la NASA" }
];

for (const index in programmers) {
    const programmer = programmers[index];
    console.log(`${index}: ${programmer.firstName} ${programmer.lastName}, su aporte fue ${programmer.contribution}`);
}



//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.
//Escribe tu código aquí
const names = ['Rocío', 'Lola', 'Antía', 'Laura', 'Noelia']
for (const name of names) {
    console.log(`Hola, mi nombre es ${name}`);
}

//Ejercicio 12: Con un bucle "while" imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.
//Escribe tu código aquí
let f = 2;
do {
    console.log(f);
    f++;
} while (f <= 5);
