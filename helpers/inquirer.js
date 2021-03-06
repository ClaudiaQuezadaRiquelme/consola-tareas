const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`
            },
        ]
    }
];

const menu = async () => {
    // console.clear();
    console.log('=============================='.green);
    console.log('    Seleccione una opción'.green);
    console.log('=============================='.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    console.log('\n');
    const { pausa } = await inquirer.prompt([
        {
            type: 'input',
            name: 'pausa',
            message: `\nPresione ${ 'Enter'.green } para continuar\n`,
        }
    ]);
    return pausa;
}

const leerInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                return ( value.length === 0 ) ? 'Por favor, ingrese un valor' : true;
            }
        }
    ];
    const { desc } = await inquirer.prompt( question );
    return desc;
}


module.exports = {
    menu,
    pausa,
    leerInput
}