const Tarea = require("./tarea");

/* 
 * _listado:
 *     { 'uuid-12345-12345-2: { id:12, desc:asd, fechaCompletado: 999876} }
 */
class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;