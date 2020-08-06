const matrix = require("./matrix.js");

function encrypt(message) {
  const originalMatrix = matrix(message);
  const transposedMatrix = [];
  const rows = Math.ceil(message.length / 4);

  for (let i = 0; i < 4; i++) {
    transposedMatrix[i] = [];
    for (let j = 0; j < rows; j++) {
      transposedMatrix[i][j] = originalMatrix[j][i];
    }
  }
  encryptedMessage = transposedMatrix.flat().join("");
  return encryptedMessage;
}

module.exports = encrypt;
