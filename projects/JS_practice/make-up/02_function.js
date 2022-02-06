// ------------- 함수 정의와 호출까지 ---------------
const num = 1;
const num2 = 2;
const result = num + num2
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 +  num4;

function add(num1, num2) {
    return num1 + num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

const result3 = add(5,2);
console.log(result3);


// --------- 함수를 다른 변수에 할당 ---------------
const doSomething = add;

const result_do = doSomething(2, 3);
console.log(result_do);
const result_do2 = add(2,3);
console.log(result_do2);

function print(a, b) {
    console.log(`${a} ${b}`);
}
console.clear();
print('hello', 27);


// -------- 함수를 다른 함수에 인자로 전달 ----------
function surprise(operator) {
    // TS라면 operator: function 으로 명시할 수 있다.
    const sup = operator(4,2); // add(2, 3)과 같다
    console.log(sup);
}
surprise(add);
surprise(divide);