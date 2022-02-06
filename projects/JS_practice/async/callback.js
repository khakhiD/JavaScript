"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 자동적으로 제일 위로 올라가는 것

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("2");
console.log("3");

// TimeHandler라는 Callback 함수를 전달해주고, 시간을 주어 사용 가능
// 1000 ms (1초) 뒤에 2를 출력하게 된다. 이것이 asynchronous = 비동기적 방식

// ----------- Synchronous Callback 동기적 콜백 -----------
function printImmediately(print) {
  print();
} // 함수 선언은 Hoisting 되었을 것.

printImmediately(() => console.log("hello")); // 동기

// ----------- Asynchronous Callback 비동기 콜백 -----------
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // 함수 선언은 Hoisting 되었을 것.

printWithDelay(() => console.log("async callback"), 2000); // 비동기

// -----------------------------------------------------------------
// Callback 지옥 Example
// -----------------------------------------------------------------
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  // 원래는 한번에 받아오는 것이 맞지만, 따로 받아와야하는 백엔드로 가정
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// 1) id, pw
// 2) login
// 3) roles
// 4) user object 출력

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// ------------- 콜백 체인의 문제점 --------------
// 1. 가독성 최악
// 2. 유지보수하기 어려움
// -----------------------------------------------
