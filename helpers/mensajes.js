require('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('=============================='.green);
    console.log('    Seleccione una opción'.green);
    console.log('=============================='.green);

    console.log(`1. Crear una tarea`);
    console.log(`2. Listar tareas`);
    console.log(`3. Listar tareas completadas`);
    console.log(`4. Listar tareas pendientes`);
    console.log(`5. Completar tarea(s)`);
    console.log(`6. Borrar tarea`);
    console.log(`0. Salir\n`);
    console.log(`1. `);
    console.log(`1. `);

};


module.exports = {
    mostrarMenu
}