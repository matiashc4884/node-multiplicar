const argv = require('./config/yargs').argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('The file has been saved!'))
            .catch(e => console.log(e));
        break;
    default:
        console.log('bad command');
        break;
}


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//