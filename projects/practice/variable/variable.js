// JS의 자료형 방식에는 기본형(Premitive; 원시형)과 객체형(Object)가 존재
// 원시형=기본형(Premitive)
// - Boolean
// - null
// - undefined
// - number
// - string

// 객체형=오브젝트형(Object)
// - 배열 자료형
// - 딕셔너리 자료형



// 1. Use Strict
// added in Es5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global Name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅이란 어디에 선언했는가에 상관없이 선언을 항상 상단으로 끌어올리는 것
// hoisting = 끌어올리기
// var는 블럭을 무시해버리니까 절대 사용하지 말 것
{
    age = 4;
    var age;
}
console.log(age);


// 3. Constant, r(read only)
// example) const maxNumber = 5;

// Note! (imm은 데이터 자체를 절대 변경할 수 없다 / 기본적으로 모든 오브젝은 mutable로 변경이 가능하다.)
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// 웬만하면 값을 할당한 다음 다시는 변경되지 않는 데이터 타입을 사용하라 :
// - security               보안상의 이유
// - thread safety          값이 변하지 않아야 다중 스레드 환경에서 안전
// - reduce human mistakes  
// 값이 변경되지 않는 상수 데이터타입 const

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive(원자값), single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function(함수도 변수에 할당 가능, 함수의 인자로도 전달가능)
// let에 숫자를 할당하면 자동으로 number로 사용

const count = 17; // integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12312123123123123123123123123123123123131231n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// 숫자뒤에 n만 붙이면 bigInt 라는 새로 추가된 데이터 타입으로 사용가능
// over (-2*53) ~ 2*53
// 최신 문법이므로 크롬 정도에서만 제대로 동작

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);    //Backtick
console.log('value: ' + helloBob + ' type: '+ typeof helloBob); //Quote
// ` : backtick or Backquote
// 이 기호로 문자열을 표현하는 것을 템플릿 리터럴이라고 한다.
// - 줄바꿈을 쉽게 할 수 있다.
// - 문자열 내부에 표현식 ${~}을 포함할 수 있다.
// - 표현식을 사용하여 Quote('')나 (+) 등을 포함할 수고를 덜 수 있다.


// boolean : true or false
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; // false
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);


// null : 널값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined : 아직 지정되지 않은
let x = undefined;
let y;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 위와 아래는 다르다
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// .description : 문자열로 변환


// 오브젝트* (object, real-life object, data structure)
const dongho = {name: 'ellie', age: 26};
dongho.age = 27;
console.log(`value: ${dongho}, type: ${typeof dongho}`); // object Object, object

// 5. Dynamic typing* : dynamically typed language
// JS는 런타임에 할당된 값에 따라 타입이 변경될 수 있는 언어
// 프로토타이핑에 매우 유용하지만 규모가 큰 플젝에서는 발목을 잡는다
let text = 'hello';
//console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // string('hello')
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // string -> number(1)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // number -> string('75')
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // string -> number(4)
//console.log(text.charAt(0)); //Error뜸. String이 아니라 number라서.
// 이게 자바스크립트의 존나게 골때리는 문제점이다.
// 변수의 타입이 지 꼴리는 대로 자동변환돼서 뒷통수를 맞는다.
// 이러한 문제점때문에 TypeScript가 나오게 된다.
// JS위에 Type이 올려져 있는 것이 TypeScript이다. JS를 충분히 이해하고 TS로 넘어가자.



// primitive type은 value 자체가 메모리에 저장된다.
// object type은 커서 메모리에 바로 저장될 수 없다. (reference (포인터))