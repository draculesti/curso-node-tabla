const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar',
    })
    .option('f', {
        alias: 'factor',
        type: 'number',
        demandOption: true,
        default: 10,
        describe:'hasta que numero queremos que lo multiplique',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabal en consola',
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
.argv;


module.exports = argv; 