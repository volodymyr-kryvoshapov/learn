function* generate() {
  console.log('first step')
  yield;
  console.log('second step')
}

const iterator = generate();

console.log(iterator.next())
console.log(iterator.next())