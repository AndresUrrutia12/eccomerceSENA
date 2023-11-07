let array1 = new Array(5);
let array2 = new Array(5);
let contador = 0;
let variable = 0;
do {
    let number = prompt("Ingrese el numero " + (contador + 1) + " del primer array");
    if (number > variable) {
        array1.push(number);
    } else{
        number = prompt("El numero tiene que ser mayor que el anterior");
        array1.push(number);
    }
    
    variable = number;
    contador++;
} while (contador < 5);
console.log(array1);
contador = 0;
variable = 0;
do {
    let number = prompt("Ingrese el numero " + (contador + 1)+ " del segundo array");
    if (number > variable) {
        array2.push(number);
    } else{
        number = prompt("El numero tiene que ser mayor que el anterior");
        array2.push(number);
    }
    variable = number;
    contador++;
} while (contador < 5);
console.log(array2);
let finalArray = array1.concat(array2);
finalArray.sort();
console.log(finalArray);