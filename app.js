const express = require('express');
const app = express();
const process = require('process');
const path = require ('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
/* archivos estaticos */
app.use(express.static(path.join(__dirname, 'public')));

/* enrutadores */
const mainRouter = require('./routers/main');

/* gestion de enrutador */
app.use('/', mainRouter);


app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`))


/* faltaria carpeta src donde colocar la funcionalidad de mi app */