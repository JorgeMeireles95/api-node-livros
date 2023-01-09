import editoras from "../models/Editora.js";
class EditoraController {
  static listarEditoras = (req, res) => {
    editoras.find((err, editoras) => {
      res.status(200).json(editoras);
    });
  };

  static listarEditoraPorId = (req, res) => {
    const id = req.params.id;
    editoras.findById(id, (err, editoras) => {
      if (err) {
        res
          .status(400)
          .send({ message: err.message + "Editora não encontrado" });
      } else {
        res.status(200).send(editoras);
      }
    });
  };

  static cadastrarEditora = (req, res) => {
    let newEditora = new editoras(req.body);
    newEditora.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} cadastramento não realizado` });
      } else {
        res.status(201).send(newEditora.toJSON());
      }
    });
  };

  static atualizarEditora = (req, res) => {
    const id = req.params.id;
    editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Editora atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Editora removido com sucesso" });
      }
    });
  };
}

export default EditoraController;
