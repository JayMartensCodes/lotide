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

const letterPositions = (sentence) => {
  let results = {};
  let i = 0;
  for (let letter of sentence) {
    if (!results[letter] && letter !== " ") {
      results[letter] = [i];
    } else if (letter !== " ") {
      results[letter].push(i);
    }
    i++;
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1,11]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4,14]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6,19]);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7,20]);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8,21]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);

module.exports = letterPositions;