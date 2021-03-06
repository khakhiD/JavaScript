// 객체
// 자바스크립트엔 여덟 가지 자료형이 있다 그 중 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있다.
// 이것을 원시형(primitive type)이라 부른다.

// 그런데 객체형은 원시형과 달리 다양한 데이터를 담을 수 있다. 키로 구분된 데이터의 집합이나 복잡한 개체(entity)
// 를 저장할 수 있다. 객체는 자바스크립트 거의 모든 면에 녹아있는 개념이므로 자바스크립트를 잘 다루려면 객체를 잘
// 이해하고 있어야 한다.

// 객체는 중괄호 {...}를 이용해 만들 수 있다. 중괄호 안에는 '키(key): 값(value)' 쌍으로 구성된 프로퍼티(property)
// 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용된다. 프로퍼티 키는 '프로퍼티 이름'이라고도 한다.

// 서랍장을 상상하면 객체를 이해하기 쉽다. 서랍장 안 파일은 프로퍼티, 파일 각각에 붙어있는 이름표는 객체의 키라고
// 생각하면 된다. 복잡한 서랍장 안에서 이름표를 보고 원하는 파일을 쉽게 찾을 수 있듯이, 객체에선 키를 이용해
// 프로퍼티를 쉽게 찾을 수 있다. 추가나 삭제도 마찬가지다.

// 빈 객체(빈 서랍장)를 만드는 방법은 두 가지가 있다.
let user1 = new Object(); // 객체 생성자 문법
let user2 = {}; // 객체 리터럴 문법

// 객체를 생성할 땐 주로 객체 리터럴 문법을 사용한다.

let man = {
  // 객체
  name: "John", // 키: "name", 값: "John"
  age: 30, // 키: "age", 값: 30
};

// 점 표기법(dot notation)을 이용하면 프로퍼티 값을 읽는 것도 가능하다.
// 프로퍼티 값 얻디
alert(man.name); // John
alert(man.age); // 30

// 프로퍼티 값엔 모든 자료형이 올 수 있다. 불린형 프로퍼티를 추가해보자.
man.isAdmin = true;

// 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 한다.
let user3 = {
  name: "John",
  age: 30,
  "likes birds": true, // 복수의 단어는 따옴표로 묶어야 한다.
}; // 마지막 프로퍼티 끝은 쉼표로 끝날 수 있다.

// ✅ 상수 객체는 수정될 수 있다.
// 주의하자. const로 선언된 객체는 수정될 수 있다! (메모리 주솟값이 바뀌지 않는 것)
const user4 = {
  name: "John",
};

user4.name = "Pete"; // (*)
// const는 user4의 값을 고정하지만, 그 내용은 고정하지 않는다.
// const는 user4=...를 전체적으로 설정하려고 할 때만 오류가 발생한다.
// 상수 객체 프로퍼티를 만드는 방법이 또 있다. 이후에 프로퍼티 플래그와 설명자 챕터에서 다룬다.

// ✅ 대괄호 표기법
// 여러 단어를 조합한 따옴표로 묶인 프로퍼티 이름은 대괄호 표기법을 통해 접근할 수 있다.
user3["likes birds"] = true; // set
alert(user3["likes birds"]); // get
delete user["likes birds"]; // delete

// 변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있다.

// ✅ report#1 : 객체야 안녕?
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// ✅ report#2 : 객체가 비어있는지 확인하기

function isEmpty(obj) {
  for (let key in obj) {
    //if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule)); //true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); //false
