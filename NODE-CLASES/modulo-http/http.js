const http = require('http');
const fs = require('fs');

/*
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('<h1>Hola mundo</h1>');
        res.end();
    }
})
*/

const server = http.createServer((req,res)=>{
    if(req.url === '/'){ //       localhost:5000/hola
        fs.readFile('index.html', (error, data) => {
            if(error){
                res.write('Error al leer el archivo');
                return;
            }
            res.statusCode = 200;
            res.write(data);
            res.end();
        });
    }else if(req.url === '/hola'){
        res.write('<h1>Hola mundo</h1>');
        res.end();
    }else{
        res.statusCode = 404;
        res.write('Error 404: Pagina no encontrada');
        res.end();
    }
})

server.listen(3000, () => { // puerto donde se va a ejecutar el servidor, localhost:5000
    console.log('Server on port 3000');
});