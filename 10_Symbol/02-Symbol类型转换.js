let sym = Symbol('world');
//"hello" + sym //不同用其他的类型来和symbol类型做运算

let str = String(Symbol('world'));
let boo = Boolean(Symbol('world'));

console.log(str);   //'Symbol('world')'
console.log(boo);   //true