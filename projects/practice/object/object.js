// DreamCoding JS Lesson 7. Object
// MDN에서 Object에 관련된 내용을 한 번 읽어보세요!
// Built-in Methods는 무엇이 있는지...

// Objects
// one of the JavaSCript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and Properties
const name = 'ellie';
const age = 27;

const obj1 = {};            // 'object literal' syntax 괄호 이용
const obj2 = new Object(); // 'object constructor' syntax 클래스 이용

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name:'ellie', age: 27}; // object
print(ellie);

// JS는 동적으로 타입이 런타임에 결정되는 언어.. 믓칀
ellie.hasJob = true; // 뒤늦게 프로퍼티를 추가함; ㅁㅊ
// 가능하면 이런 미친 짓거리를 피하세요

delete ellie.hasJob; // 뺄수도 있음 미친
console.log(ellie.hasJob);

// object = {key: value}; 키와 값의 집합체이다.


// 2. Computed properties
// key should be always string 키는 항상 문자열
console.log(' . 접근법: ' + ellie.name);    // 접근법 두가지
console.log('[] 접근법: ' + ellie['name']); // 위 아래는 동일하다. 항상 문자열로 받을것.
// ellie[name] 은 에러.
console.log(ellie.hasJob); // 위에서 삭제했으니 undefined
ellie['hasJob'] = true; // 이러면 또 추가됨
console.log(ellie.hasJob); // true

// ! '.'은 코딩할 때, 그냥 사용할 것
// ! '[]'은 실시간으로 원하는 키의 값을 받아오고 싶을 때 사용

function printValue(obj, key){
    //console.log(obj.key); //오브젝트의 키라는 프로퍼티가 있음?
    console.log(obj[key]); 
}
//printValue(ellie, 'name'); // 없음. undefined.
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age){ //이런 방법은 어때요?
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
} // class가 없었을 때 이렇게 만들곤 했습니다.

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); //false
console.log(ellie.random); //undefiend

// 6. for..in vs for..of* 매우 유용
// for (key in obj)
console.clear();
for(key in ellie){
    console.log(key); // name, age, hasJob
}

// for(value of iterable(순차적))
// 배열과 같은 배열 리스트
const array = [1,2,4,5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
} // 귀찮고 복잡
for(value of array){
    console.log(value);
} // 간단하게 같은 결과


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user; // 동일한 레퍼런스가 들어가게 됨, 같은 곳 가리킴
user2.name = 'coder';
console.log(user); // user의 name도 변경됨
// 이런 방식 말고 리얼로 복제하는 방법이 있다.

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key]; //name, age..
}
console.clear();
console.log(user3); // 복사되어 있음

// new way
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);
console.log(user4);
// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   //blue
console.log(mixed.size);    //big //계속 값이 덮어 씌워진다. 유의.

// 객체지향에 익숙해져야 한다... 자바는 한 번 훑을 것