function* generateRange(start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

for (const number of generateRange(10, 20)) {
  console.log(number);
}