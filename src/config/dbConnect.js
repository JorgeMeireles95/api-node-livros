import mongoose, { mongo } from 'mongoose'

mongoose.set('strictQuery', true);
//mongoose.connect('mongodb+srv://Meireles:mD7gs43R2PnWRW9K@cluster0.pkigodk.mongodb.net/livraria')


//conexao local 
mongoose.connect('mongodb://127.0.0.1:27017/livraria')
let db = mongoose.connection;

export default db;
