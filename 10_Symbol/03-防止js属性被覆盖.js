let sym = Symbol();

//第一种写法
let a = {};
a[sym] = 'hello';

//第二种写法
let b = {
    [sym] : 'hello'
};
console.log(b[sym])

let c = {};
//Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
Object.defineProperty(c, sym, {value : "hello"});
//Symbol值作为对象属性名时,不能用点运算符
console.log(c[sym])
