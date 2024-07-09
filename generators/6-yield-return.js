// 1. Нормальное выполнение
// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// const iterator = generate();
//
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// 2. Досрочная остановка
function* generate() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generate();

console.log(iterator.next())
console.log(iterator.return())
console.log(iterator.next())