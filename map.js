const eqArrays = (firstArray, secondArray) => {
  if (Array.isArray(firstArray) && Array.isArray(secondArray) && firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✔✔✔ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const map = (words, callback) => {
  const results = [];
  for (let item of words) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o']);
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);