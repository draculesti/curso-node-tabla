const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();



crearArchivo( argv.b, argv.l, argv.f )
    .then(nombrearchivo => console.log(nombrearchivo .bgCyan, 'creado'))
    .catch(err => console.log(err.red));







