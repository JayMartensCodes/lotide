const findKeyByValue = (object, value) => {
  for (let genre in object) {
    if (object[genre] === value) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;