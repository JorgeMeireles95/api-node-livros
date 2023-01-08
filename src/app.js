import express from 'express';
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

const app = express();
db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", ()=> {
    console.log("Conexão com banco feita com sucesso")
})

app.use(express.json()) // converte tudo para Json
routes(app);

export default app