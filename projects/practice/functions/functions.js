// JS에 추가된 Class도 가짜 OOP이다.
// JS도 Procedural Language 이므로 Function을 자주 사용한다.
// function은 sub-program으로, Input을 입력받아 Output을 출력한다.

// Fucntion
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//--------------------------------------------------------------------------
// 1. Function declaration 함수 선언문
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createdCard, createPoint
// function is object in JS

"use strict";
function printHello(){
    console.log('Hello');
}
printHello();


function log(message){
    console.log(message);
}
log('Hello@');
log(1234); // 숫자가 문자열로 변환되어 출력된다. 난해하다.

// * TS에서는...
//   function log(message: string): number{ cg(message); return 0;}
//   input, output의 Type을 명시해야 한다.

//--------------------------------------------------------------------------
// 2. Parameters 인자
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // {name: 'coder'}

//--------------------------------------------------------------------------
// 3. Default parameters (added in ES6) 기본 인자
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi by unknown
// 인자의 명을 입력하지 않을 경우 undefined 처리

//--------------------------------------------------------------------------
// 4. Rest parameters (added in ES6)
function printAll(...args){ // ...args!
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//--------------------------------------------------------------------------
// 5. Local scope
let globalMessage = 'global';   // 전역변수
function printMessage(){
    let message = 'hello';
    console.log(message);       // 지역변수
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let chileMessage = 'hello';
    }
    //console.log(chileMessage);  // Error
}
printMessage();
//console.log(message);           // Error

//--------------------------------------------------------------------------
// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//--------------------------------------------------------------------------
// 7. Early return, early exit * 현업 팁
// bad example
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    } // 블럭 안에서 로직을 작성하면 가독성이 떨어진다.
}
// good example
function upgradeUser(user){
    if(user.point <=10){
        return;
    } // 조건이 맞지 않을 때는 빨리 리턴하고, 조건이 맞을 때만 로직을 실행.
    // long upgrade logic...
}

//--------------------------------------------------------------------------
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ // Anonymous function
    console.log('print');
} // 함수가 선언되기 이전에 호출해도 실행이 된다. 호이스팅.
print();                        //print
const printAgain = print;
printAgain();                   //print
const sumAgain = sum;
console.log(sumAgain(1, 3));    //4

// 2. Callback function using functino expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();     // Callback function
    } else{
        printNo();      // Callback function
    }
}

const printYes = function(){
    console.log('yes!');
};

//--------------------------------------------------------------------------
// <named function>
// better debuggin in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No!');
    // print(); // 재귀
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//--------------------------------------------------------------------------
// <Arrow function>
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!'); // 에로우 펑션
const add = (a,b) => a + b;
// const add = function(a,b) { return a+b }; // 매우 간결한 작성법
const simpleMultiply = (a,b) => {
    // do something more
    return a*b;
};  // 블럭을 넣어 처리할 수도 있다. 대신 블럭을 쓰면 무조건 return을 해줘야 함.


// <IIFE : Immediately Invoked Function Expression>
(function hello(){
    console.log('IIFE');
})();   // 선언과 동시에 호출하는 방법. 함수 앞 뒤에 괄호를 치고, 끝에 호출괄호.


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unkown command');
    }
}
console.log(calculate('add', 5, 2));
console.log(calculate('substract', 5, 2));
console.log(calculate('divide', 5, 2));
console.log(calculate('multiply', 5, 2));
console.log(calculate('remainder', 5, 2));