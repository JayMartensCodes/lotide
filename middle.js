const middle = (array) => {
  if (!Array.isArray(array) || array.length < 3) {
    return "Invalid Input";
  }
  if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
};

module.exports = middle;