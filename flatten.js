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
  return currentFlattenedArray;
};

module.exports = arrayFlattener;