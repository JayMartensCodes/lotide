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

const flatten = (array, currentFlattenedArray) => {
  for (let ele of array) {
    if (Array.isArray(ele)) {
      flatten(ele, currentFlattenedArray);
    } else {
      currentFlattenedArray.push(ele);
    }
  }
};

const arrayFlattener = (array) => {
  let currentFlattenedArray = [];
  flatten(array, currentFlattenedArray);
  console.log(currentFlattenedArray);
};

arrayFlattener([1, 2, [3, 4], 5, [6]]);