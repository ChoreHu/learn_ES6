var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }    
}
a[6]();  //不论调用数组中的那个数,i已经走到了10,所以输出的都是10

let b = [];
for (let j = 0; j < 10; j++) {
    b[j] = function () {
        console.log(j);
    } 
}
b[6]();