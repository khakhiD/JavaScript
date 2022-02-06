// number, string, boolean, null, undefined, (symbol) = primitive
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// obeject
let obj = {
    name: 'dongho',
    age: 26,
}
console.log(obj.name);

let obj2 = obj;             // obj2의 메모리에는 obj 메모리 속 주솟값이 복사됨
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);     // obj2의 name도 james로 변경된다. 주솟값만 복사되어 있기 때문.

let a = 2;
a = 5;
a = 9; // let은 값을 변경가능 하지만,

const num = 2;
// num = 4; // const는 값을 변경할 수 없다.

// 근데, const로 선언된 object는 값이 변경된다?
const object = {
    name: 'ellie',
    age: 5,
};
object.name = 'Const Object';
// const 오브젝트는 오브젝트 자체가 담겨있는 것이 아니라, 가리키는 주솟값을 변경할 수 없는 것이다!!
console.log(object.name);