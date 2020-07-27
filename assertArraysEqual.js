const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✔✔✔ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;