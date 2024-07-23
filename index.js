(async () => {
    const database = require('./data_base/db');
    const Usuario = require('./modelo/usuario');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (err) {
        console.log(error);
    }

    const resultadoCreate = await Usuario.create({
        nome: 'Marven',
        idade: 18,
        cidade: 'São Leopoldo'
    })
    console.log(resultadoCreate);

})();
