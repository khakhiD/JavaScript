// DreamCoding Lesson 8. Array
// 오브젝트와 자료구조(Array)의 차이점은?
// 비슷한 타입의 오브젝트들을 묶어 놓는 것이 자료구조이다.
// 다른 언어에서는 동일한 타입만 묶을 수 있지만, JS는 아님 ㅋ
// 한 바구니 안에 다양한 데이터 종류를 담을 수 있다. 근데 쓰지 마라.

// 자료구조와 알고리즘 나중에 공부하도록
// array map set list... 학교에서 배웠지
// ... 검색 정렬 삽입 삭제

"use strict";

// Array🎉

// 1. 선언 Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 더 흔하게 쓰이는 방법

// 2. 인덱스 주소 Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //제일 마지막 인덱스
console.clear();

// 3. 전체 배열 반복문 출력 Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let value of fruits) {
  console.log(value);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. 삽입, 삭제, 복사 Addition, deletion, copy
// push: add an item to the end
fruits.push("🥝", "🍓");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 맨 앞에 추가
fruits.unshift("🍕");
console.log(fruits);
// shift: remove an item from the beginning 맨 앞을 제거
fruits.shift();
fruits.shift();
console.log(fruits);
// *note!! shift, unshift are slower than pop, push !
// pop & push is fastest way to addition or deletion

// splice: remove an item by index position 주소로 제거
fruits.push("🥝", "🍉", "🍒");
console.log(fruits);
fruits.splice(1, 1); // 두번째 인자를 입력하지 않으면 다 지움
console.log(fruits);
fruits.splice(1, 1, "🍈", "🍇", "🍆"); // 지우고 추가하기!
fruits.splice(1, 0, "🍳"); // 지우지 않고 추가만 하기!
console.log(fruits);

// 두 배열 합치기 combine two arrays
const fruits2 = ["🥑", "🥕"];
const newFruits = fruits.concat(fruits2); // concat 함수
console.log(newFruits);

// 5. 검색 Seraching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍌")); // index position
console.log(fruits.indexOf("123")); // -1
// includes: is include or not
console.log(fruits.includes("🍔")); // false
// lastIndexOf: 제일 마지막에 들어있는 값을 출력
console.clear();
fruits.push("🍎");
fruits.unshift("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 제일 첫 번째 사과의 인덱스가 출력됨
console.log(fruits.lastIndexOf("🍎")); //제일 마지막의 사과의 인덱스가 출력됨

// Homework:
// read every array's apis prototype
// move cursor to api and CTRL + Left Click
