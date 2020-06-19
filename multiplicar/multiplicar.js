//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`tabla del ${base}`.green);
    console.log('================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base}* ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido en la base o limite no es un numero.`)
            return
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`archivosTablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite}.txt`)
        });
    })
}

//una forma de exportarlo    
module.exports = {
    crearArchivo,
    listarTabla
}