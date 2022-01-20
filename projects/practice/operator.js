// 1. String concatenation 문자열 연결
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals:     

''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

// 2. Numeric Operators 산술 연산자
console.log(1+1);   // add 더하기
console.log(1-1);   // substract 빼기
console.log(1/1);   // divide 나누기
console.log(1*1);   // multiply 곱하기
console.log(5%2);   // remainder 나머지
console.log(2**3);  // exponentiation 제곱


// 3. Increment and decrement operators 증감 연산자
let counter = 2;
const preIncrement = ++counter;     //증가시킨 카운터를 할당
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;    // 카운터 할당 후에 증가
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
const postDecrement = counter--;

// 4. Assignment operators 대입 연산자
let x = 3;
let y = 6;
x += y;     // x = x+y;
x -= y;     // x = x-y;
x *= y;     // x = x*y;
x /= y;     // x = x/y;

// 5. Conparison operators 비교 연산자
console.log(10 < 6);    // less than 작으면
console.log(10 <= 6);   // less than or equal 작거나 같으면
console.log(10 > 6);    // greater than 크면
console.log(10 >= 6);   // greater than or equal 크거나 같으면

// 6. Logical operators* : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4<2; //false

// ||(or)
console.log(`or: ${value1 || value2 || check()}`); // 심플한 밸류를 앞에 두자!!!

// &&(and)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
let nullableObject;
if(nullableObject != null){
    nullableObject.something;
}

function check(){ // computation이 heavy한 인자로 가정하자
    for(let i=0; i<10; i++){
        //wasting time
        console.log('!!');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입변환 지 맘대로 됨
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion* 이걸 주로 사용할 것
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false);        // true
console.log(0 === false);       // false
console.log('' == false);       // true!
console.log('' === false);      // false
console.log(null == undefined); // true
console.log(null === undefined);// false


// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;

    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
} // 가독성이 좋다

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i>0);

// for loop, for(begin; condition; step)
for (i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for (let i=3; i>0; i=i-2){
    // inline variable declaration
    console.log(`for: ${i}`);
}

// nested loops* 빅오 O(n^2)이므로 되도록 피하라
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. 숫자를 0부터 10까지 짝수만 프린트하라 with continue
for(let i=0; i<11; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
} // 실제로는 짝수일때만 출력하도록 하자. 긍정적으로.

// Q2. 숫자를 0부터 10까지 프린트하되 숫자 8을 만나면 멈춰라 with break
for (let i=0; i<11; i++){
    if(i === 8){
        break;
    }
    console.log(`q2. ${i}`);
}

// label... 은 사용하지 말 것