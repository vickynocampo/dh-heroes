let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        tareas.forEach((tarea, indice) => console.log(indice + 1+ '. ' + tarea.titulo + ' - ' + tarea.estado));
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    case "crear" :
        let titulo = process.argv[3];
        let listatareas = archivoTareas.leer();
        listatareas.push({titulo: titulo, estado: 'pendiente' });
        console.log(listatareas);
        archivoTareas.escribir(listatareas)
        break;
    case "filtrar" :
        let estadoIngresadoTerminal = process.argv[3];
        console.log("Estas son las tareas de estado " + estadoIngresadoTerminal + ":")
        let listadoTareas = archivoTareas.leer();
        let tareasFiltradas = archivoTareas.leerPorEstado(estadoIngresadoTerminal);
        tareasFiltradas.forEach((tarea, indice) => console.log(indice + 1 + '. ' + tarea.titulo));
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar y crear');
        break;
}
