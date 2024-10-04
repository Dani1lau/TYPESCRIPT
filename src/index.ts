import mostrarEstudiante from "./mostrarEstudiante";
import { Estudiante } from "./tipos";


//Definir varibales del tipo dado

const e1 : Estudiante = {
    nombre : "Daniel",
    apellido : "Ramirez",
    edad: 15,
    addresses : [
    {
        street : "Siempre viva",
        numero : 91,
        city : "Bogotá"
    },
    {
        street : "Siempre viva",
        numero : 11,
        city : "Bogotá"
    }
    ]
}

const e2 : Estudiante = {
    nombre : "Petunia",
    apellido : "Rojas",
    edad : 25,
    addresses : [
    {
        street : "Suba rincon",
        numero : 56,
        city : "Bogotá"
    },
    {
        street : "Suba rincon",
        numero : 11,
        city : "Bogotá"
    },
    {
        street : "Siempre viva",
        numero : 41,
        city : "Bogotá"
    }
    ]
}


//Llamar al metodo 'mostrarEstudiante'
//para mostrar la info del estudiante


//Crear un arreglo para almacenar estudiantes 
let arregloEstudiantes : ( number | string | Estudiante ) []  = [];

arregloEstudiantes.push(2)
arregloEstudiantes.push("Jorge")
arregloEstudiantes.push("Carlos")
arregloEstudiantes.push(3);


//Metodo para agregar un estudiante:
const addEstudiante = (e : Estudiante) => {
    //Instrucciones para agregar el estudiante
    //al arreglo
    arregloEstudiantes.push(e);
}

//recorrer el arregloEstudiantes
//mostrando solo los estudiantes 
arregloEstudiantes.forEach((elemento) => {
    //Crear una condicional en el if para determinas si en el 
    //elemento existe un objeto en tipo estudiante 
    if (typeof elemento === "object" && "nombre" in elemento) {
        mostrarEstudiante(elemento); // Mostrar el estudiante
    }
});

// Agregar estudiantes al arreglo
addEstudiante(e1);
addEstudiante(e2); 

mostrarEstudiante(e1);
mostrarEstudiante(e2);


/* // Método para añadir estudiante al principio del arreglo
function addEstudianteAlPrincipio(e: Estudiante) {
    arregloEstudiantes.unshift(e);
}


//Metodo para encontrar un estudiante por nombre y actualizar su apellido
function actualizarApellido(nombre: string, nuevoApellido: string) {
    const estudiante = arregloEstudiantes.find(e => e.nombre === nombre);
    if (estudiante) {
        estudiante.apellido = nuevoApellido;
    } else {
        console.log("Estudiante no encontrado");
    }
}


//Crear un metodo para encontrar los estudiantes que vivan en Bogotá y actualice su edad a 18 
//El metodo se va a llamar  actualizarEdadBogota
function actualizarEdadBogota(nuevaEdad: number) {
    // Filtrar estudiantes que viven en Bogotá
    const estudiantesEnBogota = arregloEstudiantes.filter(estudiante =>
        estudiante.addresses?.some(address => address.city === "Bogotá")
    );

    // Actualizar la edad de los estudiantes filtrados
    estudiantesEnBogota.forEach(estudiante => {
        estudiante.edad = nuevaEdad;
    });
}

//Metodo para borrar un estudiante por nombre y apellido
function borrarEstudiante(nombre: string, apellido: string) {
    // Filtrar el arreglo para excluir al estudiante que se quiere borrar
    arregloEstudiantes = arregloEstudiantes.filter(
        e => !(e.nombre === nombre && e.apellido === apellido)
    );
}

//Un metodo para borrar los estudiantes que tengan menos de 18 años y vivan en bogota
// el metodo se llamara borrarMenores
function borrarMenores() {
    arregloEstudiantes = arregloEstudiantes.filter(estudiante =>
        !(estudiante.edad! < 18 && estudiante.addresses?.some(address => address.city === "Bogotá"))
    );
}

addEstudiante(e1) */

//addEstudianteAlPrincipio(e2);

// Ejemplo de uso:
//actualizarApellido("Daniel", "Gonzalez");
//actualizarEdadBogota(18);


// Borrar un estudiante
//borrarEstudiante("Petunia", "Rojas");


// Borrar menores de 18 años que viven en Bogotá
//borrarMenores();
