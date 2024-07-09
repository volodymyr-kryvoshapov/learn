function* generate() {
  console.log('first step')
  const res = (yield) * 2;
  console.log('Res: ', res)
}

const iterator = generate();

console.log(iterator.next())
console.log(iterator.next(3))