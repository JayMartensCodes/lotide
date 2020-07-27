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

module.exports = without;