const eqArrays = (firstArray, secondArray) => {
  if (Array.isArray(firstArray) && Array.isArray(secondArray) && firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
        if (!eqArrays) {
          return false;
        }
      } else if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqArrays;