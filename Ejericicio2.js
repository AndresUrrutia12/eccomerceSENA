/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor. */
let edades = new Array(10);
let contador = 0;
do {
    let edad = prompt("Ingrese la edad " + (contador+1));
    if(edad > 0 && edad < 121){
        edades.push(edad);
    } else {
       edad = prompt("Valor no valido, la edad tiene que estar entre 1 a 120 años");
       edades.push(edad);
    }
    contador++;
} while (contador < 10);
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
  }
function menoresDeEdad () {
    let menores = 0;
      edades.forEach(element => {
        if ( element < 18){
            menores++;
        }
        
    });
    return "Hay " + menores + " menores de edad";
}
function mayoresDeEdad () {
    let mayores = 0;
      edades.forEach(element => {
        if ( element >= 18){
            mayores++;
        }
        
    });
    return "Hay " + mayores + " mayores de edad";
}
function adultosMayores () {
    let adultos = 0;
      edades.forEach(element => {
        if ( element >= 60){
            adultos++;
        }
    });
    return "Hay " + adultos + " adultos mayores";
}
function edadMenor (){
    let edadMenor = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (edades[i] < edadMenor) {
          edadMenor = edades[i];
        }
    }
    return "La edad menor es " + edadMenor;
}

function edadMayor () {
    let edadMayor = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
          edadMayor = edades[i];
        }
      }
    return "La edad mayor es " + edadMayor;
}
function promedio (){
    let promedio = 0;
    edades.forEach(element => {
        let number = Number.parseInt(element);
        promedio = (promedio + number)/edades.length;
    });
    return `El promedio de las edades es ${promedio}`;
}
console.log(menoresDeEdad());
console.log(mayoresDeEdad());
console.log(adultosMayores());
console.log(edadMenor());
console.log(edadMayor());
console.log(promedio());