const map = (words, callback) => {
  const results = [];
  for (let item of words) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;