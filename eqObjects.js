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
    if (typeof firstObject[key] === 'object' && !(Array.isArray(firstObject[key]))) {
      if (!eqObjects(firstObject[key], secondObject[key])) {
        return false;
      }
    } else if (!eqArrays(firstObject[key], secondObject[key]) && !(!(Array.isArray(firstObject[key])) && firstObject[key] === secondObject[key])) {
      return false;
    }
  }
  return true;
};

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(eqObjects({ a: { z: { d: { o: 1}} }, b: 2 }, { a: { z: { d: { o: 1}} }, b: 2 })); // => true

module.exports = eqObjects;