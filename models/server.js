const express = require('express');
const cors = require('cors');


class Server {

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.userPath = '/api/v1/users';


    //Middlewares
    this.middlewares();

    //Routes
    this.routes();

    
  }

  middlewares() {
    //CORS
    this.app.use( cors() );

    //JSON format
    this.app.use( express.json() );
    
    //Public directory
    this.app.use( express.static('public') );
    
  }

  routes() {
    this.app.use(this.userPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log('Listening at port ', this.PORT);
    })
  }
}

module.exports = Server;