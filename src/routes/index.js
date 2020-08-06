const { Router } = require("express");
const router = Router();
const encrypt = require("../functions/encrypt");
const decrypt = require("../functions/decrypt");

router.post("/encrypt", (req, res) => {
  const { mensaje } = req.body;
  const encryptedMessage = encrypt(mensaje);
  const response = {
    mensaje: encryptedMessage,
    vueltas: Math.ceil(mensaje.length / 4),
  };
  res.json(response);
});

router.post("/decrypt", (req, res) => {
  const { mensaje } = req.body;
  const decryptedMessage = decrypt(mensaje);
  res.send(decryptedMessage);
});

module.exports = router;
