const fs = require('fs');

let listar = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}=${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i}=${base*i}<br>`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`archivos/tabla-${base}.txt`, tabla, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}