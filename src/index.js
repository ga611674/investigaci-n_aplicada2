const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//RUTAS
app.use(require('./routes/pets'));
app.use('/api/pets',require('./routes/pets'));

//Comienza el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});