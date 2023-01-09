import mongoose from "mongoose";

const editoraShema = new mongoose.Schema(
    {
         id:{type: String},
         nome: {type: String, required: true},
         endereco: {type: String}
    }
);


const editoras = mongoose.model('editoras', editoraShema);

export default editoras;
