let  personas = new Array(6);
function agregarPersona (numero) {
    let contador = numero;
    /*let nombre = prompt("Ingrese el nombre de la persona");
    let cedula = prompt("Ingrese la cedula");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento");
    let correo = prompt("Ingrese el correo");
    let ciudadResidencia = prompt("Ingrese ciudad de residencia");
    let ciudadOrigen = prompt("Ingrese ciudad de origen");
    let cancioneFavorita1 = prompt("Ingrsese la primera cancion favorita");
    let cancioneFavorita2 = prompt("Ingrsese la segunda cancion favorita");
    let cancioneFavorita3 = prompt("Ingrsese la tercera cancion favorita");*/
    let persona = {
        nombre : prompt("Ingrese el nombre de la persona"),
        cedula : prompt("Ingrese la cedula"),
        fechaNacimiento : prompt("Ingrese la fecha de nacimiento"),
        correo : prompt("Ingrese el correo"),
        ciudadResidencia : prompt("Ingrese ciudad de residencia"),
        ciudadOrigen : prompt("Ingrese ciudad de origen"),
        cancionesFavoritas : [prompt("Ingrsese la primera cancion favorita"), prompt("Ingrsese la segunda cancion favorita"), prompt("Ingrsese la tercera cancion favorita")]
    };
    personas[contador] = persona;
}
function mostrarInformacion (opcion) {
    let persona = personas[opcion];
    console.log(persona.nombre);
    console.log(persona.cedula);
    console.log(persona.fechaNacimiento);
    console.log(persona.correo);
    console.log(persona.ciudadResidencia);
    console.log(persona.ciudadOrigen);
    console.log(persona.cancionesFavoritas);
}
var opcion = 0;
do {
    var numero = 0;
    alert("¿ Que deseas hacer? 1. Agregar una persona 2. Mostrar informacion 3.Salir");
var opcion = parseInt(prompt("Ingrese la opcion"));
if ( opcion == 1 ){
    agregarPersona(numero);
} else if (opcion == 2) {
    let numero = parseInt(prompt("Ingrese el numero de la persona que desea consultar"));
    numero--;
    mostrarInformacion(numero);
} else if (opcion == 3){
    break;
}
numero++;
} while (opcion < 3);
