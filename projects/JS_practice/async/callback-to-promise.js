"use strict";

// -----------------------------------------------------------------
// Callback hell to Promise
// -----------------------------------------------------------------
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  // 원래는 한번에 받아오는 것이 맞지만, 따로 받아와야하는 백엔드로 가정
  getRoles(user, onSuccess, onError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

// 1) id, pw
// 2) login
// 3) roles
// 4) user object 출력

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your pw");

userStorage
  .loginUser(id, password) //
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you hava a ${user.role} role`))
  .catch(console.log);
