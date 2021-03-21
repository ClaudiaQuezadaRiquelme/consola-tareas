require('colors');
const { menu, pausa } = require('./helpers/inquirer');
const Tareas = require('./helpers/models/tareas');

console.clear();

const main = async () => {
    let opt = '';

    do {
        opt = await menu();
        await pausa();

    } while ( opt !== '0' );
}

main();