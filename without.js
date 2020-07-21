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

const without = (array, toBeRemoved) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    let toBeRemovedFlag = false;
    for (let j = 0; j < toBeRemoved.length; j++) {
      if (toBeRemoved[j] === array[i]) {
        toBeRemovedFlag = true;
      }
    }
    if (!toBeRemovedFlag) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);