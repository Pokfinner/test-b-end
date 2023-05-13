const express = require('express');
const router = express.Router();

const Amigo = require('./../models/Amigo.model')

router.get("/", (req, res) => {

  Amigo.find().then(amigos => {
    res.json(amigos)
  }).catch(err => {
    res.json(err)
  })

})

router.get("/:id", (req, res) => {

  const id = req.params.id

  Amigo.findById(id).then(amigo => {
    res.json(amigo)
  }).catch(err => {
    res.json(err)
  })

})

router.post("/", (req, res) => {

  const { name, age } = req.body

  Amigo.create({ name, age }).then(novoAmigo => {
    res.json(novoAmigo)
  }).catch(err => {
    res.json(err)
  })

})

router.put("/", (req, res) => {

  const { name, age, id } = req.body

  Amigo.findByIdAndUpdate(id, { name, age }, { new: true }).then(novoAmigo => {
    res.json(novoAmigo)
  }).catch(err => {
    res.json(err)
  })

})

router.delete("/:id", (req, res) => {

  const id = req.params.id

  Amigo.findByIdAndDelete(id).then(amigoEliminado => {
    res.json({
      message: "Amigo Eliminado",
      amigoEliminado
    })
  }).catch(err => {
    res.json(err)
  })

})

module.exports = router;
