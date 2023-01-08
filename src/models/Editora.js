import mongoose from "mongoose";

const editoraShema = new mongoose.Schema(
    {
         id:{type: String},
         nome: {type: String, required: true}
    }
);


const editoras = mongoose.model('editoras', editoraShema);

export default editoras;
