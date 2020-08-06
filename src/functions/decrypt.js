const matrix = require("./matrix.js");

function decrypt(message) {
  const transposedMatrix = matrix(message);
  const originalMatrix = [];
  const rows = Math.ceil(message.length / 4);

  for (let i = 0; i < rows; i++) {
    originalMatrix[i] = [];
    for (let j = 0; j < 4; j++) {
      originalMatrix[i][j] = transposedMatrix[j][i];
    }
  }
  decryptedMessage = originalMatrix.flat().join("");
  return decryptedMessage;
}

module.exports = decrypt;
