const fs = require('node:fs');
const colors  = require('colors');

const crearArchivo = async (base = 5, listar, factor = 10) => {

    try {

        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= factor; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i}\n`;
        }
        if(listar ){
            console.log('========================'.yellow);
            console.log('    Tabla del:', `${base}`.cyan);
            console.log('========================'.yellow);
            console.log(consola);   
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}`;
      
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}