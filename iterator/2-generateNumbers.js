let generateNumbers = {
  start: 1,
  end: 10,
};

generateNumbers[Symbol.iterator] = function() {
  let current = this.start;
  let last = this.end;

  return {
    next() {
      return current <= last ? { done: false, value: current++ } : { done: true };
    }
  };
}

for (const number of generateNumbers) {
  console.log(number);
}