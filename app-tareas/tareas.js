const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',    
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribir: function (arrayTareas){
        let arrayJson =  JSON.stringify(arrayTareas, null, 4);
        fs.writeFileSync(this.archivo, arrayJson, 'utf-8');
    },
    guardarTarea: function(objetoTarea){
        let informacionArchivo = this.leer();
        let arrayNuevo = informacionArchivo.push(objetoTarea);
        return this.escribir(arrayNuevo);
    },
    leerPorEstado : function(estadoTarea){
        let tareasArchivo = this.leer();
        let arrayFiltrado = tareasArchivo.filter(currentTarea => currentTarea.estado === estadoTarea)
        return arrayFiltrado;
    }
}

module.exports = archivoTareas;
