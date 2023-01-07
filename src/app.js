import express from 'express';
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

const app = express();
db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", ()=> {
    console.log("Conexão com banco feita com sucesso")
})

app.use(express.json()) // conserte tudo para Json

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis" },
//     {id: 2, "titulo": "hobbit" }
// ]

app.get('/', (req, res)=> {
    res.status(200).send('Curso de node');
})

app.get('/livros', (req, res)=> {
    res.status(200).json(livros)
})

app.post('/livros',(req, res)=>{
   livros.push(req.body);
   res.status(201).send('Livro  cadastrado com sucesso')

})

app.put('/livros/:id',(req,res)=>{
let index = buscaLivro(req.params.id);
livros[index].titulo = req.body.titulo;
res.json(livros);
} )


app.get('/livros/:id',(req,res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
    } )
    

app.delete('/livros/:id',(req,res)=>{
 let index = buscaLivro(req.params.id);
 livros.splice(livros.indexOf(index));
 res.send('elemento removido')
} )
        


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app