// 1. Используем метод throw
// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// const iterator = generate();
//
// console.log(iterator.next())
// console.log(iterator.throw(new Error('Some error...')))
// console.log(iterator.next())


// 2. Отловить ошибку можно в середине Ф
function* generate() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e.message)
  }
}

const iterator = generate();

console.log(iterator.next())
console.log(iterator.throw(new Error('Some error...')))
console.log(iterator.next())