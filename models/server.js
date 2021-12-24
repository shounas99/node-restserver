const express = require('express');
var cors = require('cors');
 

class Server{
    constructor(){
    //Crear aplicacion de express como una misma propiedad del servidor
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        //Middlewares
        this.middlewares();

        //Rutas de mi aplicaion
        this.routes();
    }
    //-----Middlewares-----
    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json());

        //Directorio publico
        this.app.use( express.static('public'));
    }
    //-----Rutas-----
    routes(){
        this.app.use( this.usersPath, require('../routes/users'))
        
    }
    //-----Listen-----
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;