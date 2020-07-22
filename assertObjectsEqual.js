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

const eqObjects = (firstObject, secondObject) => {
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }
  for (let key in firstObject) {
    if (!eqArrays(firstObject[key], secondObject[key]) && !(!(Array.isArray(firstObject[key])) && firstObject[key] === secondObject[key])) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false