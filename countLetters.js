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

module.exports = countLetters;