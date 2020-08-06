function matrix(message) {
  const rows = Math.ceil(message.length / 4);
  const vector = message.split("");
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const slice = vector.splice(0, 4);
    matrix.push(slice);
  }
  return matrix;
}

module.exports = matrix;
