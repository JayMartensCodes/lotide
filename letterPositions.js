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

module.exports = letterPositions;