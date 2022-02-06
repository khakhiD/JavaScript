// false: 0, -0, '', null, undefined, NaN, ""
// true: -1, 'hello', []

let num = 9; // 값이 없으면 undefined이 할당됨
if(num) {
    console.log(num);
}

num && console.log(num);

let obj = {
    name: 'ellie',
};
obj && console.log(obj.name);