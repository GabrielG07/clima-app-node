// Require
const { getLugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coors = await getLugar(direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }°G`;

    } catch (error) {

        return `No se pudo determinar el clima en ${ direccion }`;

    }


}

getInfo(argv.direccion).then(mensaje => console.log(mensaje)).catch(e => console.log(e));