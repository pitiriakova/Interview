let a = 5;

console.log('from module 2 before: ', a);
export default a;

a = 8;
console.log('from module 2 after: ', a);
