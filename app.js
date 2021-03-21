require('colors');

const { menu,
        pausa,
        leerInput,
       } = require('./helpers/inquirer');
const Tareas = require('./helpers/models/tareas');

console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await menu();

        switch (opt) {
            case '1': // crear opcion: Cuál es el valor de la tarea que quieres agregar
                const desc = await leerInput('Descripción:');
                console.log(desc);
                break;
        
            case '2':
                console.log(tareas._listado);
                break;
        }

        await pausa();

    } while ( opt !== '0' );
}

main();