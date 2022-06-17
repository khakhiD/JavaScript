"use strict";

// 메서드와 this

let user = {
  name: "John",
  age: 30,
};

// Method
user.sayHi = () => alert("안녕하세요!");
user.sayHi();

// OOP
function sayYes() {
  alert("Yes!");
}

user.sayYes = sayYes();
