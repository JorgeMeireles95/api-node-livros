const http = require("http")
const porta = 3000;
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'info do projeto'

}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(porta, () =>{
    console.log('Servidor está rodando http://localhost:' + porta )
})