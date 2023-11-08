const express = require('express');
const cors = require('cors');
const { socketController } = require('../controllers/socketController');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        //Socket.io config
        this.socket = require('http').createServer(this.app);
        this.io = require('socket.io')(this.socket);

        this.paths = {
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        this.sockets();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {        
        //this.app.use( this.paths.buscar, require('../routes/buscar'));
        
    }

    sockets() {
        this.io.on('connection', socketController);
    }

    listen() {
        this.socket.listen( this.port, () => {
            console.log('Server running on port: ', this.port );
        });
    }

}




module.exports = Server;