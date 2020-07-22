const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  let results = {};
  sentence = sentence.replace(/ /g, '');
  for (let letter of sentence) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};
