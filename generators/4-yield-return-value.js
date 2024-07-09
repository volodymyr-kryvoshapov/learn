function* generate() {
  console.log('first step')
  yield 8;
  yield 42;
  console.log('second step')

  return 99;
}

const iterator = generate();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
