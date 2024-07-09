const someObj = {
  *generateRange(start, end) {
    for (let i = start; i <= end; i++) {
      yield i
    }
  }
};



for (const number of someObj.generateRange(100, 110)) {
  console.log(number);
}