import { Address , Estudiante } from "./tipos";

const mostrarEstudiante = (estudiante : Estudiante) => {
    //Informacion del estudiante
    console.log(`Nombre : ${estudiante.nombre}`);
    console.log(`Apellido : ${estudiante.apellido}`);
    console.log(`Edad : ${estudiante.edad || "NO DEFINIDO" }`);
    console.log("DIRECCIONES")
    estudiante.addresses?.forEach((direccion: Address) => {
        console.log(`Calle : ${direccion.street}`)
        console.log(`Numero : ${direccion.numero}`)
        console.log(`City : ${direccion.city}`)
        console.log("------------------")
    })
}

export default mostrarEstudiante;