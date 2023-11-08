
/*
const http = require('http');

 const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html,' });
    res.write('<h1>Hola solo handle john  nodejs</h1>');
    res.end();
}


const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.green);
});
*/


/*
const fs = require('fs');

fs.writeFile('./texto.txt','linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');
*/

/*
console.log(os.platform());
console.log(os.release());
console.log(os.cpus());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), 'bytes');
*/


const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function (req, res) {
    res.send('<h1>hola john nodejs con express</h1>');
    res.end();
});

server.listen(3000, function () {
    console.log('server on port 3000' .red);
});






