function* generate() {
  console.log('first step')
  yield;
  console.log('second step')
}
// generate();
console.log(generate());