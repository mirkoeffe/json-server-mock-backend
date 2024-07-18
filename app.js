require('dotenv').config();
const jsonServer = require('json-server');
const morgan = require('morgan');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


server.use(morgan('dev'));
server.use(middlewares);
server.use(router);


/* const port = process.port.env || 3000; 

server.listen(port, () => {
    console.log(`JSON Server is running at http://localhost:${process.env.PORT || 3000}`);
})


server.listen(process.port.env || 3000, () => {
    console.log(`JSON Server is running at http://localhost:${process.env.PORT || 3000}`);
}) */


server.listen(3000, () => {
    console.log('JSON Server is running at http://localhost:3000');
})